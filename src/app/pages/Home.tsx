import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';
import { motion, useInView, useScroll, useTransform } from 'motion/react';
import {
  Play, ArrowRight, Camera, Film, Zap, Award, Globe, Users,
  ChevronRight, Star, Monitor, Aperture, Radio, Video, Layers
} from 'lucide-react';

const HERO_BG = 'https://images.unsplash.com/photo-1666858443985-fead1d59b4f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWF0aWMlMjBmaWxtJTIwcHJvZHVjdGlvbiUyMGRhcmslMjBzdHVkaW98ZW58MXx8fHwxNzczNjY4NTA2fDA&ixlib=rb-4.1.0&q=80&w=1080';
const PORTFOLIO_1 = 'https://images.unsplash.com/photo-1761370980993-3ec8c23709fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWxtJTIwZGlyZWN0b3IlMjBjbGFwcGVyYm9hcmQlMjBtb3ZpZSUyMHNldHxlbnwxfHx8fDE3NzM3NDc4NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080';
const PORTFOLIO_2 = 'https://images.unsplash.com/photo-1765344550212-a3b963d63c32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHZpZGVvJTIwcHJvZHVjdGlvbiUyMGNvbmNlcnQlMjBzdGFnZSUyMGxpZ2h0c3xlbnwxfHx8fDE3NzM3NDc4NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080';
const PORTFOLIO_3 = 'https://images.unsplash.com/photo-1761583780469-2f206ec7b270?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcm9uZSUyMGFlcmlhbCUyMHZpZGVvZ3JhcGh5JTIwbGFuZHNjYXBlfGVufDF8fHx8MTc3Mzc0Nzg1N3ww&ixlib=rb-4.1.0&q=80&w=1080';
const PORTFOLIO_4 = 'https://images.unsplash.com/photo-1664817550969-5e76adc4a3fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwYWR2ZXJ0aXNpbmclMjB2aWRlbyUyMHNob290JTIwc3R1ZGlvJTIwbGlnaHRzfGVufDF8fHx8MTc3Mzc0Nzg2MHww&ixlib=rb-4.1.0&q=80&w=1080';

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <div ref={ref}>{count}{suffix}</div>;
}

const fadeUp: any = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const stagger: any = {
  visible: { transition: { staggerChildren: 0.12 } },
};

const services = [
  { icon: <Video size={24} />, title: 'Video Production', desc: 'Full-scale cinematic video production from concept to final cut.', color: '#00d4ff' },
  { icon: <Monitor size={24} />, title: 'Post-Production', desc: 'Professional editing, grading, and sound design in our state-of-the-art suites.', color: '#a855f7' },
  { icon: <Film size={24} />, title: 'Video Editing', desc: 'Precision storytelling through rhythm, pacing, and visual flow.', color: '#f59e0b' },
  { icon: <Layers size={24} />, title: 'Motion Graphics', desc: 'Dynamic animations and visual effects that captivate audiences.', color: '#ef4444' },
  { icon: <Radio size={24} />, title: 'Ad Films', desc: 'High-impact commercials engineered to convert and inspire.', color: '#00d4ff' },
  { icon: <Aperture size={24} />, title: 'Drone Videography', desc: 'Breathtaking aerial perspectives with cinematic precision.', color: '#a855f7' },
  { icon: <Camera size={24} />, title: 'Event Filming', desc: 'Capturing milestones with documentary-level craft.', color: '#f59e0b' },
  { icon: <Zap size={24} />, title: 'Social Media Content', desc: 'Platform-optimized short-form content that drives engagement.', color: '#ef4444' },
];

const testimonials = [
  { name: 'Aria Patel', role: 'CMO, NovaBrand', text: 'VISUALCRAFT.IT transformed our brand story into a cinematic masterpiece. The results exceeded every expectation.', rating: 5 },
  { name: 'James Holloway', role: 'CEO, Apex Corp', text: 'The team delivered a corporate film that genuinely moved our audience. World-class production quality.', rating: 5 },
  { name: 'Sofia Ramos', role: 'Director, Luminary Films', text: 'Their attention to detail and cinematic vision is unmatched. Every frame tells a story.', rating: 5 },
];

const features = [
  { icon: <Film size={22} />, title: 'Creative Storytelling', desc: 'Every project begins with a powerful narrative that resonates emotionally.', color: '#00d4ff' },
  { icon: <Award size={22} />, title: 'Award-Winning Quality', desc: 'Production standards that have earned international recognition.', color: '#a855f7' },
  { icon: <Zap size={22} />, title: 'Fast Turnaround', desc: 'Efficient workflows delivering premium results on time, every time.', color: '#f59e0b' },
  { icon: <Globe size={22} />, title: 'Global Reach', desc: 'We have delivered projects across 40+ countries for global brands.', color: '#ef4444' },
];

// ── Adobe Software Orbs config ──
const adobeOrbs = [
  {
    label: 'Pr',
    outerColor: '#00c8ff',
    innerColor: '#9999ff',
    textColor: '#9999ff',
    bgColor: 'rgba(153,153,255,0.12)',
    glowColor: 'rgba(0,200,255,0.25)',
    bottom: '12%', left: '8%',
    size: 92,
    floatY: [-14, 0, -14],
    duration: 5.5, delay: 0,
    exitX: -120, exitY: 60,
  },
  {
    label: 'Ae',
    outerColor: '#9999ff',
    innerColor: '#00aeff',
    textColor: '#7b9bff',
    bgColor: 'rgba(0,174,255,0.1)',
    glowColor: 'rgba(153,153,255,0.22)',
    bottom: '12%', left: '30%',
    size: 80,
    floatY: [0, -18, 0],
    duration: 6.5, delay: 0.8,
    exitX: -60, exitY: 80,
  },
  {
    label: 'Ps',
    outerColor: '#31a8ff',
    innerColor: '#0b6fba',
    textColor: '#31a8ff',
    bgColor: 'rgba(49,168,255,0.1)',
    glowColor: 'rgba(49,168,255,0.22)',
    bottom: '12%', right: '30%',
    size: 82,
    floatY: [-12, 6, -12],
    duration: 7, delay: 0.4,
    exitX: 60, exitY: 80,
  },
  {
    label: 'Ai',
    outerColor: '#f59e0b',
    innerColor: '#c97a00',
    textColor: '#f59e0b',
    bgColor: 'rgba(245,158,11,0.1)',
    glowColor: 'rgba(245,158,11,0.22)',
    bottom: '12%', right: '8%',
    size: 86,
    floatY: [0, -16, 0],
    duration: 5, delay: 1.4,
    exitX: 120, exitY: 60,
  },
];

export function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [particles] = useState(() =>
    Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      color: i % 3 === 0 ? '#00d4ff' : i % 3 === 1 ? '#a855f7' : '#f59e0b',
      duration: 3 + Math.random() * 4,
      delay: Math.random() * 3,
    }))
  );

  // Scroll-based orb animation
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });

  // Per-orb scroll transforms (hooks must be called unconditionally at top level)
  const prX = useTransform(scrollYProgress, [0, 0.6], [0, adobeOrbs[0].exitX]);
  const prY = useTransform(scrollYProgress, [0, 0.6], [0, adobeOrbs[0].exitY]);
  const aeX = useTransform(scrollYProgress, [0, 0.6], [0, adobeOrbs[1].exitX]);
  const aeY = useTransform(scrollYProgress, [0, 0.6], [0, adobeOrbs[1].exitY]);
  const psX = useTransform(scrollYProgress, [0, 0.6], [0, adobeOrbs[2].exitX]);
  const psY = useTransform(scrollYProgress, [0, 0.6], [0, adobeOrbs[2].exitY]);
  const aiX = useTransform(scrollYProgress, [0, 0.6], [0, adobeOrbs[3].exitX]);
  const aiY = useTransform(scrollYProgress, [0, 0.6], [0, adobeOrbs[3].exitY]);
  const orbsOpacity = useTransform(scrollYProgress, [0, 0.45], [1, 0]);
  const orbsScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.6]);

  const orbScrollTransforms = [
    { x: prX, y: prY },
    { x: aeX, y: aeY },
    { x: psX, y: psY },
    { x: aiX, y: aiY },
  ];

  useEffect(() => {
    const t = setInterval(() => setActiveTestimonial(a => (a + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <div style={{ background: '#04040a' }}>
      {/* ─── HERO ─── */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img src={HERO_BG} alt="Hero" className="w-full h-full object-cover" style={{ filter: 'brightness(0.3) saturate(0.8)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(4,4,10,0.5) 0%, rgba(4,4,10,0.2) 50%, rgba(4,4,10,0.9) 100%)' }} />
          {/* Gradient orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[120px]" style={{ background: 'rgba(0,212,255,0.08)' }} />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-[120px]" style={{ background: 'rgba(168,85,247,0.08)' }} />
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {particles.map(p => (
            <motion.div
              key={p.id}
              className="absolute rounded-full"
              style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size, background: p.color, opacity: 0.5 }}
              animate={{ y: [0, -30, 0], opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: 'easeInOut' }}
            />
          ))}
        </div>

        {/* ── Adobe Software Orbs ── */}
        {adobeOrbs.map((orb, i) => (
          <motion.div
            key={orb.label}
            className="absolute hidden lg:flex items-center justify-center pointer-events-none"
            style={{
              bottom: (orb as any).bottom,
              left: (orb as any).left,
              right: (orb as any).right,
              width: orb.size,
              height: orb.size,
              zIndex: 4,
              x: orbScrollTransforms[i].x,
              y: orbScrollTransforms[i].y,
              opacity: orbsOpacity,
              scale: orbsScale,
            }}
          >
            {/* Inner float animation wrapper */}
            <motion.div
              className="relative w-full h-full flex items-center justify-center"
              animate={{ y: orb.floatY }}
              transition={{ duration: orb.duration, repeat: Infinity, ease: 'easeInOut', delay: orb.delay }}
            >
              {/* Outer glow ring */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  border: `1.5px solid ${orb.outerColor}`,
                  boxShadow: `0 0 22px ${orb.glowColor}, inset 0 0 14px ${orb.glowColor}`,
                  opacity: 0.78,
                }}
              />
              {/* Inner ring */}
              <div
                className="absolute rounded-full flex items-center justify-center"
                style={{
                  inset: '16%',
                  border: `1.5px solid ${orb.innerColor}`,
                  background: orb.bgColor,
                  boxShadow: `0 0 12px ${orb.glowColor}`,
                }}
              >
                <span
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 800,
                    fontSize: orb.size * 0.22,
                    color: orb.textColor,
                    letterSpacing: '-0.03em',
                    textShadow: `0 0 14px ${orb.textColor}`,
                    userSelect: 'none',
                  }}
                >
                  {orb.label}
                </span>
              </div>

              {/* Rotating tick marks */}
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
                style={{ opacity: 0.22 }}
              >
                {[0, 90, 180, 270].map((deg) => (
                  <div
                    key={deg}
                    className="absolute"
                    style={{
                      top: '50%', left: '50%',
                      width: '6px', height: '2px',
                      background: orb.outerColor,
                      borderRadius: '1px',
                      transformOrigin: `-${orb.size / 2 - 3}px 0`,
                      transform: `rotate(${deg}deg) translateX(-${orb.size / 2 - 3}px)`,
                      marginTop: '-1px', marginLeft: '-3px',
                    }}
                  />
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        ))}

        {/* 3D Floating film reel */}
        <motion.div
          className="absolute right-8 md:right-16 top-1/4 hidden lg:block"
          animate={{ y: [0, -20, 0], rotateZ: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div
            className="w-32 h-32 rounded-full flex items-center justify-center"
            style={{
              border: '3px solid rgba(0,212,255,0.3)',
              background: 'rgba(0,212,255,0.04)',
              boxShadow: '0 0 40px rgba(0,212,255,0.15)',
            }}
          >
            <div className="w-20 h-20 rounded-full flex items-center justify-center" style={{ border: '2px solid rgba(168,85,247,0.4)', background: 'rgba(168,85,247,0.05)' }}>
              <Film size={28} style={{ color: '#a855f7' }} />
            </div>
          </div>
        </motion.div>

        {/* Camera lens decoration */}
        <motion.div
          className="absolute left-8 md:left-16 bottom-1/3 hidden lg:block"
          animate={{ y: [0, 15, 0], rotateZ: [0, -5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        >
          <div className="w-20 h-20 rounded-full flex items-center justify-center" style={{ border: '2px solid rgba(245,158,11,0.3)', background: 'rgba(245,158,11,0.04)', boxShadow: '0 0 30px rgba(245,158,11,0.1)' }}>
            <Aperture size={24} style={{ color: '#f59e0b' }} />
          </div>
        </motion.div>

        {/* Hero content */}
        <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-4"
          >
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs uppercase tracking-widest"
              style={{
                background: 'rgba(0,212,255,0.1)',
                border: '1px solid rgba(0,212,255,0.25)',
                color: '#00d4ff',
                fontFamily: 'Space Grotesk, sans-serif',
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#00d4ff] animate-pulse" />
              Award-Winning Video Production
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35 }}
            className="mb-6"
            style={{
              fontFamily: 'Barlow Condensed, sans-serif',
              fontWeight: 900,
              fontSize: 'clamp(3rem, 8vw, 6.5rem)',
              lineHeight: 0.95,
              letterSpacing: '-0.02em',
              color: 'white',
            }}
          >
            We Create Visual<br />
            <span style={{ background: 'linear-gradient(to right, #00d4ff, #a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Stories That Move
            </span>
            <br />the World
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="max-w-2xl mx-auto mb-10"
            style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'Space Grotesk, sans-serif', fontSize: '1.1rem', lineHeight: 1.7 }}
          >
            From cinematic productions to viral social content — we turn bold visions into unforgettable visual experiences that captivate, convert, and inspire.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              to="/showreel"
              className="flex items-center gap-3 px-7 py-3.5 rounded-full transition-all duration-300 hover:scale-105"
              style={{
                background: 'linear-gradient(to right, #00d4ff, #a855f7)',
                color: 'white',
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: 700,
                boxShadow: '0 0 30px rgba(0,212,255,0.35)',
              }}
            >
              <Play size={18} fill="white" />
              Watch Showreel
            </Link>
            <Link
              to="/contact"
              className="flex items-center gap-2 px-7 py-3.5 rounded-full transition-all duration-300 hover:scale-105"
              style={{
                background: 'rgba(255,255,255,0.07)',
                border: '1px solid rgba(255,255,255,0.15)',
                color: 'white',
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: 600,
                backdropFilter: 'blur(10px)',
              }}
            >
              Start Your Project
              <ArrowRight size={17} />
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2">
            <div className="w-1 h-2 rounded-full bg-white/60" />
          </div>
        </motion.div>
      </section>

      {/* ─── STATS ─── */}
      <section className="py-16 relative" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { target: 850, suffix: '+', label: 'Projects Completed', color: '#00d4ff', icon: <Film size={20} /> },
              { target: 12, suffix: '+', label: 'Years of Excellence', color: '#a855f7', icon: <Award size={20} /> },
              { target: 40, suffix: '+', label: 'Global Clients', color: '#f59e0b', icon: <Globe size={20} /> },
              { target: 94, suffix: '', label: 'Awards Won', color: '#ef4444', icon: <Users size={20} /> },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="relative p-6 rounded-2xl text-center group"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: `1px solid rgba(${stat.color === '#00d4ff' ? '0,212,255' : stat.color === '#a855f7' ? '168,85,247' : stat.color === '#f59e0b' ? '245,158,11' : '239,68,68'},0.15)`,
                }}
              >
                <div className="flex justify-center mb-3" style={{ color: stat.color }}>{stat.icon}</div>
                <div
                  className="text-4xl md:text-5xl mb-1"
                  style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 900, color: stat.color }}
                >
                  <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                </div>
                <div style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.8rem', letterSpacing: '0.05em' }}>
                  {stat.label}
                </div>
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: `radial-gradient(circle at center, ${stat.color}08 0%, transparent 70%)` }} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES PREVIEW ─── */}
      <section className="py-24 px-4 sm:px-6 max-w-7xl mx-auto">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.p variants={fadeUp} className="text-xs uppercase tracking-widest mb-3" style={{ color: '#00d4ff', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>
            What We Do
          </motion.p>
          <motion.h2 variants={fadeUp} style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800, fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'white', lineHeight: 1.05, letterSpacing: '-0.01em' }}>
            Our Core <span style={{ background: 'linear-gradient(to right, #00d4ff, #a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Services</span>
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((svc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.6 }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="group relative p-6 rounded-2xl cursor-pointer overflow-hidden"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300"
                style={{ background: `${svc.color}15`, color: svc.color, border: `1px solid ${svc.color}25` }}
              >
                {svc.icon}
              </div>
              <h3 className="mb-2 text-base" style={{ color: 'white', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700 }}>{svc.title}</h3>
              <p style={{ color: 'rgba(255,255,255,0.45)', fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.85rem', lineHeight: 1.6 }}>{svc.desc}</p>
              <div className="mt-5 flex items-center gap-1.5 text-xs" style={{ color: svc.color, fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>
                Learn More <ChevronRight size={13} />
              </div>
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: `radial-gradient(circle at 30% 30%, ${svc.color}08 0%, transparent 60%)` }} />
              <div className="absolute bottom-0 left-0 right-0 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: `linear-gradient(to right, transparent, ${svc.color}, transparent)` }} />
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/services" className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm transition-all duration-300 hover:scale-105" style={{ border: '1px solid rgba(0,212,255,0.3)', color: '#00d4ff', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>
            View All Services <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* ─── PORTFOLIO PREVIEW ─── */}
      <section className="py-24 px-4 sm:px-6" style={{ background: 'rgba(0,0,0,0.3)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-xs uppercase tracking-widest mb-2" style={{ color: '#a855f7', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>Our Work</p>
              <h2 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800, fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'white', lineHeight: 1.05, letterSpacing: '-0.01em' }}>
                Featured <span style={{ background: 'linear-gradient(to right, #a855f7, #ef4444)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Projects</span>
              </h2>
            </div>
            <Link to="/portfolio" className="hidden md:flex items-center gap-2 text-sm" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'Space Grotesk, sans-serif' }}>
              View All <ArrowRight size={15} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { img: PORTFOLIO_1, title: 'The Last Frame', cat: 'Documentary', year: '2025' },
              { img: PORTFOLIO_2, title: 'Neon Pulse', cat: 'Music Video', year: '2025' },
              { img: PORTFOLIO_3, title: 'Skyward Bound', cat: 'Drone Footage', year: '2024' },
              { img: PORTFOLIO_4, title: 'Brand Horizon', cat: 'Commercial', year: '2025' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group relative rounded-2xl overflow-hidden cursor-pointer"
                style={{ aspectRatio: '4/5' }}
              >
                <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
                <div className="absolute inset-0 p-5 flex flex-col justify-end">
                  <span className="text-xs uppercase tracking-widest mb-1" style={{ color: '#00d4ff', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>{item.cat} · {item.year}</span>
                  <h3 style={{ color: 'white', fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700, fontSize: '1.3rem' }}>{item.title}</h3>
                  <div className="mt-3 flex items-center gap-1.5 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ color: '#a855f7', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>
                    <Play size={12} fill="#a855f7" /> View Project
                  </div>
                </div>
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
                  <Play size={14} className="text-white" fill="white" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ─── */}
      <section className="py-24 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <p className="text-xs uppercase tracking-widest mb-3" style={{ color: '#f59e0b', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>Why VISUALCRAFT.IT</p>
            <h2 className="mb-6" style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800, fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'white', lineHeight: 1.05 }}>
              Crafting Excellence in<br />
              <span style={{ background: 'linear-gradient(to right, #f59e0b, #ef4444)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Every Frame</span>
            </h2>
            <p className="mb-8" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'Space Grotesk, sans-serif', lineHeight: 1.8 }}>
              We combine technical mastery with artistic vision to create video content that doesn't just look beautiful — it drives real results for your brand.
            </p>
            <Link to="/about" className="inline-flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 hover:scale-105" style={{ background: 'linear-gradient(to right, #f59e0b, #ef4444)', color: 'white', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, boxShadow: '0 0 25px rgba(245,158,11,0.3)' }}>
              About Our Studio <ArrowRight size={16} />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="p-5 rounded-2xl"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', backdropFilter: 'blur(10px)' }}
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ background: `${f.color}15`, color: f.color }}>
                  {f.icon}
                </div>
                <h4 className="mb-1" style={{ color: 'white', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '0.95rem' }}>{f.title}</h4>
                <p style={{ color: 'rgba(255,255,255,0.45)', fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.82rem', lineHeight: 1.6 }}>{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="py-24 px-4 sm:px-6" style={{ background: 'rgba(0,0,0,0.3)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest mb-3" style={{ color: '#00d4ff', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>Client Voices</p>
          <h2 className="mb-14" style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800, fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'white', lineHeight: 1.05 }}>
            What Our <span style={{ background: 'linear-gradient(to right, #00d4ff, #a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Clients Say</span>
          </h2>

          <div className="relative">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={false}
                animate={{ opacity: i === activeTestimonial ? 1 : 0, y: i === activeTestimonial ? 0 : 20 }}
                transition={{ duration: 0.5 }}
                className={`${i === activeTestimonial ? 'block' : 'hidden'} p-8 md:p-12 rounded-3xl`}
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  backdropFilter: 'blur(20px)',
                }}
              >
                <div className="flex justify-center mb-5">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} size={18} fill="#f59e0b" style={{ color: '#f59e0b' }} />
                  ))}
                </div>
                <blockquote className="mb-8 text-xl md:text-2xl italic" style={{ color: 'rgba(255,255,255,0.85)', fontFamily: 'Space Grotesk, sans-serif', lineHeight: 1.6 }}>
                  "{t.text}"
                </blockquote>
                <div>
                  <div style={{ color: 'white', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700 }}>{t.name}</div>
                  <div style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.85rem' }}>{t.role}</div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center gap-3 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveTestimonial(i)}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === activeTestimonial ? 24 : 8,
                  height: 8,
                  background: i === activeTestimonial ? 'linear-gradient(to right, #00d4ff, #a855f7)' : 'rgba(255,255,255,0.2)',
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ─── */}
      <section className="py-24 px-4 sm:px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden p-12 md:p-20 text-center"
          style={{ background: 'linear-gradient(135deg, rgba(0,212,255,0.1) 0%, rgba(168,85,247,0.1) 50%, rgba(245,158,11,0.1) 100%)', border: '1px solid rgba(255,255,255,0.08)' }}
        >
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, rgba(0,212,255,0.06) 0%, transparent 70%)' }} />
          <div className="relative">
            <h2 className="mb-4" style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 900, fontSize: 'clamp(2.5rem, 6vw, 5rem)', color: 'white', lineHeight: 1.0 }}>
              Ready to Tell Your<br />
              <span style={{ background: 'linear-gradient(to right, #00d4ff, #a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Visual Story?</span>
            </h2>
            <p className="mb-10 max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'Space Grotesk, sans-serif', lineHeight: 1.7 }}>
              Let's collaborate on your next video project. Book a free consultation and let us bring your vision to life.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="px-8 py-4 rounded-full transition-all duration-300 hover:scale-105" style={{ background: 'linear-gradient(to right, #00d4ff, #a855f7)', color: 'white', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, boxShadow: '0 0 40px rgba(0,212,255,0.3)', fontSize: '1.05rem' }}>
                Book a Consultation
              </Link>
              <Link to="/portfolio" className="px-8 py-4 rounded-full transition-all duration-300 hover:scale-105" style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', color: 'white', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: '1.05rem' }}>
                View Our Work
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}