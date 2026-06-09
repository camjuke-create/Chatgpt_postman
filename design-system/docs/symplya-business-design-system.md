---
title: SYMPLYA BUSINESS — Design System
tags: [design-system, symplya, business, css, tokens, couleurs, UI, B2B, gradient]
brand: SYMPLYA BUSINESS
type: design-system
statut: actif
dernière-mise-à-jour: 2025-06-09
fichiers:
  - design-system/symplya-business-tokens.css
  - design-system/symplya-business-components.css
  - design-system/symplya-business-demo.html
related:
  - "[[SYMPLYA — Design System]]"
  - "[[SYMPLYA CONTENT — Design System]]"
---

# SYMPLYA BUSINESS — Design System

> Solutions IA pour entreprises · Navy + Dégradé Cyan→Vert · B2B dynamique

Système de design de SYMPLYA BUSINESS. Utilisé pour les offres B2B, pages commerciales, tableaux de bord clients et tout support destiné aux décideurs d'entreprise (TPE/PME).

**Tagline officielle** : *"Des solutions simples pour utiliser l'IA concrètement."*

---

## Palette de couleurs

| Token CSS | Valeur | Usage |
|---|---|---|
| `--sb-navy` | `#1A2B52` | Textes, titres, header |
| `--sb-navy-dark` | `#0F1A36` | Hero, footer, accents sombres |
| `--sb-navy-medium` | `#243A6E` | Variante navy |
| `--sb-navy-light` | `#D4DAEA` | Fond badge navy |
| `--sb-cyan` | `#17BBCF` | Haut du dégradé, icônes réseau |
| `--sb-cyan-dark` | `#0D96A8` | Hover cyan |
| `--sb-cyan-light` | `#D2F3F7` | Fond badge cyan, alert info |
| `--sb-green` | `#2DC84A` | Bas du dégradé, checkmark, tagline |
| `--sb-green-dark` | `#1F9635` | Hover green |
| `--sb-green-light` | `#D5F5DC` | Fond badge green |
| `--sb-bg` | `#F4F7FA` | Fond général légèrement bleuté |
| `--sb-white` | `#FFFFFF` | Fond carte |

### Dégradés signature

| Token | Valeur | Usage |
|---|---|---|
| `--sb-gradient` | `linear-gradient(135deg, #17BBCF 0%, #2DC84A 100%)` | CTA, icônes, checkmarks — **signature principale** |
| `--sb-gradient-hover` | `linear-gradient(135deg, #0D96A8 0%, #1F9635 100%)` | Hover sur éléments gradient |
| `--sb-gradient-soft` | `linear-gradient(135deg, #D2F3F7 0%, #D5F5DC 100%)` | Fonds légers, icon-box-soft |
| `--sb-gradient-vertical` | `linear-gradient(180deg, #17BBCF 0%, #2DC84A 100%)` | Sidebar, barres verticales |
| `--sb-shadow-gradient` | `0 8px 32px 0 rgba(23, 187, 207, 0.20)` | Ombres cartes premium |

> **Règle clé** : le dégradé 135° cyan→vert est la signature exclusive de SYMPLYA BUSINESS. Ne jamais l'utiliser dans les autres marques.

---

## Typographie

- **Police** : Inter, Segoe UI, system-ui (sans-serif)
- **Taille base** : 16px / 1rem

| Token | Taille | Usage |
|---|---|---|
| `--sb-text-xs` | 12px | Labels, badges |
| `--sb-text-sm` | 14px | UI, secondaire |
| `--sb-text-base` | 16px | Corps |
| `--sb-text-lg` | 18px | Tagline verte |
| `--sb-text-xl` | 20px | H4 |
| `--sb-text-2xl` | 24px | H3 |
| `--sb-text-3xl` | 30px | H2 |
| `--sb-text-4xl` | 36px | H1, valeurs KPI |

### Texte dégradé

```html
<h1 class="sb-text-gradient">SYMPLYA BUSINESS</h1>
<!-- Applique le dégradé Cyan→Vert au texte via background-clip -->
```

---

## Composants spécifiques BUSINESS

### Logo / Brand

```html
<a class="sb-brand">
  <div class="sb-brand-icon">⚡</div>
  <div class="sb-brand-text">
    <span class="sb-brand-name">SYMPLYA</span>
    <span class="sb-brand-sub">BUSINESS</span>
    <!-- "BUSINESS" s'affiche en texte dégradé cyan→vert -->
  </div>
</a>
```

### CTA Gradient — bouton signature

```html
<button class="sb-btn sb-btn-gradient">⚡ Démarrer le projet</button>
<!-- Fond dégradé + shadow cyan + hover lift translateY(-1px) -->
```

### Bouton outline gradient (bordure dégradée)

```html
<button class="sb-btn sb-btn-outline-gradient">Voir la démo</button>
<!-- Bordure dégradée via ::before pseudo-élément -->
```

### Carte Featured (barre dégradé en haut)

```html
<div class="sb-card-featured">
  <div class="sb-card-body">
    <!-- Barre 4px gradient cyan→vert automatique en haut -->
    Contenu premium
  </div>
</div>
```

### Icon Box (style bulle logo)

```html
<!-- Standard 56px -->
<div class="sb-icon-box">⚡</div>

<!-- Small 40px -->
<div class="sb-icon-box sb-icon-box-sm">📊</div>

<!-- Fond soft (pastel) -->
<div class="sb-icon-box sb-icon-box-soft">🎯</div>
```

### KPI / Stat card

```html
<div class="sb-stat">
  <div class="sb-stat-value">+47%</div>
  <div class="sb-stat-label">Gain de productivité</div>
</div>
<!-- Valeur en texte dégradé cyan→vert automatiquement -->
```

### Checklist (bullets ✓ circulaires dégradés)

```html
<ul class="sb-checklist">
  <li>Déploiement en 48 heures</li>
  <li>Formation équipe incluse</li>
  <li>ROI mesuré chaque mois</li>
</ul>
<!-- Bullet = cercle dégradé avec ✓ blanc à l'intérieur -->
```

### Hero (fond navy + halo radial)

```html
<section class="sb-hero">
  <h1 class="sb-text-gradient">SYMPLYA BUSINESS</h1>
  <p class="sb-tagline">Des solutions simples pour utiliser l'IA concrètement.</p>
</section>
<!-- Halo radial décoratif cyan/vert en arrière-plan automatique -->
```

---

## Composants génériques

### Boutons (toutes variantes)

```html
<button class="sb-btn sb-btn-gradient">⚡ CTA principal</button>
<button class="sb-btn sb-btn-navy">Secondaire</button>
<button class="sb-btn sb-btn-outline">En savoir plus</button>
<button class="sb-btn sb-btn-outline-gradient">Voir la démo</button>
<button class="sb-btn sb-btn-ghost">Connexion</button>
<!-- Tailles : sb-btn-sm / sb-btn-lg -->
```

### Badges

```html
<span class="sb-badge sb-badge-gradient">⭐ Premium</span>
<span class="sb-badge sb-badge-cyan">IA Active</span>
<span class="sb-badge sb-badge-green">Déployé</span>
<span class="sb-badge sb-badge-navy">BUSINESS</span>
<span class="sb-badge sb-badge-warning">En cours</span>
<span class="sb-badge sb-badge-danger">Attention</span>
```

### Alertes

```html
<div class="sb-alert sb-alert-info">Info</div>
<div class="sb-alert sb-alert-success">Succès</div>
<div class="sb-alert sb-alert-warning">Avertissement</div>
<div class="sb-alert sb-alert-danger">Erreur</div>
```

### Barre de progression (fill dégradé)

```html
<div class="sb-progress">
  <div class="sb-progress-bar" style="width: 78%;"></div>
</div>
```

---

## Import CSS

```html
<link rel="stylesheet" href="symplya-business-tokens.css">
<link rel="stylesheet" href="symplya-business-components.css">
```

---

## Règles d'usage

- **SYMPLYA BUSINESS** = pages commerciales B2B, offres entreprise, onboarding clients → dégradé cyan→vert
- Le dégradé est la signature visuelle — apparaît sur les CTA, icônes, checkmarks et valeurs KPI
- Le navy `#1A2B52` ancre tous les textes et le header
- Le vert `#2DC84A` est utilisé pour la tagline et les statuts positifs
- Préfixe CSS : `sb-` (Symplya Business)

---

## Différenciation des 3 marques

| Critère | SYMPLYA | SYMPLYA CONTENT | SYMPLYA BUSINESS |
|---|---|---|---|
| Couleur signature | Bleu #2C88D9 | Navy #1A2B52 | Dégradé Cyan #17BBCF → Vert #2DC84A |
| Préfixe CSS | aucun / `.btn-` | `.sc-` | `.sb-` |
| Style | SaaS moderne | Minimaliste | B2B dynamique |
| Audience | Utilisateurs | Apprenants | Décideurs TPE/PME |
| Format phare | Interface web | Slides Canva | Cards + KPIs + gradient |
| CTA signature | `.btn-primary` | `.sc-btn-teal` | `.sb-btn-gradient` ⚡ |

---

## Fichiers du projet

- `design-system/symplya-business-tokens.css` — variables CSS
- `design-system/symplya-business-components.css` — composants
- `design-system/symplya-business-demo.html` — démo interactive
