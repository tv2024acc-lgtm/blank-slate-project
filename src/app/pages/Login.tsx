import { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router'
import { motion } from 'motion/react'
import { Film, Lock, Mail } from 'lucide-react'

import { apiFetch } from '../lib/api'
import { clearToken, getToken, setToken } from '../lib/auth'

type Mode = 'login' | 'register'

export function Login() {
  const navigate = useNavigate()
  const [mode, setMode] = useState<Mode>('login')

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const endpoint = useMemo(() => (mode === 'login' ? '/api/auth/login' : '/api/auth/register'), [mode])

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setError(null)
    try {
      const payload = { email, password }
      const data = await apiFetch<any>(endpoint, { method: 'POST', body: JSON.stringify(payload) })

      if (mode === 'register') {
        // After register, ask the user to login.
        clearToken()
        setMode('login')
        setPassword('')
        setError('Account created. Please login.')
        return
      }

      if (!data?.token) throw new Error('Missing token returned by server')
      setToken(data.token)
      navigate('/admin/leads')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed')
    } finally {
      setSubmitting(false)
    }
  }

  const existingToken = getToken()
  useEffect(() => {
    if (existingToken) navigate('/admin/leads')
  }, [existingToken, navigate])

  return (
    <div style={{ background: '#04040a', minHeight: '100vh' }}>
      <section className="py-24 px-4">
        <div className="max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-8 md:p-10 rounded-3xl"
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #00d4ff, #a855f7)' }}>
                <Film size={18} className="text-white" />
              </div>
              <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 900, letterSpacing: '0.05em', color: 'white' }}>
                ADMIN
              </div>
            </div>

            <div className="flex gap-3 mb-5">
              <button
                type="button"
                onClick={() => setMode('login')}
                className="flex-1 py-3 rounded-2xl transition-all"
                style={{
                  background: mode === 'login' ? 'linear-gradient(to right, #00d4ff, #a855f7)' : 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  color: 'white',
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontWeight: 700,
                }}
              >
                Login
              </button>
              <button
                type="button"
                onClick={() => setMode('register')}
                className="flex-1 py-3 rounded-2xl transition-all"
                style={{
                  background: mode === 'register' ? 'linear-gradient(to right, #00d4ff, #a855f7)' : 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  color: 'white',
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontWeight: 700,
                }}
              >
                Register
              </button>
            </div>

            {error && (
              <div className="mb-5 p-4 rounded-2xl" style={{ background: 'rgba(239,68,68,0.12)', border: '1px solid rgba(239,68,68,0.25)', color: 'rgba(255,255,255,0.9)' }}>
                {error}
              </div>
            )}

            <form onSubmit={onSubmit}>
              <div className="mb-4">
                <label className="block mb-2 text-xs uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>
                  Email
                </label>
                <div className="relative">
                  <Mail size={18} style={{ position: 'absolute', left: 14, top: 12, color: 'rgba(255,255,255,0.5)' }} />
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    required
                    placeholder="you@email.com"
                    style={{
                      width: '100%',
                      padding: '14px 18px 14px 42px',
                      borderRadius: '12px',
                      outline: 'none',
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      color: 'white',
                      fontFamily: 'Space Grotesk, sans-serif',
                      fontSize: '0.9rem',
                    }}
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block mb-2 text-xs uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>
                  Password
                </label>
                <div className="relative">
                  <Lock size={18} style={{ position: 'absolute', left: 14, top: 12, color: 'rgba(255,255,255,0.5)' }} />
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    required
                    placeholder={mode === 'register' ? 'At least 6 characters' : 'Your password'}
                    style={{
                      width: '100%',
                      padding: '14px 18px 14px 42px',
                      borderRadius: '12px',
                      outline: 'none',
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      color: 'white',
                      fontFamily: 'Space Grotesk, sans-serif',
                      fontSize: '0.9rem',
                    }}
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full flex items-center justify-center gap-3 py-4 rounded-full transition-all duration-300 hover:scale-[1.02]"
                style={{
                  background: 'linear-gradient(to right, #00d4ff, #a855f7)',
                  color: 'white',
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontWeight: 700,
                  fontSize: '1.05rem',
                  boxShadow: '0 0 40px rgba(0,212,255,0.3)',
                  opacity: submitting ? 0.75 : 1,
                  pointerEvents: submitting ? 'none' : 'auto',
                }}
              >
                {submitting ? 'Please wait...' : mode === 'login' ? 'Login' : 'Create Account'}
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

