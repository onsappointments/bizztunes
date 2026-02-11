'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  HiPhone, 
  HiEnvelope, 
  HiMapPin,
  HiClock
} from 'react-icons/hi2';
import { FaWhatsapp } from 'react-icons/fa';

const contactInfo = [
  {
    icon: HiPhone,
    title: 'Phone',
    detail: '7009987733',
    link: 'tel:7009987733',
    gradient: 'from-purple-500 to-pink-600',
    clickable: true
  },
  {
    icon: HiEnvelope,
    title: 'General Inquiries',
    detail: 'info@bizztunes.in',
    link: 'mailto:info@bizztunes.in',
    gradient: 'from-blue-500 to-indigo-600',
    clickable: true
  },
  {
    icon: HiEnvelope,
    title: 'Sales & Pricing',
    detail: 'sales@bizztunes.in',
    link: 'mailto:sales@bizztunes.in',
    gradient: 'from-emerald-500 to-teal-600',
    clickable: true
  },
  {
    icon: HiMapPin,
    title: 'Office Location',
    detail: '#24, Aatma Nagar, Mundian Kalan, Ludhiana 141015, Punjab, India',
    link: null,
    gradient: 'from-orange-500 to-red-600',
    clickable: false
  },
  {
    icon: HiClock,
    title: 'Support Hours',
    detail: '24/7 Customer Support',
    link: null,
    gradient: 'from-pink-500 to-rose-600',
    clickable: false
  },
  {
    icon: FaWhatsapp,
    title: 'WhatsApp Support',
    detail: '+91 7009987733',
    link: 'https://wa.me/917009987733',
    gradient: 'from-green-500 to-emerald-600',
    clickable: true
  }
];

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-16 sm:py-24 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-900 relative overflow-hidden"
    >
      {/* Invisible SEO heading */}
      <h2 id="contact-heading" className="sr-only">
        Contact BizzTunes for Business Caller Tunes and Audio Branding
      </h2>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          style={{ willChange: "transform" }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full text-purple-300 text-sm font-semibold mb-4">
            Contact Us
          </span>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Get Your Business
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {' '}Caller Tune Today
            </span>
          </h3>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            Talk to our team and create a professional business caller tune,
            jingle, or audio branding for your company.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <ContactCard key={info.title} info={info} index={index} inView={inView} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 sm:p-12 border border-gray-700 hover:border-purple-500 transition-all duration-300 text-center group"
        >
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl" />
          <h4 className="relative text-2xl sm:text-3xl font-bold text-white mb-4">
            Start Your Audio Branding Journey Today
          </h4>
          <p className="relative text-gray-400 mb-8 max-w-2xl mx-auto">
            Call us now for a free consultation and learn how a business
            caller tune can improve your brand identity.
          </p>
          <div className="relative flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="tel:7009987733"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold text-base sm:text-lg shadow-xl hover:shadow-purple-500/50 transition-all"
            >
              <HiPhone className="text-xl" />
              Call Now
            </motion.a>
            <motion.a
              href="https://wa.me/917009987733"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-green-500/50 text-white rounded-full font-semibold text-base sm:text-lg transition-all"
            >
              <FaWhatsapp className="text-xl" />
              WhatsApp Us
            </motion.a>
          </div>
        </motion.div>

        {/* FOOTER (RESTORED – UNCHANGED UI) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
            <div className="text-center md:text-left">
              <img
                src="/Bizz-tunes-logo.png"
                className="h-12 sm:h-16 w-auto object-contain mx-auto md:mx-0 mb-4"
                alt="BizzTunes Business Caller Tune Logo"
              />
              <p className="text-gray-500 text-sm">
                © 2024 Bizz Tunes. All rights reserved.
              </p>
            </div>

            <div className="text-center md:text-right">
              <h4 className="text-white font-semibold mb-3">Quick Contact</h4>
              <div className="space-y-2 text-sm">
                <a href="tel:7009987733" className="block text-gray-400 hover:text-purple-400">
                  <span className="font-medium">Phone:</span> 7009987733
                </a>
                <a href="mailto:info@bizztunes.in" className="block text-gray-400 hover:text-purple-400">
                  <span className="font-medium">General:</span> info@bizztunes.in
                </a>
                <a href="mailto:sales@bizztunes.in" className="block text-gray-400 hover:text-purple-400">
                  <span className="font-medium">Sales:</span> sales@bizztunes.in
                </a>
                <p className="text-gray-500">
                  Ludhiana, Punjab, India
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 border-t border-white/5">
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
              <a href="#" className="hover:text-purple-400">Privacy Policy</a>
              <a href="#" className="hover:text-purple-400">Terms of Service</a>
              <a href="#" className="hover:text-purple-400">Refund Policy</a>
            </div>
            <div className="text-sm text-gray-500">
              Made with ♥ in India
            </div>
          </div>
        </motion.div>

        {/* Invisible SEO text */}
        <p className="sr-only">
          Contact BizzTunes for business caller tunes, custom jingles,
          and professional audio branding services. Available via phone,
          email, and WhatsApp with 24/7 customer support.
        </p>
      </div>
    </section>
  );
}

function ContactCard({ info, index, inView }) {
  const Icon = info.icon;
  const Container = info.clickable ? 'a' : 'div';

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -5 }}
    >
      <Container
        {...(info.clickable && info.link ? {
          href: info.link,
          target: info.link.startsWith('http') ? '_blank' : undefined,
          rel: info.link.startsWith('http') ? 'noopener noreferrer' : undefined
        } : {})}
        className={`block relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 h-full group ${info.clickable ? 'cursor-pointer' : 'cursor-default'}`}
      >
        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${info.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl`} />
        <motion.div
          whileHover={info.clickable ? { rotate: 360, scale: 1.1 } : {}}
          transition={{ duration: 0.6 }}
          className={`relative w-12 h-12 rounded-xl bg-gradient-to-br ${info.gradient} flex items-center justify-center mb-4 shadow-lg`}
        >
          <Icon className="text-2xl text-white" />
        </motion.div>
        <h5 className="text-sm font-semibold text-gray-400 mb-2">
          {info.title}
        </h5>
        <p className="text-white font-medium break-words">
          {info.detail}
        </p>
      </Container>
    </motion.div>
  );
}
