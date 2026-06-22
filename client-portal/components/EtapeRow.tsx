import type { Etape, Consultant } from '@/lib/airtable'

const STATUT_DOT: Record<string, { dot: string; label: string }> = {
  'Terminé':  { dot: 'bg-emerald-400', label: 'Terminé' },
  'En cours': { dot: 'bg-blue-400',    label: 'En cours' },
  'Bloqué':   { dot: 'bg-red-400',     label: 'Bloqué' },
  'A faire':  { dot: 'bg-gray-300',    label: 'À faire' },
}

export default function EtapeRow({
  etape,
  consultantMap,
}: {
  etape: Etape
  consultantMap: Record<string, Consultant>
}) {
  const statut = STATUT_DOT[etape.statut] ?? { dot: 'bg-gray-300', label: etape.statut || 'À faire' }

  return (
    <div className="flex items-start gap-4 px-4 py-3.5 border-b border-gray-100 last:border-0 hover:bg-gray-50/80 transition-colors">
      <div className={`w-2 h-2 rounded-full flex-shrink-0 mt-1.5 ${statut.dot}`} />

      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-900">{etape.nom}</p>
        {etape.description && (
          <p className="text-xs text-gray-400 mt-0.5 leading-relaxed">{etape.description}</p>
        )}
        {etape.team.length > 0 && (
          <div className="flex flex-wrap items-center gap-1.5 mt-2">
            {etape.team.map(tid => {
              const c = consultantMap[tid]
              if (!c) return null
              const initials = `${c.prenom[0] ?? ''}${c.nom[0] ?? ''}`.toUpperCase()
              return (
                <div
                  key={tid}
                  className="flex items-center gap-1.5 bg-gray-50 border border-gray-100 rounded-full px-2 py-0.5"
                >
                  <div className="w-4 h-4 rounded-full bg-gray-200 flex items-center justify-center text-[9px] font-semibold text-gray-600">
                    {initials}
                  </div>
                  <span className="text-xs text-gray-500">{c.prenom} {c.nom}</span>
                </div>
              )
            })}
          </div>
        )}
      </div>

      <div className="flex items-center gap-3 flex-shrink-0 mt-0.5">
        {etape.dateTermine && (
          <span className="text-xs text-gray-400 hidden sm:block">
            {new Date(etape.dateTermine).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' })}
          </span>
        )}
        <span className="text-xs text-gray-400">{statut.label}</span>
      </div>
    </div>
  )
}
