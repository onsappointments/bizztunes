'use client';

import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { useState, useEffect, useMemo } from 'react';
import { HiMusicalNote } from 'react-icons/hi2';

export default function AdvancedLoader() {
  const prefersReducedMotion = useReducedMotion();

  const [isLoading, setIsLoading] = useState(true);
  const [loadingStage, setLoadingStage] = useState(0);

  const stages = useMemo(
    () => [
      'Initializing...',
      'Loading Assets...',
      'Preparing Audio...',
      'Almost Ready...',
      'Welcome!',
    ],
    []
  );

  useEffect(() => {
    const stageInterval = setInterval(() => {
      setLoadingStage((prev) =>
        prev >= stages.length - 1 ? prev : prev + 1
      );
    }, 400);

    const loadTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => {
      clearInterval(stageInterval);
      clearTimeout(loadTimer);
    };
  }, [stages.length]);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.97 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex items-center justify-center
          bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900
          overflow-hidden transform-gpu"
        >
          {/* BACKGROUND */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              animate={prefersReducedMotion ? {} : { rotate: 360 }}
              transition={
                prefersReducedMotion
                  ? {}
                  : { duration: 30, repeat: Infinity, ease: 'linear' }
              }
              className="absolute inset-0 will-change-transform"
            >
              <div className="absolute top-0 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-purple-500/30 rounded-full blur-2xl sm:blur-3xl" />
              <div className="absolute bottom-0 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-blue-500/30 rounded-full blur-2xl sm:blur-3xl" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-pink-500/20 rounded-full blur-2xl sm:blur-3xl" />
            </motion.div>

            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
          </div>

          {/* CONTENT */}
          <div className="relative z-10 text-center px-6">
            {/* LOGO */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                duration: 0.8,
                type: 'spring',
                stiffness: 180,
                damping: 18,
              }}
              className="relative mb-8"
            >
              <motion.div
                animate={
                  prefersReducedMotion
                    ? {}
                    : {
                        scale: [1, 1.15, 1],
                        opacity: [0.4, 0.2, 0.4],
                      }
                }
                transition={
                  prefersReducedMotion
                    ? {}
                    : { duration: 2.5, repeat: Infinity, ease: 'easeInOut' }
                }
                className="absolute inset-0 rounded-full bg-gradient-to-r
                from-pink-500 to-purple-500 blur-xl sm:blur-2xl"
              />

              <img
                src="/Bizz-tunes-logo.png"
                className="h-24 sm:h-32 w-auto mx-auto object-contain relative z-10"
                alt="Bizz Tunes"
              />
            </motion.div>

            {/* CIRCLE LOADER */}
            <div className="relative w-32 h-32 mx-auto mb-8">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="8"
                />

                <motion.circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="url(#gradient)"
                  strokeWidth="8"
                  strokeLinecap="round"
                  animate={{ pathLength: (loadingStage + 1) / stages.length }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                />

                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ec4899" />
                    <stop offset="50%" stopColor="#a855f7" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                </defs>
              </svg>

              <motion.div
                animate={prefersReducedMotion ? {} : { rotate: 360 }}
                transition={
                  prefersReducedMotion
                    ? {}
                    : { duration: 4, repeat: Infinity, ease: 'linear' }
                }
                className="absolute inset-0 flex items-center justify-center will-change-transform"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br
                from-pink-500 to-purple-500 flex items-center justify-center shadow-2xl">
                  <HiMusicalNote className="text-3xl text-white" />
                </div>
              </motion.div>
            </div>

            {/* STAGE TEXT */}
            <AnimatePresence mode="wait">
              <motion.h2
                key={loadingStage}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="text-xl sm:text-2xl font-bold text-white mb-6"
              >
                {stages[loadingStage]}
              </motion.h2>
            </AnimatePresence>

            {/* DOTS */}
            <div className="flex justify-center gap-2">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 rounded-full bg-gradient-to-r
                  from-pink-400 to-purple-400"
                  animate={
                    prefersReducedMotion
                      ? {}
                      : { scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }
                  }
                  transition={
                    prefersReducedMotion
                      ? {}
                      : { duration: 1.2, repeat: Infinity, delay: i * 0.2 }
                  }
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
