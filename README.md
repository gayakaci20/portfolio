# Portfolio App

Un site portfolio moderne construit avec les dernières technologies web pour offrir une expérience utilisateur fluide et performante.

## 🚀 Technologies Utilisées

### Frontend Framework
- **Next.js 15.3.3** - Framework React avec App Router pour le rendu côté serveur et la génération statique
- **React 19** - Bibliothèque JavaScript pour construire des interfaces utilisateur
- **TypeScript 5** - Superset typé de JavaScript pour un développement plus robuste

### Styling & UI
- **Tailwind CSS 4** - Framework CSS utilitaire pour un design rapide et cohérent
- **shadcn/ui** - Collection de composants réutilisables construits avec Radix UI et Tailwind CSS
- **Radix UI** - Composants UI primitifs accessibles et non stylés
  - Avatar, Dialog, Icons, Navigation Menu, Progress, Separator, Slot, Tabs
- **Lucide React** - Icônes SVG élégantes et légères
- **Class Variance Authority (CVA)** - Utilitaire pour créer des variantes de composants
- **Tailwind Merge** - Fusion intelligente des classes Tailwind CSS

### Animation & 3D
- **Framer Motion 12** - Bibliothèque d'animations pour React
- **Three.js 0.167** - Bibliothèque JavaScript pour la 3D dans le navigateur
- **React Three Fiber 8** - Renderer React pour Three.js
- **React Three Postprocessing** - Effets de post-traitement pour les scènes 3D

### Thèmes & UX
- **next-themes** - Gestion des thèmes sombre/clair avec Next.js
- **tw-animate-css** - Animations CSS prêtes à l'emploi pour Tailwind

### Outils de Développement
- **ESLint 9** - Linter JavaScript/TypeScript pour maintenir la qualité du code
- **PostCSS** - Outil de transformation CSS
- **Turbopack** - Bundler ultra-rapide (mode développement)

## 🛠️ Installation

```bash
# Cloner le repository
git clone [votre-repo-url]
cd portfolio-app

# Installer les dépendances
npm install
# ou
pnpm install
```

## 🏃‍♂️ Démarrage

```bash
# Lancer le serveur de développement
npm run dev
# ou
pnpm dev

# Construire pour la production
npm run build
# ou
pnpm build

# Démarrer en production
npm start
# ou
pnpm start
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur pour voir le résultat.

## 📁 Structure du Projet

```
portfolio-app/
├── src/
│   ├── app/              # Pages et layouts (App Router)
│   ├── components/       # Composants réutilisables
│   │   ├── ui/          # Composants UI de base (shadcn/ui)
│   │   └── sections/    # Sections du portfolio
│   └── lib/             # Utilitaires et configurations
├── public/              # Assets statiques
└── ...fichiers de config
```

## 🎨 Fonctionnalités

- ✅ Design responsive et moderne
- ✅ Mode sombre/clair
- ✅ Animations fluides avec Framer Motion
- ✅ Éléments 3D interactifs avec Three.js
- ✅ Composants accessibles avec Radix UI
- ✅ Performance optimisée avec Next.js 15
- ✅ TypeScript pour la sécurité des types
- ✅ Architecture modulaire et maintenable

## 🚀 Déploiement

Ce projet est optimisé pour le déploiement sur Vercel, mais peut être déployé sur n'importe quelle plateforme supportant Next.js.

Consultez la [documentation de déploiement Next.js](https://nextjs.org/docs/app/building-your-application/deploying) pour plus de détails.
