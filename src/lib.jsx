// Shared hooks, motion-design background, and icons. Exported to window for other babel scripts.

// Reveal-on-scroll hook — IntersectionObserver with a getBoundingClientRect
// scroll-fallback so it fires reliably in every rendering context.
function useReveal(opts) {
  const ref = React.useRef(null);
  const [shown, setShown] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let done = false;
    const reveal = () => {
      if (done) return;
      done = true;
      setShown(true);
      window.removeEventListener("scroll", check, true);
      window.removeEventListener("resize", check);
      if (io) io.disconnect();
    };
    // Fallback: visible portion of the element within the viewport
    const check = () => {
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      if (r.top < vh * 0.92 && r.bottom > 0) reveal();
    };
    let io = null;
    if ("IntersectionObserver" in window) {
      io = new IntersectionObserver(
        (entries) => {
          if (entries.some((e) => e.isIntersecting)) reveal();
        },
        { threshold: (opts && opts.threshold) || 0.15, rootMargin: "0px 0px -6% 0px" }
      );
      io.observe(el);
    }
    window.addEventListener("scroll", check, true);
    window.addEventListener("resize", check);
    // initial checks (covers already-in-view + programmatic scroll captures)
    check();
    const t = setTimeout(check, 300);
    return () => {
      clearTimeout(t);
      window.removeEventListener("scroll", check, true);
      window.removeEventListener("resize", check);
      if (io) io.disconnect();
    };
  }, []);
  return [ref, shown];
}

// Reveal wrapper component
function Reveal({ children, className = "", delay = 0, from = "up", as = "div" }) {
  const [ref, shown] = useReveal();
  const Tag = as;
  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: delay + "ms" }}
      className={`reveal reveal-${from} ${shown ? "is-shown" : ""} ${className}`}
    >
      {children}
    </Tag>
  );
}

// Section heading with eyebrow pill + light title
function SectionTitle({ eyebrow, title }) {
  return (
    <div className="sec-head">
      <Reveal className="eyebrow" from="up">
        <span className="eyebrow-dot"></span>
        {eyebrow}
      </Reveal>
      <Reveal delay={80}>
        <h2 className="sec-title font-display">{title}</h2>
      </Reveal>
    </div>
  );
}

// Animated text — letters fade/rotate in with stagger (entrance motion design)
function AnimatedText({ text, baseDelay = 0, step = 0.045, className = "" }) {
  return (
    <span className={className} aria-label={text}>
      {text.split("").map((ch, i) => (
        <span
          key={i}
          className="letter-in"
          aria-hidden="true"
          style={{ animationDelay: baseDelay + i * step + "s" }}
        >
          {ch === " " ? "\u00A0" : ch}
        </span>
      ))}
    </span>
  );
}

// "Floating Paths" background — adapted from the framer-motion component to
// pure SVG + CSS (no npm deps in this CDN/Babel project). 36 stroked paths per
// direction flow along themselves via stroke-dasharray/dashoffset, with a
// gentle opacity pulse. Sober white-on-near-black to match the theme.
function FloatingPaths({ position }) {
  const paths = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    d:
      `M-${380 - i * 5 * position} -${189 + i * 6}` +
      `C-${380 - i * 5 * position} -${189 + i * 6} ` +
      `-${312 - i * 5 * position} ${216 - i * 6} ` +
      `${152 - i * 5 * position} ${343 - i * 6}` +
      `C${616 - i * 5 * position} ${470 - i * 6} ` +
      `${684 - i * 5 * position} ${875 - i * 6} ` +
      `${684 - i * 5 * position} ${875 - i * 6}`,
    width: 0.5 + i * 0.03,
    // randomised so the strokes don't pulse in lockstep
    dur: 20 + Math.random() * 10,
    delay: -Math.random() * 20,
  }));

  return (
    <svg
      className="bg-paths-svg"
      viewBox="0 0 696 316"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      {paths.map((p) => (
        <path
          key={p.id}
          className="bg-path"
          d={p.d}
          stroke="currentColor"
          strokeWidth={p.width}
          pathLength="1"
          style={{
            strokeOpacity: 0.08 + p.id * 0.015,
            animationDuration: p.dur + "s",
            animationDelay: p.delay + "s",
          }}
        />
      ))}
    </svg>
  );
}

function Background() {
  return (
    <div className="bg-stage" aria-hidden="true">
      {/* lower-left cluster */}
      <div className="bg-paths">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>
      {/* mirrored copy (rotated 180°) → same flowing lines in the top-right */}
      <div className="bg-paths bg-paths-mirror">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>
      <div className="bg-vignette"></div>
    </div>
  );
}

// Minimal line icons (generic, geometric)
function Icon({ name, className = "w-5 h-5" }) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };
  switch (name) {
    case "github":
      return (
        <svg {...common}>
          <path d="M9 19c-4.5 1.5-4.5-2.2-6-2.6m12 4.6v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.3 4.3 0 0 0-.1-3.2s-1-.3-3.4 1.3a11.6 11.6 0 0 0-6 0C6.3 1.6 5.3 1.9 5.3 1.9a4.3 4.3 0 0 0-.1 3.2A4.6 4.6 0 0 0 3.9 8.3c0 4.5 2.7 5.6 5.5 6-.4.4-.6.9-.5 1.6V21" />
        </svg>
      );
    case "linkedin":
      return (
        <svg {...common}>
          <rect x="3" y="3" width="18" height="18" rx="3" />
          <path d="M7 10v7M7 7v.01M11.5 17v-4a2 2 0 0 1 4 0v4M11.5 17v-7" />
        </svg>
      );
    case "mail":
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M4 7l8 6 8-6" />
        </svg>
      );
    case "arrow-up-right":
      return (
        <svg {...common}>
          <path d="M7 17 17 7M9 7h8v8" />
        </svg>
      );
    case "arrow-down":
      return (
        <svg {...common}>
          <path d="M12 5v14M6 13l6 6 6-6" />
        </svg>
      );
    case "menu":
      return (
        <svg {...common}>
          <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      );
    case "close":
      return (
        <svg {...common}>
          <path d="M6 6l12 12M18 6 6 18" />
        </svg>
      );
    case "code":
      return (
        <svg {...common}>
          <path d="M8 9l-4 3 4 3M16 9l4 3-4 3M13 6l-2 12" />
        </svg>
      );
    case "cap":
      return (
        <svg {...common}>
          <path d="M3 9l9-4 9 4-9 4-9-4Z" />
          <path d="M7 11v4c0 1 2.2 2 5 2s5-1 5-2v-4" />
        </svg>
      );
    case "check":
      return (
        <svg {...common}>
          <path d="M5 12l5 5L20 6" />
        </svg>
      );
    case "download":
      return (
        <svg {...common}>
          <path d="M12 3v12M7 11l5 5 5-5M5 21h14" />
        </svg>
      );
    default:
      return null;
  }
}

Object.assign(window, { useReveal, Reveal, SectionTitle, AnimatedText, Background, Icon });
