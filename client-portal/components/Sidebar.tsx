'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'

function Avatar({ text, size = 'md' }: { text: string; size?: 'sm' | 'md' }) {
  const initials = text
    .split(' ')
    .map(w => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
  const cls = size === 'sm'
    ? 'w-6 h-6 text-[10px]'
    : 'w-8 h-8 text-xs'
  return (
    <div className={`${cls} rounded-lg bg-white/15 flex items-center justify-center text-white font-semibold flex-shrink-0`}>
      {initials}
    </div>
  )
}

export default function Sidebar({ nomSociete, userEmail }: { nomSociete: string; userEmail: string }) {
  const pathname = usePathname()
  const router = useRouter()
  const supabase = createClient()

  async function handleSignOut() {
    await supabase.auth.signOut()
    router.push('/')
    router.refresh()
  }

  const isActive = pathname.startsWith('/dashboard') || pathname.startsWith('/projet')

  return (
    <aside className="w-56 min-h-screen bg-[#1a1a1a] flex flex-col fixed top-0 left-0 z-40">
      {/* Workspace */}
      <div className="px-3 py-4 border-b border-white/8">
        <div className="flex items-center gap-2.5 px-1">
          <Avatar text={nomSociete || userEmail} />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-white truncate">{nomSociete || 'Espace Client'}</p>
            <p className="text-[10px] text-white/40">Symplya</p>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-2 py-3 space-y-0.5">
        <p className="text-[10px] font-medium text-white/30 uppercase tracking-wider px-2 py-1.5">Espace client</p>
        <Link
          href="/dashboard"
          className={`flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-sm transition-colors ${
            isActive
              ? 'bg-white/12 text-white'
              : 'text-white/50 hover:bg-white/6 hover:text-white/80'
          }`}
        >
          <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7" />
          </svg>
          Mes projets
        </Link>
      </nav>

      {/* User */}
      <div className="px-2 py-3 border-t border-white/8">
        <div className="flex items-center gap-2 px-1 py-1.5">
          <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-[10px] font-medium text-white flex-shrink-0">
            {userEmail[0].toUpperCase()}
          </div>
          <p className="text-xs text-white/50 truncate flex-1">{userEmail}</p>
          <button
            onClick={handleSignOut}
            title="Déconnexion"
            className="text-white/30 hover:text-white/70 transition-colors flex-shrink-0"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
          </button>
        </div>
      </div>
    </aside>
  )
}
