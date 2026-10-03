// Pages de détail : preuves d'une compétence, et détail d'un projet.

function Pager({ prev, next, base, kind, nameOf }) {
  if (!prev && !next) return null;
  return (
    <nav className="pager" aria-label={kind + "s voisines"}>
      {prev && (
        <a className="glass" href={base + prev.id}>
          <small>{kind} précédente</small><b>{nameOf(prev)}</b>
        </a>
      )}
      {next && (
        <a className="glass next" href={base + next.id}>
          <small>{kind} suivante</small><b>{nameOf(next)}</b>
        </a>
      )}
    </nav>
  );
}

function ProofPage({ skill }) {
  const { Icon } = window;
  const data = window.SKILLS_DATA || [];
  const idx = data.findIndex((s) => s.id === skill.id);

  return (
    <main id="contenu" className="detail wrap">
      <a className="back glass" href="#/competences"><Icon name="arrow-left" /> Compétences</a>
      <p className="detail-kicker hero-in" style={{ "--d": 0 }}>{skill.group}</p>
      <h1 className="hero-in" style={{ "--d": 1 }}>{skill.name}</h1>
      <p className="detail-lead hero-in" style={{ "--d": 2 }}>{skill.blurb}.</p>
      <div className="detail-meta hero-in" style={{ "--d": 3 }}>
        <span className="detail-level">
          <span className="skill-bar" aria-hidden="true"><span style={{ width: skill.level + "%" }}></span></span>
          <b>{skill.level}%</b>
        </span>
        <span className="chips" style={{ marginTop: 0, paddingTop: 0 }}>
          {skill.context.map((c) => <span key={c} className="chip">{c}</span>)}
        </span>
      </div>

      <section className="detail-sec">
        <h2 data-reveal>Preuves d'acquisition</h2>
        <div className="proofs">
          {skill.proofs.map((p, i) => (
            <article key={i} className="proof glass" data-reveal style={{ "--d": i }}>
              <span className="proof-tag">{p.tag}</span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
              {p.link && (
                <a className="text-link" href={p.link.href} target="_blank" rel="noopener noreferrer">
                  {p.link.label} <Icon name="arrow-up-right" />
                </a>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="detail-sec">
        <h2 data-reveal>Analyse réflexive</h2>
        <div className="reflection">
          {skill.reflection.map((para, i) => <p key={i} data-reveal>{para}</p>)}
        </div>
      </section>

      <Pager prev={data[idx - 1]} next={data[idx + 1]} base="#/competence/" kind="Compétence" nameOf={(s) => s.name} />
    </main>
  );
}

function ProjectPage({ project }) {
  const { Icon } = window;
  const COMP = window.COMP || {};
  const data = window.PROJECTS || [];
  const idx = data.findIndex((p) => p.id === project.id);
  const isGit = project.href && project.href.includes("github");

  return (
    <main id="contenu" className="detail wrap">
      <a className="back glass" href="#/projets"><Icon name="arrow-left" /> Projets</a>
      <p className="detail-kicker hero-in" style={{ "--d": 0 }}>{project.tag}</p>
      <h1 className="hero-in" style={{ "--d": 1 }}>{project.title}</h1>
      <p className="detail-lead hero-in" style={{ "--d": 2 }}>{project.desc}</p>
      <div className="detail-meta hero-in" style={{ "--d": 3 }}>
        <span className="chips" style={{ marginTop: 0, paddingTop: 0 }}>
          {project.tech.map((t) => <span key={t} className="chip">{t}</span>)}
        </span>
        {project.href && (
          <a className="btn btn-glass glass" href={project.href} target="_blank" rel="noopener noreferrer">
            <Icon name={isGit ? "github-logo" : "arrow-up-right"} /> {project.hrefLabel}
          </a>
        )}
      </div>

      <section className="detail-sec">
        <h2 data-reveal>Ce que j'ai fait</h2>
        <div className="proofs">
          {project.did.map((para, i) => (
            <article key={i} className="proof glass" data-reveal style={{ "--d": i % 3 }}>
              <p>{para}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="detail-sec">
        <h2 data-reveal>Ce que j'ai appris</h2>
        <div className="reflection">
          {project.learned.map((para, i) => <p key={i} data-reveal>{para}</p>)}
        </div>
      </section>

      <section className="detail-sec">
        <h2 data-reveal>Compétences du BUT mobilisées</h2>
        <ul className="comp-list">
          {project.competences.map((n, i) => (
            <li key={n} data-reveal style={{ "--d": i }}><span className="mono">C{n}</span><span>{COMP[n]}</span></li>
          ))}
        </ul>
      </section>

      <Pager prev={data[idx - 1]} next={data[idx + 1]} base="#/projet/" kind="Projet" nameOf={(p) => p.title} />
    </main>
  );
}

Object.assign(window, { ProofPage, ProjectPage });
