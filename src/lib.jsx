// Hooks et petits composants partagés. Exportés vers window pour les autres scripts babel.

function useHashRoute() {
  const [hash, setHash] = React.useState(window.location.hash);
  React.useEffect(() => {
    const on = () => setHash(window.location.hash);
    window.addEventListener("hashchange", on);
    return () => window.removeEventListener("hashchange", on);
  }, []);
  return hash;
}

// Icônes Phosphor (police web chargée dans index.html).
function Icon({ name }) {
  return <i className={"ph ph-" + name} aria-hidden="true"></i>;
}

// Reflet du verre qui suit le pointeur (un seul écouteur pour toute la page).
if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
  document.addEventListener("pointermove", (e) => {
    const el = e.target.closest && e.target.closest(".glass");
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", (e.clientX - r.left) + "px");
    el.style.setProperty("--my", (e.clientY - r.top) + "px");
  }, { passive: true });
}

Object.assign(window, { useHashRoute, Icon });
