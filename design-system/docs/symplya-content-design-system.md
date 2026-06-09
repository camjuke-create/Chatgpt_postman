---
title: SYMPLYA CONTENT — Design System
tags: [design-system, symplya, content, css, tokens, couleurs, UI, pédagogie]
brand: SYMPLYA CONTENT
type: design-system
statut: actif
dernière-mise-à-jour: 2025-06-09
fichiers:
  - design-system/symplya-content-tokens.css
  - design-system/symplya-content-components.css
  - design-system/symplya-content-demo.html
related:
  - "[[SYMPLYA — Design System]]"
  - "[[SYMPLYA BUSINESS — Design System]]"
---

# SYMPLYA CONTENT — Design System

> Contenu pédagogique · Slides · Navy profond + Teal · Minimaliste premium

Système de design de SYMPLYA CONTENT. Utilisé pour les slides Canva, les formations, les contenus éducatifs et tout support pédagogique de la marque.

---

## Palette de couleurs

| Token CSS | Valeur | Usage |
|---|---|---|
| `--sc-navy` | `#1A2B52` | Couleur signature — textes, titres, header |
| `--sc-navy-dark` | `#0F1A36` | Footer band, accents sombres |
| `--sc-navy-medium` | `#243A6E` | Variante navy, hover |
| `--sc-navy-light` | `#D6DCF0` | Fond badge navy |
| `--sc-teal` | `#2E8BBF` | Accent CTA — "PROCHAINE ÉTAPE →" |
| `--sc-teal-dark` | `#1E6A96` | Hover teal |
| `--sc-teal-light` | `#D4EEF9` | Fond badge teal, alert info |
| `--sc-green` | `#4EAD8B` | Succès, tags positifs |
| `--sc-green-dark` | `#357A62` | Hover green |
| `--sc-green-light` | `#DCF2EA` | Fond badge green |
| `--sc-bg` | `#F2F5F9` | Fond principal gris-bleu pâle |
| `--sc-white` | `#FFFFFF` | Fond carte, slide |

### Neutres

| Token | Valeur | Usage |
|---|---|---|
| `--sc-gray-100` | `#E8EDF4` | Séparateurs, fonds légers |
| `--sc-gray-300` | `#C5CFE0` | Bordures |
| `--sc-gray-500` | `#7A8BAA` | Texte secondaire, "SÉRIE X / Y" |
| `--sc-gray-700` | `#4A5568` | Labels, annotations |

---

## Typographie

- **Police** : Inter, Segoe UI, system-ui (sans-serif)
- **Ligne de base** : 1.6 corps · 1.25 titres

| Token | Taille | Usage |
|---|---|---|
| `--sc-text-xs` | 12px | Labels, série |
| `--sc-text-sm` | 14px | Secondaire, annotations |
| `--sc-text-base` | 16px | Corps |
| `--sc-text-lg` | 18px | Intro |
| `--sc-text-xl` | 20px | Tagline italique |
| `--sc-text-2xl` | 24px | H3 |
| `--sc-text-3xl` | 30px | H2 |
| `--sc-text-4xl` | 36px | H1 |
| `--sc-text-5xl` | 48px | Titres hero |

---

## Composants spécifiques CONTENT

### Mise en page Slide (1920×1080 adapté web)

```html
<div class="sc-slide">
  <div class="sc-slide-header">
    <a class="sc-brand">
      <span class="sc-brand-name">SYMPLYA <span>CONTENT</span></span>
      <span class="sc-brand-sub">L'IA simple pour gagner du temps.</span>
    </a>
    <p class="sc-tagline">L'IA simple pour gagner du temps.</p>
  </div>
  <div class="sc-slide-body"><!-- contenu --></div>
  <div class="sc-slide-footer">SYMPLYA • Structurer • Assister • Automatiser</div>
</div>
```

### Keyword label (style slides Canva)

```html
<span class="sc-keyword">ORGANISER :</span> votre méthode en 3 étapes
```

### Numéro de série

```html
<span class="sc-serie">SÉRIE 1 / 6</span>
```

### CTA "Prochaine étape"

```html
<a href="#" class="sc-next-step">Prochaine étape</a>
<!-- Render : "Prochaine étape →" en teal -->
```

### Footer Band

```html
<div class="sc-footer-band">
  SYMPLYA <span class="sc-sep">•</span> Structurer 
  <span class="sc-sep">•</span> Assister 
  <span class="sc-sep">•</span> Automatiser
</div>
```

---

## Composants génériques

### Boutons

```html
<button class="sc-btn sc-btn-navy">Primaire</button>
<button class="sc-btn sc-btn-teal">Prochaine étape</button>
<button class="sc-btn sc-btn-outline">Secondaire</button>
<button class="sc-btn sc-btn-ghost">Lien</button>
<button class="sc-btn sc-btn-green">Succès</button>
<!-- Tailles : sc-btn-sm / sc-btn-lg -->
```

### Checklist (style slides — flèche teal)

```html
<ul class="sc-checklist">
  <li>Point clé mis en avant</li>
  <li>Deuxième élément important</li>
</ul>
<!-- Bullet automatique : → en teal -->
```

### Cartes

```html
<div class="sc-card">
  <div class="sc-card-header">Titre</div>
  <div class="sc-card-body">Contenu</div>
  <div class="sc-card-footer">Actions</div>
</div>
```

---

## Import CSS

```html
<link rel="stylesheet" href="symplya-content-tokens.css">
<link rel="stylesheet" href="symplya-content-components.css">
```

---

## Règles d'usage

- **SYMPLYA CONTENT** = slides, formations, contenu pédagogique → navy profond
- La tagline *"L'IA simple pour gagner du temps."* est toujours en italique
- Le teal `#2E8BBF` est réservé aux CTA et flèches "prochaine étape"
- Le footer band navy-dark est systématique sur tous les slides
- Préfixe CSS : `sc-` (Symplya Content)

---

## Différenciation des 3 marques

| Critère | SYMPLYA | SYMPLYA CONTENT | SYMPLYA BUSINESS |
|---|---|---|---|
| Couleur signature | Bleu #2C88D9 | Navy #1A2B52 | Dégradé Cyan→Vert |
| Style | SaaS moderne | Minimaliste italique | B2B dynamique |
| Format phare | Interface web | Slides 1920×1080 | Cards + KPIs |
| CTA | .btn-primary | .sc-btn-teal + flèche → | .sb-btn-gradient ⚡ |

---

## Fichiers du projet

- `design-system/symplya-content-tokens.css` — variables CSS
- `design-system/symplya-content-components.css` — composants
- `design-system/symplya-content-demo.html` — démo interactive
