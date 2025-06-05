# Guide de déploiement - Portfolio Gaya KACI

## 🚀 Déploiement sur Vercel (Recommandé)

### Méthode 1: Via GitHub (Automatique)

1. **Pousser le code sur GitHub**
```bash
git init
git add .
git commit -m "Initial commit: Portfolio Gaya KACI"
git branch -M main
git remote add origin https://github.com/gayakaci20/portfolio.git
git push -u origin main
```

2. **Connecter à Vercel**
- Aller sur [vercel.com](https://vercel.com)
- Se connecter avec GitHub
- Cliquer sur "New Project"
- Sélectionner le repository `portfolio`
- Vercel détectera automatiquement Next.js
- Cliquer sur "Deploy"

3. **Configuration automatique**
- Framework: Next.js (détecté automatiquement)
- Build Command: `npm run build`
- Output Directory: `.next`
- Install Command: `npm install`

### Méthode 2: Via CLI Vercel

1. **Installer Vercel CLI**
```bash
npm i -g vercel
```

2. **Se connecter à Vercel**
```bash
vercel login
```

3. **Déployer**
```bash
vercel --prod
```

## 🌐 Autres plateformes de déploiement

### Netlify

1. **Build settings**
- Build command: `npm run build`
- Publish directory: `.next`

2. **Déployer**
- Connecter le repository GitHub
- Configurer les paramètres de build
- Déployer

### GitHub Pages (avec GitHub Actions)

Créer `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm install
      
    - name: Build
      run: npm run build
      
    - name: Export
      run: npm run export
      
    - name: Deploy
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./out
```

## 🔧 Variables d'environnement

Aucune variable d'environnement n'est requise pour ce portfolio statique.

## 📊 Optimisations de performance

Le portfolio est déjà optimisé avec :
- ✅ Images optimisées avec Next.js Image
- ✅ Code splitting automatique
- ✅ Lazy loading des composants
- ✅ Compression automatique
- ✅ Cache optimisé
- ✅ SEO meta tags

## 🔒 Sécurité

Headers de sécurité configurés dans `vercel.json`:
- X-Content-Type-Options: nosniff
- X-Frame-Options: DENY
- X-XSS-Protection: 1; mode=block
- Referrer-Policy: strict-origin-when-cross-origin

## 📈 Analytics (Optionnel)

Pour ajouter Google Analytics:

1. **Créer un compte Google Analytics**
2. **Ajouter le tracking ID dans `layout.tsx`**
3. **Configurer les événements de tracking**

## 🎯 Domaine personnalisé

### Sur Vercel:
1. Aller dans Project Settings
2. Cliquer sur "Domains"
3. Ajouter votre domaine personnalisé
4. Configurer les DNS selon les instructions

### Suggestions de domaines:
- `gayakaci.dev`
- `gaya-kaci.com`
- `gayakaci-portfolio.com`

## 🔄 Mises à jour automatiques

Avec le déploiement GitHub + Vercel:
- Chaque push sur `main` déclenche un nouveau déploiement
- Preview deployments pour les pull requests
- Rollback automatique en cas d'erreur

## 📞 Support

En cas de problème:
1. Vérifier les logs de build sur Vercel
2. Tester localement avec `npm run build`
3. Vérifier la configuration dans `vercel.json`

---

**Portfolio déployé avec succès ! 🎉**

URL de production: `https://gayakaci-portfolio.vercel.app` 