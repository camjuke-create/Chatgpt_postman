'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import SymplyaLogo from '@/components/SymplyaLogo'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const supabase = createClient()

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    await supabase.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: `${window.location.origin}/auth/callback` },
    })
    setSent(true)
    setLoading(false)
  }

  return (
    <main className="min-h-screen bg-[#f8f8f8] flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="text-center mb-7">
          <div className="flex justify-center mb-3">
            <SymplyaLogo variant="full" className="h-16 w-auto" />
          </div>
          <p className="text-sm text-gray-400 mt-1">Connectez-vous à votre espace client</p>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 p-6">
          {sent ? (
            <div className="text-center py-2">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-3">
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-sm font-semibold text-gray-900 mb-1">Vérifiez votre email</h2>
              <p className="text-xs text-gray-400">
                Lien envoyé à{' '}
                <span className="text-gray-600 font-medium">{email}</span>
              </p>
              <button
                onClick={() => setSent(false)}
                className="mt-4 text-xs text-gray-400 hover:text-gray-600 underline transition-colors"
              >
                Utiliser une autre adresse
              </button>
            </div>
          ) : (
            <form onSubmit={handleLogin} className="space-y-3">
              <div>
                <label htmlFor="email" className="block text-xs font-medium text-gray-500 mb-1.5">
                  Adresse email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  placeholder="contact@votre-société.fr"
                  className="w-full px-3 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-900 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full py-2.5 px-4 bg-gradient-to-r from-[#0d2d70] to-[#39b54a] hover:opacity-90 disabled:opacity-50 text-white text-sm font-medium rounded-lg transition-opacity"
              >
                {loading ? 'Envoi en cours…' : 'Continuer avec email'}
              </button>
            </form>
          )}
        </div>

        <p className="text-center text-xs text-gray-400 mt-4">
          Pas encore client ?{' '}
          <a href="mailto:contact@symplya.fr" className="text-gray-600 hover:text-gray-900 transition-colors">
            Contactez-nous
          </a>
        </p>
      </div>
    </main>
  )
}
