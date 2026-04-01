import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Clock, Tag } from 'lucide-react';

const FEATURED_IMG = 'https://images.unsplash.com/photo-1730890754666-fbffee87d65b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9nJTIwZmlsbW1ha2luZyUyMHN0b3J5dGVsbGluZyUyMGNpbmVtYXRpY3xlbnwxfHx8fDE3NzM3NDc4Njh8MA&ixlib=rb-4.1.0&q=80&w=1080';

const articles = [
  {
    title: 'The Art of Cinematic Lighting: How to Tell Stories with Light',
    excerpt: 'Light is not just illumination — it\'s emotion, narrative, and character. In this deep dive, we explore how master cinematographers use light as their primary storytelling tool.',
    category: 'Filmmaking Tips',
    date: 'March 12, 2026',
    readTime: '8 min read',
    img: 'https://images.unsplash.com/photo-1769699167687-540cce99f744?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjaW5lbWElMjBjYW1lcmElMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzczNzQwNDg4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    color: '#00d4ff',
  },
  {
    title: 'Color Grading in 2026: Trends Shaping Modern Visual Aesthetics',
    excerpt: 'The teal-and-orange look is dead. Here\'s what the world\'s top colorists are doing now, and how these trends are defining the new visual language of cinema.',
    category: 'Editing Techniques',
    date: 'March 5, 2026',
    readTime: '6 min read',
    img: 'https://images.unsplash.com/photo-1767126600705-b40408eabd3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGVkaXRpbmclMjBwb3N0JTIwcHJvZHVjdGlvbiUyMHN0dWRpb3xlbnwxfHx8fDE3NzM3NDc4NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    color: '#a855f7',
  },
  {
    title: 'Gear Review: Best Cinema Cameras for Commercial Production in 2026',
    excerpt: 'We spent 6 months testing every major cinema camera system on real commercial productions. Here are our unfiltered, data-driven conclusions.',
    category: 'Gear Reviews',
    date: 'Feb 28, 2026',
    readTime: '12 min read',
    img: 'https://images.unsplash.com/photo-1666858443985-fead1d59b4f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWF0aWMlMjBmaWxtJTIwcHJvZHVjdGlvbiUyMGRhcmslMjBzdHVkaW98ZW58MXx8fHwxNzczNjY4NTA2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    color: '#f59e0b',
  },
  {
    title: 'Behind the Lens: How We Shot a $500K Brand Film in 3 Days',
    excerpt: 'A transparent look at the planning, logistics, creative decisions, and on-set chaos that produced one of our most successful brand campaigns.',
    category: 'Behind the Scenes',
    date: 'Feb 20, 2026',
    readTime: '10 min read',
    img: 'https://images.unsplash.com/photo-1764593605393-e7c44d74b677?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRpcmVjdG9yJTIwZmlsbSUyMHN0dWRpbyUyMHRlYW0lMjBjb2xsYWJvcmF0aW9ufGVufDF8fHx8MTc3Mzc0Nzg2MXww&ixlib=rb-4.1.0&q=80&w=1080',
    color: '#ef4444',
  },
  {
    title: 'Video Marketing Strategy: Why Short-Form Is Winning in 2026',
    excerpt: 'The data is undeniable: attention spans are shrinking but engagement is rising. Here\'s how smart brands are using short-form video to dominate their markets.',
    category: 'Video Marketing',
    date: 'Feb 14, 2026',
    readTime: '7 min read',
    img: 'https://images.unsplash.com/photo-1765344550212-a3b963d63c32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHZpZGVvJTIwcHJvZHVjdGlvbiUyMGNvbmNlcnQlMjBzdGFnZSUyMGxpZ2h0c3xlbnwxfHx8fDE3NzM3NDc4NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    color: '#00d4ff',
  },
  {
    title: 'The Power of Silence: How Documentaries Use Quiet Moments',
    excerpt: 'The most powerful scenes in documentary filmmaking often have no dialogue at all. We examine the craft of silence and how to use it intentionally.',
    category: 'Storytelling',
    date: 'Feb 7, 2026',
    readTime: '9 min read',
    img: 'https://images.unsplash.com/photo-1768483548395-0dca1de198f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N1bWVudGFyeSUyMGZpbG1tYWtlciUyMG91dGRvb3IlMjBsb2NhdGlvbiUyMHNob290fGVufDF8fHx8MTc3Mzc0Nzg1OXww&ixlib=rb-4.1.0&q=80&w=1080',
    color: '#a855f7',
  },
];

const categories = ['All', 'Filmmaking Tips', 'Editing Techniques', 'Gear Reviews', 'Behind the Scenes', 'Video Marketing', 'Storytelling'];

export function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const filtered = activeCategory === 'All' ? articles : articles.filter(a => a.category === activeCategory);

  return (
    <div style={{ background: '#04040a' }}>
      {/* Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at top right, rgba(168,85,247,0.06) 0%, transparent 60%)' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xs uppercase tracking-widest mb-4" style={{ color: '#a855f7', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>Knowledge Hub</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.8 }} style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 900, fontSize: 'clamp(3rem, 7vw, 6rem)', lineHeight: 0.95, color: 'white', letterSpacing: '-0.02em', maxWidth: '800px' }}>
            Insights &amp; <span style={{ background: 'linear-gradient(to right, #a855f7, #ef4444)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Stories</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }} className="mt-6 max-w-xl" style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'Space Grotesk, sans-serif', fontSize: '1.05rem', lineHeight: 1.7 }}>
            Cinematography tips, production insights, gear reviews, and industry thought leadership from our team of experts.
          </motion.p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-10 px-4 sm:px-6 max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group relative rounded-3xl overflow-hidden cursor-pointer" style={{ height: '420px' }}>
          <img src={FEATURED_IMG} alt="Featured" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" style={{ filter: 'brightness(0.4) saturate(0.8)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(4,4,10,0.9) 0%, rgba(4,4,10,0.4) 60%, transparent 100%)' }} />
          <div className="absolute inset-0 p-10 md:p-16 flex flex-col justify-center max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full text-xs uppercase tracking-widest" style={{ background: 'rgba(0,212,255,0.15)', border: '1px solid rgba(0,212,255,0.3)', color: '#00d4ff', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>Featured</span>
              <span style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.8rem' }}>March 17, 2026</span>
            </div>
            <h2 className="mb-4" style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800, fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: 'white', lineHeight: 1.1 }}>
              The Future of Cinematic AI: How Artificial Intelligence Is Reshaping Video Production
            </h2>
            <p className="mb-6" style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'Space Grotesk, sans-serif', lineHeight: 1.7, fontSize: '0.9rem' }}>
              From AI-assisted color grading to generative scene planning, we explore how the industry is evolving and what it means for human creativity.
            </p>
            <button className="inline-flex items-center gap-2 text-sm" style={{ color: '#00d4ff', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700 }}>
              Read Full Article <ArrowRight size={15} />
            </button>
          </div>
        </motion.div>
      </section>

      {/* Filters */}
      <section className="py-8 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="flex flex-wrap gap-3">
          {categories.map(c => (
            <button
              key={c}
              onClick={() => setActiveCategory(c)}
              className="px-4 py-2 rounded-full text-sm transition-all duration-300"
              style={{
                background: activeCategory === c ? 'linear-gradient(to right, #a855f7, #ef4444)' : 'rgba(255,255,255,0.05)',
                border: activeCategory === c ? 'none' : '1px solid rgba(255,255,255,0.1)',
                color: activeCategory === c ? 'white' : 'rgba(255,255,255,0.55)',
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: 600,
              }}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-6 px-4 sm:px-6 max-w-7xl mx-auto pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((article, i) => (
            <motion.div
              key={i}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group rounded-2xl overflow-hidden cursor-pointer"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
                <img src={article.img} alt={article.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" style={{ filter: 'brightness(0.7) saturate(0.8)' }} />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs" style={{ background: `${article.color}15`, border: `1px solid ${article.color}30`, color: article.color, fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>
                  {article.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-3" style={{ color: 'rgba(255,255,255,0.35)', fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.75rem' }}>
                  <span className="flex items-center gap-1"><Tag size={11} /> {article.date}</span>
                  <span className="flex items-center gap-1"><Clock size={11} /> {article.readTime}</span>
                </div>
                <h3 className="mb-3" style={{ color: 'white', fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700, fontSize: '1.25rem', lineHeight: 1.2 }}>{article.title}</h3>
                <p className="mb-5" style={{ color: 'rgba(255,255,255,0.45)', fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.83rem', lineHeight: 1.7 }}>{article.excerpt}</p>
                <div className="flex items-center gap-1.5 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ color: article.color, fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>
                  Read Article <ArrowRight size={14} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 px-4 sm:px-6" style={{ background: 'rgba(0,0,0,0.3)' }}>
        <div className="max-w-2xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-10 rounded-3xl" style={{ background: 'linear-gradient(135deg, rgba(168,85,247,0.1), rgba(0,212,255,0.08))', border: '1px solid rgba(168,85,247,0.2)' }}>
            <h2 className="mb-3" style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'white' }}>
              Stay in the <span style={{ background: 'linear-gradient(to right, #a855f7, #00d4ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Loop</span>
            </h2>
            <p className="mb-8" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'Space Grotesk, sans-serif', lineHeight: 1.7 }}>
              Get weekly insights on filmmaking, production tips, and industry trends — directly to your inbox.
            </p>
            {subscribed ? (
              <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="py-4 px-6 rounded-full inline-block" style={{ background: 'rgba(0,212,255,0.15)', border: '1px solid rgba(0,212,255,0.3)' }}>
                <span style={{ color: '#00d4ff', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>✓ You're subscribed! Welcome to the VISUALCRAFT.IT community.</span>
              </motion.div>
            ) : (
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-3.5 rounded-full outline-none text-sm"
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(168,85,247,0.3)',
                    color: 'white',
                    fontFamily: 'Space Grotesk, sans-serif',
                  }}
                />
                <button
                  onClick={() => { if (email) setSubscribed(true); }}
                  className="px-7 py-3.5 rounded-full text-sm transition-all duration-300 hover:scale-105"
                  style={{ background: 'linear-gradient(to right, #a855f7, #00d4ff)', color: 'white', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, boxShadow: '0 0 25px rgba(168,85,247,0.3)', whiteSpace: 'nowrap' }}
                >
                  Subscribe Free
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
