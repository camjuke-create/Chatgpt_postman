---
title: SYMPLYA — Design Systems (Index)
tags: [design-system, symplya, index]
type: index
dernière-mise-à-jour: 2025-06-09
---

# SYMPLYA — Design Systems

Vue d'ensemble des 3 systèmes de design de l'écosystème SYMPLYA.

## Les 3 marques

| Marque | Fichier | Couleur signature | Audience |
|---|---|---|---|
| [[SYMPLYA — Design System]] | `symplya-design-system.md` | Bleu #2C88D9 | Portail client / SaaS |
| [[SYMPLYA CONTENT — Design System]] | `symplya-content-design-system.md` | Navy #1A2B52 + Teal | Formations / Slides |
| [[SYMPLYA BUSINESS — Design System]] | `symplya-business-design-system.md` | Dégradé Cyan→Vert | B2B / Entreprises |

## Règle de différenciation rapide

- Tu crées une **interface utilisateur / portail** → utilise **SYMPLYA** (bleu)
- Tu crées un **slide, formation, contenu pédagogique** → utilise **SYMPLYA CONTENT** (navy + teal)
- Tu crées une **page commerciale, offre B2B, tableau de bord client** → utilise **SYMPLYA BUSINESS** (dégradé cyan→vert)

## Fichiers source (repo GitHub)

```
design-system/
├── symplya-tokens.css
├── symplya-components.css
├── index.html                          ← démo SYMPLYA
├── symplya-content-tokens.css
├── symplya-content-components.css
├── symplya-content-demo.html           ← démo CONTENT
├── symplya-business-tokens.css
├── symplya-business-components.css
├── symplya-business-demo.html          ← démo BUSINESS
└── docs/
    ├── index.md                        ← ce fichier
    ├── symplya-design-system.md
    ├── symplya-content-design-system.md
    └── symplya-business-design-system.md
```

## Conventions CSS

| Marque | Préfixe | Exemple |
|---|---|---|
| SYMPLYA | `.btn-` | `.btn-primary`, `.card`, `.badge-blue` |
| SYMPLYA CONTENT | `.sc-` | `.sc-btn-teal`, `.sc-slide`, `.sc-keyword` |
| SYMPLYA BUSINESS | `.sb-` | `.sb-btn-gradient`, `.sb-stat`, `.sb-icon-box` |
