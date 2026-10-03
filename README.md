# Portfolio — Boran CAV

Portfolio personnel d'étudiant en BUT Informatique : parcours, compétences, projets, formation et contact.

**🔗 En ligne : [borancav.github.io/portfolio](https://borancav.github.io/portfolio/)**

## Contenu

Le site est découpé en rubriques, chacune avec sa propre vue (routage par hash) :

| Rubrique | Ce qu'on y trouve |
|---|---|
| Accueil | Présentation rapide |
| À propos | Parcours et stage chez ParkHit |
| Compétences | Chaque compétence illustrée par un projet concret (SAE, stage) |
| Projets | Projets réalisés pendant le BUT |
| Formation | Cursus |
| Contact | LinkedIn, GitHub, e-mail |

Le CV et le rapport de stage sont disponibles dans [`uploads/`](uploads/).

## Stack

- **React 18** chargé via CDN, JSX compilé dans le navigateur par **Babel standalone**
- **Tailwind CSS** (CDN) + CSS maison
- Police **Hanken Grotesk** (Google Fonts)
- Hébergé sur **GitHub Pages**, sans étape de build

## Structure

```
index.html          Point d'entrée : styles, config Tailwind, chargement des scripts
src/
  lib.jsx           Composants utilitaires (animations, icônes, fond animé)
  skills-data.jsx   Données des compétences
  sections.jsx      Sections : À propos, Compétences, Projets, Formation, Contact
  proof.jsx         Détail des preuves par compétence
  app.jsx           Navigation, Hero et composant racine
uploads/            CV et rapport de stage (PDF)
```

## Lancer en local

Les fichiers JSX sont chargés dynamiquement, donc il faut un petit serveur local (ouvrir `index.html` directement ne suffit pas) :

```bash
python -m http.server 8000
```

Puis ouvrir <http://localhost:8000>.

## Contact

- LinkedIn : [boran-cav](https://www.linkedin.com/in/boran-cav-3971a6333/)
- GitHub : [@BoranCAV](https://github.com/BoranCAV)
- E-mail : cav.boran@gmail.com
