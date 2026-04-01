import { useParams, Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft, Star, Play, ArrowRight } from 'lucide-react';

const projects: Record<string, {
  title: string; category: string; client: string; year: string;
  heroImg: string; overview: string; role: string;
  challenge: string; solution: string; result: string;
  results: { label: string; value: string }[];
  gallery: string[];
  testimonial: { text: string; name: string; role: string };
  color: string;
}> = {
  '1': {
    title: 'The Last Frame',
    category: 'Documentary',
    client: 'National Media',
    year: '2025',
    color: '#00d4ff',
    heroImg: 'https://images.unsplash.com/photo-1761370980993-3ec8c23709fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWxtJTIwZGlyZWN0b3IlMjBjbGFwcGVyYm9hcmQlMjBtb3ZpZSUyMHNldHxlbnwxfHx8fDE3NzM3NDc4NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    overview: 'A feature-length documentary exploring the lives of indie filmmakers across three continents. The film captures the resilience, creativity, and passion of storytellers working outside the studio system.',
    role: 'Full production lead — from location scouting and pre-production to final color grade and delivery.',
    challenge: 'Coordinating multi-country shoots across 6-month timeline with a small crew while maintaining consistent visual language and narrative coherence.',
    solution: 'Developed a rigorous visual bible and shot protocol, deployed the same camera package globally, and used daily remote editorial sessions to maintain story cohesion.',
    result: 'Selected for 14 international film festivals, received 3 documentary awards, and generated 2.4M streams within the first month of release.',
    results: [
      { label: 'Festival Selections', value: '14' },
      { label: 'Awards Won', value: '3' },
      { label: 'First Month Streams', value: '2.4M' },
      { label: 'Audience Rating', value: '9.2/10' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1768483548395-0dca1de198f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N1bWVudGFyeSUyMGZpbG1tYWtlciUyMG91dGRvb3IlMjBsb2NhdGlvbiUyMHNob290fGVufDF8fHx8MTc3Mzc0Nzg1OXww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1666858443985-fead1d59b4f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWF0aWMlMjBmaWxtJTIwcHJvZHVjdGlvbiUyMGRhcmslMjBzdHVkaW98ZW58MXx8fHwxNzczNjY4NTA2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1764593605393-e7c44d74b677?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRpcmVjdG9yJTIwZmlsbSUyMHN0dWRpbyUyMHRlYW0lMjBjb2xsYWJvcmF0aW9ufGVufDF8fHx8MTc3Mzc0Nzg2MXww&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    testimonial: {
      text: 'VISUALCRAFT.IT brought a level of craft and sensitivity to this project that I\'ve rarely seen. They understood the story deeply and told it beautifully.',
      name: 'Marcus Elliot',
      role: 'Executive Producer, National Media',
    },
  },
};

// Fallback project for unknown IDs
const fallbackProject = projects['1'];

export function ProjectDetail() {
  const { id } = useParams();
  const project = (id && projects[id]) || fallbackProject;

  return (
    <div style={{ background: '#04040a' }}>
      {/* Hero */}
      <section className="relative h-screen flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={project.heroImg} alt={project.title} className="w-full h-full object-cover" style={{ filter: 'brightness(0.35) saturate(0.8)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(4,4,10,0.2) 0%, rgba(4,4,10,0.95) 100%)' }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pb-16 w-full">
          <Link to="/portfolio" className="inline-flex items-center gap-2 mb-8 transition-colors duration-200" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.85rem' }}>
            <ArrowLeft size={16} /> Back to Portfolio
          </Link>
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex flex-wrap gap-3 mb-4">
              {[project.category, project.year, project.client].map(tag => (
                <span key={tag} className="px-3 py-1 rounded-full text-xs uppercase tracking-widest" style={{ background: `${project.color}15`, border: `1px solid ${project.color}30`, color: project.color, fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>{tag}</span>
              ))}
            </div>
            <h1 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 900, fontSize: 'clamp(3rem, 8vw, 7rem)', lineHeight: 0.9, color: 'white', letterSpacing: '-0.02em' }}>
              {project.title}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="mb-5" style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800, fontSize: '2.5rem', color: 'white' }}>Project Overview</h2>
            <p className="mb-4" style={{ color: 'rgba(255,255,255,0.65)', fontFamily: 'Space Grotesk, sans-serif', lineHeight: 1.8 }}>{project.overview}</p>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontFamily: 'Space Grotesk, sans-serif', lineHeight: 1.8, fontSize: '0.9rem' }}><strong style={{ color: 'rgba(255,255,255,0.7)' }}>Our Role:</strong> {project.role}</p>
          </div>
          <div className="space-y-4">
            {[
              { label: 'Client', value: project.client },
              { label: 'Category', value: project.category },
              { label: 'Year', value: project.year },
              { label: 'Duration', value: '8 weeks' },
            ].map(item => (
              <div key={item.label} className="p-4 rounded-xl" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
                <div className="text-xs uppercase tracking-widest mb-1" style={{ color: project.color, fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>{item.label}</div>
                <div style={{ color: 'white', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge / Solution / Result */}
      <section className="py-16 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { label: 'Challenge', text: project.challenge, color: '#ef4444' },
            { label: 'Solution', text: project.solution, color: '#00d4ff' },
            { label: 'Result', text: project.result, color: '#f59e0b' },
          ].map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.6 }} className="p-7 rounded-2xl" style={{ background: `${item.color}07`, border: `1px solid ${item.color}20` }}>
              <div className="text-xs uppercase tracking-widest mb-4" style={{ color: item.color, fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>{item.label}</div>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontFamily: 'Space Grotesk, sans-serif', lineHeight: 1.8, fontSize: '0.9rem' }}>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 px-4 sm:px-6 max-w-7xl mx-auto">
        <h2 className="mb-8" style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800, fontSize: '2.5rem', color: 'white' }}>Visual Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {project.gallery.map((img, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group relative rounded-2xl overflow-hidden" style={{ aspectRatio: '4/3' }}>
              <img src={img} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Play size={32} className="text-white" fill="white" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Results */}
      <section className="py-16 px-4 sm:px-6 max-w-7xl mx-auto">
        <h2 className="mb-8 text-center" style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800, fontSize: '2.5rem', color: 'white' }}>Measurable Results</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {project.results.map((r, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-6 rounded-2xl text-center" style={{ background: `${project.color}08`, border: `1px solid ${project.color}20` }}>
              <div className="text-4xl mb-1" style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 900, color: project.color }}>{r.value}</div>
              <div style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.8rem' }}>{r.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 px-4 sm:px-6 max-w-4xl mx-auto text-center">
        <div className="p-10 rounded-3xl" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
          <div className="flex justify-center mb-5">
            {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="#f59e0b" style={{ color: '#f59e0b' }} />)}
          </div>
          <blockquote className="text-xl italic mb-6" style={{ color: 'rgba(255,255,255,0.8)', fontFamily: 'Space Grotesk, sans-serif', lineHeight: 1.7 }}>"{project.testimonial.text}"</blockquote>
          <div style={{ color: 'white', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700 }}>{project.testimonial.name}</div>
          <div style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.85rem' }}>{project.testimonial.role}</div>
        </div>
      </section>

      {/* Related / CTA */}
      <section className="py-16 px-4 sm:px-6 max-w-4xl mx-auto text-center">
        <h2 className="mb-6" style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800, fontSize: '2.5rem', color: 'white' }}>Start Your Project</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/portfolio" className="inline-flex items-center gap-2 px-6 py-3 rounded-full" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', color: 'white', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>
            <ArrowLeft size={16} /> More Projects
          </Link>
          <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full" style={{ background: 'linear-gradient(to right, #00d4ff, #a855f7)', color: 'white', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, boxShadow: '0 0 25px rgba(0,212,255,0.3)' }}>
            Start a Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
