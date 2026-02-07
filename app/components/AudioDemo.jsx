'use client';

import { motion } from 'framer-motion';
import { useEffect, useState, useMemo } from 'react';
import { HiPlay, HiPause } from 'react-icons/hi2';

const demos = [
  {
    title: 'Corporate Welcome',
    description: 'Professional greeting for businesses',
    waveColor: 'bg-blue-500',
    category: 'Business'
  },
  {
    title: 'Retail Store',
    description: 'Engaging message for retail customers',
    waveColor: 'bg-purple-500',
    category: 'Retail'
  },
  {
    title: 'Healthcare',
    description: 'Warm, reassuring tone for medical facilities',
    waveColor: 'bg-teal-500',
    category: 'Medical'
  },
  {
    title: 'Brand Jingle',
    description: 'Catchy tune that sticks in memory',
    waveColor: 'bg-rose-500',
    category: 'Music'
  },
  {
    title: 'Promotional',
    description: 'Exciting offers and announcements',
    waveColor: 'bg-amber-500',
    category: 'Marketing'
  },
  {
    title: 'Standard Message',
    description: 'Classic professional callertune',
    waveColor: 'bg-violet-500',
    category: 'General'
  }
];

// Fixed wave heights that will be consistent across server and client
const WAVE_PATTERNS = [
  [45, 38, 47, 26, 29, 32, 25, 36, 24, 35, 33, 39, 46, 43, 39, 26, 32, 39, 24, 49, 23, 29, 30, 29, 41, 45, 38, 22, 39, 30],
  [35, 41, 33, 27, 49, 40, 22, 25, 31, 39, 29, 39, 20, 35, 35, 26, 45, 42, 40, 34, 23, 35, 28, 46, 32, 24, 21, 37, 44, 26],
  [41, 47, 44, 31, 49, 39, 30, 33, 27, 43, 27, 26, 28, 38, 27, 49, 40, 45, 48, 21, 29, 26, 46, 39, 48, 31, 36, 22, 21, 45],
  [46, 36, 36, 33, 28, 45, 24, 32, 41, 21, 46, 37, 26, 36, 28, 23, 37, 23, 21, 20, 36, 30, 20, 45, 34, 49, 46, 47, 43, 47],
  [21, 41, 25, 46, 24, 24, 43, 44, 40, 40, 47, 49, 32, 44, 33, 24, 21, 40, 28, 33, 25, 44, 48, 39, 35, 30, 41, 33, 20, 28],
  [43, 21, 49, 26, 47, 46, 40, 29, 46, 44, 24, 20, 47, 45, 44, 38, 45, 37, 36, 28, 39, 30, 31, 29, 40, 42, 24, 49, 40, 35]
];

function AudioCard({ demo, index, inView }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Memoize wave heights to use the same pattern consistently
  const waveHeights = useMemo(() => WAVE_PATTERNS[index % WAVE_PATTERNS.length], [index]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    // In a real app, you would control audio playback here
    setTimeout(() => setIsPlaying(false), 3000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 sm:p-8 border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20">
        {/* Category Badge */}
        <div className="absolute top-4 right-4 px-3 py-1 bg-purple-500/20 text-purple-300 text-xs font-semibold rounded-full border border-purple-500/30">
          {demo.category}
        </div>

        {/* Play Button */}
        <div className="mb-6">
          <button
            onClick={handlePlayPause}
            className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white shadow-lg hover:shadow-purple-500/50 transition-all hover:scale-110 active:scale-95"
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? <HiPause className="text-2xl" /> : <HiPlay className="text-2xl ml-1" />}
          </button>
        </div>

        {/* Title and Description */}
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
          {demo.title}
        </h3>
        <p className="text-gray-400 mb-6 text-sm sm:text-base">
          {demo.description}
        </p>

        {/* Wave Visualization */}
        <div className="flex items-center gap-1 h-16 mb-4">
          {waveHeights.map((height, i) => (
            <motion.div
              key={i}
              className={`flex-1 ${demo.waveColor} rounded-full`}
              style={{
                height: isMounted && isPlaying ? `${height}%` : '30%',
                opacity: 0.3
              }}
              animate={
                isMounted && isPlaying
                  ? {
                      height: [`${height}%`, `${(height + 20) % 80 + 20}%`, `${height}%`],
                      opacity: [0.3, 0.6, 0.3]
                    }
                  : {}
              }
              transition={{
                duration: 0.8 + (i % 3) * 0.2,
                repeat: isPlaying ? Infinity : 0,
                ease: 'easeInOut'
              }}
            />
          ))}
        </div>

        {/* Listen Button */}
        <button
          onClick={handlePlayPause}
          className="w-full py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500/50 rounded-lg text-white font-medium transition-all duration-300 text-sm sm:text-base"
        >
          {isPlaying ? 'Playing...' : 'Listen to Sample'}
        </button>
      </div>
    </motion.div>
  );
}

export default function AudioDemo() {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('demos');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section id="demos" className="py-16 sm:py-24 bg-gradient-to-b from-gray-950 to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full text-purple-300 text-sm font-semibold mb-4">
            Sample Library
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Listen to Our
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Premium Callertunes</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            Choose from our diverse collection or let us create a custom tune for your brand
          </p>
        </motion.div>

        {/* Audio Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {demos.map((demo, index) => (
            <AudioCard key={demo.title} demo={demo} index={index} inView={inView} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12 sm:mt-16"
        >
          <a
            href="tel:7009987733"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold text-base sm:text-lg shadow-xl hover:shadow-purple-500/50 transition-all hover:scale-105 active:scale-95"
          >
            Get Your Custom Callertune
          </a>
        </motion.div>
      </div>
    </section>
  );
}