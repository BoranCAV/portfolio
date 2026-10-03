// Fond 3D : un ruban de soie fait de lignes fines qui ondule et se tord lentement.
// Toute l'animation est calculée dans le shader (un seul draw call).
import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.170.0/build/three.module.min.js";

const host = document.getElementById("scene");
const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const small = window.matchMedia("(max-width: 768px)").matches;

let renderer;
try {
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
} catch (e) {
  host.classList.add("scene-fallback");
}

if (renderer) {
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, small ? 1.5 : 1.75));
  renderer.setClearColor(0x000000, 0);
  host.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 50);
  camera.position.set(0, 0, 7.5);

  // Géométrie : LINES lignes de POINTS points, reliées en segments.
  const LINES = small ? 56 : 96;
  const POINTS = small ? 150 : 240;
  const pos = new Float32Array(LINES * POINTS * 3);
  const idx = [];
  for (let l = 0; l < LINES; l++) {
    for (let p = 0; p < POINTS; p++) {
      const i = (l * POINTS + p) * 3;
      pos[i] = p / (POINTS - 1) * 2 - 1; // x normalisé [-1, 1]
      pos[i + 1] = l / (LINES - 1);      // position de la ligne dans le ruban [0, 1]
      pos[i + 2] = 0;
      if (p < POINTS - 1) idx.push(l * POINTS + p, l * POINTS + p + 1);
    }
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
  geo.setIndex(idx);

  const uniforms = {
    uTime: { value: 0 },
    uScroll: { value: 0 },
    uFade: { value: 1 },
  };

  const mat = new THREE.ShaderMaterial({
    uniforms,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    vertexShader: /* glsl */ `
      uniform float uTime;
      uniform float uScroll;
      varying float vAlpha;
      varying float vGlint;
      void main() {
        float x = position.x;
        float l = position.y;
        float t = uTime * 0.12;

        // largeur du ruban qui respire le long de x
        float width = 0.55 + 0.35 * sin(x * 1.6 + t * 1.3);
        float y = (l - 0.5) * width;
        float z = 0.0;

        // ondulation de la surface
        z += sin(x * 2.4 + t * 2.0 + l * 2.2) * 0.35;
        z += sin(x * 5.1 - t * 1.4 + l * 4.0) * 0.08;
        y += sin(x * 1.7 + t * 1.1) * 0.55;

        // torsion autour de l'axe x, accentuée par le scroll
        float a = x * 1.25 + t * 0.9 + uScroll * 1.6;
        float cy = y * cos(a) - z * sin(a);
        float cz = y * sin(a) + z * cos(a);

        vec3 p = vec3(x * 4.2, cy, cz);
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        gl_Position = projectionMatrix * mv;

        // fondu aux extrémités et selon la profondeur
        float edge = smoothstep(1.0, 0.55, abs(x));
        float depth = smoothstep(-2.5, 1.2, cz);
        float rim = 0.55 + 0.45 * smoothstep(0.0, 0.25, l) * smoothstep(1.0, 0.75, l);
        vAlpha = edge * mix(0.25, 1.0, depth) * rim;

        // reflet qui glisse le long du ruban
        vGlint = pow(0.5 + 0.5 * sin(x * 3.0 - uTime * 0.6 + l * 1.5), 14.0);
      }
    `,
    fragmentShader: /* glsl */ `
      uniform float uFade;
      varying float vAlpha;
      varying float vGlint;
      void main() {
        float a = vAlpha * (0.10 + vGlint * 0.55) * uFade;
        gl_FragColor = vec4(vec3(0.92, 0.94, 1.0), a);
      }
    `,
  });

  const ribbon = new THREE.LineSegments(geo, mat);
  const group = new THREE.Group();
  group.add(ribbon);
  scene.add(group);

  // Cadrage : le ruban passe en diagonale, décalé à droite sur desktop.
  function layout() {
    const w = host.clientWidth, h = host.clientHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    const wide = w > 900;
    group.position.set(wide ? 0.9 : 0.2, wide ? -0.1 : 0.35, 0);
    group.rotation.z = wide ? 0.32 : 0.55;
    group.scale.setScalar(wide ? 1 : 0.78);
  }
  layout();
  window.addEventListener("resize", layout);

  // Parallaxe au pointeur, lissée (amortissement critique, pas de rebond).
  const target = { x: 0, y: 0 }, cur = { x: 0, y: 0 };
  if (!reduce && window.matchMedia("(pointer: fine)").matches) {
    window.addEventListener("pointermove", (e) => {
      target.x = (e.clientX / window.innerWidth - 0.5) * 0.35;
      target.y = (e.clientY / window.innerHeight - 0.5) * 0.25;
    }, { passive: true });
  }

  // Chaque page donne au ruban une pose différente : il se tord pour passer de l'une à l'autre.
  let pose = 0;
  window.addEventListener("viewchange", (e) => {
    pose = e.detail * 0.85;
    if (reduce) { uniforms.uScroll.value = pose; renderer.render(scene, camera); }
  });

  let running = !document.hidden, last = performance.now(), time = 8;
  document.addEventListener("visibilitychange", () => {
    running = !document.hidden;
    last = performance.now();
    if (running && !reduce) requestAnimationFrame(frame);
  });

  function frame(now) {
    if (!running) return;
    const dt = Math.min((now - last) / 1000, 0.05);
    last = now;
    time += dt;

    const k = 1 - Math.exp(-dt * 3.2);
    cur.x += (target.x - cur.x) * k;
    cur.y += (target.y - cur.y) * k;

    const s = window.scrollY / window.innerHeight;
    const kPose = 1 - Math.exp(-dt * 1.8); // transition de pose plus lente que la parallaxe
    uniforms.uTime.value = time;
    uniforms.uScroll.value += (pose + s * 0.5 - uniforms.uScroll.value) * kPose;
    uniforms.uFade.value = (pose === 0 ? 1 : 0.7) - Math.min(s, 1) * 0.3; // plus discret derrière le contenu

    group.rotation.y = cur.x;
    group.rotation.x = cur.y;
    renderer.render(scene, camera);
    requestAnimationFrame(frame);
  }

  if (reduce) {
    renderer.render(scene, camera);
    window.addEventListener("resize", () => renderer.render(scene, camera));
  } else {
    requestAnimationFrame(frame);
  }
  host.classList.add("is-ready");
}
