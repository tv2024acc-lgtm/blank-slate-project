import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { LoadingScreen } from './LoadingScreen';

export function Root() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <div style={{ background: '#04040a', minHeight: '100vh' }}>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      {!loading && (
        <>
          <Navbar />
          <AnimatePresence mode="wait">
            <motion.main
              key={location.pathname}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
            >
              <Outlet />
            </motion.main>
          </AnimatePresence>
          <Footer />
        </>
      )}
    </div>
  );
}
