import { redirect } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import { getClientByEmail, getProjet, getEtapesByIds, getConsultantsByIds } from '@/lib/airtable'
import Sidebar from '@/components/Sidebar'
import EtapeRow from '@/components/EtapeRow'

const IMPORTANCE_DOT: Record<string, string> = {
  Haute:   'bg-red-400',
  Moyenne: 'bg-amber-400',
  Basse:   'bg-emerald-400',
}

const IMPORTANCE_BADGE: Record<string, string> = {
  Haute:   'text-red-600 bg-red-50',
  Moyenne: 'text-amber-600 bg-amber-50',
  Basse:   'text-emerald-600 bg-emerald-50',
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

  const dot = IMPORTANCE_DOT[projet.importance] ?? 'bg-gray-300'
  const badge = IMPORTANCE_BADGE[projet.importance] ?? 'text-gray-500 bg-gray-50'

  return (
    <div className="flex min-h-screen bg-[#f8f8f8]">
      <Sidebar nomSociete={client.nom} userEmail={user.email!} />

      <main className="flex-1 ml-56">
        {/* Topbar with breadcrumb */}
        <div className="bg-white border-b border-gray-100 px-6 h-12 flex items-center gap-2 text-sm">
          <Link href="/dashboard" className="text-gray-400 hover:text-gray-600 transition-colors">
            Mes projets
          </Link>
          <span className="text-gray-200">/</span>
          <span className="text-gray-900 font-medium truncate">{projet.objectif}</span>
        </div>

        <div className="p-6 max-w-3xl">
          {/* Project card */}
          <div className="bg-white rounded-xl border border-gray-100 p-6 mb-4">
            <div className="flex items-start gap-3 mb-5">
              <div className={`w-2.5 h-2.5 rounded-full flex-shrink-0 mt-1.5 ${dot}`} />
              <div className="flex-1">
                <div className="flex items-center gap-2.5 flex-wrap mb-1">
                  <h1 className="text-base font-semibold text-gray-900">{projet.objectif}</h1>
                  {projet.importance && (
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-md ${badge}`}>
                      {projet.importance}
                    </span>
                  )}
                </div>
                {projet.description && (
                  <p className="text-sm text-gray-500 leading-relaxed">{projet.description}</p>
                )}
                {projet.dateLivraison && (
                  <p className="text-xs text-gray-400 mt-2">
                    Livraison :{' '}
                    {new Date(projet.dateLivraison).toLocaleDateString('fr-FR', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </p>
                )}
              </div>
            </div>

            {/* Progress bar */}
            <div>
              <div className="flex justify-between text-xs mb-1.5">
                <span className="text-gray-400">Avancement</span>
                <span className="font-medium text-gray-600">{progress}%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-1.5">
                <div
                  className="bg-gray-800 h-1.5 rounded-full transition-all"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <p className="text-xs text-gray-400 mt-1">
                {done} / {etapes.length} étape{etapes.length !== 1 ? 's' : ''} terminée{done > 1 ? 's' : ''}
              </p>
            </div>
          </div>

          {/* AI Summary */}
          {projet.resumeAI && (
            <div className="bg-white rounded-xl border border-gray-100 p-4 mb-4">
              <p className="text-[11px] font-medium text-gray-400 uppercase tracking-wider mb-2">Résumé</p>
              <p className="text-sm text-gray-600 leading-relaxed">{projet.resumeAI}</p>
            </div>
          )}

          {/* Etapes */}
          <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
              <p className="text-[11px] font-medium text-gray-400 uppercase tracking-wider">Étapes</p>
              <span className="text-xs text-gray-400">
                {done}/{etapes.length}
              </span>
            </div>

            {etapes.length === 0 ? (
              <p className="text-sm text-gray-400 px-4 py-8 text-center">Aucune étape définie.</p>
            ) : (
              etapes.map(etape => (
                <EtapeRow key={etape.id} etape={etape} consultantMap={consultantMap} />
              ))
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
