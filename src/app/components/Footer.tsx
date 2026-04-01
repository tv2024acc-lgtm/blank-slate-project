import { Link } from 'react-router';
import { Film, Mail, Phone, MapPin, Instagram, Youtube, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer style={{ background: '#04040a', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #00d4ff, #a855f7)' }}>
                <Film size={18} className="text-white" />
              </div>
              <span className="text-2xl tracking-[0.15em] uppercase" style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800, color: 'white' }}>
                VISUAL<span style={{ color: '#00d4ff' }}>CRAFT.IT</span>
              </span>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.9rem', lineHeight: 1.7 }} className="mb-6 max-w-xs">
              World-class video production studio crafting cinematic visual stories that move audiences and elevate brands.
            </p>
            {/* Newsletter */}
            <div className="mb-6">
              <p className="text-sm mb-3" style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 500 }}>Subscribe to our newsletter</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 rounded-full text-sm outline-none"
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: 'white',
                    fontFamily: 'Space Grotesk, sans-serif',
                  }}
                />
                <button
                  className="px-5 py-2 rounded-full text-sm"
                  style={{ background: 'linear-gradient(to right, #00d4ff, #a855f7)', color: 'white', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}
                >
                  Join
                </button>
              </div>
            </div>
            {/* Socials */}
            <div className="flex gap-3">
              {[
                { icon: <Instagram size={17} />, href: '#' },
                { icon: <Youtube size={17} />, href: '#' },
                { icon: <Twitter size={17} />, href: '#' },
                { icon: <Linkedin size={17} />, href: '#' },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: 'rgba(255,255,255,0.6)',
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(0,212,255,0.15)'; (e.currentTarget as HTMLElement).style.color = '#00d4ff'; (e.currentTarget as HTMLElement).style.borderColor = '#00d4ff'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.06)'; (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.6)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)'; }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="mb-5 text-sm uppercase tracking-widest" style={{ color: '#00d4ff', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>Navigation</h4>
            <ul className="space-y-2">
              {[{ to: '/', label: 'Home' }, { to: '/about', label: 'About Us' }, { to: '/portfolio', label: 'Portfolio' }, { to: '/showreel', label: 'Showreel' }, { to: '/team', label: 'Team' }, { to: '/blog', label: 'Blog' }].map(l => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm transition-colors duration-200 hover:text-white" style={{ color: 'rgba(255,255,255,0.45)', fontFamily: 'Space Grotesk, sans-serif' }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-5 text-sm uppercase tracking-widest" style={{ color: '#a855f7', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>Services</h4>
            <ul className="space-y-2">
              {['Video Production', 'Post-Production', 'Motion Graphics', 'Drone Videography', 'Event Coverage', 'Commercials', 'Documentaries', 'Music Videos'].map(s => (
                <li key={s}>
                  <Link to="/services" className="text-sm transition-colors duration-200 hover:text-white" style={{ color: 'rgba(255,255,255,0.45)', fontFamily: 'Space Grotesk, sans-serif' }}>
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-5 text-sm uppercase tracking-widest" style={{ color: '#f59e0b', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}>Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={15} style={{ color: '#00d4ff', marginTop: 2, flexShrink: 0 }} />
                <span style={{ color: 'rgba(255,255,255,0.45)', fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.875rem' }}>42 Studio Row, Los Angeles, CA 90028</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} style={{ color: '#00d4ff', flexShrink: 0 }} />
                <span style={{ color: 'rgba(255,255,255,0.45)', fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.875rem' }}>+1 (424) 555-0198</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} style={{ color: '#00d4ff', flexShrink: 0 }} />
                <span style={{ color: 'rgba(255,255,255,0.45)', fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.875rem' }}>hello@visualcraft.it</span>
              </li>
            </ul>
            <div className="mt-5 p-3 rounded-xl" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
              <p style={{ color: 'rgba(255,255,255,0.35)', fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.75rem' }}>Working Hours</p>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.8rem' }}>Mon–Fri: 9:00 AM – 7:00 PM</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <p style={{ color: 'rgba(255,255,255,0.25)', fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.8rem' }}>
            © 2026 VISUALCRAFT.IT Studio. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(t => (
              <a key={t} href="#" style={{ color: 'rgba(255,255,255,0.25)', fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.8rem' }} className="hover:text-white transition-colors duration-200">
                {t}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
