# CLAUDE.md — Contexte projet Symplya

## Architecture globale

Ce repo (`Chatgpt_postman`) héberge principalement des collections Postman/Octopia.
Le code de l'espace client (client portal) vit sur la branche `client-portal-export`
et est synchronisé automatiquement vers le repo dédié `camjuke-create/client-portal`.

## Espace Client (client-portal)

**Stack :** Next.js 15 App Router · Supabase Auth · Airtable REST API · Vercel

**URL de production :** `https://project-hab81-ashy.vercel.app`

**Repo dédié :** `camjuke-create/client-portal` (branche `main`)

### Authentification
- Magic link / OTP via Supabase Auth
- SSR via `@supabase/ssr`
- Callback : `/auth/callback` — échange le code et redirige vers `/dashboard`
- URL site Supabase : `https://project-hab81-ashy.vercel.app`
- Redirect URL autorisée : `https://project-hab81-ashy.vercel.app/**`

### Airtable
- Base ID : `appSHpUHH4pCPwtdM` (Base SOFTR-Espace Client)
- Table clients : `tblg0FHJ9ttdn47QZ`
- Champs : Email (`fldsxenKCCjcj9WPt`), Adresse mail (`fldL1Sl1pUxn5VrJF`), Nom société (`fldoZqmwuoTMeEEzJ`)
- Le dashboard cherche le client par email dans ces deux champs

### Vercel
- Projet : `project-hab81` · ID : `prj_kgGLeYSgHKKuwGnqI1SobtF39SRf`
- URL : `project-hab81-ashy.vercel.app`
- Token secret GitHub Actions : `NEW_VERCEL_TOKEN`

### GitHub Actions — Sync workflow
- Fichier : `.github/workflows/sync-client-portal.yml`
- Toutes les 15 min + déclenchement manuel
- Pousse `client-portal-export` → `camjuke-create/client-portal:main`
- Secret requis : `GH_PAT` (classic PAT, scope `repo`)
- Fix critique : `git config --local --unset-all http.https://github.com/.extraheader` avant le push (sinon GITHUB_TOKEN écrase le PAT)

## Permissions Claude Code

Configurées dans `.claude/settings.json` (commité) :
- GitHub MCP : autonome ✅
- Airtable MCP : autonome ✅
- Supabase MCP : autonome si OAuth autorisé sur claude.ai ✅
- Slack MCP : autonome ✅
- Bash, Edit, Read, Write, Glob, Grep : autonomes ✅

## CRM Airtable

- Base CRM : `appPkLxl3bxfmp2G1` (CRM pour Symplya)
- Base LBDC ERP : `appbgnF2QIPkO0qsP`
- Espace de travail : SYMPLYA

## Adresses mail de test
- `symplya47@gmail.com` (compte client test — à ajouter dans la table clients Airtable)
- `camjuke@gmail.com` (compte admin)

## Branches importantes
- `main` : contenu repo principal (Postman)
- `client-portal-export` : code Next.js de l'espace client
- `claude/client-project-portal-qubd1b` : branche de développement Claude
