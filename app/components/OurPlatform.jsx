'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

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
  return (
    <section
      id="platforms"
      className="relative py-24 bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900 overflow-hidden"
    >
      {/* Background Elements (same language as WhyBizzTunes) */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

        {/* Floating Orbs (slow, subtle) */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-24 right-24 w-96 h-96 bg-purple-500 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.12, 0.2, 0.12] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-24 left-24 w-96 h-96 bg-pink-500 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold rounded-full mb-4">
            OUR REACH
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {' '}Platforms
            </span>
          </h2>

          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Your callertunes and audio branding are distributed seamlessly across
            the world’s most trusted music and social platforms.
          </p>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-12 gap-y-14 items-center">
          {platforms.map((platform) => (
            <div
              key={platform.name}
              className="
                group relative flex items-center justify-center
                opacity-70
                transition-all duration-300
                hover:opacity-100
              "
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300" />

              <Image
                src={platform.src}
                alt={platform.name}
                width={160}
                height={60}
                className="
                  relative z-10 max-h-12 sm:max-h-14
                  object-contain
                  transition-transform duration-300
                  group-hover:scale-105
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
