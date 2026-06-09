---
title: SYMPLYA — Design System
tags: [design-system, symplya, css, tokens, couleurs, UI]
brand: SYMPLYA
type: design-system
statut: actif
dernière-mise-à-jour: 2025-06-09
fichiers:
  - design-system/symplya-tokens.css
  - design-system/symplya-components.css
  - design-system/index.html
related:
  - "[[SYMPLYA CONTENT — Design System]]"
  - "[[SYMPLYA BUSINESS — Design System]]"
---

# SYMPLYA — Design System

> Portail client · Interface SaaS · Bleu tech + Indigo

Système de design de la marque principale SYMPLYA. Utilisé pour le portail client, les interfaces utilisateurs et les outils SaaS.

---

## Palette de couleurs

| Token CSS | Valeur | Usage |
|---|---|---|
| `--color-blue` | `#2C88D9` | Primaire — boutons, liens, CTA |
| `--color-indigo` | `#6558F5` | Accent — badges, highlight |
| `--color-slate` | `#4B5C6B` | Corps de texte |
| `--color-mint` | `#1AAE9F` | Succès, statuts positifs |
| `--color-gray` | `#788896` | Texte secondaire |
| `--color-smoke` | `#C3CFD9` | Bordures, séparateurs |
| `--color-bg` | `#F0F4F8` | Fond général (bleu pâle) |
| `--color-white` | `#FFFFFF` | Fond carte |

### Statuts

| Token | Couleur | Usage |
|---|---|---|
| `--color-success` | `#1AAE9F` (mint) | Succès |
| `--color-warning` | `#F59E0B` | Avertissement |
| `--color-danger` | `#EF4444` | Erreur |

---

## Typographie

- **Police** : Inter, Segoe UI, system-ui (sans-serif)
- **Taille base** : 16px / 1rem

| Token | Taille | Usage |
|---|---|---|
| `--text-xs` | 12px | Labels, badges |
| `--text-sm` | 14px | UI, secondaire |
| `--text-base` | 16px | Corps |
| `--text-lg` | 18px | Intro, sous-titre |
| `--text-xl` | 20px | H4 |
| `--text-2xl` | 24px | H3 |
| `--text-3xl` | 30px | H2 |
| `--text-4xl` | 36px | H1 |

---

## Composants CSS

### Boutons

```html
<!-- CTA principal -->
<button class="btn btn-primary">Démarrer</button>

<!-- Secondaire indigo -->
<button class="btn btn-secondary">Explorer</button>

<!-- Outline -->
<button class="btn btn-outline">En savoir plus</button>

<!-- Ghost -->
<button class="btn btn-ghost">Annuler</button>

<!-- Tailles : btn-sm / btn-lg -->
```

### Badges

```html
<span class="badge badge-blue">Nouveau</span>
<span class="badge badge-indigo">Beta</span>
<span class="badge badge-mint">Actif</span>
<span class="badge badge-gray">Archive</span>
```

### Cartes

```html
<div class="card">
  <div class="card-header">Titre</div>
  <div class="card-body">Contenu</div>
  <div class="card-footer">Actions</div>
</div>
```

### Alertes

```html
<div class="alert alert-info">Information</div>
<div class="alert alert-success">Succès</div>
<div class="alert alert-warning">Avertissement</div>
<div class="alert alert-danger">Erreur</div>
```

### Formulaire

```html
<div class="form-group">
  <label class="form-label">Label</label>
  <input class="form-input" type="text" placeholder="…">
</div>
```

---

## Import CSS

```html
<link rel="stylesheet" href="symplya-tokens.css">
<link rel="stylesheet" href="symplya-components.css">
```

---

## Règles d'usage

- **SYMPLYA** = portail client, interfaces utilisateur, outils SaaS → couleur bleue
- Ne pas utiliser le dégradé cyan→vert (réservé à BUSINESS)
- Le bleu `#2C88D9` est la couleur signature, toujours visible sur le CTA principal
- L'indigo `#6558F5` est l'accent secondaire, jamais couleur principale

---

## Différenciation des 3 marques

| Critère | SYMPLYA | SYMPLYA CONTENT | SYMPLYA BUSINESS |
|---|---|---|---|
| Couleur signature | Bleu #2C88D9 | Navy #1A2B52 | Dégradé Cyan→Vert |
| Accent | Indigo #6558F5 | Teal #2E8BBF | Vert #2DC84A |
| Style | SaaS moderne | Minimaliste | B2B dynamique |
| Audience | Utilisateurs finaux | Apprenants | Décideurs TPE/PME |

---

## Fichiers du projet

- `design-system/symplya-tokens.css` — variables CSS
- `design-system/symplya-components.css` — composants
- `design-system/index.html` — démo interactive
