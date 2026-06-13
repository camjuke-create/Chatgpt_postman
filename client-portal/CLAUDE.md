@AGENTS.md

# Contexte projet — Espace Client Symplya

## Stack
Next.js 15 App Router · Supabase Auth (SSR) · Airtable REST API · Vercel

## URL de production
`https://project-hab81-ashy.vercel.app`

## Repo dédié
`camjuke-create/client-portal` (branche `main`)
Synchronisé automatiquement depuis `camjuke-create/Chatgpt_postman` via GitHub Actions (`.github/workflows/sync-client-portal.yml`).

## Authentification Supabase
- Magic link / OTP
- Callback : `/auth/callback` — échange le code, redirige vers `/dashboard`
- Site URL Supabase : `https://project-hab81-ashy.vercel.app`
- Redirect URL autorisée : `https://project-hab81-ashy.vercel.app/**`
- Limite plan gratuit : 3 emails/heure

## Airtable
- Base ID : `appSHpUHH4pCPwtdM` (Base SOFTR-Espace Client)
- Table clients : `tblg0FHJ9ttdn47QZ`
- Champs :
  - Email : `fldsxenKCCjcj9WPt`
  - Adresse mail : `fldL1Sl1pUxn5VrJF`
  - Nom de la société : `fldoZqmwuoTMeEEzJ`
- Le dashboard cherche le client par email dans les deux champs ci-dessus

## Variables d'environnement (Vercel)
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `AIRTABLE_API_KEY`
- `AIRTABLE_BASE_ID` = `appSHpUHH4pCPwtdM`

## Vercel
- Projet : `project-hab81`
- ID projet : `prj_kgGLeYSgHKKuwGnqI1SobtF39SRf`
- Token GitHub Actions : secret `NEW_VERCEL_TOKEN`

## Adresses de test
- `symplya47@gmail.com` — client test (à ajouter dans la table Airtable)
- `camjuke@gmail.com` — admin

## Structure des pages
- `/` → page de connexion (magic link)
- `/dashboard` → espace client (affiche les données Airtable du client connecté)
- `/auth/callback` → route API pour l'échange de code Supabase
