import type { Etape, Consultant } from '@/lib/airtable'

const STATUT: Record<string, { color: string; icon: string }> = {
  'Terminé':  { color: 'bg-green-100 text-green-700', icon: '✓' },
  'En cours': { color: 'bg-blue-100 text-blue-700',   icon: '↻' },
  'Bloqué':   { color: 'bg-red-100 text-red-700',     icon: '!' },
  'A faire':  { color: 'bg-gray-100 text-gray-600',   icon: '○' },
}

export default function EtapeRow({
  etape,
  consultantMap,
}: {
  etape: Etape
  consultantMap: Record<string, Consultant>
}) {
  const statut = STATUT[etape.statut] ?? { color: 'bg-gray-100 text-gray-600', icon: '○' }

  return (
    <div className="bg-white rounded-xl border border-gray-100 p-4">
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <p className="font-medium text-gray-900">{etape.nom}</p>
          {etape.description && (
            <p className="text-sm text-gray-500 mt-0.5">{etape.description}</p>
          )}
          {etape.team.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 mt-2">
              {etape.team.map(tid => {
                const c = consultantMap[tid]
                if (!c) return null
                return (
                  <span key={tid} className="text-xs text-gray-500 bg-gray-50 border border-gray-100 px-2 py-0.5 rounded-full">
                    {c.prenom} {c.nom}
                  </span>
                )
              })}
            </div>
          )}
        </div>
        <span className={`text-xs font-medium px-2.5 py-1 rounded-full whitespace-nowrap ${statut.color}`}>
          {statut.icon} {etape.statut || 'À faire'}
        </span>
      </div>
      {etape.dateTermine && (
        <p className="text-xs text-gray-400 mt-2">
          Terminé le {new Date(etape.dateTermine).toLocaleDateString('fr-FR')}
        </p>
      )}
    </div>
  )
}
