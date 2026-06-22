// Nav, Hero, and root App. Multi-vue : chaque rubrique a son propre espace (routage par hash).

const { Reveal, AnimatedText, Background, Icon, About, Skills, Projects, Education, Contact } = window;

function useHashRoute() {
  const [hash, setHash] = React.useState(window.location.hash);
  React.useEffect(() => {
    const on = () => setHash(window.location.hash);
    window.addEventListener("hashchange", on);
    return () => window.removeEventListener("hashchange", on);
  }, []);
  return hash;
}

const NAV = [
  { id: "accueil", label: "Accueil", route: "#/" },
  { id: "a-propos", label: "À propos", route: "#/a-propos" },
  { id: "competences", label: "Compétences", route: "#/competences" },
  { id: "projets", label: "Projets", route: "#/projets" },
  { id: "formation", label: "Formation", route: "#/formation" },
  { id: "contact", label: "Contact", route: "#/contact" },
];

// Quelle vue pour un hash donné
function routeToView(hash) {
  const h = (hash || "").replace(/^#/, "");
  if (h === "" || h === "/" || h === "/accueil") return "accueil";
  if (h === "/a-propos") return "a-propos";
  if (h === "/competences") return "competences";
  if (h === "/projets") return "projets";
  if (h === "/formation") return "formation";
  if (h === "/contact") return "contact";
  return "accueil";
}

function Nav({ current }) {
  const [open, setOpen] = React.useState(false);

  // ferme le menu mobile quand on change de page
  React.useEffect(() => {
    setOpen(false);
  }, [current]);

  return (
    <header className="nav nav-solid">
      <div className="nav-inner">
        <a href="#/" className="brand">
          <span className="brand-mark">BC</span>
          <span className="brand-name">Boran CAV</span>
        </a>

        <nav className="nav-links">
          {NAV.map((n) => (
            <a key={n.id} href={n.route} className={current === n.id ? "is-active" : ""}>
              {n.label}
            </a>
          ))}
        </nav>

        <button className="nav-burger" onClick={() => setOpen((o) => !o)} aria-label="Menu">
          <Icon name={open ? "close" : "menu"} className="w-6 h-6" />
        </button>
      </div>

      <div className={`nav-mobile ${open ? "is-open" : ""}`}>
        {NAV.map((n) => (
          <a key={n.id} href={n.route} onClick={() => setOpen(false)} className={current === n.id ? "is-active" : ""}>
            {n.label}
          </a>
        ))}
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="accueil" className="hero">
      <div className="hero-inner">
        <div className="hero-eyebrow">
          <span className="hero-eyebrow-dot"></span>
          <AnimatedText text="PORTFOLIO" baseDelay={0.1} step={0.05} className="tracking-[0.4em]" />
        </div>

        <h1 className="hero-name font-display">
          <span className="block">
            <AnimatedText text="Boran" baseDelay={0.35} />
          </span>
          <span className="block hero-name-accent">
            <AnimatedText text="CAV" baseDelay={0.7} />
          </span>
        </h1>

        <div className="hero-title">
          <span className="hero-title-line"></span>
          <span className="hero-title-text">Étudiant BUT Informatique</span>
        </div>

        <div className="hero-actions">
          <a href="#/competences" className="btn-primary">
            Mes compétences
            <Icon name="arrow-up-right" className="w-4 h-4" />
          </a>
          <a href="#/projets" className="btn-ghost">
            Voir mes projets
          </a>
          <a href="uploads/CV-Boran-CAV.pdf" download className="btn-ghost">
            <Icon name="download" className="w-4 h-4" />
            Télécharger mon CV
          </a>
        </div>

        <div className="hero-nav-hint">
          <span className="hero-nav-hint-line"></span>
          Naviguez entre les rubriques depuis le menu ci-dessus
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="wrap flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-display text-white font-semibold">Boran CAV</span>
        <span className="text-sm text-slate-500">© 2026 · Portfolio · BUT Informatique</span>
        <div className="flex gap-3">
          <a href="https://github.com/BoranCAV" target="_blank" rel="noopener noreferrer" className="footer-icon"><Icon name="github" className="w-5 h-5" /></a>
          <a href="https://www.linkedin.com/in/boran-cav-3971a6333/" target="_blank" rel="noopener noreferrer" className="footer-icon"><Icon name="linkedin" className="w-5 h-5" /></a>
          <a href="mailto:cav.boran@gmail.com" className="footer-icon"><Icon name="mail" className="w-5 h-5" /></a>
        </div>
      </div>
    </footer>
  );
}

function App() {
  const route = useHashRoute();
  const m = route.match(/^#\/competence\/(.+)$/);
  const skill = m ? (window.SKILLS_DATA || []).find((s) => s.id === m[1]) : null;
  const mp = route.match(/^#\/projet\/(.+)$/);
  const project = mp ? (window.PROJECTS || []).find((p) => p.id === mp[1]) : null;

  // remonte en haut à chaque changement de page
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [route]);

  const backToSkills = () => {
    window.location.hash = "#/competences";
  };
  const backToProjects = () => {
    window.location.hash = "#/projets";
  };

  if (skill) {
    return (
      <React.Fragment>
        <Background />
        <window.ProofPage skill={skill} onBack={backToSkills} />
      </React.Fragment>
    );
  }

  if (project) {
    return (
      <React.Fragment>
        <Background />
        <window.ProjectPage project={project} onBack={backToProjects} />
      </React.Fragment>
    );
  }

  const view = routeToView(route);
  const views = {
    accueil: <Hero />,
    "a-propos": <About />,
    competences: <Skills />,
    projets: <Projects />,
    formation: <Education />,
    contact: <Contact />,
  };
  const isHome = view === "accueil";

  return (
    <React.Fragment>
      <Background />
      <Nav current={view} />
      <main key={view} className={`view ${isHome ? "view-home" : "view-page"}`}>
        {views[view]}
      </main>
      {!isHome && <Footer />}
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
