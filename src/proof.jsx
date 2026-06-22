// Page de preuves d'acquisition d'une compétence : preuves + analyse réflexive.

function ProofPage({ skill, onBack }) {
  const { Reveal, Icon } = window;
  const data = window.SKILLS_DATA || [];
  const idx = data.findIndex((s) => s.id === skill.id);
  const prev = idx > 0 ? data[idx - 1] : null;
  const next = idx < data.length - 1 ? data[idx + 1] : null;

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [skill.id]);

  return (
    <div className="proof-page">
      {/* top bar */}
      <div className="proof-bar">
        <div className="wrap proof-bar-inner">
          <button className="proof-back" onClick={onBack}>
            <span className="proof-back-arrow"><Icon name="arrow-up-right" className="w-4 h-4" /></span>
            Compétences
          </button>
          <a href="#" onClick={(e) => { e.preventDefault(); onBack(); }} className="brand">
            <span className="brand-mark">BC</span>
            <span className="brand-name">Boran CAV</span>
          </a>
        </div>
      </div>

      {/* hero */}
      <header className="proof-hero">
        <div className="wrap">
          <Reveal className="proof-breadcrumb" from="left">
            <span>Compétences</span>
            <span className="proof-sep">/</span>
            <span className="text-accent">{skill.group}</span>
          </Reveal>

          <Reveal delay={60}>
            <h1 className="proof-title font-display">{skill.name}</h1>
          </Reveal>

          <Reveal delay={120}>
            <p className="proof-blurb tx">{skill.blurb}.</p>
          </Reveal>

          <Reveal delay={180} className="proof-level">
            <div className="proof-level-head">
              <span>Niveau de maîtrise</span>
              <span className="font-display text-accent tabular-nums">{skill.level}%</span>
            </div>
            <div className="skill-track">
              <ProofBar level={skill.level} />
            </div>
          </Reveal>

          {skill.context && (
            <Reveal delay={240} className="proof-context">
              {skill.context.map((c, i) => (
                <span key={i} className="chip">{c}</span>
              ))}
            </Reveal>
          )}
        </div>
      </header>

      <div className="wrap proof-body">
        {/* preuves */}
        <section className="proof-section">
          <Reveal className="proof-section-head" from="left">
            <span className="proof-section-num">A.</span>
            <h2 className="font-display">Preuves d'acquisition</h2>
          </Reveal>
          <div className="proof-evidence-list">
            {skill.proofs.map((p, i) => (
              <Reveal key={i} delay={i * 80} className="evidence-card">
                <div className="evidence-head">
                  <span className="evidence-tag">{p.tag}</span>
                  <h3 className="font-display">{p.title}</h3>
                </div>
                <p className="tx">{p.text}</p>
                {p.link && (
                  <a href={p.link.href} target="_blank" rel="noopener noreferrer" className="evidence-link">
                    <Icon name="github" className="w-4 h-4" />
                    {p.link.label}
                    <Icon name="arrow-up-right" className="w-3.5 h-3.5" />
                  </a>
                )}
              </Reveal>
            ))}
          </div>
        </section>

        {/* analyse réflexive */}
        <section className="proof-section">
          <Reveal className="proof-section-head" from="left">
            <span className="proof-section-num">B.</span>
            <h2 className="font-display">Analyse réflexive</h2>
          </Reveal>
          <Reveal delay={80} className="reflection-card">
            <span className="reflection-quote">“</span>
            {skill.reflection.map((para, i) => (
              <p key={i} className="tx">{para}</p>
            ))}
          </Reveal>
        </section>
      </div>

      {/* nav prev / next */}
      <nav className="proof-nav wrap">
        {prev ? (
          <a href={"#/competence/" + prev.id} className="proof-nav-link proof-nav-prev">
            <span className="proof-nav-dir">← Compétence précédente</span>
            <span className="proof-nav-name font-display">{prev.name}</span>
          </a>
        ) : <span></span>}
        {next ? (
          <a href={"#/competence/" + next.id} className="proof-nav-link proof-nav-next">
            <span className="proof-nav-dir">Compétence suivante →</span>
            <span className="proof-nav-name font-display">{next.name}</span>
          </a>
        ) : <span></span>}
      </nav>

      <footer className="footer">
        <div className="wrap flex flex-col sm:flex-row items-center justify-between gap-4">
          <button onClick={onBack} className="btn-ghost">← Retour au portfolio</button>
          <span className="text-sm text-slate-500">© 2026 · Boran CAV · BUT Informatique</span>
        </div>
      </footer>
    </div>
  );
}

// Animated bar that fills on mount
function ProofBar({ level }) {
  const [w, setW] = React.useState(0);
  React.useEffect(() => {
    const t = setTimeout(() => setW(level), 200);
    return () => clearTimeout(t);
  }, [level]);
  return <div className="skill-fill" style={{ width: w + "%" }}></div>;
}

window.ProofPage = ProofPage;

// Page de détail d'un projet : ce que j'ai fait, ce que j'ai appris, compétences mobilisées.
function ProjectPage({ project, onBack }) {
  const { Reveal, Icon } = window;
  const COMP = window.COMP || {};
  const data = window.PROJECTS || [];
  const idx = data.findIndex((p) => p.id === project.id);
  const prev = idx > 0 ? data[idx - 1] : null;
  const next = idx < data.length - 1 ? data[idx + 1] : null;

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [project.id]);

  return (
    <div className="proof-page">
      {/* top bar */}
      <div className="proof-bar">
        <div className="wrap proof-bar-inner">
          <button className="proof-back" onClick={onBack}>
            <span className="proof-back-arrow"><Icon name="arrow-up-right" className="w-4 h-4" /></span>
            Projets
          </button>
          <a href="#" onClick={(e) => { e.preventDefault(); onBack(); }} className="brand">
            <span className="brand-mark">BC</span>
            <span className="brand-name">Boran CAV</span>
          </a>
        </div>
      </div>

      {/* hero */}
      <header className="proof-hero">
        <div className="wrap">
          <Reveal className="proof-breadcrumb" from="left">
            <span>Projets</span>
            <span className="proof-sep">/</span>
            <span className="text-accent">{project.tag}</span>
          </Reveal>

          <Reveal delay={60}>
            <h1 className="proof-title font-display">{project.title}</h1>
          </Reveal>

          <Reveal delay={120}>
            <p className="proof-blurb tx">{project.desc}</p>
          </Reveal>

          <Reveal delay={180} className="proof-context">
            {project.tech.map((t, i) => (
              <span key={i} className="chip">{t}</span>
            ))}
          </Reveal>

          {project.href && (
            <Reveal delay={240}>
              <a href={project.href} target="_blank" rel="noopener noreferrer" className="evidence-link" style={{ marginTop: "1.25rem" }}>
                <Icon name={project.href.includes("github") ? "github" : "arrow-up-right"} className="w-4 h-4" />
                {project.hrefLabel || "Voir le projet"}
                <Icon name="arrow-up-right" className="w-3.5 h-3.5" />
              </a>
            </Reveal>
          )}
        </div>
      </header>

      <div className="wrap proof-body">
        {/* ce que j'ai fait */}
        <section className="proof-section">
          <Reveal className="proof-section-head" from="left">
            <span className="proof-section-num">A.</span>
            <h2 className="font-display">Ce que j'ai fait</h2>
          </Reveal>
          <div className="proof-evidence-list">
            {project.did.map((para, i) => (
              <Reveal key={i} delay={i * 80} className="evidence-card">
                <p className="tx">{para}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ce que j'ai appris */}
        <section className="proof-section">
          <Reveal className="proof-section-head" from="left">
            <span className="proof-section-num">B.</span>
            <h2 className="font-display">Ce que j'ai appris</h2>
          </Reveal>
          <Reveal delay={80} className="reflection-card">
            <span className="reflection-quote">“</span>
            {project.learned.map((para, i) => (
              <p key={i} className="tx">{para}</p>
            ))}
          </Reveal>
        </section>

        {/* compétences mobilisées */}
        <section className="proof-section">
          <Reveal className="proof-section-head" from="left">
            <span className="proof-section-num">C.</span>
            <h2 className="font-display">Compétences mobilisées</h2>
          </Reveal>
          <div className="proof-evidence-list">
            {project.competences.map((n, i) => (
              <Reveal key={n} delay={i * 60} className="evidence-card">
                <div className="evidence-head">
                  <span className="evidence-tag">Compétence {n}</span>
                  <h3 className="font-display">{COMP[n]}</h3>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      </div>

      {/* nav prev / next */}
      <nav className="proof-nav wrap">
        {prev ? (
          <a href={"#/projet/" + prev.id} className="proof-nav-link proof-nav-prev">
            <span className="proof-nav-dir">← Projet précédent</span>
            <span className="proof-nav-name font-display">{prev.title}</span>
          </a>
        ) : <span></span>}
        {next ? (
          <a href={"#/projet/" + next.id} className="proof-nav-link proof-nav-next">
            <span className="proof-nav-dir">Projet suivant →</span>
            <span className="proof-nav-name font-display">{next.title}</span>
          </a>
        ) : <span></span>}
      </nav>

      <footer className="footer">
        <div className="wrap flex flex-col sm:flex-row items-center justify-between gap-4">
          <button onClick={onBack} className="btn-ghost">← Retour au portfolio</button>
          <span className="text-sm text-slate-500">© 2026 · Boran CAV · BUT Informatique</span>
        </div>
      </footer>
    </div>
  );
}

window.ProjectPage = ProjectPage;
