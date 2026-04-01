import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowRight, Eye, Heart, Zap, Target, Users, Award } from 'lucide-react';

const ABOUT_BG = 'https://images.unsplash.com/photo-1769699167687-540cce99f744?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjaW5lbWElMjBjYW1lcmElMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzczNzQwNDg4fDA&ixlib=rb-4.1.0&q=80&w=1080';
const TEAM_COLLAB = 'https://images.unsplash.com/photo-1764593605393-e7c44d74b677?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRpcmVjdG9yJTIwZmlsbSUyMHN0dWRpbyUyMHRlYW0lMjBjb2xsYWJvcmF0aW9ufGVufDF8fHx8MTc3Mzc0Nzg2MXww&ixlib=rb-4.1.0&q=80&w=1080';

const timeline = [
  { year: '2013', title: 'Studio Founded', desc: 'VISUALCRAFT.IT began as a small two-person team with a camera and a dream.' },
  { year: '2015', title: 'First Major Brand', desc: 'Landed our first Fortune 500 client — a turning point for the studio.' },
  { year: '2017', title: 'International Expansion', desc: 'Opened operations in New York, London, and Dubai.' },
  { year: '2019', title: 'Award Recognition', desc: 'Received 12 international awards for cinematic excellence.' },
  { year: '2021', title: 'Studio 2.0', desc: 'Upgraded to a 10,000 sq ft state-of-the-art production facility.' },
  { year: '2024', title: 'AI Integration', desc: 'Pioneer in blending AI-enhanced workflows with traditional cinematic craft.' },
];

const values = [
  { icon: <Eye size={24} />, title: 'Vision', desc: 'We see stories others miss — the details, emotions, and moments that define a brand.', color: '#00d4ff' },
  { icon: <Heart size={24} />, title: 'Passion', desc: 'Every project receives our full creative dedication, regardless of scope or budget.', color: '#ef4444' },
  { icon: <Target size={24} />, title: 'Precision', desc: 'Technical excellence paired with artistic intention in every production decision.', color: '#f59e0b' },
  { icon: <Zap size={24} />, title: 'Innovation', desc: 'Constantly evolving our craft with the latest technology and creative thinking.', color: '#a855f7' },
];

const clients = ['APEX Corp', 'NovaBrand', 'Luminary Films', 'Skyline Media', 'Fusion Group', 'Stellar Co', 'Orbit Digital', 'Peak Labs'];

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } };

export function About() {
  return (
    <div style={{ background: '#04040a' }}>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={ABOUT_BG} alt="About" className="w-full h-full object-cover" style={{ filter: 'brightness(0.25) saturate(0.7)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(4,4,10,0.4) 0%, rgba(4,4,10,0.95) 100%)' }} />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] blur-[80px]" style={{ background: 'rgba(0,212,255,0.07)' }} />
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 pt-24">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xs uppercase tracking-widest mb-4" style={{ color: '#00d4ff', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>Our Story</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.8 }} style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 900, fontSize: 'clamp(3rem, 7vw, 6rem)', lineHeight: 0.95, color: 'white', letterSpacing: '-0.02em' }}>
            Crafting Visual<br />
            <span style={{ background: 'linear-gradient(to right, #00d4ff, #a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Experiences</span><br />
            with Purpose
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }} className="mt-6 max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'Space Grotesk, sans-serif', fontSize: '1.1rem', lineHeight: 1.7 }}>
            We are a collective of filmmakers, artists, and storytellers united by a singular mission: to create video content that moves people and moves the needle.
          </motion.p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <p className="text-xs uppercase tracking-widest mb-3" style={{ color: '#a855f7', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>Who We Are</p>
            <h2 className="mb-6" style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800, fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', color: 'white', lineHeight: 1.05 }}>
              Born from a Passion<br />for <span style={{ color: '#a855f7' }}>Cinema</span>
            </h2>
            <div className="space-y-4" style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'Space Grotesk, sans-serif', lineHeight: 1.8, fontSize: '0.95rem' }}>
              <p>VISUALCRAFT.IT was founded in 2013 by a group of award-winning cinematographers and storytellers who believed that every brand has a story worth telling beautifully.</p>
              <p>Over 12 years, we've grown from a small indie studio into a globally recognized production powerhouse — working with Fortune 500 companies, independent artists, and everything in between.</p>
              <p>Our philosophy is simple: great video is not about equipment or budgets — it's about understanding your audience, your story, and your moment.</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative">
            <div className="relative rounded-3xl overflow-hidden" style={{ aspectRatio: '4/3' }}>
              <img src={TEAM_COLLAB} alt="Team collaboration" className="w-full h-full object-cover" />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(0,212,255,0.1) 0%, rgba(168,85,247,0.15) 100%)' }} />
            </div>
            {/* Stats overlay */}
            <div className="absolute -bottom-6 -left-6 p-5 rounded-2xl" style={{ background: 'rgba(4,4,10,0.9)', border: '1px solid rgba(0,212,255,0.2)', backdropFilter: 'blur(20px)' }}>
              <div className="text-3xl mb-0.5" style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 900, color: '#00d4ff' }}>850+</div>
              <div className="text-xs" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'Space Grotesk, sans-serif' }}>Projects Delivered</div>
            </div>
            <div className="absolute -top-4 -right-4 p-4 rounded-2xl" style={{ background: 'rgba(4,4,10,0.9)', border: '1px solid rgba(168,85,247,0.2)', backdropFilter: 'blur(20px)' }}>
              <div className="text-2xl mb-0.5" style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 900, color: '#a855f7' }}>94</div>
              <div className="text-xs" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'Space Grotesk, sans-serif' }}>Awards Won</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-4 sm:px-6" style={{ background: 'rgba(0,0,0,0.3)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-widest mb-3" style={{ color: '#f59e0b', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>Journey</p>
            <h2 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800, fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'white', lineHeight: 1.05 }}>
              Our <span style={{ background: 'linear-gradient(to right, #f59e0b, #ef4444)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Timeline</span>
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px]" style={{ background: 'linear-gradient(to bottom, transparent, rgba(0,212,255,0.4), transparent)' }} />
            <div className="space-y-12">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className={`flex ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center gap-8`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className="inline-block p-5 rounded-2xl" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                      <div className="text-sm mb-1" style={{ color: '#00d4ff', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>{item.year}</div>
                      <h3 style={{ color: 'white', fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700, fontSize: '1.3rem' }}>{item.title}</h3>
                      <p style={{ color: 'rgba(255,255,255,0.45)', fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.85rem', lineHeight: 1.6 }}>{item.desc}</p>
                    </div>
                  </div>
                  <div className="relative z-10 w-5 h-5 rounded-full flex-shrink-0" style={{ background: 'linear-gradient(to right, #00d4ff, #a855f7)', boxShadow: '0 0 15px rgba(0,212,255,0.5)' }} />
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="py-24 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-widest mb-3" style={{ color: '#00d4ff', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>Our Foundation</p>
          <h2 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800, fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'white', lineHeight: 1.05 }}>
            Mission, Vision &amp; <span style={{ background: 'linear-gradient(to right, #00d4ff, #a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Values</span>
          </h2>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {[
            { label: 'Mission', icon: <Target size={22} />, color: '#00d4ff', text: 'To democratize world-class video storytelling — empowering brands, artists, and creators with cinematic tools and talent that drive genuine human connection.' },
            { label: 'Vision', icon: <Eye size={22} />, color: '#a855f7', text: 'To be the most trusted and celebrated video production studio in the world — recognized not just for our craft, but for the transformative impact of every story we tell.' },
          ].map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.6 }} className="p-8 rounded-3xl" style={{ background: `${item.color}08`, border: `1px solid ${item.color}25`, backdropFilter: 'blur(10px)' }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${item.color}20`, color: item.color }}>{item.icon}</div>
                <h3 style={{ color: 'white', fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700, fontSize: '1.5rem' }}>{item.label}</h3>
              </div>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'Space Grotesk, sans-serif', lineHeight: 1.8 }}>{item.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map((v, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }} className="p-6 rounded-2xl text-center" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ background: `${v.color}15`, color: v.color }}>{v.icon}</div>
              <h4 className="mb-2" style={{ color: 'white', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700 }}>{v.title}</h4>
              <p style={{ color: 'rgba(255,255,255,0.45)', fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.83rem', lineHeight: 1.6 }}>{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Clients */}
      <section className="py-20 px-4 sm:px-6" style={{ background: 'rgba(0,0,0,0.3)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest mb-10" style={{ color: 'rgba(255,255,255,0.35)', fontFamily: 'Space Grotesk, sans-serif' }}>Trusted by leading brands worldwide</p>
          <div className="flex flex-wrap justify-center gap-6">
            {clients.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="px-6 py-3 rounded-full cursor-default transition-all duration-300 hover:border-[#00d4ff]/40"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.4)', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: '0.9rem', letterSpacing: '0.05em' }}
              >
                {c}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 sm:px-6 max-w-4xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <h2 className="mb-4" style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 900, fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', color: 'white', lineHeight: 1.0 }}>
            Let's Create Something<br /><span style={{ background: 'linear-gradient(to right, #00d4ff, #a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Extraordinary Together</span>
          </h2>
          <p className="mb-8 max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'Space Grotesk, sans-serif', lineHeight: 1.7 }}>Join 40+ global brands who trust VISUALCRAFT.IT to tell their most important stories.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full transition-all duration-300 hover:scale-105" style={{ background: 'linear-gradient(to right, #00d4ff, #a855f7)', color: 'white', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, boxShadow: '0 0 40px rgba(0,212,255,0.3)', fontSize: '1.05rem' }}>
            Work With Us <ArrowRight size={18} />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
