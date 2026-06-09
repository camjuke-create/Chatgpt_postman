import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-md">
        <p className="text-6xl font-bold text-gray-200 mb-4">404</p>
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Page introuvable</h2>
        <p className="text-gray-500 text-sm mb-6">
          Cette page n&apos;existe pas ou vous n&apos;y avez pas accès.
        </p>
        <Link
          href="/dashboard"
          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-xl transition-colors"
        >
          ← Retour au dashboard
        </Link>
      </div>
    </main>
  )
}
