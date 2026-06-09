export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-100 px-4 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <span className="text-lg font-bold text-gray-900">Espace Client</span>
        </div>
      </div>
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="h-4 w-36 bg-gray-100 rounded animate-pulse mb-6" />
        <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-6 space-y-4">
          <div className="h-8 w-72 bg-gray-200 rounded-lg animate-pulse" />
          <div className="h-4 w-full bg-gray-100 rounded animate-pulse" />
          <div className="h-4 w-48 bg-gray-100 rounded animate-pulse" />
          <div className="h-2 w-full bg-gray-100 rounded-full animate-pulse" />
        </div>
        <div className="h-6 w-40 bg-gray-200 rounded animate-pulse mb-4" />
        <div className="space-y-3">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="bg-white rounded-xl border border-gray-100 p-4">
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 space-y-2">
                  <div className="h-5 w-56 bg-gray-200 rounded animate-pulse" />
                  <div className="h-4 w-80 bg-gray-100 rounded animate-pulse" />
                </div>
                <div className="h-6 w-20 bg-gray-100 rounded-full animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
