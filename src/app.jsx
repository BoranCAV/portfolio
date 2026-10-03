// Navigation et routage par hash : chaque rubrique est une page à part.

const { useHashRoute, Icon, SECTIONS, Hero, About, Skills, Projects, Education, Contact, ProofPage, ProjectPage } = window;

const VIEWS = { accueil: Hero, "a-propos": About, competences: Skills, projets: Projects, formation: Education, contact: Contact };

function routeToView(hash) {
  const s = SECTIONS.find((x) => x.route === hash);
  return s ? s.id : "accueil";
}

function Nav({ active }) {
  const [open, setOpen] = React.useState(false);
  const route = useHashRoute();
  React.useEffect(() => setOpen(false), [route]);
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="nav">
      <div className="nav-pill glass">
        <a className="nav-brand" href="#/" aria-label="Boran CAV, accueil"><b>BC</b>Boran CAV</a>
        <nav className="nav-links" aria-label="Rubriques">
          {SECTIONS.map((s) => (
            <a key={s.id} href={s.route} className={active === s.id ? "is-active" : ""}
               aria-current={active === s.id ? "page" : undefined}>{s.label}</a>
          ))}
        </nav>
        <button className="nav-menu" onClick={() => setOpen((o) => !o)}
                aria-label={open ? "Fermer le menu" : "Ouvrir le menu"} aria-expanded={open}>
          <Icon name={open ? "x" : "list"} />
        </button>
      </div>
      <div className={"nav-sheet glass" + (open ? " is-open" : "")}>
        {SECTIONS.map((s) => (
          <a key={s.id} href={s.route} className={active === s.id ? "is-active" : ""}>{s.label}<Icon name="arrow-right" /></a>
        ))}
      </div>
    </header>
  );
}

function App() {
  const route = useHashRoute();
  const m = route.match(/^#\/competence\/(.+)$/);
  const skill = m ? (window.SKILLS_DATA || []).find((s) => s.id === m[1]) : null;
  const mp = route.match(/^#\/projet\/(.+)$/);
  const project = mp ? (window.PROJECTS || []).find((p) => p.id === mp[1]) : null;
  const view = routeToView(route);
  const pageKey = skill ? "c-" + skill.id : project ? "p-" + project.id : view;

  // Chaque changement de page repart du haut, et le ruban 3D change de pose.
  React.useEffect(() => {
    window.scrollTo(0, 0);
    const i = skill || project ? SECTIONS.length + 1 : Math.max(0, SECTIONS.findIndex((s) => s.id === view) + 1);
    window.dispatchEvent(new CustomEvent("viewchange", { detail: i }));
  }, [pageKey]);

  const View = VIEWS[view];
  return (
    <React.Fragment>
      <Nav active={skill ? "competences" : project ? "projets" : view} />
      {skill ? <ProofPage key={pageKey} skill={skill} /> :
       project ? <ProjectPage key={pageKey} project={project} /> :
       <main id="contenu" key={pageKey} className="view"><View /></main>}
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
