# Portfolio — Développeur Fullstack JavaScript

Portfolio Next.js 16 moderne avec SEO complet, design dark ultra-stylisé et animations fluides.

## Stack
- **Framework**: Next.js 16 (App Router)
- **Language**: JavaScript
- **Styling**: Tailwind CSS + CSS Variables
- **Animations**: CSS natif + Canvas API
- **Fonts**: Syne (display) + DM Mono (body)

## Fonctionnalités SEO
- Metadata complète (title, description, OG, Twitter Card)
- JSON-LD Schema.org (Person)
- sitemap.xml généré automatiquement
- robots.txt optimisé
- Headers de sécurité (X-Frame-Options, CSP...)
- Canonical URL

## Structure
```
app/
  layout.jsx       ← Metadata SEO + Schema.org
  page.jsx         ← Page principale
  globals.css      ← Design tokens & animations
  sitemap.js       ← Sitemap automatique
  robots.js        ← robots.txt

components/
  Navbar.jsx       ← Navigation sticky
  Hero.jsx         ← Section hero avec canvas particles
  About.jsx        ← Présentation + code block animé
  Skills.jsx       ← Barres de compétences animées
  Projects.jsx     ← Grille de projets (6 projets)
  Experience.jsx   ← Timeline expérience + formation
  Contact.jsx      ← Formulaire de contact
  Footer.jsx       ← Footer
```

## Démarrage
```bash
npm install
npm run dev
```

## Personnalisation
Modifiez les données dans chaque composant et remplacez :
- `Stephane Roylex` par votre nom
- `stephaneroylex.dev` par votre domaine
- Les expériences, projets et compétences

## Déploiement Vercel
```bash
vercel deploy
```
