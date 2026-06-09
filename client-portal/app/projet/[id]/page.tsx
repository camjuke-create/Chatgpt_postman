import { redirect } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import { getClientByEmail, getProjet, getEtapesByIds, getConsultantsByIds } from '@/lib/airtable'
import Navbar from '@/components/Navbar'
import EtapeRow from '@/components/EtapeRow'

const IMPORTANCE_COLOR: Record<string, string> = {
  Haute: 'bg-red-100 text-red-700',
  Moyenne: 'bg-yellow-100 text-yellow-700',
  Basse: 'bg-green-100 text-green-700',
}

export default async function ProjetPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/')

  const [client, projet] = await Promise.all([
    getClientByEmail(user.email!),
    getProjet(id),
  ])

  if (!projet) redirect('/dashboard')
  if (!client?.projets.includes(id)) redirect('/dashboard')

  const etapes = await getEtapesByIds(projet.etapes)
  const teamIds = [...new Set(etapes.flatMap(e => e.team))]
  const consultants = await getConsultantsByIds(teamIds)
  const consultantMap = Object.fromEntries(consultants.map(c => [c.id, c]))

  const done = etapes.filter(e => e.statut === 'Terminé').length
  const progress = etapes.length ? Math.round((done / etapes.length) * 100) : 0

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar nomSociete={client.nom} userEmail={user.email!} />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <Link
          href="/dashboard"
          className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700 mb-6"
        >
          ← Retour à mes projets
        </Link>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
          <div className="flex items-start justify-between gap-4 mb-3">
            <h1 className="text-2xl font-bold text-gray-900">{projet.objectif}</h1>
            {projet.importance && (
              <span className={`text-xs font-medium px-3 py-1 rounded-full whitespace-nowrap ${IMPORTANCE_COLOR[projet.importance] ?? 'bg-gray-100 text-gray-700'}`}>
                {projet.importance}
              </span>
            )}
          </div>

          {projet.description && (
            <p className="text-gray-600 mb-4">{projet.description}</p>
          )}

          {projet.dateLivraison && (
            <p className="text-sm text-gray-500 mb-4">
              Livraison souhaitée :{' '}
              {new Date(projet.dateLivraison).toLocaleDateString('fr-FR', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </p>
          )}

          <div>
            <div className="flex justify-between text-sm text-gray-600 mb-1.5">
              <span>Avancement global</span>
              <span className="font-semibold">{progress}%</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-2">
              <div
                className="bg-blue-500 h-2 rounded-full transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="text-xs text-gray-400 mt-1">
              {done} / {etapes.length} étape{etapes.length > 1 ? 's' : ''} terminée{done > 1 ? 's' : ''}
            </p>
          </div>
        </div>

        {projet.resumeAI && (
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-6">
            <p className="text-sm font-medium text-blue-800 mb-1">Résumé du projet</p>
            <p className="text-sm text-blue-700">{projet.resumeAI}</p>
          </div>
        )}

        <h2 className="text-lg font-semibold text-gray-800 mb-4">Étapes du projet</h2>
        {etapes.length === 0 ? (
          <p className="text-gray-400 text-sm">Aucune étape définie pour ce projet.</p>
        ) : (
          <div className="space-y-3">
            {etapes.map(etape => (
              <EtapeRow key={etape.id} etape={etape} consultantMap={consultantMap} />
            ))}
          </div>
        )}
      </main>
    </div>
  )
}
