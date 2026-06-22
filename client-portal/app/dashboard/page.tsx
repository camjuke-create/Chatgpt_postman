import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { getClientByEmail, getProjetsByIds } from '@/lib/airtable'
import ProjectCard from '@/components/ProjectCard'
import Sidebar from '@/components/Sidebar'

export default async function DashboardPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) redirect('/')

  const client = await getClientByEmail(user.email!)

  if (!client) {
    return (
      <div className="flex min-h-screen">
        <Sidebar nomSociete="" userEmail={user.email!} />
        <main className="flex-1 ml-56 flex items-center justify-center">
          <p className="text-sm text-gray-400">Aucun compte trouvé. Contactez votre consultant.</p>
        </main>
      </div>
    )
  }

  const projets = await getProjetsByIds(client.projets)

  return (
    <div className="flex min-h-screen bg-[#f8f8f8]">
      <Sidebar nomSociete={client.nom} userEmail={user.email!} />

      <main className="flex-1 ml-56">
        {/* Topbar */}
        <div className="bg-white border-b border-gray-100 px-6 h-12 flex items-center justify-between">
          <h1 className="text-sm font-semibold text-gray-900">Mes projets</h1>
          <span className="text-xs text-gray-400 bg-gray-50 border border-gray-100 px-2.5 py-1 rounded-full">
            {projets.length} projet{projets.length !== 1 ? 's' : ''}
          </span>
        </div>

        {/* Content */}
        <div className="p-6">
          {projets.length === 0 ? (
            <div className="bg-white rounded-xl border border-gray-100 py-16 text-center">
              <p className="text-sm text-gray-400">Aucun projet en cours pour le moment.</p>
            </div>
          ) : (
            <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
              {/* Column headers */}
              <div className="flex items-center gap-4 px-4 py-2 border-b border-gray-100 bg-gray-50/50">
                <div className="w-2" />
                <p className="text-[11px] font-medium text-gray-400 flex-1 uppercase tracking-wide">Projet</p>
                <p className="text-[11px] font-medium text-gray-400 hidden sm:block w-32 uppercase tracking-wide">Livraison</p>
                <p className="text-[11px] font-medium text-gray-400 hidden sm:block w-16 uppercase tracking-wide">Priorité</p>
                <div className="w-4" />
              </div>

              {projets.map(projet => (
                <ProjectCard key={projet.id} projet={projet} />
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
