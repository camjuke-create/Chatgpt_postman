# Portail Client — Espace Client

Portail web permettant aux clients de suivre l'avancement de leurs projets en temps réel.

**Stack :** Next.js 15 · Supabase Auth · Airtable API · Tailwind CSS · Vercel

---

## Architecture

```
Client → Magic Link Email (Supabase)
       → Dashboard projets (filtrés par email)
       → Détail projet + étapes (données Airtable)
```

Les données restent dans Airtable. Supabase gère uniquement l'authentification.

---

## Variables d'environnement

Copier `.env.example` en `.env.local` et remplir :

```bash
cp .env.example .env.local
```

| Variable | Valeur |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | `https://uawirvvcdlvqffprpmwp.supabase.co` |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Clé anon Supabase (déjà renseignée dans `.env.example`) |
| `AIRTABLE_API_KEY` | Token Airtable à créer (voir ci-dessous) |

### Créer la clé API Airtable

1. Aller sur [airtable.com/create/tokens](https://airtable.com/create/tokens)
2. Créer un Personal Access Token avec les scopes :
   - `data.records:read`
   - `schema.bases:read`
3. Donner accès à la base **Base SOFTR-Espace Client**
4. Copier le token dans `AIRTABLE_API_KEY`

---

## Lancer en local

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000)

---

## Déployer sur Vercel

### 1. Connecter le dépôt

1. Aller sur [vercel.com/new](https://vercel.com/new)
2. Importer le dépôt `camjuke-create/Chatgpt_postman`
3. Dans **Root Directory**, saisir : `client-portal`
4. Cliquer **Deploy** (Vercel détecte automatiquement Next.js)

### 2. Ajouter les variables d'environnement

Dans Vercel → Settings → Environment Variables, ajouter :

```
NEXT_PUBLIC_SUPABASE_URL   = https://uawirvvcdlvqffprpmwp.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY = eyJhbGciOiJI...
AIRTABLE_API_KEY           = patXXXXXXXXX
```

### 3. Configurer Supabase

Dans le [Dashboard Supabase](https://supabase.com/dashboard/project/uawirvvcdlvqffprpmwp) :

- **Authentication → URL Configuration**
  - Site URL : `https://ton-domaine.vercel.app`
  - Redirect URLs : `https://ton-domaine.vercel.app/auth/callback`
- **Authentication → Providers**
  - Email : activé (magic link = OTP par email)

---

## Structure du projet

```
client-portal/
├── app/
│   ├── page.tsx              # Page de connexion (magic link)
│   ├── dashboard/page.tsx    # Liste des projets du client
│   ├── projet/[id]/page.tsx  # Détail projet + étapes
│   └── auth/callback/route.ts
├── components/
│   ├── Navbar.tsx
│   ├── ProjectCard.tsx
│   └── EtapeRow.tsx
├── lib/
│   ├── airtable.ts           # Requêtes Airtable (Client, Projet, Etapes, Team)
│   └── supabase/             # Client browser + server
└── proxy.ts                  # Protection des routes (Next.js 15)
```
