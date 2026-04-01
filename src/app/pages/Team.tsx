import { Link } from 'react-router';
import { motion } from 'motion/react';
import { Instagram, Linkedin, Twitter, ArrowRight } from 'lucide-react';

const TEAM_BG = 'https://images.unsplash.com/photo-1764593605393-e7c44d74b677?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRpcmVjdG9yJTIwZmlsbSUyMHN0dWRpbyUyMHRlYW0lMjBjb2xsYWJvcmF0aW9ufGVufDF8fHx8MTc3Mzc0Nzg2MXww&ixlib=rb-4.1.0&q=80&w=1080';

const team = [
  {
    name: 'Ethan Cole',
    role: 'Creative Director',
    bio: '15 years directing award-winning films and brand campaigns across 30+ countries.',
    img: 'https://images.unsplash.com/photo-1636990536161-710184e1047f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwZmlsbSUyMHByb2R1Y2VyJTIwZGlyZWN0b3IlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzM3NDc4Njd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    color: '#00d4ff',
    socials: { ig: '#', li: '#', tw: '#' },
  },
  {
    name: 'Maya Chen',
    role: 'Lead Cinematographer',
    bio: 'ASC-nominated DP with expertise in both narrative and commercial cinematography.',
    img: 'https://images.unsplash.com/photo-1758613656365-5195c3b96ba3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjB2aWRlbyUyMGVkaXRvciUyMGNyZWF0aXZlJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3Mzc0Nzg2Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    color: '#a855f7',
    socials: { ig: '#', li: '#', tw: '#' },
  },
  {
    name: 'Marcus Webb',
    role: 'Senior Editor',
    bio: 'Post-production wizard who has cut award-winning documentaries and major commercials.',
    img: 'https://images.unsplash.com/photo-1669050950123-9d6ff9c88e0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwY2luZW1hdG9ncmFwaGVyJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXQlMjBkYXJrJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NzM3NDc4NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    color: '#f59e0b',
    socials: { ig: '#', li: '#', tw: '#' },
  },
  {
    name: 'Sophia Laurent',
    role: 'Motion Designer',
    bio: 'Specializes in 3D animation and VFX that push the boundaries of visual storytelling.',
    img: 'https://images.unsplash.com/photo-1695712551846-4dc15433fbd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBtb3Rpb24lMjBkZXNpZ25lciUyMGNyZWF0aXZlJTIwc3R1ZGlvfGVufDF8fHx8MTc3Mzc0Nzg2N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    color: '#ef4444',
    socials: { ig: '#', li: '#', tw: '#' },
  },
  {
    name: 'James Park',
    role: 'Executive Producer',
    bio: 'Oversees all major productions ensuring creative vision aligns with strategic goals.',
    img: 'https://images.unsplash.com/photo-1636990536161-710184e1047f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwZmlsbSUyMHByb2R1Y2VyJTIwZGlyZWN0b3IlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzM3NDc4Njd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    color: '#00d4ff',
    socials: { ig: '#', li: '#', tw: '#' },
  },
  {
    name: 'Aisha Okonkwo',
    role: 'Sound Designer',
    bio: 'Grammy-nominated audio engineer creating immersive soundscapes for global productions.',
    img: 'https://images.unsplash.com/photo-1758613656365-5195c3b96ba3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjB2aWRlbyUyMGVkaXRvciUyMGNyZWF0aXZlJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3Mzc0Nzg2Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    color: '#a855f7',
    socials: { ig: '#', li: '#', tw: '#' },
  },
  {
    name: 'Diego Rivera',
    role: 'Drone Operator',
    bio: 'FAA-certified pilot with 500+ hours of cinematic aerial footage across 4 continents.',
    img: 'https://images.unsplash.com/photo-1669050950123-9d6ff9c88e0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwY2luZW1hdG9ncmFwaGVyJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXQlMjBkYXJrJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NzM3NDc4NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    color: '#f59e0b',
    socials: { ig: '#', li: '#', tw: '#' },
  },
  {
    name: 'Nina Patel',
    role: 'Color Scientist',
    bio: 'DaVinci Resolve Certified Colorist specializing in cinematic and commercial grading.',
    img: 'https://images.unsplash.com/photo-1695712551846-4dc15433fbd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBtb3Rpb24lMjBkZXNpZ25lciUyMGNyZWF0aXZlJTIwc3R1ZGlvfGVufDF8fHx8MTc3Mzc0Nzg2N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    color: '#ef4444',
    socials: { ig: '#', li: '#', tw: '#' },
  },
];

export function Team() {
  return (
    <div style={{ background: '#04040a' }}>
      {/* Hero */}
      <section className="relative min-h-[65vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={TEAM_BG} alt="Team" className="w-full h-full object-cover" style={{ filter: 'brightness(0.2) saturate(0.7)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(4,4,10,0.5) 0%, rgba(4,4,10,0.95) 100%)' }} />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] blur-[80px]" style={{ background: 'rgba(168,85,247,0.07)' }} />
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 pt-24">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xs uppercase tracking-widest mb-4" style={{ color: '#a855f7', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>Meet the Crew</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.8 }} style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 900, fontSize: 'clamp(3rem, 7vw, 6rem)', lineHeight: 0.95, color: 'white', letterSpacing: '-0.02em' }}>
            The <span style={{ background: 'linear-gradient(to right, #a855f7, #ef4444)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Creative Minds</span><br />Behind the Lens
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }} className="mt-6 max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'Space Grotesk, sans-serif', fontSize: '1.05rem', lineHeight: 1.7 }}>
            A world-class team of cinematographers, editors, directors, and creators who live and breathe cinematic storytelling.
          </motion.p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-24 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 4) * 0.1, duration: 0.6 }}
              className="group relative rounded-2xl overflow-hidden"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
            >
              {/* Image */}
              <div className="relative overflow-hidden" style={{ aspectRatio: '3/4' }}>
                <img src={member.img} alt={member.name} className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" style={{ filter: 'brightness(0.85) saturate(0.9)' }} />
                <div className="absolute inset-0" style={{ background: `linear-gradient(to bottom, transparent 50%, rgba(4,4,10,0.95) 100%)` }} />
                {/* Glow border on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ boxShadow: `inset 0 0 0 2px ${member.color}`, borderRadius: '0' }} />

                {/* Social icons overlay */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0">
                  {[
                    { icon: <Instagram size={15} />, href: member.socials.ig },
                    { icon: <Twitter size={15} />, href: member.socials.tw },
                    { icon: <Linkedin size={15} />, href: member.socials.li },
                  ].map((s, j) => (
                    <a key={j} href={s.href} className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200" style={{ background: 'rgba(0,0,0,0.7)', color: member.color, border: `1px solid ${member.color}40` }}>
                      {s.icon}
                    </a>
                  ))}
                </div>

                {/* Name overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="text-xs uppercase tracking-widest mb-1" style={{ color: member.color, fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>{member.role}</div>
                  <h3 style={{ color: 'white', fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700, fontSize: '1.4rem' }}>{member.name}</h3>
                </div>
              </div>

              {/* Bio */}
              <div className="p-5">
                <p style={{ color: 'rgba(255,255,255,0.45)', fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.82rem', lineHeight: 1.7 }}>{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Studio Culture */}
      <section className="py-20 px-4 sm:px-6" style={{ background: 'rgba(0,0,0,0.3)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-widest mb-3" style={{ color: '#f59e0b', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>Culture</p>
            <h2 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800, fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'white', lineHeight: 1.05 }}>
              Life at <span style={{ background: 'linear-gradient(to right, #f59e0b, #ef4444)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>VISUALCRAFT.IT</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Collaborative Spirit', desc: 'Every project is a team effort. We believe the best work happens when great minds come together.', color: '#00d4ff' },
              { title: 'Continuous Learning', desc: 'We invest heavily in skill development, with monthly masterclasses and access to industry events.', color: '#a855f7' },
              { title: 'Creative Freedom', desc: 'We give our team the space to experiment, fail fast, and create breakthrough work.', color: '#f59e0b' },
            ].map((c, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }} className="p-7 rounded-2xl" style={{ background: `${c.color}07`, border: `1px solid ${c.color}20` }}>
                <div className="w-2 h-8 rounded-full mb-4" style={{ background: c.color }} />
                <h3 className="mb-2" style={{ color: 'white', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700 }}>{c.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.88rem', lineHeight: 1.7 }}>{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers CTA */}
      <section className="py-24 px-4 sm:px-6 max-w-4xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-12 rounded-3xl" style={{ background: 'linear-gradient(135deg, rgba(168,85,247,0.1), rgba(239,68,68,0.08))', border: '1px solid rgba(168,85,247,0.2)' }}>
          <h2 className="mb-4" style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 900, fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'white', lineHeight: 1.0 }}>
            Join the <span style={{ background: 'linear-gradient(to right, #a855f7, #00d4ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>VISUALCRAFT.IT Family</span>
          </h2>
          <p className="mb-8 max-w-lg mx-auto" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'Space Grotesk, sans-serif', lineHeight: 1.7 }}>
            We're always looking for exceptional talent. If you're passionate about cinematic storytelling, we want to hear from you.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full transition-all duration-300 hover:scale-105" style={{ background: 'linear-gradient(to right, #a855f7, #ef4444)', color: 'white', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, boxShadow: '0 0 30px rgba(168,85,247,0.3)', fontSize: '1.05rem' }}>
            Apply Now <ArrowRight size={18} />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
