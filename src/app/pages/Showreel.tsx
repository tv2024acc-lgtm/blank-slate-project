import { useState } from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { Play, Pause, Volume2, VolumeX, ArrowRight, Maximize } from 'lucide-react';

const SHOWREEL_BG = 'https://images.unsplash.com/photo-1666858443985-fead1d59b4f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWF0aWMlMjBmaWxtJTIwcHJvZHVjdGlvbiUyMGRhcmslMjBzdHVkaW98ZW58MXx8fHwxNzczNjY4NTA2fDA&ixlib=rb-4.1.0&q=80&w=1080';

const chapters = [
  { title: 'Commercials', duration: '0:00 – 2:15', desc: 'Brand films, product spots, and television commercials for global clients.', color: '#00d4ff', img: 'https://images.unsplash.com/photo-1664817550969-5e76adc4a3fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwYWR2ZXJ0aXNpbmclMjB2aWRlbyUyMHNob290JTIwc3R1ZGlvJTIwbGlnaHRzfGVufDF8fHx8MTc3Mzc0Nzg2MHww&ixlib=rb-4.1.0&q=80&w=1080' },
  { title: 'Documentaries', duration: '2:15 – 4:30', desc: 'Long-form storytelling from the world\'s most compelling real stories.', color: '#a855f7', img: 'https://images.unsplash.com/photo-1768483548395-0dca1de198f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N1bWVudGFyeSUyMGZpbG1tYWtlciUyMG91dGRvb3IlMjBsb2NhdGlvbiUyMHNob290fGVufDF8fHx8MTc3Mzc0Nzg1OXww&ixlib=rb-4.1.0&q=80&w=1080' },
  { title: 'Events', duration: '4:30 – 5:45', desc: 'Corporate events, conferences, and live performances captured in cinematic detail.', color: '#f59e0b', img: 'https://images.unsplash.com/photo-1578920040242-fa9c1ccbe5b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBldmVudCUyMHZpZGVvZ3JhcGh5JTIwY3Jvd2R8ZW58MXx8fHwxNzczNzQ3ODYyfDA&ixlib=rb-4.1.0&q=80&w=1080' },
  { title: 'Drone Footage', duration: '5:45 – 7:00', desc: 'Breathtaking aerial perspectives from our FAA-certified drone team.', color: '#ef4444', img: 'https://images.unsplash.com/photo-1761583780469-2f206ec7b270?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcm9uZSUyMGFlcmlhbCUyMHZpZGVvZ3JhcGh5JTIwbGFuZHNjYXBlfGVufDF8fHx8MTc3Mzc0Nzg1N3ww&ixlib=rb-4.1.0&q=80&w=1080' },
  { title: 'Brand Stories', duration: '7:00 – 8:30', desc: 'Emotional brand films that connect companies with their audiences.', color: '#00d4ff', img: 'https://images.unsplash.com/photo-1762423656649-24aaf046402e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwdmlkZW8lMjBzaG9vdCUyMGx1eHVyeSUyMGJyYW5kJTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzczNzQ3ODYyfDA&ixlib=rb-4.1.0&q=80&w=1080' },
  { title: 'Social Media', duration: '8:30 – 10:00', desc: 'Short-form content engineered for maximum digital platform impact.', color: '#a855f7', img: 'https://images.unsplash.com/photo-1765344550212-a3b963d63c32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHZpZGVvJTIwcHJvZHVjdGlvbiUyMGNvbmNlcnQlMjBzdGFnZSUyMGxpZ2h0c3xlbnwxfHx8fDE3NzM3NDc4NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080' },
];

export function Showreel() {
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [activeChapter, setActiveChapter] = useState(0);

  return (
    <div style={{ background: '#04040a' }}>
      {/* Hero Video Player */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img src={SHOWREEL_BG} alt="Showreel" className="w-full h-full object-cover" style={{ filter: 'brightness(0.25) saturate(0.6)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(4,4,10,0.3) 0%, rgba(4,4,10,0.7) 70%, rgba(4,4,10,0.98) 100%)' }} />
          {/* Cinematic bars */}
          <div className="absolute top-0 left-0 right-0 h-16" style={{ background: 'rgba(4,4,10,0.8)' }} />
          <div className="absolute bottom-0 left-0 right-0 h-16" style={{ background: 'rgba(4,4,10,0.8)' }} />
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto px-4 pt-20">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xs uppercase tracking-widest mb-4" style={{ color: '#00d4ff', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>2025 Showreel</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.8 }} className="mb-6" style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 900, fontSize: 'clamp(3rem, 8vw, 7rem)', lineHeight: 0.9, color: 'white', letterSpacing: '-0.02em' }}>
            Our <span style={{ background: 'linear-gradient(to right, #00d4ff, #a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Vision</span><br />in Motion
          </motion.h1>

          {/* Video Player Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative rounded-2xl overflow-hidden mx-auto"
            style={{
              maxWidth: '800px',
              aspectRatio: '16/9',
              border: '1px solid rgba(0,212,255,0.2)',
              boxShadow: '0 0 60px rgba(0,212,255,0.15)',
            }}
          >
            <img src={chapters[activeChapter].img} alt="Showreel" className="w-full h-full object-cover" style={{ filter: 'brightness(0.5)' }} />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 60%, rgba(4,4,10,0.8))' }} />

            {/* Chapter label */}
            <div className="absolute top-4 left-4 px-3 py-1.5 rounded-lg" style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(10px)', border: `1px solid ${chapters[activeChapter].color}30` }}>
              <span style={{ color: chapters[activeChapter].color, fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.75rem', fontWeight: 600 }}>{chapters[activeChapter].title}</span>
            </div>

            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={() => setPlaying(!playing)}
                className="w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{
                  background: playing ? 'rgba(0,0,0,0.6)' : 'rgba(0,212,255,0.9)',
                  boxShadow: '0 0 40px rgba(0,212,255,0.4)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                {playing ? <Pause size={28} className="text-white" /> : <Play size={28} className="text-white" fill="white" style={{ marginLeft: 4 }} />}
              </button>
            </div>

            {/* Controls */}
            <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between">
              {/* Progress */}
              <div className="flex-1 h-1 rounded-full mr-4" style={{ background: 'rgba(255,255,255,0.15)' }}>
                <div className="h-full rounded-full" style={{ width: '35%', background: 'linear-gradient(to right, #00d4ff, #a855f7)' }} />
              </div>
              <div className="flex items-center gap-3">
                <button onClick={() => setMuted(!muted)} style={{ color: 'rgba(255,255,255,0.7)' }}>
                  {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                </button>
                <button style={{ color: 'rgba(255,255,255,0.7)' }}><Maximize size={18} /></button>
              </div>
            </div>

            {/* Duration */}
            <div className="absolute bottom-10 left-4 text-xs" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'Space Grotesk, sans-serif' }}>
              3:30 / 10:00
            </div>
          </motion.div>
        </div>
      </section>

      {/* Chapters */}
      <section className="py-24 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-widest mb-3" style={{ color: '#a855f7', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>Navigate</p>
          <h2 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800, fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'white', lineHeight: 1.05 }}>
            Showreel <span style={{ background: 'linear-gradient(to right, #a855f7, #00d4ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Chapters</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {chapters.map((ch, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              onClick={() => setActiveChapter(i)}
              className="group relative rounded-2xl overflow-hidden cursor-pointer"
              style={{
                border: i === activeChapter ? `1px solid ${ch.color}` : '1px solid rgba(255,255,255,0.07)',
                boxShadow: i === activeChapter ? `0 0 25px ${ch.color}25` : 'none',
              }}
            >
              <div style={{ aspectRatio: '16/9', overflow: 'hidden' }}>
                <img src={ch.img} alt={ch.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" style={{ filter: 'brightness(0.5)' }} />
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: ch.color, boxShadow: `0 0 25px ${ch.color}60` }}>
                  <Play size={20} fill="white" className="text-white" style={{ marginLeft: 2 }} />
                </div>
              </div>
              <div className="p-5" style={{ background: 'rgba(255,255,255,0.03)' }}>
                <div className="flex items-center justify-between mb-1">
                  <h3 style={{ color: 'white', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '1rem' }}>{ch.title}</h3>
                  <span style={{ color: ch.color, fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.75rem', fontWeight: 600 }}>{ch.duration}</span>
                </div>
                <p style={{ color: 'rgba(255,255,255,0.45)', fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.82rem', lineHeight: 1.5 }}>{ch.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Creative Philosophy */}
      <section className="py-24 px-4 sm:px-6" style={{ background: 'rgba(0,0,0,0.3)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest mb-4" style={{ color: '#f59e0b', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>Our Philosophy</p>
          <h2 className="mb-8" style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800, fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'white', lineHeight: 1.05 }}>
            Art Meets <span style={{ background: 'linear-gradient(to right, #f59e0b, #ef4444)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Purpose</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { q: '"Every frame is a decision."', sub: 'We shoot with intention, not accident.' },
              { q: '"Light is emotion."', sub: 'How we light a scene tells half the story.' },
              { q: '"Sound is 50% of the picture."', sub: 'Our audio team is as crucial as our camera team.' },
            ].map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }} className="p-6 rounded-2xl" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
                <p className="italic mb-3" style={{ color: 'rgba(255,255,255,0.85)', fontFamily: 'Space Grotesk, sans-serif', lineHeight: 1.6, fontSize: '1.05rem' }}>{p.q}</p>
                <p style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.82rem' }}>{p.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 sm:px-6 max-w-4xl mx-auto text-center">
        <h2 className="mb-4" style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 900, fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'white', lineHeight: 1.0 }}>
          Inspired by What<br /><span style={{ background: 'linear-gradient(to right, #00d4ff, #a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>You've Seen?</span>
        </h2>
        <p className="mb-8 max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'Space Grotesk, sans-serif', lineHeight: 1.7 }}>Let's create your own chapter. Your story deserves cinematic treatment.</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/portfolio" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full" style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.15)', color: 'white', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>
            View Portfolio
          </Link>
          <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full" style={{ background: 'linear-gradient(to right, #00d4ff, #a855f7)', color: 'white', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, boxShadow: '0 0 30px rgba(0,212,255,0.3)' }}>
            Start a Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
