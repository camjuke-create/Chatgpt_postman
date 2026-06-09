import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { getClientByEmail, getProjetsByIds } from '@/lib/airtable'
import ProjectCard from '@/components/ProjectCard'
import Navbar from '@/components/Navbar'

export default async function DashboardPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) redirect('/')

  const client = await getClientByEmail(user.email!)

  if (!client) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar nomSociete="" userEmail={user.email!} />
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <p className="text-gray-500">
            Aucun compte trouvé pour cette adresse email. Contactez votre consultant.
          </p>
        </div>
      </div>
    )
  }

  const projets = await getProjetsByIds(client.projets)

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar nomSociete={client.nom} userEmail={user.email!} />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Mes projets</h1>
          <span className="text-sm text-gray-500 bg-white border border-gray-200 px-3 py-1 rounded-full">
            {projets.length} projet{projets.length > 1 ? 's' : ''}
          </span>
        </div>

        {projets.length === 0 ? (
          <div className="text-center py-16 text-gray-400">
            <p>Aucun projet en cours pour le moment.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {projets.map(projet => (
              <ProjectCard key={projet.id} projet={projet} />
            ))}
          </div>
        )}
      </main>
    </div>
  )
}
