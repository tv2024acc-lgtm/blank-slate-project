import { useState } from 'react';
import { motion } from 'motion/react';
import {
  MapPin, Phone, Mail, Clock, Linkedin,
  Send, CheckCircle
} from 'lucide-react';

const CONTACT_BG = 'https://images.unsplash.com/photo-1764312385768-93b8f47250de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3Rpb24lMjBncmFwaGljcyUyMGRpZ2l0YWwlMjBhbmltYXRpb24lMjBzY3JlZW58ZW58MXx8fHwxNzczNzQ3ODU3fDA&ixlib=rb-4.1.0&q=80&w=1080';

function FiverrIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 256 256" aria-hidden="true" focusable="false" style={{ display: 'block' }}>
      <path
        d="M128 24c57.437 0 104 46.563 104 104s-46.563 104-104 104S24 185.437 24 128 70.563 24 128 24Z"
        fill="currentColor"
        opacity="0.15"
      />
      <path
        d="M98.7 161.8c10.2 0 18.6-2.9 25.1-8.7 6.6-5.8 9.9-13.4 9.9-22.7 0-9.5-3.3-17.1-9.9-22.9-6.5-5.8-14.9-8.7-25.1-8.7H79.2v63.9h19.5Zm-30.4-86.4c0-3.1 2.5-5.6 5.6-5.6h35.9c18.9 0 33.9 5.1 45.1 15.4 11.2 10.2 16.8 23.9 16.8 41 0 16.8-5.6 30.4-16.8 40.8-11.2 10.4-26.2 15.6-45.1 15.6H73.9c-3.1 0-5.6-2.5-5.6-5.6V75.4Z"
        fill="currentColor"
      />
      <path
        d="M180.6 95.3c0-3.1 2.5-5.6 5.6-5.6h4.8c3.1 0 5.6 2.5 5.6 5.6v68.9c0 12.1-3.2 21.7-9.5 28.7-6.3 7-15.2 10.5-26.6 10.5-11.6 0-20.4-3.6-26.6-10.7-6.2-7.1-9.3-16.5-9.3-28.3v-68.9c0-3.1 2.5-5.6 5.6-5.6h4.8c3.1 0 5.6 2.5 5.6 5.6v68.6c0 7 1.4 12.4 4.3 16.2 2.8 3.8 7 5.7 12.4 5.7 5.3 0 9.4-1.9 12.2-5.7 2.9-3.8 4.3-9.2 4.3-16.2V95.3Z"
        fill="currentColor"
      />
    </svg>
  );
}

function UpworkIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 256 256" aria-hidden="true" focusable="false" style={{ display: 'block' }}>
      <path
        d="M128 24c57.437 0 104 46.563 104 104s-46.563 104-104 104S24 185.437 24 128 70.563 24 128 24Z"
        fill="currentColor"
        opacity="0.15"
      />
      <path
        d="M78 92c0-11 9-20 20-20h60c11 0 20 9 20 20v74c0 11-9 20-20 20H98c-11 0-20-9-20-20V92Zm24 12v50c0 4 3 7 7 7h40c4 0 7-3 7-7v-50c0-4-3-7-7-7h-40c-4 0-7 3-7 7Z"
        fill="currentColor"
      />
      <path
        d="M58 186V70h16v116H58Zm132 0V70h16v116h-16Z"
        fill="currentColor"
        opacity="0.6"
      />
    </svg>
  );
}

const inputStyle = {
  width: '100%',
  padding: '14px 18px',
  borderRadius: '12px',
  outline: 'none',
  background: 'rgba(255,255,255,0.05)',
  border: '1px solid rgba(255,255,255,0.1)',
  color: 'white',
  fontFamily: 'Space Grotesk, sans-serif',
  fontSize: '0.9rem',
  transition: 'border-color 0.3s',
};

export function Contact() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', company: '',
    projectType: '', budget: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || 'Failed to send message');
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send message');
    } finally {
      setSubmitting(false);
    }
  };

  const fieldStyle = (name: string) => ({
    ...inputStyle,
    borderColor: focusedField === name ? 'rgba(0,212,255,0.5)' : 'rgba(255,255,255,0.1)',
    boxShadow: focusedField === name ? '0 0 0 2px rgba(0,212,255,0.1)' : 'none',
  });

  return (
    <div style={{ background: '#04040a' }}>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={CONTACT_BG} alt="Contact" className="w-full h-full object-cover" style={{ filter: 'brightness(0.15) saturate(0.5)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(4,4,10,0.4) 0%, rgba(4,4,10,0.98) 100%)' }} />
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, rgba(0,212,255,0.06) 0%, transparent 60%)' }} />
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 pt-24">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xs uppercase tracking-widest mb-4" style={{ color: '#00d4ff', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>Get in Touch</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.8 }} style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 900, fontSize: 'clamp(3rem, 7vw, 6rem)', lineHeight: 0.95, color: 'white', letterSpacing: '-0.02em' }}>
            Let's Bring Your<br />
            <span style={{ background: 'linear-gradient(to right, #00d4ff, #a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Vision to Life</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }} className="mt-6 max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'Space Grotesk, sans-serif', fontSize: '1.05rem', lineHeight: 1.7 }}>
            Ready to create something extraordinary? Tell us about your project and we'll respond within 24 hours.
          </motion.p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-24 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex flex-col items-center justify-center py-20 px-8 rounded-3xl text-center"
                style={{ background: 'rgba(0,212,255,0.05)', border: '1px solid rgba(0,212,255,0.2)' }}
              >
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2, type: 'spring' }}>
                  <CheckCircle size={64} style={{ color: '#00d4ff' }} />
                </motion.div>
                <h2 className="mt-6 mb-3" style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800, fontSize: '2.5rem', color: 'white' }}>Message Sent!</h2>
                <p style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'Space Grotesk, sans-serif', lineHeight: 1.7, maxWidth: '400px' }}>
                  Thank you for reaching out. Our team will review your project details and get back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <motion.form
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                onSubmit={handleSubmit}
                className="p-8 md:p-10 rounded-3xl"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <h2 className="mb-8" style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800, fontSize: '2rem', color: 'white' }}>Tell Us About Your Project</h2>
                {error && (
                  <div className="mb-6 p-4 rounded-2xl" style={{ background: 'rgba(239,68,68,0.12)', border: '1px solid rgba(239,68,68,0.25)', color: 'rgba(255,255,255,0.9)' }}>
                    {error}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className="block mb-2 text-xs uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>Full Name *</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="John Smith"
                      style={fieldStyle('name')}
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-xs uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>Email *</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="john@company.com"
                      style={fieldStyle('email')}
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-xs uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>Phone</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={e => setForm({ ...form, phone: e.target.value })}
                      onFocus={() => setFocusedField('phone')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="+1 (555) 000-0000"
                      style={fieldStyle('phone')}
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-xs uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>Company</label>
                    <input
                      type="text"
                      value={form.company}
                      onChange={e => setForm({ ...form, company: e.target.value })}
                      onFocus={() => setFocusedField('company')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Your Company Name"
                      style={fieldStyle('company')}
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-xs uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>Project Type</label>
                    <select
                      value={form.projectType}
                      onChange={e => setForm({ ...form, projectType: e.target.value })}
                      onFocus={() => setFocusedField('projectType')}
                      onBlur={() => setFocusedField(null)}
                      style={{ ...fieldStyle('projectType'), appearance: 'none' }}
                    >
                      <option value="" style={{ background: '#1a1a2e' }}>Select project type</option>
                      <option value="commercial" style={{ background: '#1a1a2e' }}>Commercial / Ad Film</option>
                      <option value="corporate" style={{ background: '#1a1a2e' }}>Corporate Film</option>
                      <option value="documentary" style={{ background: '#1a1a2e' }}>Documentary</option>
                      <option value="event" style={{ background: '#1a1a2e' }}>Event Coverage</option>
                      <option value="music" style={{ background: '#1a1a2e' }}>Music Video</option>
                      <option value="social" style={{ background: '#1a1a2e' }}>Social Media Content</option>
                      <option value="other" style={{ background: '#1a1a2e' }}>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block mb-2 text-xs uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>Budget Range</label>
                    <select
                      value={form.budget}
                      onChange={e => setForm({ ...form, budget: e.target.value })}
                      onFocus={() => setFocusedField('budget')}
                      onBlur={() => setFocusedField(null)}
                      style={{ ...fieldStyle('budget'), appearance: 'none' }}
                    >
                      <option value="" style={{ background: '#1a1a2e' }}>Select budget range</option>
                      <option value="under5k" style={{ background: '#1a1a2e' }}>Under $5,000</option>
                      <option value="5k-15k" style={{ background: '#1a1a2e' }}>$5,000 – $15,000</option>
                      <option value="15k-50k" style={{ background: '#1a1a2e' }}>$15,000 – $50,000</option>
                      <option value="50k-100k" style={{ background: '#1a1a2e' }}>$50,000 – $100,000</option>
                      <option value="100k+" style={{ background: '#1a1a2e' }}>$100,000+</option>
                    </select>
                  </div>
                </div>

                <div className="mb-7">
                  <label className="block mb-2 text-xs uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>Project Description *</label>
                  <textarea
                    required
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Tell us about your project, timeline, goals, and any specific requirements..."
                    rows={5}
                    style={{ ...fieldStyle('message'), resize: 'none' }}
                  />
                </div>

                <button
                  type="submit"
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
                  <Send size={18} />
                  {submitting ? 'Sending...' : 'Send Message'}
                </button>
              </motion.form>
            )}
          </div>

          {/* Info */}
          <div className="space-y-6">
            {/* Contact cards */}
            {[
              { icon: <MapPin size={20} />, label: 'Studio Location', value: '42 Studio Row, Los Angeles, CA 90028', color: '#00d4ff' },
              { icon: <Phone size={20} />, label: 'Phone', value: '+1 (424) 555-0198', color: '#a855f7' },
              { icon: <Mail size={20} />, label: 'Email', value: 'hello@visualcraft.it', color: '#f59e0b' },
              { icon: <Clock size={20} />, label: 'Hours', value: 'Mon–Fri: 9 AM – 7 PM PST', color: '#ef4444' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="p-5 rounded-2xl flex items-start gap-4"
                style={{ background: `${item.color}06`, border: `1px solid ${item.color}20` }}
              >
                <div className="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center" style={{ background: `${item.color}15`, color: item.color }}>
                  {item.icon}
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest mb-1" style={{ color: item.color, fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>{item.label}</div>
                  <div style={{ color: 'rgba(255,255,255,0.75)', fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.9rem', lineHeight: 1.5 }}>{item.value}</div>
                </div>
              </motion.div>
            ))}

            {/* Social */}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }} className="p-6 rounded-2xl" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
              <div className="text-xs uppercase tracking-widest mb-4" style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>Follow Us</div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: <FiverrIcon size={18} />, label: 'Fiverr', color: '#1dbf73', href: 'https://www.fiverr.com/' },
                  { icon: <UpworkIcon size={18} />, label: 'Upwork', color: '#14a3f7', href: 'https://www.upwork.com/' },
                  { icon: <Linkedin size={18} />, label: 'LinkedIn', color: '#0a66c2', href: 'https://www.linkedin.com/' },
                ].map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2.5 p-3 rounded-xl transition-all duration-200 hover:scale-105"
                    style={{ background: `${s.color}10`, border: `1px solid ${s.color}20`, color: s.color }}
                  >
                    {s.icon}
                    <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.78rem', fontWeight: 600, color: 'rgba(255,255,255,0.6)' }}>{s.label}</span>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Map placeholder */}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 }} className="rounded-2xl overflow-hidden" style={{ height: '200px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', position: 'relative' }}>
              <div className="absolute inset-0 flex items-center justify-center flex-col gap-2">
                <MapPin size={28} style={{ color: '#00d4ff' }} />
                <span style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.8rem' }}>Los Angeles, CA</span>
                <div className="w-32 h-[1px] mt-1" style={{ background: 'linear-gradient(to right, transparent, rgba(0,212,255,0.5), transparent)' }} />
              </div>
              {/* Grid lines for map effect */}
              <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(0,212,255,0.5)" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Book a Call CTA */}
      <section className="py-16 px-4 sm:px-6 max-w-4xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-10 rounded-3xl" style={{ background: 'linear-gradient(135deg, rgba(0,212,255,0.08), rgba(168,85,247,0.08))', border: '1px solid rgba(0,212,255,0.15)' }}>
          <h2 className="mb-3" style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'white' }}>
            Prefer to <span style={{ background: 'linear-gradient(to right, #00d4ff, #a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Talk?</span>
          </h2>
          <p className="mb-6 max-w-lg mx-auto" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'Space Grotesk, sans-serif', lineHeight: 1.7 }}>
            Schedule a free 30-minute discovery call with our creative team to discuss your vision.
          </p>
          <button
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
            style={{ background: 'linear-gradient(to right, #00d4ff, #a855f7)', color: 'white', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, boxShadow: '0 0 35px rgba(0,212,255,0.3)', fontSize: '1.05rem' }}
          >
            <Phone size={18} />
            Schedule a Free Call
          </button>
        </motion.div>
      </section>
    </div>
  );
}
