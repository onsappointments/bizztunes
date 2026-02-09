'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { HiPhone, HiMenu, HiX } from 'react-icons/hi';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Platforms', href: '#platforms' },
  { name: 'Why Us', href: '#why-us' },
  { name: 'Demos', href: '#demos' },
  // { name: 'Pricing', href: '#pricing' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' }
];
export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (!el) return;

    const y =
      el.getBoundingClientRect().top + window.scrollY - 80;

    window.scrollTo({ top: y, behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-black/70 backdrop-blur-xl border-b border-white/10 shadow-2xl`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">

            {/* LOGO */}
            <motion.a
              href="#home"
              onClick={(e) => scrollToSection(e, '#home')}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center cursor-pointer relative z-10"
            >
              <img
                src="/Bizz-tunes-logo.png"
                className="h-12 w-auto object-contain"
                alt="Bizz Tunes Logo"
              />
            </motion.a>

            {/* DESKTOP NAV */}
            <div className="hidden md:flex items-center gap-1 lg:gap-2">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  whileHover={{ y: -1 }}
                  className="
                    relative px-4 py-2 font-medium text-sm
                    text-white/70 hover:text-white
                    transition
                  "
                >
                  {link.name}
                  <span className="
                    absolute left-0 -bottom-1 h-[2px] w-0
                    bg-gradient-to-r from-pink-400 to-purple-500
                    transition-all duration-300
                    hover:w-full
                  " />
                </motion.a>
              ))}
            </div>

            {/* CTA DESKTOP */}
            <motion.a
              href="tel:7009987733"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="
                hidden md:flex items-center gap-2
                px-6 py-3 rounded-full
                bg-gradient-to-r from-pink-500 to-purple-600
                text-white font-semibold
                shadow-lg shadow-pink-500/40
              "
            >
              <HiPhone className="text-lg" />
              <span className="hidden lg:inline">Call Now</span>
              <span className="lg:hidden">Call</span>
            </motion.a>

            {/* MOBILE TOGGLE */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="
                md:hidden p-2 rounded-lg
                text-white bg-white/10
                backdrop-blur-md
              "
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <HiX className="text-2xl" />
              ) : (
                <HiMenu className="text-2xl" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <motion.div
        initial={false}
        animate={{
          opacity: mobileMenuOpen ? 1 : 0,
          y: mobileMenuOpen ? 0 : -20,
          pointerEvents: mobileMenuOpen ? 'auto' : 'none'
        }}
        transition={{ duration: 0.25 }}
        className="
          fixed top-20 left-0 right-0 z-40 md:hidden
          bg-black/90 backdrop-blur-xl
          border-b border-white/10 shadow-2xl
        "
      >
        <div className="max-w-7xl mx-auto px-4 py-6 space-y-2">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              initial={{ opacity: 0, x: -20 }}
              animate={{
                opacity: mobileMenuOpen ? 1 : 0,
                x: mobileMenuOpen ? 0 : -20
              }}
              transition={{ delay: i * 0.05 }}
              className="
                block px-4 py-3 rounded-lg
                text-white/80 hover:text-white
                hover:bg-white/10
                transition
              "
            >
              {link.name}
            </motion.a>
          ))}

          {/* MOBILE CTA */}
          <motion.a
            href="tel:7009987733"
            initial={{ opacity: 0, x: -20 }}
            animate={{
              opacity: mobileMenuOpen ? 1 : 0,
              x: mobileMenuOpen ? 0 : -20
            }}
            transition={{ delay: navLinks.length * 0.05 }}
            className="
              flex items-center justify-center gap-2
              px-6 py-3 rounded-full
              bg-gradient-to-r from-pink-500 to-purple-600
              text-white font-semibold shadow-lg mt-4
            "
          >
            <HiPhone className="text-lg" />
            Call Now: 7009987733
          </motion.a>
        </div>
      </motion.div>

      {/* OVERLAY */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 md:hidden"
        />
      )}
    </>
  );
}
