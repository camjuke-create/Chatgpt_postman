import Link from 'next/link'
import type { Projet } from '@/lib/airtable'

const PRIORITY_DOT: Record<string, string> = {
  Haute:   'bg-red-400',
  Moyenne: 'bg-amber-400',
  Basse:   'bg-emerald-400',
}

export default function ProjectCard({ projet }: { projet: Projet }) {
  const dot = PRIORITY_DOT[projet.importance] ?? 'bg-gray-300'

  return (
    <Link
      href={`/projet/${projet.id}`}
      className="group flex items-center gap-4 px-4 py-3 border-b border-gray-100 last:border-0 hover:bg-gray-50/80 transition-colors"
    >
      <div className={`w-2 h-2 rounded-full flex-shrink-0 ${dot}`} />

      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-900 truncate group-hover:text-black">
          {projet.objectif}
        </p>
        {projet.description && (
          <p className="text-xs text-gray-400 truncate mt-0.5">{projet.description}</p>
        )}
      </div>

      <div className="flex items-center gap-6 flex-shrink-0">
        {projet.dateLivraison && (
          <span className="text-xs text-gray-400 hidden sm:block">
            {new Date(projet.dateLivraison).toLocaleDateString('fr-FR', {
              day: 'numeric',
              month: 'short',
              year: 'numeric',
            })}
          </span>
        )}
        {projet.importance && (
          <span className="text-xs text-gray-400 w-16 hidden sm:block">{projet.importance}</span>
        )}
        <svg
          className="w-4 h-4 text-gray-200 group-hover:text-gray-400 transition-colors"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </Link>
  )
}
