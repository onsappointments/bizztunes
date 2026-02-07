"use client";

import { motion } from "framer-motion";
import { HiPhone, HiSparkles } from "react-icons/hi2";
import { useMemo } from "react";

export default function Hero() {
  // Precompute bars once
  const bars = useMemo(
    () =>
      Array.from({ length: 24 }, (_, i) => ({
        id: i,
        duration: 1.2 + (i % 5) * 0.15,
        delay: i * 0.05,
      })),
    []
  );

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden
      bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900"
    >
      {/* BACKGROUND ORBS (CSS + light motion only) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/40 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/40 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 text-center">
        {/* Badge */}

        {/* HEADLINE (NO SCROLL LINKING) */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl
          font-bold text-white mb-6 leading-tight"
        >
          Your Voice is Your
          <br />
          <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            Brand Identity
          </span>
        </motion.h1>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-lg sm:text-xl md:text-2xl text-blue-100
          max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Transform every incoming call into a professional brand experience
          with custom callertunes, jingles, and voice branding.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="tel:7009987733"
            className="px-8 py-4 rounded-full bg-gradient-to-r
            from-pink-500 to-purple-600 text-white font-semibold
            shadow-xl shadow-pink-500/40 flex items-center gap-2 justify-center"
          >
            <HiPhone className="text-xl" />
            Call Now
          </a>

          <a
            href="#services"
            className="px-8 py-4 rounded-full border border-white/30
            text-white font-semibold hover:bg-white/10 transition"
          >
            Explore Services
          </a>
        </motion.div>
      </div>

      {/* SOUND WAVE (ISOLATED, NO SCROLL DEPENDENCY) */}
      <div className="absolute bottom-0 left-0 right-0 h-28 flex items-end justify-center gap-1 pb-6 opacity-30 pointer-events-none">
        {bars.map((bar) => (
          <motion.div
            key={bar.id}
            className="w-1 bg-gradient-to-t from-pink-400 to-purple-400 rounded-full"
            animate={{ height: ["30%", "80%", "30%"] }}
            transition={{
              duration: bar.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: bar.delay,
            }}
          />
        ))}
      </div>
    </section>
  );
}
