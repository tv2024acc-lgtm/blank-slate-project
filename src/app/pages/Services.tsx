import { Link } from 'react-router';
import { motion } from 'motion/react';
import {
  Video, Monitor, Film, Layers, Radio, Aperture, Camera, Zap,
  ArrowRight, ChevronRight, Mic, Palette, Play, Music
} from 'lucide-react';

const SERVICES_BG = 'https://images.unsplash.com/photo-1767126600705-b40408eabd3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGVkaXRpbmclMjBwb3N0JTIwcHJvZHVjdGlvbiUyMHN0dWRpb3xlbnwxfHx8fDE3NzM3NDc4NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080';

const services = [
  { icon: <Video size={26} />, title: 'Cinematic Video Production', desc: 'Full-scale productions from pre-production planning to cinematic final delivery.', color: '#00d4ff' },
  { icon: <Film size={26} />, title: 'Corporate Films', desc: 'Professional corporate videos that communicate your brand values with impact.', color: '#a855f7' },
  { icon: <Radio size={26} />, title: 'Ad Films & Commercials', desc: 'High-impact television and digital advertisements engineered to convert.', color: '#f59e0b' },
  { icon: <Camera size={26} />, title: 'Documentary Production', desc: 'Long-form storytelling that explores, investigates, and inspires audiences.', color: '#ef4444' },
  { icon: <Zap size={26} />, title: 'Event Coverage', desc: 'Comprehensive multi-camera event filming with cinematic post-production.', color: '#00d4ff' },
  { icon: <Aperture size={26} />, title: 'Drone Videography', desc: 'FAA-certified drone operators capturing breathtaking aerial perspectives.', color: '#a855f7' },
  { icon: <Monitor size={26} />, title: 'Product Videos', desc: 'Showcase your products with compelling visuals that drive purchasing decisions.', color: '#f59e0b' },
  { icon: <Play size={26} />, title: 'Social Media Videos', desc: 'Platform-optimized short-form content designed for maximum engagement.', color: '#ef4444' },
  { icon: <Film size={26} />, title: 'YouTube Content', desc: 'Long-form YouTube productions that grow channels and build communities.', color: '#00d4ff' },
  { icon: <Layers size={26} />, title: 'Post-Production Editing', desc: 'Expert offline and online editing that transforms raw footage into magic.', color: '#a855f7' },
  { icon: <Palette size={26} />, title: 'Color Grading', desc: 'Cinematic color science that defines your visual identity and mood.', color: '#f59e0b' },
  { icon: <Zap size={26} />, title: 'VFX & Motion Graphics', desc: 'Visual effects and animation that elevate storytelling to another dimension.', color: '#ef4444' },
  { icon: <Layers size={26} />, title: 'Animation', desc: '2D and 3D animation for explainers, brand films, and artistic projects.', color: '#00d4ff' },
  { icon: <Mic size={26} />, title: 'Sound Design', desc: 'Immersive audio landscapes with original scoring and professional mixing.', color: '#a855f7' },
  { icon: <Music size={26} />, title: 'Music Videos', desc: 'Artist-forward music video productions that capture creative vision.', color: '#f59e0b' },
];

const process = [
  { step: '01', title: 'Discovery', desc: 'Deep-dive into your brand, audience, and goals.' },
  { step: '02', title: 'Concept', desc: 'Creative ideation and mood board development.' },
  { step: '03', title: 'Script & Plan', desc: 'Screenplay, storyboards, and production planning.' },
  { step: '04', title: 'Shooting', desc: 'Professional production with our expert crew.' },
  { step: '05', title: 'Editing', desc: 'Precise post-production and storytelling refinement.' },
  { step: '06', title: 'Motion & Sound', desc: 'VFX, color grading, and audio mastering.' },
  { step: '07', title: 'Delivery', desc: 'Final delivery in all required formats and specs.' },
];

export function Services() {
  return (
    <div style={{ background: '#04040a' }}>
      {/* Hero */}
      <section className="relative min-h-[65vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={SERVICES_BG} alt="Services" className="w-full h-full object-cover" style={{ filter: 'brightness(0.2) saturate(0.7)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(4,4,10,0.5) 0%, rgba(4,4,10,0.95) 100%)' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] blur-[100px]" style={{ background: 'rgba(168,85,247,0.08)' }} />
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 pt-24">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xs uppercase tracking-widest mb-4" style={{ color: '#a855f7', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>What We Offer</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.8 }} style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 900, fontSize: 'clamp(3rem, 7vw, 6rem)', lineHeight: 0.95, color: 'white', letterSpacing: '-0.02em' }}>
            Full-Service <span style={{ background: 'linear-gradient(to right, #a855f7, #ef4444)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Production</span><br />Excellence
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }} className="mt-6 max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'Space Grotesk, sans-serif', fontSize: '1.05rem', lineHeight: 1.7 }}>
            From concept to final delivery, we offer end-to-end video production services designed for brands that refuse to settle for ordinary.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800, fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: 'white', lineHeight: 1.05 }}>
            Our <span style={{ background: 'linear-gradient(to right, #a855f7, #ef4444)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Services</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((svc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.1, duration: 0.6 }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              className="group relative p-7 rounded-2xl overflow-hidden cursor-pointer"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', backdropFilter: 'blur(10px)' }}
            >
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5" style={{ background: `${svc.color}12`, color: svc.color, border: `1px solid ${svc.color}25` }}>
                {svc.icon}
              </div>
              <h3 className="mb-2" style={{ color: 'white', fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700, fontSize: '1.3rem' }}>{svc.title}</h3>
              <p style={{ color: 'rgba(255,255,255,0.45)', fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.85rem', lineHeight: 1.7 }}>{svc.desc}</p>
              <div className="mt-5 flex items-center gap-1.5 text-xs" style={{ color: svc.color, fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>
                Explore <ChevronRight size={13} />
              </div>
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: `radial-gradient(circle at 30% 30%, ${svc.color}07 0%, transparent 65%)` }} />
              <div className="absolute bottom-0 left-0 right-0 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: `linear-gradient(to right, transparent, ${svc.color}, transparent)` }} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-4 sm:px-6" style={{ background: 'rgba(0,0,0,0.3)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-widest mb-3" style={{ color: '#f59e0b', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>How We Work</p>
            <h2 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800, fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'white', lineHeight: 1.05 }}>
              Our <span style={{ background: 'linear-gradient(to right, #f59e0b, #ef4444)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Production Process</span>
            </h2>
          </div>

          <div className="relative">
            {/* Connector line */}
            <div className="hidden lg:block absolute top-10 left-0 right-0 h-[1px]" style={{ background: 'linear-gradient(to right, transparent, rgba(0,212,255,0.3), transparent)' }} />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-6">
              {process.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="relative text-center"
                >
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5 relative"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(0,212,255,0.2)' }}
                  >
                    <span style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 900, fontSize: '1.4rem', color: '#00d4ff' }}>{p.step}</span>
                    <div className="absolute -inset-1 rounded-full opacity-30" style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.2), transparent)' }} />
                  </div>
                  <h4 className="mb-1" style={{ color: 'white', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '0.9rem' }}>{p.title}</h4>
                  <p style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.8rem', lineHeight: 1.5 }}>{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs uppercase tracking-widest mb-3" style={{ color: '#00d4ff', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>Why Choose Our Services</p>
            <h2 className="mb-8" style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800, fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', color: 'white', lineHeight: 1.05 }}>
              Everything You Need<br />Under One <span style={{ color: '#00d4ff' }}>Roof</span>
            </h2>
            <div className="space-y-4">
              {[
                'End-to-end production — no outsourcing, no compromises',
                '100+ in-house crew members across 3 global studios',
                '4K, 6K, and 8K cinematic camera systems',
                'Dedicated project manager for every client',
                'Unlimited revisions until you\'re completely satisfied',
                'On-time delivery guaranteed by contract',
              ].map((b, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full flex-shrink-0 mt-0.5 flex items-center justify-center" style={{ background: 'rgba(0,212,255,0.15)', border: '1px solid rgba(0,212,255,0.3)' }}>
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00d4ff]" />
                  </div>
                  <span style={{ color: 'rgba(255,255,255,0.65)', fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.95rem', lineHeight: 1.6 }}>{b}</span>
                </motion.div>
              ))}
            </div>
          </div>
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="grid grid-cols-2 gap-4">
            {[
              { label: '4K+', sub: 'Resolution Minimum', color: '#00d4ff' },
              { label: '48h', sub: 'Rush Delivery', color: '#a855f7' },
              { label: '100%', sub: 'Client Satisfaction', color: '#f59e0b' },
              { label: '3', sub: 'Global Studios', color: '#ef4444' },
            ].map((s, i) => (
              <div key={i} className="p-6 rounded-2xl text-center" style={{ background: `${s.color}08`, border: `1px solid ${s.color}20` }}>
                <div className="text-4xl mb-1" style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 900, color: s.color }}>{s.label}</div>
                <div style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.8rem' }}>{s.sub}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 sm:px-6 max-w-4xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-12 rounded-3xl" style={{ background: 'linear-gradient(135deg, rgba(168,85,247,0.1), rgba(239,68,68,0.1))', border: '1px solid rgba(168,85,247,0.2)' }}>
          <h2 className="mb-4" style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 900, fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'white', lineHeight: 1.0 }}>
            Let's Produce Your<br /><span style={{ background: 'linear-gradient(to right, #a855f7, #ef4444)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Next Visual Story</span>
          </h2>
          <p className="mb-8 max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'Space Grotesk, sans-serif', lineHeight: 1.7 }}>
            Ready to elevate your brand with world-class video production? Let's talk about your vision.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full transition-all duration-300 hover:scale-105" style={{ background: 'linear-gradient(to right, #a855f7, #ef4444)', color: 'white', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, boxShadow: '0 0 30px rgba(168,85,247,0.3)', fontSize: '1.05rem' }}>
            Get a Free Quote <ArrowRight size={18} />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
