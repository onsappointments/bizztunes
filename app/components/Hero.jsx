"use client";

import { motion } from "framer-motion";
import { HiPhone, HiSparkles } from "react-icons/hi2";
import { useMemo } from "react";
import Image from "next/image";

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
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* BACKGROUND IMAGE WITH OVERLAY */}
      <div className="absolute inset-0">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero.png"
            alt="Background"
            fill
            className="object-cover"
            quality={90}
            priority
          />
          {/* Dark gradient overlay to blend with theme */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/95 via-indigo-900/90 to-blue-900/95" />
          {/* Additional overlay for better text contrast */}
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* FLOATING ORBS */}
        <div className="absolute inset-0 pointer-events-none z-10">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"
          />
        </div>

        {/* GRID PATTERN */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px] z-10" />
      </div>

      {/* CONTENT */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 py-24 text-center">
        {/* HEADLINE */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight drop-shadow-2xl"
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
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-12 leading-relaxed drop-shadow-lg"
        >
          Transform every incoming call into a professional brand experience
          with custom callertunes, jingles, and voice branding
        </motion.p>

        {/* CTA BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            href="tel:7009987733"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-semibold text-lg shadow-2xl shadow-pink-500/50 overflow-hidden flex items-center justify-center gap-2"
          >
            <span className="relative z-10 flex items-center gap-2">
              <HiPhone className="text-xl" />
              Call Now: 7009987733
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-700"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>

          <motion.a
            href="#services"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white rounded-full font-semibold text-lg hover:bg-white/20 transition-all"
          >
            Explore Services
          </motion.a>
        </motion.div>
      </div>

      {/* SOUND WAVE */}
      <div className="absolute bottom-0 left-0 right-0 h-28 flex items-end justify-center gap-1 pb-6 opacity-30 pointer-events-none z-20">
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

      {/* SCROLL INDICATOR */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:block z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full p-1"
        >
          <motion.div 
            className="w-1.5 h-3 bg-white rounded-full mx-auto"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}