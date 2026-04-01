import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<'loading' | 'reveal' | 'done'>('loading');

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => setPhase('reveal'), 200);
          setTimeout(() => {
            setPhase('done');
            onComplete();
          }, 1200);
          return 100;
        }
        return p + Math.random() * 12 + 3;
      });
    }, 80);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ background: '#04040a' }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
        >
          {/* Background particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: Math.random() * 3 + 1,
                  height: Math.random() * 3 + 1,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  background: i % 3 === 0 ? '#00d4ff' : i % 3 === 1 ? '#a855f7' : '#f59e0b',
                  opacity: 0.4,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.2, 0.6, 0.2],
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          {/* Rotating lens ring */}
          <div className="relative mb-10">
            <motion.div
              className="w-28 h-28 rounded-full"
              style={{
                border: '2px solid transparent',
                background: 'linear-gradient(#04040a, #04040a) padding-box, linear-gradient(to right, #00d4ff, #a855f7, #f59e0b) border-box',
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              className="absolute inset-3 rounded-full"
              style={{
                border: '1px solid rgba(0,212,255,0.3)',
              }}
              animate={{ rotate: -360 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            />
            {/* Inner lens */}
            <div
              className="absolute inset-6 rounded-full flex items-center justify-center"
              style={{
                background: 'radial-gradient(circle, rgba(0,212,255,0.15) 0%, rgba(168,85,247,0.1) 50%, transparent 70%)',
              }}
            >
              <motion.div
                className="w-4 h-4 rounded-full"
                style={{ background: 'radial-gradient(circle, #00d4ff, #a855f7)' }}
                animate={{ scale: [1, 1.4, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
          </div>

          {/* Logo text */}
          <motion.div
            className="mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div
              className="text-3xl tracking-[0.3em] uppercase mb-1"
              style={{
                fontFamily: 'Barlow Condensed, sans-serif',
                fontWeight: 800,
                background: 'linear-gradient(to right, #00d4ff, #a855f7)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              VISUALCRAFT.IT
            </div>
            <div
              className="text-xs tracking-[0.5em] uppercase"
              style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'Space Grotesk, sans-serif' }}
            >
              STUDIO
            </div>
          </motion.div>

          {/* Light sweep */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(0,212,255,0.03) 50%, transparent 100%)',
            }}
            animate={{ x: ['-100%', '200%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', repeatDelay: 0.5 }}
          />

          {/* Progress bar */}
          <div className="w-64 h-[1px] bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{
                background: 'linear-gradient(to right, #00d4ff, #a855f7)',
                width: `${Math.min(progress, 100)}%`,
              }}
              transition={{ duration: 0.1 }}
            />
          </div>
          <div
            className="mt-3 text-xs tracking-widest"
            style={{ color: 'rgba(255,255,255,0.3)', fontFamily: 'Space Grotesk, sans-serif' }}
          >
            {Math.min(Math.floor(progress), 100)}%
          </div>

          {/* Sound wave graphic */}
          <div className="flex items-center gap-[3px] mt-6 opacity-40">
            {[3, 7, 5, 9, 4, 8, 6, 10, 4, 7, 3, 6, 8, 5, 9].map((h, i) => (
              <motion.div
                key={i}
                className="w-[2px] rounded-full"
                style={{ height: h * 2, background: 'linear-gradient(to top, #a855f7, #00d4ff)' }}
                animate={{ scaleY: [1, 1.5, 0.8, 1.2, 1] }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  delay: i * 0.05,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
