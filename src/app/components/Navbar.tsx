import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Film } from 'lucide-react';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/showreel', label: 'Showreel' },
  { to: '/team', label: 'Team' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled
            ? 'rgba(4,4,10,0.85)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
        }}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #00d4ff, #a855f7)' }}
            >
              <Film size={16} className="text-white" />
            </div>
            <span
              className="text-xl tracking-[0.15em] uppercase"
              style={{
                fontFamily: 'Barlow Condensed, sans-serif',
                fontWeight: 800,
                color: 'white',
              }}
            >
              VISUAL<span style={{ color: '#00d4ff' }}>CRAFT.IT</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className="relative px-4 py-2 group"
                  style={{ color: isActive ? '#00d4ff' : 'rgba(255,255,255,0.75)', fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.85rem', letterSpacing: '0.05em' }}
                >
                  {link.label}
                  <span
                    className="absolute bottom-1 left-4 h-[1px] transition-all duration-300"
                    style={{
                      width: isActive ? 'calc(100% - 2rem)' : '0',
                      background: 'linear-gradient(to right, #00d4ff, #a855f7)',
                    }}
                  />
                  <span
                    className="absolute bottom-1 left-4 h-[1px] transition-all duration-300 group-hover:w-[calc(100%-2rem)]"
                    style={{
                      width: '0',
                      background: 'linear-gradient(to right, #00d4ff, #a855f7)',
                      opacity: isActive ? 0 : 1,
                    }}
                  />
                </Link>
              );
            })}
          </div>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              className="hidden lg:flex items-center px-5 py-2 rounded-full text-sm transition-all duration-300 hover:scale-105"
              style={{
                background: 'linear-gradient(to right, #00d4ff, #a855f7)',
                color: 'white',
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: 600,
                boxShadow: '0 0 20px rgba(0,212,255,0.3)',
              }}
            >
              Start Project
            </Link>
            <button
              className="lg:hidden p-2"
              style={{ color: 'white' }}
              onClick={() => setMobileOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile fullscreen overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[60] flex flex-col"
            style={{ background: 'rgba(4,4,10,0.98)', backdropFilter: 'blur(20px)' }}
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          >
            <div className="flex items-center justify-between px-6 h-20">
              <Link to="/" className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #00d4ff, #a855f7)' }}>
                  <Film size={16} className="text-white" />
                </div>
                <span className="text-xl tracking-[0.15em] uppercase" style={{ fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 800, color: 'white' }}>
                  VISUAL<span style={{ color: '#00d4ff' }}>CRAFT.IT</span>
                </span>
              </Link>
              <button onClick={() => setMobileOpen(false)} style={{ color: 'white' }}>
                <X size={28} />
              </button>
            </div>

            <div className="flex flex-col items-center justify-center flex-1 gap-4">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 + 0.1 }}
                >
                  <Link
                    to={link.to}
                    className="block text-4xl py-2 text-center"
                    style={{
                      fontFamily: 'Barlow Condensed, sans-serif',
                      fontWeight: 700,
                      letterSpacing: '0.1em',
                      color: location.pathname === link.to ? '#00d4ff' : 'rgba(255,255,255,0.8)',
                    }}
                  >
                    {link.label.toUpperCase()}
                  </Link>
                </motion.div>
              ))}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
                <Link
                  to="/contact"
                  className="mt-6 inline-flex items-center px-8 py-3 rounded-full"
                  style={{ background: 'linear-gradient(to right, #00d4ff, #a855f7)', color: 'white', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600 }}
                >
                  Start Project
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
