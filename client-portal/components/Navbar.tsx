'use client'

import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'

export default function Navbar({ nomSociete, userEmail }: { nomSociete: string; userEmail: string }) {
  const router = useRouter()
  const supabase = createClient()

  async function handleSignOut() {
    await supabase.auth.signOut()
    router.push('/')
    router.refresh()
  }

  return (
    <nav className="bg-white border-b border-gray-100 px-4 py-4">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <span className="text-lg font-bold text-gray-900">Espace Client</span>
        <div className="flex items-center gap-4">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-medium text-gray-900">{nomSociete}</p>
            <p className="text-xs text-gray-400">{userEmail}</p>
          </div>
          <button
            onClick={handleSignOut}
            className="text-sm text-gray-500 hover:text-gray-700 border border-gray-200 px-3 py-1.5 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Déconnexion
          </button>
        </div>
      </div>
    </nav>
  )
}
