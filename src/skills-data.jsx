// Données des compétences : niveau, contexte, preuves d'acquisition et analyse réflexive.
// Exporté vers window pour les autres scripts babel.

const SKILLS_DATA = [
  /* ----------------------- LANGAGES & DONNÉES ----------------------- */
  {
    id: "html-css",
    name: "HTML / CSS",
    group: "Langages & bases de données",
    level: 90,
    blurb: "Structuration et mise en forme d'interfaces web",
    context: ["SAE Gestion de colis", "Stage ParkHit"],
    proofs: [
      {
        tag: "SAE · 2ᵉ année",
        title: "Interface du site de gestion de colis",
        text:
          "Dans le cadre de la SAE de deuxième année, j'ai construit l'intégralité de l'interface du site de gestion de colis : formulaires d'enregistrement des expéditions, tableaux de suivi des statuts et pages d'administration. Chaque écran a été structuré en HTML sémantique puis mis en forme en CSS, avec une attention portée à la cohérence visuelle entre les différentes pages.",
        link: { label: "Voir le dépôt", href: "https://github.com/Amir-tbl/SAECOLISFINAL" },
      },
      {
        tag: "Stage · ParkHit",
        title: "Intégration responsive en production",
        text:
          "Pendant mon stage, j'ai retravaillé des parties d'interface d'une plateforme déjà utilisée par de vrais clients. J'ai dû lire et comprendre une structure HTML existante avant d'y intervenir, corriger des problèmes d'affichage et garantir un rendu correct sur mobile comme sur ordinateur — par exemple une bannière fixe qui recouvrait un bouton de réservation sur petit écran.",
      },
    ],
    reflection: [
      "Le HTML et le CSS sont les premières briques que j'ai manipulées, et celles que je maîtrise le mieux aujourd'hui. La SAE m'a appris à les écrire ; le stage m'a appris à les écrire proprement. Tant qu'on travaille sur ses propres projets, on peut se permettre une structure approximative. Sur un produit en production, ce n'est plus possible : un défaut d'affichage a un impact direct sur l'utilisateur.",
      "C'est là que j'ai compris l'importance d'un balisage clair et d'une mise en forme pensée pour toutes les tailles d'écran. Cette compétence est désormais un réflexe, et elle me sert de fondation pour tout le reste de mon travail front-end.",
    ],
  },
  {
    id: "javascript",
    name: "JavaScript",
    group: "Langages & bases de données",
    level: 70,
    blurb: "Logique côté client et interactivité",
    context: ["SAE", "Socle pour React"],
    proofs: [
      {
        tag: "Projets",
        title: "Interactions et dynamisme des interfaces",
        text:
          "J'ai utilisé JavaScript pour rendre mes interfaces dynamiques : validation de formulaires, affichage conditionnel d'éléments et manipulation du DOM. C'est ce socle qui m'a permis, ensuite, d'aborder React sans repartir de zéro — la logique des événements, des fonctions et de l'état y est directement réinvestie.",
      },
    ],
    reflection: [
      "JavaScript a été ma porte d'entrée vers le développement front-end moderne. En arrivant chez ParkHit, j'ai réalisé que tout l'écosystème React et Next.js repose sur une bonne compréhension du langage : les fonctions fléchées, la déstructuration, la gestion asynchrone reviennent en permanence.",
      "C'est une compétence que je consolide encore. Je suis à l'aise sur les bases, mais le stage m'a montré qu'il restait des concepts plus avancés à approfondir pour gagner en autonomie.",
    ],
  },
  {
    id: "typescript",
    name: "TypeScript",
    group: "Langages & bases de données",
    level: 60,
    blurb: "JavaScript typé, découvert en entreprise",
    context: ["Stage ParkHit"],
    proofs: [
      {
        tag: "Stage · ParkHit",
        title: "Typage d'un projet en production",
        text:
          "TypeScript ne fait pas partie du programme du BUT : je l'ai découvert directement sur le projet de ParkHit, entièrement typé. Le typage m'a d'abord semblé contraignant, puis s'est révélé être un véritable garde-fou. À plusieurs reprises, les erreurs remontées par le compilateur m'ont évité d'envoyer un mauvais type à un composant ou d'accéder à une propriété qui n'existait pas.",
      },
    ],
    reflection: [
      "TypeScript a changé ma façon de voir le code. En JavaScript pur, on découvre les erreurs à l'exécution, souvent trop tard. Avec le typage, beaucoup de problèmes sont signalés avant même de lancer l'application.",
      "Je débute encore sur cette technologie, mais le stage m'a convaincu de son intérêt sur un projet de taille réelle. C'est une compétence que je compte continuer à développer, car elle est aujourd'hui incontournable en entreprise.",
    ],
  },
  {
    id: "php",
    name: "PHP",
    group: "Langages & bases de données",
    level: 75,
    blurb: "Logique serveur et accès aux données",
    context: ["SAE Gestion de colis"],
    proofs: [
      {
        tag: "SAE · 2ᵉ année",
        title: "Back-end du site de gestion de colis",
        text:
          "PHP a été le langage central de ma SAE. Je l'ai utilisé pour toute la logique serveur du site de gestion de colis : traitement des formulaires, communication avec la base de données et gestion des différents statuts d'une expédition. C'est sur ce projet que j'ai compris le cycle complet d'une requête, du clic de l'utilisateur jusqu'à l'écriture en base.",
        link: { label: "Voir le dépôt", href: "https://github.com/Amir-tbl/SAECOLISFINAL" },
      },
    ],
    reflection: [
      "PHP m'a fait toucher du doigt la logique back-end pour la première fois. Travailler en équipe sur ce projet m'a aussi appris à structurer mon code pour qu'il reste lisible par les autres membres du groupe.",
      "Même si je me suis depuis orienté vers des technologies plus récentes pendant mon stage, PHP reste une base solide qui m'a fait comprendre les fondamentaux du développement côté serveur.",
    ],
  },
  {
    id: "sql",
    name: "SQL / PostgreSQL",
    group: "Langages & bases de données",
    level: 75,
    blurb: "Modélisation et interrogation de données",
    context: ["SAE (MySQL)", "Stage ParkHit (PostgreSQL)"],
    proofs: [
      {
        tag: "SAE · 2ᵉ année",
        title: "Base de données du suivi de colis",
        text:
          "Pour la SAE, j'ai conçu et interrogé la base de données relationnelle qui stocke les expéditions, leurs statuts et les utilisateurs. J'ai écrit les requêtes d'insertion et de lecture nécessaires au bon fonctionnement du suivi de colis.",
      },
      {
        tag: "Stage · ParkHit",
        title: "PostgreSQL en environnement professionnel",
        text:
          "Chez ParkHit, j'ai découvert PostgreSQL, lancé dans un conteneur Docker, qui stocke toutes les données de la plateforme : utilisateurs, réservations et parkings. J'ai aussi été exposé à Prisma, l'outil qui fait le lien entre le code et la base de données, ce qui m'a permis de voir une approche plus moderne que les requêtes écrites à la main.",
      },
    ],
    reflection: [
      "La base de données est le cœur de toute application. La SAE m'a appris à la modéliser et à l'interroger ; le stage m'a montré comment elle s'intègre dans une architecture professionnelle, isolée dans un conteneur et manipulée à travers une couche d'abstraction.",
      "Passer de MySQL en cours à PostgreSQL en entreprise m'a fait comprendre que les concepts relationnels restent les mêmes : ce sont les outils autour qui changent.",
    ],
  },
  {
    id: "python",
    name: "Python",
    group: "Langages & bases de données",
    level: 80,
    blurb: "Algorithmique et programmation générale",
    context: ["Cursus BUT Informatique"],
    proofs: [
      {
        tag: "BUT · Cours & TP",
        title: "Algorithmique et manipulation de données",
        text:
          "Python est le langage avec lequel j'ai le plus travaillé dans le cadre du BUT. Je l'ai utilisé pour des travaux pratiques d'algorithmique, de structures de données et de traitement de l'information. C'est avec lui que j'ai consolidé ma logique de programmation : boucles, conditions, fonctions et structures de données.",
      },
    ],
    reflection: [
      "Python est le langage qui m'a le plus aidé à raisonner comme un développeur. Sa syntaxe claire permet de se concentrer sur la logique plutôt que sur la forme, ce qui en fait un excellent outil d'apprentissage.",
      "C'est une compétence académique solide que je souhaite désormais mettre à l'épreuve sur un projet concret, comme j'ai pu le faire pour le développement web pendant mon stage.",
    ],
  },
  {
    id: "java",
    name: "Java",
    group: "Langages & bases de données",
    level: 70,
    blurb: "Programmation orientée objet",
    context: ["SAE Jeu d'échecs"],
    proofs: [
      {
        tag: "SAE · BUT Informatique",
        title: "Jeu d'échecs en Java orienté objet",
        text:
          "Dans le cadre d'une SAE, j'ai développé un jeu d'échecs en Java en appliquant pleinement la programmation orientée objet. J'ai conçu un modèle complet — un échiquier de 64 cases, des joueurs et une hiérarchie de pièces — en m'appuyant sur une classe abstraite Piece dont chaque pièce (Roi, Reine, Tour, Fou, Cavalier, Pion) hérite pour définir sa propre logique de déplacement. C'est un projet où l'héritage et le polymorphisme ne sont pas des notions théoriques, mais la condition même pour que le jeu fonctionne.",
      },
      {
        tag: "SAE · BUT Informatique",
        title: "Boucle de jeu et validation des règles",
        text:
          "Au-delà de la modélisation, j'ai implémenté la logique de la partie : la boucle de jeu, la saisie et la validation des coups selon le type de pièce, la mise à jour de l'échiquier après chaque déplacement et la détection des situations de fin de partie. Ce projet m'a confronté à la nécessité de penser une architecture cohérente avant d'écrire la moindre ligne de code.",
      },
    ],
    reflection: [
      "La SAE du jeu d'échecs est le projet qui m'a fait réellement comprendre la programmation orientée objet. Tant qu'on enchaîne des exercices, l'héritage et le polymorphisme restent abstraits ; ici, ils étaient indispensables — sans une classe Piece bien pensée, impossible de gérer six types de pièces aux déplacements différents sans dupliquer le code.",
      "Cette logique objet m'a clairement resservi pendant mon stage, lorsqu'il a fallu raisonner en composants avec React : l'idée d'encapsuler un comportement dans une unité autonome et réutilisable est très proche de ce que j'avais construit en Java.",
    ],
  },

  /* ----------------------- FRAMEWORKS, OUTILS & MÉTHODES ----------------------- */
  {
    id: "react",
    name: "React",
    group: "Frameworks, outils & méthodes",
    level: 70,
    blurb: "Bibliothèque de composants d'interface",
    context: ["Stage ParkHit"],
    proofs: [
      {
        tag: "Stage · ParkHit",
        title: "Développement de composants en production",
        text:
          "J'ai découvert React directement sur le projet de ParkHit. J'y ai développé plusieurs composants : un badge « 100% Français » en SVG positionné sur la page d'accueil, et un sélecteur de période pour le tableau de bord administrateur, inspiré de Google Analytics, avec des raccourcis (7 derniers jours, 30 derniers jours) et une sélection libre de dates. J'ai manipulé des hooks comme useState et usePathname dans des cas concrets.",
      },
      {
        tag: "Stage · ParkHit",
        title: "Affichage conditionnel et correction de bugs",
        text:
          "J'ai corrigé plusieurs bugs liés au rendu de composants. Un badge « Vérifié » apparaissait de façon aléatoire à cause d'un Math.random() laissé dans le JSX : je l'ai supprimé pour que le badge s'affiche systématiquement, comme attendu. J'ai aussi masqué des sections vides (« Services », « Suppléments ») grâce à un rendu conditionnel, lorsqu'aucune donnée n'était disponible.",
      },
    ],
    reflection: [
      "React a été ma vraie découverte du stage. Comprendre la logique des composants, le passage de propriétés et la gestion de l'état a demandé un temps d'adaptation, mais ces notions se sont éclairées une fois confrontées à des cas réels plutôt qu'à des exercices.",
      "Ce qui m'a le plus marqué, c'est de réaliser à quel point l'affichage dépend de l'état : un simple Math.random() mal placé suffit à rendre une interface imprévisible. Cette compétence est aujourd'hui celle que j'ai le plus envie d'approfondir.",
    ],
  },
  {
    id: "nextjs",
    name: "Next.js",
    group: "Frameworks, outils & méthodes",
    level: 65,
    blurb: "Framework React full-stack",
    context: ["Stage ParkHit"],
    proofs: [
      {
        tag: "Stage · ParkHit",
        title: "Création du site parkhit.com",
        text:
          "On m'a confié le développement de parkhit.com, la version internationale de la plateforme. Je me suis appuyé sur la page d'accueil de parkhit.fr comme référence pour conserver la cohérence visuelle — mêmes couleurs, même typographie, même organisation responsive — afin que les deux sites fassent partie d'un même écosystème.",
      },
      {
        tag: "Stage · ParkHit",
        title: "Routage, rendu et configuration",
        text:
          "J'ai utilisé le hook usePathname de Next.js pour masquer une bannière d'annulation sur la page de paiement, où elle bloquait le bouton de réservation. J'ai aussi modifié le fichier next.config.ts pour autoriser l'affichage de fichiers SVG en toute sécurité, en désactivant l'exécution de scripts via une politique de sécurité de contenu.",
      },
    ],
    reflection: [
      "Next.js m'a fait découvrir des notions que je n'avais jamais rencontrées : le routage par fichiers, la distinction entre composants serveur et composants client, et toute la configuration d'un projet professionnel. Le niveau d'abstraction était nettement supérieur à ce que je connaissais.",
      "La courbe d'apprentissage a été raide les premières semaines, mais c'est précisément ce qui a rendu l'expérience formatrice. Travailler sur la version internationale d'un produit réel m'a donné une vision concrète de ce qu'est un framework moderne.",
    ],
  },
  {
    id: "tailwind",
    name: "TailwindCSS",
    group: "Frameworks, outils & méthodes",
    level: 80,
    blurb: "Framework CSS utilitaire",
    context: ["Stage ParkHit"],
    proofs: [
      {
        tag: "Stage · ParkHit",
        title: "Mise en forme utilitaire en production",
        text:
          "Tout le front-end de ParkHit était construit avec TailwindCSS. Je l'ai utilisé au quotidien pour styliser mes composants directement dans le balisage, gérer le responsive et appliquer des états dynamiques — par exemple griser une option de service non sélectionnée en jouant sur l'opacité et la couleur de bordure selon l'état du composant.",
      },
    ],
    reflection: [
      "Venant du CSS classique, l'approche utilitaire de Tailwind m'a d'abord surpris : tout le style se trouve dans les classes, au plus près de l'élément. Après quelques jours, j'ai trouvé cette méthode très efficace — on construit une interface beaucoup plus vite et on garde une cohérence visuelle sur tout le projet.",
      "C'est une compétence que j'ai prise en main rapidement, sans doute parce qu'elle s'appuie sur mes bases en CSS. Elle fait partie des outils que je réutiliserais sans hésiter.",
    ],
  },
  {
    id: "docker",
    name: "Docker",
    group: "Frameworks, outils & méthodes",
    level: 50,
    blurb: "Conteneurisation des services",
    context: ["Stage ParkHit"],
    proofs: [
      {
        tag: "Stage · ParkHit",
        title: "Lancement des services en conteneurs",
        text:
          "J'ai découvert Docker pendant le stage, lors de l'installation du projet. Je m'en suis servi pour lancer manuellement PostgreSQL et Redis depuis Docker Desktop, deux services indispensables au démarrage de l'application — l'un pour la base de données, l'autre pour le cache et les sessions.",
      },
    ],
    reflection: [
      "Docker a répondu à une question que je ne m'étais jamais posée : comment garantir qu'un projet fonctionne de la même façon sur toutes les machines ? En isolant chaque service dans un conteneur, on s'affranchit des différences de configuration entre ordinateurs.",
      "Je reste débutant sur cet outil : je sais le faire tourner et j'en comprends le principe, mais je n'ai pas encore écrit de configuration moi-même. C'est un axe de progression clairement identifié pour la suite.",
    ],
  },
  {
    id: "git",
    name: "Git & GitHub",
    group: "Frameworks, outils & méthodes",
    level: 80,
    blurb: "Gestion de versions et travail collaboratif",
    context: ["Stage ParkHit", "SAE collaborative"],
    proofs: [
      {
        tag: "Stage · ParkHit",
        title: "Workflow professionnel par branches",
        text:
          "Chez ParkHit, je suis passé d'un usage basique de Git à un véritable workflow professionnel. On ne travaille jamais directement sur la branche principale : chaque bug ou fonctionnalité fait l'objet d'une branche dédiée, nommée selon une convention claire (fix- pour les correctifs, feature- pour les nouveautés), avec des messages de commit structurés.",
      },
      {
        tag: "Stage · ParkHit",
        title: "Pull Requests et revue de code",
        text:
          "Une fois une tâche terminée, j'ouvrais une Pull Request sur GitHub pour faire relire mon travail avant son intégration. Mon encadrant relisait mes modifications et me faisait des retours, souvent à l'oral. Cette revue de code m'a appris à lire mon propre code plus attentivement et à documenter mes intentions.",
      },
    ],
    reflection: [
      "Avant le stage, Git se résumait pour moi à enregistrer et envoyer du code. J'ai découvert qu'il s'agit surtout d'un outil de collaboration : les branches, les Pull Requests et la revue de code permettent à plusieurs développeurs de travailler sur le même projet sans se gêner.",
      "Ce sont des retours de mon encadrant, directement sur mon écran, qui m'ont le plus fait progresser. J'ai compris qu'un bon message de commit et un code relisible ne sont pas des détails, mais le fondement du travail en équipe.",
    ],
  },
];

window.SKILLS_DATA = SKILLS_DATA;
