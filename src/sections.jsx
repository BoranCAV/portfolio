// Page sections: About, Skills, Projects, Education, Contact. Exported to window.

const { Reveal, SectionTitle, Icon } = window;

/* ------------------------------ À PROPOS ------------------------------ */
function About() {
  return (
    <section id="about" className="section">
      <div className="wrap">
        <SectionTitle index="01" eyebrow="À propos" title="Qui suis-je ?" />
        {/* text (pleine largeur, aligné comme les autres sections) */}
        <div className="about-text">
          <Reveal delay={60}>
            <p className="text-xl sm:text-2xl leading-relaxed text-slate-300 tx text-justify">
              Je suis étudiant en <span className="text-white font-medium">2ᵉ année de BUT Informatique</span> à l'Université Sorbonne Paris Nord.
              Je porte une attention particulière à la rédaction, la maintenance et l'organisation du code,
              tout en étant capable de m'adapter rapidement à de nouveaux outils numériques.
              Je suis en mesure de travailler en autonomie et de manière rigoureuse,
              ce qui permet d'assurer un travail sérieux et ponctuel.
            </p>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-5 text-lg sm:text-xl leading-relaxed text-slate-400 tx text-justify">
              J'ai réalisé <span className="text-white font-medium">14 SAE</span> au cours de ma formation, à travers lesquelles j'ai appris à structurer une base de
              données et à mener un projet du cahier des charges jusqu'à la mise en production. Je suis
              curieux, rigoureux et toujours prêt à apprendre de nouvelles technologies.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <a
              href="https://www.univ-spn.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 text-sm text-slate-400 hover:text-white transition-colors duration-200"
            >
              <span style={{fontSize:'0.65rem', opacity:0.5}}>↗</span>
              Université Sorbonne Paris Nord — IUT de Villetaneuse
            </a>
          </Reveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-10">
            {[
              { n: "2ᵉ", l: "année de BUT" },
              { n: "15", l: "technologies" },
              { n: "14", l: "projets SAE" },
            ].map((s, i) => (
              <Reveal key={i} delay={180 + i * 80}>
                <div className="stat-card">
                  <div className="font-display text-3xl sm:text-4xl font-bold text-white">{s.n}</div>
                  <div className="text-xs sm:text-sm text-slate-400 mt-1 tracking-wide">{s.l}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- COMPÉTENCES ---------------------------- */
// Carte de compétence cliquable -> page de preuves
function SkillCard({ skill, delay }) {
  const [ref, shown] = window.useReveal();
  return (
    <a
      ref={ref}
      href={"#/competence/" + skill.id}
      style={{ transitionDelay: delay + "ms" }}
      className={`skill-card reveal reveal-up ${shown ? "is-shown" : ""}`}
    >
      <div className="skill-card-top">
        <div>
          <h3 className="skill-card-name font-display">{skill.name}</h3>
          <p className="skill-card-blurb">{skill.blurb}</p>
        </div>
        <span className="skill-card-pct font-display tabular-nums">{shown ? skill.level : 0}%</span>
      </div>
      <div className="skill-track">
        <div className="skill-fill" style={{ width: shown ? skill.level + "%" : "0%" }}></div>
      </div>
      <div className="skill-card-foot">
        <div className="skill-card-ctx">
          {skill.context.slice(0, 2).map((c, i) => (
            <span key={i} className="skill-card-tag">{c}</span>
          ))}
        </div>
        <span className="skill-card-cta">
          Voir les preuves
          <Icon name="arrow-up-right" className="w-4 h-4" />
        </span>
      </div>
    </a>
  );
}

function Skills() {
  const data = window.SKILLS_DATA || [];
  const groups = [];
  data.forEach((s) => {
    let g = groups.find((x) => x.name === s.group);
    if (!g) { g = { name: s.group, items: [] }; groups.push(g); }
    g.items.push(s);
  });

  return (
    <section id="skills" className="section section-skills">
      <div className="wrap">
        <SectionTitle index="02" eyebrow="Compétences" title="Le cœur de mon profil" />
        <Reveal className="skills-intro tx" delay={60}>
          Chaque compétence ci-dessous est documentée. Cliquez sur l'une d'elles pour consulter mes
          <span className="text-white"> preuves d'acquisition</span> concrètes — issues de mes projets de
          SAE et de mon stage en entreprise — ainsi qu'une <span className="text-white">analyse réflexive</span>
          {" "}sur la manière dont je l'ai développée.
        </Reveal>

        {groups.map((g, gi) => (
          <div key={g.name} className="skill-group">
            <Reveal className="skill-group-title" from="left">
              <span className="skill-group-bar"></span>
              {g.name}
            </Reveal>
            <div className="skill-grid">
              {g.items.map((s, i) => (
                <SkillCard key={s.id} skill={s} delay={i * 50} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------ PROJETS ------------------------------- */
// Référentiel des compétences du BUT Informatique (intitulés officiels).
const COMP = {
  1: "Réaliser un développement d'application",
  2: "Optimiser des applications informatiques",
  3: "Administrer des systèmes informatiques",
  4: "Gérer des données de l'information",
  5: "Conduire un projet",
  6: "Travailler dans une équipe informatique",
};

const PROJECTS = [
  {
    id: "stage-parkhit",
    title: "Stage — ParkHit",
    tag: "Stage · Entreprise",
    desc:
      "Stage de développement web sur parkhit.com, une plateforme de réservation de parkings déjà utilisée par de vrais clients. Travail sur une application moderne en React, Next.js et TypeScript, du composant d'interface à la base de données.",
    tech: ["React", "Next.js", "TypeScript", "TailwindCSS", "PostgreSQL", "Docker"],
    href: "https://parkhit.com",
    hrefLabel: "Voir parkhit.com",
    label: "plateforme parkhit.com",
    illu: "web",
    did: [
      "J'ai développé plusieurs composants d'interface en React : un badge « 100% Français » en SVG positionné sur la page d'accueil, et un sélecteur de période pour le tableau de bord administrateur, inspiré de Google Analytics, avec des raccourcis (7 derniers jours, 30 derniers jours) et une sélection libre de dates.",
      "J'ai retravaillé des parties d'interface déjà en production : lecture et compréhension d'une structure existante avant d'intervenir, correction de problèmes d'affichage et garantie d'un rendu correct sur mobile comme sur ordinateur — par exemple une bannière fixe qui recouvrait un bouton de réservation sur petit écran.",
      "J'ai installé et fait tourner l'environnement du projet avec Docker (PostgreSQL et Redis), et manipulé la base de données PostgreSQL à travers Prisma, la couche d'abstraction qui relie le code aux données.",
    ],
    learned: [
      "Le stage m'a appris à écrire du code propre, lisible et maintenable. Sur un produit en production, un défaut d'affichage a un impact direct sur l'utilisateur : on ne peut plus se permettre une structure approximative comme sur ses propres projets.",
      "J'ai découvert l'intérêt du typage avec TypeScript, qui s'est révélé être un véritable garde-fou, et la logique des composants React — le passage de propriétés, la gestion de l'état — qui s'est éclairée une fois confrontée à des cas réels.",
      "J'ai vu comment une application professionnelle s'organise : services isolés dans des conteneurs Docker, base de données manipulée via une couche d'abstraction, et travail en équipe avec Git et des pull requests.",
    ],
    competences: [1, 2, 3, 4, 6],
  },
  {
    id: "sae-colis",
    title: "SAE — Gestion de colis",
    tag: "SAE · Projet collaboratif",
    desc:
      "Application web de gestion et de suivi de colis développée en équipe : enregistrement des expéditions, mise à jour des statuts et gestion des utilisateurs. Une base de données relationnelle et une logique métier complète côté serveur.",
    tech: ["PHP", "JavaScript", "SQL", "HTML/CSS"],
    href: "https://github.com/Amir-tbl/SAECOLISFINAL",
    hrefLabel: "Voir sur GitHub",
    label: "site de gestion de colis",
    illu: "parcel",
    did: [
      "J'ai construit l'intégralité de l'interface du site : formulaires d'enregistrement des expéditions, tableaux de suivi des statuts et pages d'administration, structurés en HTML sémantique et mis en forme en CSS avec une cohérence visuelle entre les écrans.",
      "J'ai développé toute la logique serveur en PHP : traitement des formulaires, communication avec la base de données et gestion des différents statuts d'une expédition. C'est sur ce projet que j'ai compris le cycle complet d'une requête, du clic de l'utilisateur jusqu'à l'écriture en base.",
      "J'ai conçu et interrogé la base de données relationnelle (MySQL) qui stocke les expéditions, leurs statuts et les utilisateurs, en écrivant les requêtes d'insertion et de lecture nécessaires au suivi.",
    ],
    learned: [
      "J'ai appris à mener un projet de bout en bout : du cahier des charges jusqu'à la mise en production, en passant par la modélisation de la base de données et la répartition du travail dans l'équipe.",
      "Le travail collaboratif m'a appris à coordonner mon code avec celui des autres, à structurer une base de données partagée et à tenir des délais communs.",
      "Ce projet m'a donné les fondamentaux du développement côté serveur : comprendre comment l'interface, la logique métier et les données s'articulent dans une application complète.",
    ],
    competences: [1, 4, 5, 6],
  },
  {
    id: "recueil-but1",
    title: "Recueil de SAE — BUT 1",
    tag: "SAE · 1ʳᵉ année",
    desc:
      "L'ensemble des SAE réalisées durant ma première année de BUT Informatique à l'Université Sorbonne Paris Nord : algorithmique en Python, programmation orientée objet en Java, bases de données SQL, gestion de projet, recueil de besoins et analyse économique. Un panorama complet de mes premiers apprentissages.",
    tech: ["Python", "Java", "SQL / PostgreSQL", "Linux / Debian", "Apache2", "UML"],
    href: "https://github.com/BoranCAV/SAE-BUT1-2024-2025",
    hrefLabel: "Voir sur GitHub",
    label: "recueil des SAE · BUT 1",
    illu: "code",
    did: [
      "SAE Python — Analyse de réseaux sociaux : en binôme, j'ai développé en Python un ensemble de fonctions pour modéliser un réseau d'amis sous forme de dictionnaire et y détecter des communautés (cree_reseau, sont_ami, est_commu, comu, comu_max), avec un tri des membres par popularité. Un travail centré sur l'algorithmique et les structures de données.",
      "SAE Java — Jeu d'échecs en POO : j'ai conçu un jeu d'échecs complet en Java avec une architecture orientée objet (classe abstraite Piece dérivée en Pion, Tour, Cavalier, Fou, Dame, Roi), un échiquier, une boucle de partie, la validation des déplacements et la détection de l'échec, du mat et du pat — le tout modélisé en UML.",
      "SAE Base de données & SQL : j'ai modélisé et créé une base de données PostgreSQL sur la fréquence des catastrophes climatiques par pays, en comparant un script SQL écrit à la main avec un script généré par un AGL (DB Designer), puis en peuplant les tables à partir d'un fichier CSV.",
      "SAE Installation de poste : à partir d'une machine sans système d'exploitation, j'ai installé Debian de zéro, configuré le poste et pris en main l'administration du système en ligne de commande Linux.",
      "SAE Installation de services réseau : j'ai installé et configuré un serveur web Apache2 (fichiers de configuration httpd.conf, règles .htaccess), manipulé des machines virtuelles et mis en place la communication réseau entre la machine hôte et la VM.",
      "SAE Recueil de besoins : en équipe, nous avons mené une étude sur la vie étudiante à l'IUT de Villetaneuse — conception d'un questionnaire diffusé aux étudiants, entretiens individuels, synthèse des retours, personas et propositions d'amélioration chiffrées.",
      "SAE Gestion de projet : étude de cas de l'organisation d'un séjour de groupe, traitée de bout en bout — cadrage, exigences et objectifs SMART, cahier des charges, parties prenantes et matrice RACI, WBS, planning PERT et chemin critique, suivi qualité, budget et gestion des risques.",
      "SAE Économie : rédaction d'un rapport d'analyse sur le modèle économique de Facebook (Meta) et son empreinte numérique — recherche documentaire, argumentation structurée et bibliographie sourcée.",
    ],
    learned: [
      "Cette première année m'a donné des fondations techniques larges : l'algorithmique et les structures de données avec Python, la logique objet avec Java, la modélisation et l'interrogation de données avec SQL, ainsi que l'administration d'un système Linux et la mise en place de services réseau — autant de bases que je réinvestis dans tous mes projets.",
      "Installer Debian sur une machine vierge, configurer un serveur Apache2 et faire communiquer une machine hôte avec une VM m'ont fait comprendre ce qui se passe « sous » une application, du système d'exploitation jusqu'au réseau.",
      "Au-delà du code, j'ai appris à cadrer un projet avant de le développer : recueillir un besoin, rédiger un cahier des charges, planifier des tâches et anticiper des risques. Le recueil de besoins et la gestion de projet m'ont montré qu'un développement réussi commence par une analyse claire de l'attendu.",
    ],
    competences: [1, 3, 4, 5, 6],
  },
];

// Illustration SVG en ligne (line-art) par type de projet.
function ProjectIllu({ kind }) {
  const common = {
    className: "project-illu-svg",
    viewBox: "0 0 120 120",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2.2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };
  if (kind === "web") {
    // Écran / navigateur avec repère de localisation (plateforme de parkings)
    return (
      <svg {...common}>
        <rect x="16" y="22" width="88" height="62" rx="7" />
        <line x1="16" y1="36" x2="104" y2="36" />
        <circle cx="25" cy="29" r="1.6" />
        <circle cx="33" cy="29" r="1.6" />
        <circle cx="41" cy="29" r="1.6" />
        <path d="M60 46c-7.5 0-13 5.5-13 13 0 9 13 19 13 19s13-10 13-19c0-7.5-5.5-13-13-13z" />
        <circle cx="60" cy="59" r="4.5" />
        <line x1="48" y1="92" x2="72" y2="92" />
        <line x1="60" y1="84" x2="60" y2="92" />
      </svg>
    );
  }
  if (kind === "parcel") {
    // Colis 3D avec ruban (gestion / suivi de colis)
    return (
      <svg {...common}>
        <path d="M60 20 L98 41 L98 79 L60 100 L22 79 L22 41 Z" />
        <path d="M22 41 L60 62 L98 41" />
        <path d="M60 62 L60 100" />
        <path d="M60 20 L60 62" strokeDasharray="3 5" opacity="0.6" />
        <path d="M41 30.5 L79 51.5" />
      </svg>
    );
  }
  // kind === "code" : fenêtre de code avec chevrons (recueil multi-langages)
  return (
    <svg {...common}>
      <rect x="18" y="26" width="84" height="68" rx="7" />
      <line x1="18" y1="40" x2="102" y2="40" />
      <circle cx="27" cy="33" r="1.6" />
      <circle cx="35" cy="33" r="1.6" />
      <circle cx="43" cy="33" r="1.6" />
      <path d="M52 56 L42 67 L52 78" />
      <path d="M68 56 L78 67 L68 78" />
      <line x1="62" y1="52" x2="58" y2="82" opacity="0.6" />
    </svg>
  );
}

function ProjectCard({ p, delay }) {
  return (
    <Reveal delay={delay} className="project-card group">
      <a href={"#/projet/" + p.id} className="block h-full">
        <div className="project-image">
          <div className="project-stripes"></div>
          {p.illu
            ? <span className="project-illu"><ProjectIllu kind={p.illu} /></span>
            : <span className="project-image-label">{p.label}</span>}
          <span className="project-tag">{p.tag}</span>
        </div>
        <div className="p-6 sm:p-7 flex flex-col gap-4">
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-display text-2xl font-bold text-white group-hover:text-accent transition-colors">
              {p.title}
            </h3>
            <span className="project-arrow">
              <Icon name="arrow-up-right" className="w-5 h-5" />
            </span>
          </div>
          <p className="text-slate-400 leading-relaxed text-[15px] tx">{p.desc}</p>
          <div className="flex flex-wrap gap-2 mt-auto pt-2">
            {p.tech.map((t) => (
              <span key={t} className="tech-chip">{t}</span>
            ))}
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-400 group-hover:text-accent transition-colors">
            <span>Voir le détail du projet</span>
            <Icon name="arrow-up-right" className="w-4 h-4" />
          </div>
        </div>
      </a>
    </Reveal>
  );
}

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="wrap">
        <SectionTitle index="03" eyebrow="Projets" title="Ce que j'ai construit" />
        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.id} p={p} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Exposé pour la page de détail projet et le routing.
window.PROJECTS = PROJECTS;
window.COMP = COMP;

/* ----------------------------- FORMATION ------------------------------ */
const EDUCATION = [
  {
    year: "2025 — 2026",
    title: "BUT Informatique — 2ᵉ année",
    place: "IUT de Villetaneuse · Université Sorbonne Paris Nord",
    desc:
      "Approfondissement du développement web (PHP, JavaScript, SQL) avec la SAE collaborative « Gestion de colis », et stage en entreprise chez ParkHit sur une application React / Next.js en production.",
    current: true,
  },
  {
    year: "2024 — 2025",
    title: "BUT Informatique — 1ʳᵉ année",
    place: "IUT de Villetaneuse · Université Sorbonne Paris Nord",
    desc:
      "Fondations de l'informatique à travers les SAE : algorithmique en Python, programmation orientée objet en Java, bases de données SQL, administration de systèmes Linux et réseau, recueil de besoins et gestion de projet.",
    current: false,
  },
  {
    year: "2024",
    title: "Baccalauréat Général",
    place: "Spécialités Mathématiques & Physique-Chimie",
    desc:
      "Obtention du baccalauréat général avec un profil scientifique, base solide pour l'analyse et la logique appliquées à l'informatique.",
    current: false,
  },
];

function Education() {
  return (
    <section id="education" className="section">
      <div className="wrap">
        <SectionTitle index="04" eyebrow="Formation" title="Mon parcours" />
        <div className="timeline">
          {EDUCATION.map((e, i) => (
            <Reveal key={i} delay={i * 100} from="left" className="timeline-item">
              <span className={`timeline-node ${e.current ? "is-current" : ""}`}></span>
              <div className="timeline-card">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="font-display text-sm text-accent tracking-wider">{e.year}</span>
                  {e.current && <span className="badge-now">En cours</span>}
                </div>
                <h3 className="font-display text-2xl font-bold text-white flex items-center gap-2.5">
                  <Icon name="cap" className="w-6 h-6 text-accent/80" />
                  {e.title}
                </h3>
                <div className="text-slate-300 mt-1.5 font-medium">{e.place}</div>
                <p className="text-slate-400 mt-3 leading-relaxed text-[15px] tx">{e.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ CONTACT ------------------------------- */
function Contact() {
  const [form, setForm] = React.useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = React.useState({});
  const [sent, setSent] = React.useState(false);

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!form.name.trim()) errs.name = "Votre nom est requis.";
    if (!form.email.trim()) errs.email = "Votre email est requis.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Email invalide.";
    if (!form.message.trim()) errs.message = "Écrivez un petit message.";
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSent(true);
    }
  };

  const socials = [
    { name: "LinkedIn", handle: "boran-cav", icon: "linkedin", href: "https://www.linkedin.com/in/boran-cav-3971a6333/" },
    { name: "GitHub", handle: "BoranCAV", icon: "github", href: "https://github.com/BoranCAV" },
    { name: "Email", handle: "cav.boran@gmail.com", icon: "mail", href: "mailto:cav.boran@gmail.com" },
  ];

  return (
    <section id="contact" className="section">
      <div className="wrap">
        <SectionTitle index="05" eyebrow="Contact" title="Travaillons ensemble" />
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-start">
          {/* form */}
          <Reveal>
            {sent ? (
              <div className="form-success">
                <span className="success-check"><Icon name="check" className="w-7 h-7" /></span>
                <h3 className="font-display text-2xl font-bold text-white mt-4">Merci {form.name.split(" ")[0]} !</h3>
                <p className="text-slate-400 mt-2">
                  Votre message a bien été pris en compte. Je vous répondrai dès que possible.
                </p>
                <button className="btn-ghost mt-6" onClick={() => { setSent(false); setForm({ name: "", email: "", message: "" }); }}>
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={submit} noValidate className="flex flex-col gap-5">
                <div className="field">
                  <label htmlFor="name">Nom</label>
                  <input id="name" type="text" value={form.name} onChange={update("name")} placeholder="Votre nom" className={errors.name ? "has-error" : ""} />
                  {errors.name && <span className="err">{errors.name}</span>}
                </div>
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input id="email" type="email" value={form.email} onChange={update("email")} placeholder="vous@exemple.com" className={errors.email ? "has-error" : ""} />
                  {errors.email && <span className="err">{errors.email}</span>}
                </div>
                <div className="field">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" rows="5" value={form.message} onChange={update("message")} placeholder="Votre message..." className={errors.message ? "has-error" : ""}></textarea>
                  {errors.message && <span className="err">{errors.message}</span>}
                </div>
                <button type="submit" className="btn-primary self-start">
                  Envoyer le message
                  <Icon name="arrow-up-right" className="w-4 h-4" />
                </button>
              </form>
            )}
          </Reveal>

          {/* socials */}
          <Reveal delay={120} from="right">
            <div className="flex flex-col gap-4">
              <p className="text-slate-400 leading-relaxed mb-1">
                Une question, une opportunité de stage ou simplement envie d'échanger ? Retrouvez-moi ici :
              </p>
              {socials.map((s) => (
                <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" className="social-link group">
                  <span className="social-icon"><Icon name={s.icon} className="w-5 h-5" /></span>
                  <span className="flex-1">
                    <span className="block text-white font-medium">{s.name}</span>
                    <span className="block text-sm text-slate-400">{s.handle}</span>
                  </span>
                  <Icon name="arrow-up-right" className="w-4 h-4 text-slate-500 group-hover:text-accent transition-colors" />
                </a>
              ))}
              <a href="uploads/CV-Boran-CAV.pdf" download className="btn-primary self-start mt-2">
                <Icon name="download" className="w-4 h-4" />
                Télécharger mon CV
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { About, Skills, Projects, Education, Contact });
