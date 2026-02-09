'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const platforms = [
  { name: 'Amazon Music', src: '/platforms/amazon.png' },
  { name: 'Apple Music', src: '/platforms/apple.png' },
  { name: 'Deezer', src: '/platforms/deezer.png' },
  { name: 'Facebook', src: '/platforms/facebook.png' },
  { name: 'Gaana', src: '/platforms/gaana.png' },
  { name: 'Hungama', src: '/platforms/hungama.png' },
  { name: 'Instagram', src: '/platforms/instagram.png' },
  { name: 'JioSaavn', src: '/platforms/jio-saavan.png' },
  { name: 'Pandora', src: '/platforms/pandora.png' },
  { name: 'Spotify', src: '/platforms/spotify.png' },
  { name: 'SoundCloud', src: '/platforms/soundcloud.png' },
  { name: 'Triller', src: '/platforms/triller.png' },
  { name: 'YouTube', src: '/platforms/youtube.png' },
  { name: 'YouTube Music', src: '/platforms/youtube-music.png' },
];

export default function OurPlatforms() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section
      id="platforms"
      className="py-16 sm:py-24 bg-gradient-to-b from-gray-900 to-gray-950 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

        {/* Floating Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 right-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 left-20 w-96 h-96 bg-pink-500 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full text-purple-300 text-sm font-semibold mb-4">
            Our Reach
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Available On All
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Major Platforms</span>
          </h2>

          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            Your callertunes and audio branding distributed seamlessly across the world's most trusted music and social platforms
          </p>
        </motion.div>

        {/* Platforms Grid - Clean & Bright */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8 sm:gap-12 items-center">
          {platforms.map((platform, index) => (
            <PlatformCard 
              key={platform.name} 
              platform={platform} 
              index={index} 
              inView={inView} 
            />
          ))}
        </div>

        {/* Bottom Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
            <div className="flex -space-x-2">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 border-2 border-gray-900 flex items-center justify-center text-white text-xs font-bold"
                >
                  {14 - i}
                </div>
              ))}
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 border-2 border-gray-900 flex items-center justify-center text-white text-xs font-bold">
                +
              </div>
            </div>
            <span className="text-white text-sm font-semibold">
              14+ Platforms & Growing
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function PlatformCard({ platform, index, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.05,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ scale: 1.15, y: -8 }}
      className="group relative flex items-center justify-center"
    >
      {/* Glow Effect on Hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-30 blur-2xl transition-all duration-300 scale-150" />
      
      {/* Logo Container */}
      <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/10 group-hover:border-purple-400/50 transition-all duration-300 group-hover:bg-white/10">
        <Image
          src={platform.src}
          alt={platform.name}
          width={120}
          height={60}
          className="w-full h-auto max-h-12 sm:max-h-14 object-contain brightness-100 contrast-125 saturate-110 drop-shadow-lg"
        />
      </div>

      {/* Tooltip */}
      <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-semibold rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-xl pointer-events-none">
        {platform.name}
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-purple-500 rotate-45" />
      </div>
    </motion.div>
  );
}