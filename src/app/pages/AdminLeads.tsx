import { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router'
import { motion } from 'motion/react'
import { Trash2, LogOut, RefreshCcw } from 'lucide-react'

import { apiFetch } from '../lib/api'
import { clearToken, getToken } from '../lib/auth'

type Lead = {
  id: string
  name: string
  email: string
  phone: string | null
  company: string | null
  projectType: string | null
  budget: string | null
  message: string
  createdAt: string
}

export function AdminLeads() {
  const navigate = useNavigate()
  const token = getToken()

  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [leads, setLeads] = useState<Lead[]>([])

  const canLoad = useMemo(() => Boolean(token), [token])

  async function loadLeads() {
    if (!token) return
    setLoading(true)
    setError(null)
    try {
      const data = await apiFetch<{ leads: Lead[] }>('/api/leads', {
        method: 'GET',
        token,
      })
      setLeads(data.leads)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load leads')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (!token) {
      navigate('/login')
      return
    }
    loadLeads()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [canLoad])

  const onLogout = () => {
    clearToken()
    navigate('/login')
  }

  const onDelete = async (id: string) => {
    if (!token) return
    const ok = window.confirm('Delete this lead?')
    if (!ok) return

    setSubmitting(true)
    setError(null)
    try {
      await apiFetch<{ ok: true }>(`/api/leads/${id}`, {
        method: 'DELETE',
        token,
      })
      setLeads((prev) => prev.filter((l) => l.id !== id))
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete lead')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div style={{ background: '#04040a', minHeight: '100vh' }}>
      <section className="py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-8 md:p-10 rounded-3xl"
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
          >
            <div className="flex items-center justify-between gap-4 mb-6">
              <div>
                <div className="text-xs uppercase tracking-widest mb-2" style={{ color: '#00d4ff', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>
                  Admin
                </div>
                <h1 style={{ color: 'white', fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 900, fontSize: '2.2rem', lineHeight: 1.05 }}>
                  Contact Leads
                </h1>
              </div>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => loadLeads()}
                  disabled={loading || submitting}
                  className="p-3 rounded-2xl transition-all"
                  style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)', color: 'white' }}
                >
                  <RefreshCcw size={18} />
                </button>
                <button
                  type="button"
                  onClick={onLogout}
                  disabled={submitting}
                  className="p-3 rounded-2xl transition-all"
                  style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)', color: 'white' }}
                >
                  <LogOut size={18} />
                </button>
              </div>
            </div>

            {error && (
              <div className="mb-6 p-4 rounded-2xl" style={{ background: 'rgba(239,68,68,0.12)', border: '1px solid rgba(239,68,68,0.25)', color: 'rgba(255,255,255,0.9)' }}>
                {error}
              </div>
            )}

            {loading ? (
              <div style={{ color: 'rgba(255,255,255,0.7)', fontFamily: 'Space Grotesk, sans-serif' }}>Loading...</div>
            ) : leads.length === 0 ? (
              <div style={{ color: 'rgba(255,255,255,0.7)', fontFamily: 'Space Grotesk, sans-serif' }}>
                No leads yet. Send yourself a message from the `Contact` page.
              </div>
            ) : (
              <div className="space-y-4">
                {leads.map((lead) => (
                  <motion.div
                    key={lead.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25 }}
                    className="p-5 rounded-3xl"
                    style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div style={{ color: 'white', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 800 }}>
                          {lead.name} <span style={{ color: 'rgba(255,255,255,0.5)', fontWeight: 600 }}>({lead.email})</span>
                        </div>
                        <div style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'Space Grotesk, sans-serif', marginTop: 4 }}>
                          {lead.projectType ? `${lead.projectType} · ` : ''}{lead.budget ? `Budget: ${lead.budget}` : 'Budget: -'}
                        </div>
                        <div style={{ color: 'rgba(255,255,255,0.8)', fontFamily: 'Space Grotesk, sans-serif', marginTop: 10, whiteSpace: 'pre-wrap' }}>
                          {lead.message}
                        </div>
                        <div style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'Space Grotesk, sans-serif', marginTop: 8, fontSize: '0.85rem' }}>
                          {new Date(lead.createdAt).toLocaleString()}
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => onDelete(lead.id)}
                        disabled={submitting}
                        className="p-3 rounded-2xl transition-all"
                        style={{ background: 'rgba(239,68,68,0.12)', border: '1px solid rgba(239,68,68,0.25)', color: 'white' }}
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  )
}

