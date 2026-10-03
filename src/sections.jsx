// Données et sections de la page d'accueil. Exporté vers window.

const { Icon } = window;

const LINKS = {
  github: "https://github.com/BoranCAV",
  linkedin: "https://www.linkedin.com/in/boran-cav-3971a6333/",
  mail: "mailto:cav.boran@gmail.com",
  cv: "uploads/CV-Boran-CAV.pdf",
  rapport: "uploads/RAPPORT DE STAGE - Boran CAV - Jupiter-1.pdf",
};

// Rubriques : route (inchangée) et id de section.
const SECTIONS = [
  { route: "#/a-propos", id: "a-propos", label: "À propos" },
  { route: "#/competences", id: "competences", label: "Compétences" },
  { route: "#/projets", id: "projets", label: "Projets" },
  { route: "#/formation", id: "formation", label: "Formation" },
  { route: "#/contact", id: "contact", label: "Contact" },
];

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
    title: "Stage chez ParkHit",
    tag: "Stage en entreprise",
    summary: "Développement web sur une plateforme de réservation de parkings déjà utilisée par de vrais clients.",
    highlight: "Des composants React livrés en production, du badge SVG au sélecteur de dates.",
    desc:
      "Stage de développement web sur parkhit.com, une plateforme de réservation de parkings déjà utilisée par de vrais clients. Travail sur une application moderne en React, Next.js et TypeScript, du composant d'interface à la base de données.",
    tech: ["React", "Next.js", "TypeScript", "TailwindCSS", "PostgreSQL", "Docker"],
    href: "https://parkhit.com",
    hrefLabel: "Voir parkhit.com",
    did: [
      "J'ai développé plusieurs composants d'interface en React : un badge « 100% Français » en SVG positionné sur la page d'accueil, et un sélecteur de période pour le tableau de bord administrateur, inspiré de Google Analytics, avec des raccourcis (7 derniers jours, 30 derniers jours) et une sélection libre de dates.",
      "J'ai retravaillé des parties d'interface déjà en production : lecture et compréhension d'une structure existante avant d'intervenir, correction de problèmes d'affichage et garantie d'un rendu correct sur mobile comme sur ordinateur. Par exemple, une bannière fixe qui recouvrait un bouton de réservation sur petit écran.",
      "J'ai installé et fait tourner l'environnement du projet avec Docker (PostgreSQL et Redis), et manipulé la base de données PostgreSQL à travers Prisma, la couche d'abstraction qui relie le code aux données.",
    ],
    learned: [
      "Le stage m'a appris à écrire du code propre, lisible et maintenable. Sur un produit en production, un défaut d'affichage a un impact direct sur l'utilisateur : on ne peut plus se permettre une structure approximative comme sur ses propres projets.",
      "J'ai découvert l'intérêt du typage avec TypeScript, qui s'est révélé être un véritable garde-fou, et la logique des composants React (le passage de propriétés, la gestion de l'état), qui s'est éclairée une fois confrontée à des cas réels.",
      "J'ai vu comment une application professionnelle s'organise : services isolés dans des conteneurs Docker, base de données manipulée via une couche d'abstraction, et travail en équipe avec Git et des pull requests.",
    ],
    competences: [1, 2, 3, 4, 6],
  },
  {
    id: "sae-colis",
    title: "Gestion de colis",
    tag: "SAE en équipe",
    summary: "Application web de suivi de colis : expéditions, statuts, utilisateurs et base de données relationnelle.",
    desc:
      "Application web de gestion et de suivi de colis développée en équipe : enregistrement des expéditions, mise à jour des statuts et gestion des utilisateurs. Une base de données relationnelle et une logique métier complète côté serveur.",
    tech: ["PHP", "JavaScript", "SQL", "HTML/CSS"],
    href: "https://github.com/Amir-tbl/SAECOLISFINAL",
    hrefLabel: "Voir sur GitHub",
    did: [
      "J'ai construit l'intégralité de l'interface du site : formulaires d'enregistrement des expéditions, tableaux de suivi des statuts et pages d'administration, structurés en HTML sémantique et mis en forme en CSS avec une cohérence visuelle entre les écrans.",
      "J'ai développé toute la logique serveur en PHP : traitement des formulaires, communication avec la base de données et gestion des différents statuts d'une expédition. C'est sur ce projet que j'ai compris le cycle complet d'une requête, du clic de l'utilisateur jusqu'à l'écriture en base.",
      "J'ai conçu et interrogé la base de données relationnelle (MySQL) qui stocke les expéditions, leurs statuts et les utilisateurs, en écrivant les requêtes d'insertion et de lecture nécessaires au suivi.",
    ],
    learned: [
      "J'ai appris à mener un projet de bout en bout : du cahier des charges jusqu'à la mise en production, en passant par la modélisation de la base de données et la répartition du travail dans l'équipe.",
      "Le travail collaboratif m'a appris à coordonner mon code avec celui des autres, à structurer une base de données partagée et à tenir des délais communs.",
      "Ce projet m'a donné les fondamentaux du développement côté serveur : comprendre comment l'interface, la logique métier et les données s'articulent dans une application complète.",
    ],
    competences: [1, 4, 5, 6],
  },
  {
    id: "recueil-but1",
    title: "Recueil de SAE, BUT 1",
    tag: "SAE de 1ʳᵉ année",
    summary: "Python, Java, SQL, Linux et réseau, gestion de projet : toutes les SAE de ma première année.",
    desc:
      "L'ensemble des SAE réalisées durant ma première année de BUT Informatique : algorithmique en Python, programmation orientée objet en Java, bases de données SQL, administration Linux et réseau, recueil de besoins, gestion de projet et analyse économique.",
    tech: ["Python", "Java", "SQL / PostgreSQL", "Linux / Debian", "Apache2", "UML"],
    href: "https://github.com/BoranCAV/SAE-BUT1-2024-2025",
    hrefLabel: "Voir sur GitHub",
    did: [
      "SAE Python, analyse de réseaux sociaux : en binôme, j'ai développé en Python un ensemble de fonctions pour modéliser un réseau d'amis sous forme de dictionnaire et y détecter des communautés (cree_reseau, sont_ami, est_commu, comu, comu_max), avec un tri des membres par popularité. Un travail centré sur l'algorithmique et les structures de données.",
      "SAE Java, jeu d'échecs en POO : j'ai conçu un jeu d'échecs complet en Java avec une architecture orientée objet (classe abstraite Piece dérivée en Pion, Tour, Cavalier, Fou, Dame, Roi), un échiquier, une boucle de partie, la validation des déplacements et la détection de l'échec, du mat et du pat, le tout modélisé en UML.",
      "SAE Base de données et SQL : j'ai modélisé et créé une base de données PostgreSQL sur la fréquence des catastrophes climatiques par pays, en comparant un script SQL écrit à la main avec un script généré par un AGL (DB Designer), puis en peuplant les tables à partir d'un fichier CSV.",
      "SAE Installation de poste : à partir d'une machine sans système d'exploitation, j'ai installé Debian de zéro, configuré le poste et pris en main l'administration du système en ligne de commande Linux.",
      "SAE Installation de services réseau : j'ai installé et configuré un serveur web Apache2 (fichiers de configuration httpd.conf, règles .htaccess), manipulé des machines virtuelles et mis en place la communication réseau entre la machine hôte et la VM.",
      "SAE Recueil de besoins : en équipe, nous avons mené une étude sur la vie étudiante à l'IUT de Villetaneuse. Conception d'un questionnaire diffusé aux étudiants, entretiens individuels, synthèse des retours, personas et propositions d'amélioration chiffrées.",
      "SAE Gestion de projet : étude de cas de l'organisation d'un séjour de groupe, traitée de bout en bout. Cadrage, exigences et objectifs SMART, cahier des charges, parties prenantes et matrice RACI, WBS, planning PERT et chemin critique, suivi qualité, budget et gestion des risques.",
      "SAE Économie : rédaction d'un rapport d'analyse sur le modèle économique de Facebook (Meta) et son empreinte numérique, avec recherche documentaire, argumentation structurée et bibliographie sourcée.",
    ],
    learned: [
      "Cette première année m'a donné des fondations techniques larges : l'algorithmique et les structures de données avec Python, la logique objet avec Java, la modélisation et l'interrogation de données avec SQL, ainsi que l'administration d'un système Linux et la mise en place de services réseau. Autant de bases que je réinvestis dans tous mes projets.",
      "Installer Debian sur une machine vierge, configurer un serveur Apache2 et faire communiquer une machine hôte avec une VM m'ont fait comprendre ce qui se passe « sous » une application, du système d'exploitation jusqu'au réseau.",
      "Au-delà du code, j'ai appris à cadrer un projet avant de le développer : recueillir un besoin, rédiger un cahier des charges, planifier des tâches et anticiper des risques. Le recueil de besoins et la gestion de projet m'ont montré qu'un développement réussi commence par une analyse claire de l'attendu.",
    ],
    competences: [1, 3, 4, 5, 6],
  },
];

const EDUCATION = [
  {
    year: "2026 - 2027", title: "BUT Informatique, 3ᵉ année",
    place: "IUT de Villetaneuse, Université Sorbonne Paris Nord",
    desc: "Troisième et dernière année du BUT Informatique.",
    current: true,
  },
  {
    year: "2025 - 2026", title: "BUT Informatique, 2ᵉ année",
    place: "IUT de Villetaneuse, Université Sorbonne Paris Nord",
    desc: "Approfondissement du développement web (PHP, JavaScript, SQL) avec la SAE collaborative « Gestion de colis », et stage chez ParkHit sur une application React / Next.js en production.",
  },
  {
    year: "2024 - 2025", title: "BUT Informatique, 1ʳᵉ année",
    place: "IUT de Villetaneuse, Université Sorbonne Paris Nord",
    desc: "Les fondations : algorithmique en Python, programmation orientée objet en Java, bases de données SQL, administration Linux et réseau, recueil de besoins et gestion de projet.",
  },
  {
    year: "2024", title: "Baccalauréat général",
    place: "Spécialités Mathématiques et Physique-Chimie",
    desc: "Un profil scientifique, base solide pour l'analyse et la logique appliquées à l'informatique.",
  },
];

/* ------------------------------- HERO -------------------------------- */
function Hero() {
  return (
    <section className="hero" id="accueil">
      <div className="wrap">
        <h1>
          <span className="hero-in" style={{ "--d": 0 }}>Boran</span>
          <span className="hero-in soft" style={{ "--d": 1 }}>CAV</span>
        </h1>
        <p className="hero-sub hero-in" style={{ "--d": 3 }}>
          Étudiant en <strong>3ᵉ année de BUT Informatique</strong>. Je construis des interfaces web en React, Next.js et TypeScript.
        </p>
        <div className="hero-cta hero-in" style={{ "--d": 4 }}>
          <a className="btn btn-primary" href="#/projets">Voir les projets</a>
          <a className="btn btn-glass glass" href={LINKS.cv} download>
            <Icon name="download-simple" /> Télécharger le CV
          </a>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ À PROPOS ----------------------------- */
function About() {
  const n = (window.SKILLS_DATA || []).length;
  const facts = [
    { v: "3ᵉ", l: "année de BUT Informatique" },
    { v: "14", l: "SAE réalisées" },
    { v: String(n), l: "technologies documentées" },
    { v: "1", l: "stage en production" },
  ];
  return (
    <section className="section" id="a-propos">
      <div className="wrap">
        <div className="about-grid">
          <p className="statement" data-reveal>
            J'aime le <b>code propre</b>, les interfaces <b>qui tiennent sur tous les écrans</b>,
            et les projets menés <b>du cahier des charges à la mise en production</b>.
          </p>
          <div className="facts">
            {facts.map((f, i) => (
              <div className="fact" key={f.l} data-reveal style={{ "--d": i }}>
                <b>{f.v}</b><span>{f.l}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="about-more" data-reveal>
          <p>
            Je suis étudiant en <strong>3ᵉ année de BUT Informatique</strong> à l'IUT de Villetaneuse
            (Université Sorbonne Paris Nord). J'accorde une attention particulière à la rédaction, à la maintenance
            et à l'organisation du code, et je m'adapte vite à de nouveaux outils.
          </p>
          <p>
            Pendant mon stage chez ParkHit, j'ai développé des composants en <strong>React, Next.js et TypeScript</strong>,
            corrigé des problèmes d'affichage en production et découvert une application professionnelle, du conteneur
            Docker jusqu'à la base de données.
          </p>
          <a className="text-link" href={LINKS.rapport} target="_blank" rel="noopener noreferrer">
            Lire le rapport de stage <Icon name="arrow-up-right" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- COMPÉTENCES ---------------------------- */
function Skills() {
  const data = window.SKILLS_DATA || [];
  const groups = [];
  data.forEach((s) => {
    let g = groups.find((x) => x.name === s.group);
    if (!g) { g = { name: s.group, items: [] }; groups.push(g); }
    g.items.push(s);
  });

  return (
    <section className="section" id="competences">
      <div className="wrap">
        <h2 className="h2" data-reveal>Compétences</h2>
        <p className="lead" data-reveal style={{ "--d": 1 }}>
          Chaque compétence ouvre ses preuves d'acquisition, tirées de mes SAE et de mon stage, et une analyse de ce que j'en ai retenu.
        </p>
        <div className="skills">
          {groups.map((g, gi) => (
            <div key={g.name} className="skill-panel glass" data-reveal style={{ "--d": gi }}>
              <h3>{g.name}</h3>
              {g.items.map((s) => (
                <a key={s.id} href={"#/competence/" + s.id} className="skill-row">
                  <span>
                    <span className="skill-name">{s.name}</span>
                    <span className="skill-ctx">{s.context.join(", ")}</span>
                  </span>
                  <span className="skill-lvl">
                    <span className="skill-bar" aria-hidden="true"><span style={{ width: s.level + "%" }}></span></span>
                    <span className="skill-pct">{s.level}%</span>
                    <span className="skill-go"><Icon name="arrow-up-right" /></span>
                  </span>
                </a>
              ))}
            </div>
          ))}
        </div>
        <p className="note">Niveaux auto-évalués.</p>
      </div>
    </section>
  );
}

/* ------------------------------ PROJETS ------------------------------- */
function Projects() {
  const [main, ...rest] = PROJECTS;
  return (
    <section className="section" id="projets">
      <div className="wrap">
        <h2 className="h2" data-reveal>Projets</h2>
        <div className="bento">
          <a href={"#/projet/" + main.id} className="project project-main glass" data-reveal>
            <span className="project-tag">{main.tag}</span>
            <h3>{main.title}</h3>
            <p>{main.summary}</p>
            <div className="chips">{main.tech.map((t) => <span key={t} className="chip">{t}</span>)}</div>
            <p className="project-big">{main.highlight}</p>
            <span className="project-go">Lire le projet <Icon name="arrow-up-right" /></span>
          </a>
          {rest.map((p, i) => (
            <a key={p.id} href={"#/projet/" + p.id} className="project glass" data-reveal style={{ "--d": i + 1 }}>
              <span className="project-tag">{p.tag}</span>
              <h3>{p.title}</h3>
              <p>{p.summary}</p>
              <div className="chips">{p.tech.slice(0, 4).map((t) => <span key={t} className="chip">{t}</span>)}</div>
              <span className="project-go">Lire le projet <Icon name="arrow-up-right" /></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- FORMATION ------------------------------ */
function Education() {
  return (
    <section className="section" id="formation">
      <div className="wrap">
        <h2 className="h2" data-reveal>Formation</h2>
        <div className="timeline">
          {EDUCATION.map((e, i) => (
            <div key={e.year} className="tl-item" data-reveal style={{ "--d": i }}>
              <div className="tl-year">
                {e.year}
                {e.current && <span className="tl-now">En cours</span>}
              </div>
              <div>
                <h3>{e.title}</h3>
                <p className="tl-place">{e.place}</p>
                <p className="tl-desc">{e.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ CONTACT ------------------------------- */
function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="wrap">
        <h2 className="h2" data-reveal>Contact</h2>
        <p className="lead" data-reveal style={{ "--d": 1 }}>Une question, une opportunité ou simplement envie d'échanger : écrivez-moi.</p>
        <a className="contact-mail" href={LINKS.mail} data-reveal style={{ "--d": 2 }}>
          cav.boran@gmail.com <Icon name="arrow-up-right" />
        </a>
        <div className="contact-links" data-reveal style={{ "--d": 3 }}>
          <a className="btn btn-glass glass" href={LINKS.linkedin} target="_blank" rel="noopener noreferrer"><Icon name="linkedin-logo" /> LinkedIn</a>
          <a className="btn btn-glass glass" href={LINKS.github} target="_blank" rel="noopener noreferrer"><Icon name="github-logo" /> GitHub</a>
          <a className="btn btn-glass glass" href={LINKS.cv} download><Icon name="download-simple" /> Télécharger le CV</a>
          <a className="btn btn-glass glass" href={LINKS.rapport} target="_blank" rel="noopener noreferrer"><Icon name="file-text" /> Rapport de stage</a>
        </div>
      </div>
    </section>
  );
}

window.PROJECTS = PROJECTS;
window.COMP = COMP;
Object.assign(window, { LINKS, SECTIONS, Hero, About, Skills, Projects, Education, Contact });
