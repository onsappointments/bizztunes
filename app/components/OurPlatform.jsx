"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

const platforms = [
  { name: "Amazon Music", src: "/platforms/amazon.png" },
  { name: "Apple Music", src: "/platforms/apple.png" },
  { name: "Deezer", src: "/platforms/deezer.png" },
  { name: "Facebook", src: "/platforms/facebook.png" },
  { name: "Gaana", src: "/platforms/gaana.png" },
  { name: "Hungama", src: "/platforms/hungama.png" },
  { name: "Instagram", src: "/platforms/instagram.png" },
  { name: "JioSaavn", src: "/platforms/jio-saavan.png" },
  { name: "Pandora", src: "/platforms/pandora.png" },
  { name: "Spotify", src: "/platforms/spotify.png" },
  { name: "SoundCloud", src: "/platforms/soundcloud.png" },
  { name: "Triller", src: "/platforms/triller.png" },
  { name: "YouTube", src: "/platforms/youtube.png" },
  { name: "YouTube Music", src: "/platforms/youtube-music.png" },
];

export default function OurPlatforms() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section
      id="platforms"
      className="py-16 sm:py-24 bg-gradient-to-b from-slate-900 via-slate-800 to-gray-900 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* SECTION HEADER */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full text-purple-300 text-sm font-semibold mb-4">
            Global Reach
          </span>

          {/* SEO-CORRECT H2 */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Business Caller Tunes Available on
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {" "}
              All Major Platforms
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Your <strong>business caller tunes</strong> and
            <strong> branded jingles</strong> can be distributed across the
            world’s leading music and social platforms, ensuring maximum
            reach and consistent brand presence.
          </p>
        </motion.div>

        {/* PLATFORMS GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8 sm:gap-12 items-center">
          {platforms.map((platform, index) => (
            <PlatformCard
              key={platform.name}
              platform={platform}
              index={index}
              inView={inView}
              isMobile={isMobile}
            />
          ))}
        </div>

        {/* BADGE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 shadow-lg">
            <span className="text-white text-sm font-semibold">
              Available on 14+ Global Platforms
            </span>
          </div>
        </motion.div>
      </div>

      {/* INVISIBLE SEO SUPPORT */}
      <p className="sr-only">
        Business caller tunes and business jingles created by BizzTunes
        can be distributed across major global platforms including music
        streaming services and social media networks, helping companies
        reach customers worldwide with a professional audio identity.
      </p>
    </section>
  );
}

function PlatformCard({ platform, index, inView, isMobile }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{
        duration: isMobile ? 0.3 : 0.5,
        delay: isMobile ? index * 0.02 : index * 0.05,
      }}
      whileHover={isMobile ? {} : { scale: 1.15, y: -8 }}
      className="group relative flex items-center justify-center"
    >
      <div className="relative bg-white/15 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/20 transition-all duration-300 group-hover:border-purple-400/60 group-hover:bg-white/25">
        <Image
          src={platform.src}
          alt={`${platform.name} platform for business caller tune distribution`}
          width={120}
          height={60}
          className="w-full h-auto max-h-12 sm:max-h-14 object-contain"
          loading="lazy"
        />
      </div>
    </motion.div>
  );
}
