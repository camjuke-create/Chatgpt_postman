import Link from 'next/link'
import type { Projet } from '@/lib/airtable'

const IMPORTANCE_COLOR: Record<string, string> = {
  Haute: 'bg-red-100 text-red-700',
  Moyenne: 'bg-yellow-100 text-yellow-700',
  Basse: 'bg-green-100 text-green-700',
}

export default function ProjectCard({ projet }: { projet: Projet }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex items-center justify-between gap-4 hover:border-blue-200 transition-colors">
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1 flex-wrap">
          <h2 className="font-semibold text-gray-900">{projet.objectif}</h2>
          {projet.importance && (
            <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${IMPORTANCE_COLOR[projet.importance] ?? 'bg-gray-100 text-gray-700'}`}>
              {projet.importance}
            </span>
          )}
        </div>
        {projet.dateLivraison && (
          <p className="text-sm text-gray-500">
            Livraison :{' '}
            {new Date(projet.dateLivraison).toLocaleDateString('fr-FR', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </p>
        )}
      </div>
      <Link
        href={`/projet/${projet.id}`}
        className="flex-shrink-0 inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700"
      >
        Voir <span aria-hidden>→</span>
      </Link>
    </div>
  )
}
