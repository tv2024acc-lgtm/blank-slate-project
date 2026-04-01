import { useState } from 'react';
import { Link } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { Check, ChevronDown, ArrowRight, Zap } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '$2,500',
    sub: 'per project',
    desc: 'Perfect for small businesses and content creators getting started with professional video.',
    color: '#00d4ff',
    popular: false,
    features: [
      '1 shoot day (8 hours)',
      '1 minute edited video',
      'Basic color grading',
      '1 round of revisions',
      '2 social media cuts',
      '1080p delivery',
      'Script consultation',
    ],
    cta: 'Get Started',
  },
  {
    name: 'Professional',
    price: '$7,500',
    sub: 'per project',
    desc: 'Ideal for established brands seeking cinematic quality with comprehensive production support.',
    color: '#a855f7',
    popular: true,
    features: [
      '3 shoot days (8 hrs each)',
      'Up to 3 min edited video',
      'Cinematic color grading',
      '3 rounds of revisions',
      '5 social media cuts',
      '4K delivery',
      'Drone footage included',
      'Professional voiceover',
      'Custom music scoring',
      'Motion graphics',
      'Dedicated producer',
    ],
    cta: 'Most Popular',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    sub: 'tailored quote',
    desc: 'For global brands and agencies requiring full-scale cinematic productions without limits.',
    color: '#f59e0b',
    popular: false,
    features: [
      'Unlimited shoot days',
      'Full-length productions',
      'Hollywood-grade color grade',
      'Unlimited revisions',
      'Unlimited format delivery',
      '8K RAW delivery',
      'International shooting',
      'Full VFX & animation',
      'Original soundtrack',
      'Multi-language versions',
      'Priority 24/7 support',
      'Exclusive IP rights',
    ],
    cta: 'Get a Quote',
  },
];

const addons = [
  { label: 'Drone Shooting', price: '+$800', color: '#00d4ff' },
  { label: 'Extra Revision Round', price: '+$300', color: '#a855f7' },
  { label: 'Subtitles / Captions', price: '+$200', color: '#f59e0b' },
  { label: 'Express 48h Delivery', price: '+$500', color: '#ef4444' },
  { label: 'Advanced VFX Package', price: '+$1,500', color: '#00d4ff' },
  { label: 'Extra Shoot Day', price: '+$900', color: '#a855f7' },
  { label: 'Voice-Over Recording', price: '+$400', color: '#f59e0b' },
  { label: 'Animated Logo Intro', price: '+$350', color: '#ef4444' },
];

const faqs = [
  { q: 'How long does a typical project take?', a: 'Project timelines vary based on scope. A Starter project typically takes 2-3 weeks from shoot to delivery. Professional projects range from 4-8 weeks. Enterprise timelines are custom-planned based on your needs.' },
  { q: 'Do you work with international clients?', a: 'Absolutely. We have produced projects in 40+ countries and have crews stationed globally. We handle all travel, permits, and logistics for international shoots.' },
  { q: 'What happens if I need more revisions?', a: 'Your plan includes a set number of revision rounds. Additional rounds can be purchased as add-ons. Our goal is always to get it right within your included revisions through thorough briefing.' },
  { q: 'Who owns the final footage?', a: 'All intellectual property transfers fully to you upon final payment. Professional and Enterprise plans include full IP rights. Starter plans include usage rights for specified platforms.' },
  { q: 'Can I upgrade my plan mid-project?', a: 'Yes. Many clients start with a Starter plan and upgrade once they see the quality. We\'ll credit your existing payment toward the higher tier.' },
  { q: 'Do you offer payment plans?', a: 'Yes. We offer 50/25/25 split payments (deposit/shoot/delivery) for all plans. Enterprise clients can negotiate custom payment schedules.' },
];

export function Pricing() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div style={{ background: '#04040a' }}>
      {/* Hero */}
      <section className="relative pt-40 pb-20 text-center overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at top, rgba(0,212,255,0.06) 0%, transparent 60%)' }} />
        <div className="relative max-w-4xl mx-auto px-4">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xs uppercase tracking-widest mb-4" style={{ color: '#00d4ff', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>Investment</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.8 }} style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 900, fontSize: 'clamp(3rem, 7vw, 6rem)', lineHeight: 0.95, color: 'white', letterSpacing: '-0.02em' }}>
            Transparent <span style={{ background: 'linear-gradient(to right, #00d4ff, #a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Pricing</span><br />No Surprises
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }} className="mt-6 max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'Space Grotesk, sans-serif', fontSize: '1.05rem', lineHeight: 1.7 }}>
            Clear, honest pricing for world-class video production. Choose the plan that fits your vision.
          </motion.p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-10 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className="relative p-7 rounded-3xl flex flex-col"
              style={{
                background: plan.popular ? `linear-gradient(135deg, ${plan.color}12, rgba(0,0,0,0.5))` : 'rgba(255,255,255,0.03)',
                border: plan.popular ? `1px solid ${plan.color}50` : '1px solid rgba(255,255,255,0.08)',
                boxShadow: plan.popular ? `0 0 50px ${plan.color}20` : 'none',
              }}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs" style={{ background: plan.color, color: 'white', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700 }}>
                  <Zap size={12} fill="white" /> Most Popular
                </div>
              )}

              <div className="mb-6">
                <div className="text-xs uppercase tracking-widest mb-3" style={{ color: plan.color, fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>{plan.name}</div>
                <div className="flex items-end gap-2 mb-2">
                  <span style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 900, fontSize: '3rem', color: 'white', lineHeight: 1 }}>{plan.price}</span>
                  <span style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.8rem', marginBottom: '6px' }}>{plan.sub}</span>
                </div>
                <p style={{ color: 'rgba(255,255,255,0.45)', fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.85rem', lineHeight: 1.6 }}>{plan.desc}</p>
              </div>

              <div className="flex-1 mb-8">
                <div className="h-[1px] mb-5" style={{ background: `linear-gradient(to right, ${plan.color}30, transparent)` }} />
                <ul className="space-y-3">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <div className="w-4 h-4 rounded-full flex-shrink-0 mt-0.5 flex items-center justify-center" style={{ background: `${plan.color}20` }}>
                        <Check size={10} style={{ color: plan.color }} />
                      </div>
                      <span style={{ color: 'rgba(255,255,255,0.65)', fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.85rem', lineHeight: 1.5 }}>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                to="/contact"
                className="w-full py-3.5 rounded-full text-center text-sm transition-all duration-300 hover:scale-105 block"
                style={{
                  background: plan.popular ? plan.color : 'rgba(255,255,255,0.07)',
                  color: 'white',
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontWeight: 700,
                  border: plan.popular ? 'none' : `1px solid ${plan.color}40`,
                  boxShadow: plan.popular ? `0 0 25px ${plan.color}40` : 'none',
                }}
              >
                {plan.cta} <ArrowRight size={14} className="inline ml-1" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800, fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: 'white' }}>
            Plan <span style={{ background: 'linear-gradient(to right, #00d4ff, #a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Comparison</span>
          </h2>
        </div>
        <div className="overflow-x-auto rounded-2xl" style={{ border: '1px solid rgba(255,255,255,0.07)' }}>
          <table className="w-full" style={{ borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                <th className="py-4 px-6 text-left" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.8rem', fontWeight: 600 }}>Feature</th>
                {plans.map(p => (
                  <th key={p.name} className="py-4 px-6 text-center" style={{ color: p.color, fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.85rem', fontWeight: 700 }}>{p.name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ['Shoot Days', '1', '3', 'Unlimited'],
                ['4K Delivery', '✗', '✓', '✓'],
                ['Drone Footage', '✗', '✓', '✓'],
                ['Motion Graphics', '✗', '✓', '✓'],
                ['Custom Music', '✗', '✓', '✓'],
                ['Revisions', '1', '3', 'Unlimited'],
                ['Dedicated Producer', '✗', '✓', '✓'],
                ['International Shoots', '✗', '✗', '✓'],
              ].map((row, i) => (
                <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)', background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.01)' }}>
                  <td className="py-3.5 px-6 text-sm" style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'Space Grotesk, sans-serif' }}>{row[0]}</td>
                  {row.slice(1).map((val, j) => (
                    <td key={j} className="py-3.5 px-6 text-center text-sm" style={{ color: val === '✓' ? plans[j].color : val === '✗' ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.65)', fontFamily: 'Space Grotesk, sans-serif', fontWeight: val === '✓' || val === '✗' ? 700 : 400 }}>
                      {val}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-16 px-4 sm:px-6 max-w-7xl mx-auto" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-widest mb-3" style={{ color: '#f59e0b', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>Enhance Your Project</p>
          <h2 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800, fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: 'white' }}>
            Available <span style={{ background: 'linear-gradient(to right, #f59e0b, #ef4444)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Add-Ons</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {addons.map((a, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }} className="p-5 rounded-2xl flex items-center justify-between" style={{ background: `${a.color}07`, border: `1px solid ${a.color}20` }}>
              <span style={{ color: 'rgba(255,255,255,0.7)', fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.85rem', fontWeight: 500 }}>{a.label}</span>
              <span style={{ color: a.color, fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800, fontSize: '1rem' }}>{a.price}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-4 sm:px-6 max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-widest mb-3" style={{ color: '#00d4ff', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>Questions</p>
          <h2 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800, fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: 'white' }}>
            Frequently Asked <span style={{ background: 'linear-gradient(to right, #00d4ff, #a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Questions</span>
          </h2>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }} className="rounded-2xl overflow-hidden" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span style={{ color: 'white', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: '0.95rem', paddingRight: '1rem' }}>{faq.q}</span>
                <motion.div animate={{ rotate: openFaq === i ? 180 : 0 }} transition={{ duration: 0.3 }} style={{ flexShrink: 0, color: '#00d4ff' }}>
                  <ChevronDown size={20} />
                </motion.div>
              </button>
              <AnimatePresence>
                {openFaq === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.88rem', lineHeight: 1.8, borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                      <div className="pt-4">{faq.a}</div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
