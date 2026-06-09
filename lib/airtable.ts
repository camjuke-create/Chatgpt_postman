const BASE_ID = 'appSHpUHH4pCPwtdM'

const TABLES = {
  client: 'tblg0FHJ9ttdn47QZ',
  projet: 'tblNe01BpRZ9REV2Z',
  etapes: 'tblH6Zv89jQKBWLul',
  team: 'tblHhqJzI5RKzVy34',
}

async function fetchAirtable(path: string, params: Record<string, string> = {}) {
  const url = new URL(`https://api.airtable.com/v0/${BASE_ID}/${path}`)
  Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v))

  const res = await fetch(url.toString(), {
    headers: { Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}` },
    next: { revalidate: 60 },
  })

  if (!res.ok) throw new Error(`Airtable ${res.status}: ${await res.text()}`)
  return res.json()
}

export type Client = {
  id: string
  nom: string
  email: string
  projets: string[]
}

export type Projet = {
  id: string
  objectif: string
  description: string
  dateCreation: string
  dateLivraison: string
  importance: string
  resumeAI: string
  etapes: string[]
}

export type Etape = {
  id: string
  nom: string
  description: string
  statut: string
  dateCreation: string
  dateTermine: string
  team: string[]
}

export type Consultant = {
  id: string
  nom: string
  prenom: string
  competences: string
  photo?: string
}

export async function getClientByEmail(email: string): Promise<Client | null> {
  const formula = `OR({Email}="${email}",{Adresse mail}="${email}")`
  const data = await fetchAirtable(TABLES.client, {
    filterByFormula: formula,
    maxRecords: '1',
  })

  if (!data.records?.length) return null
  const r = data.records[0]
  return {
    id: r.id,
    nom: r.fields['Nom de la société'] ?? '',
    email: r.fields['Email'] ?? r.fields['Adresse mail'] ?? '',
    projets: r.fields['Projet'] ?? [],
  }
}

export async function getProjetsByIds(ids: string[]): Promise<Projet[]> {
  if (!ids.length) return []
  const formula = `OR(${ids.map(id => `RECORD_ID()="${id}"`).join(',')})`
  const data = await fetchAirtable(TABLES.projet, { filterByFormula: formula })

  return (data.records ?? []).map(recordToProjet)
}

export async function getProjet(id: string): Promise<Projet | null> {
  const data = await fetchAirtable(`${TABLES.projet}/${id}`)
  if (!data?.fields) return null
  return recordToProjet(data)
}

export async function getEtapesByIds(ids: string[]): Promise<Etape[]> {
  if (!ids.length) return []
  const formula = `OR(${ids.map(id => `RECORD_ID()="${id}"`).join(',')})`
  const data = await fetchAirtable(TABLES.etapes, { filterByFormula: formula })

  return (data.records ?? []).map((r: AirtableRecord) => ({
    id: r.id,
    nom: r.fields['Etape du projet'] ?? '',
    description: r.fields["Description de l'étape"] ?? '',
    statut: r.fields['Statut de l\'étape'] ?? '',
    dateCreation: r.fields["Date de création de l'étape"] ?? '',
    dateTermine: r.fields['Date étape terminé'] ?? '',
    team: r.fields['Team Projet'] ?? [],
  }))
}

export async function getConsultantsByIds(ids: string[]): Promise<Consultant[]> {
  if (!ids.length) return []
  const formula = `OR(${ids.map(id => `RECORD_ID()="${id}"`).join(',')})`
  const data = await fetchAirtable(TABLES.team, { filterByFormula: formula })

  return (data.records ?? []).map((r: AirtableRecord) => ({
    id: r.id,
    nom: r.fields['Nom du consultant'] ?? '',
    prenom: r.fields['Prénom du consultant'] ?? '',
    competences: r.fields['Champ de compétence du consultant'] ?? '',
    photo: r.fields['Photo du consultant']?.[0]?.url,
  }))
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AirtableRecord = { id: string; fields: Record<string, any> }

function recordToProjet(r: AirtableRecord): Projet {
  return {
    id: r.id,
    objectif: r.fields['Objectif du projet'] ?? '',
    description: r.fields['Description'] ?? '',
    dateCreation: r.fields['Date de création du projet'] ?? '',
    dateLivraison: r.fields['Date de livraison souhaitée'] ?? '',
    importance: r.fields['Importance du projet (select)'] ?? '',
    resumeAI: r.fields['Résumé du projet (AI)'] ?? '',
    etapes: r.fields['Etapes du projet'] ?? [],
  }
}
