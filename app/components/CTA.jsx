'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  HiPhone, 
  HiEnvelope, 
  HiMapPin,
  HiClock
} from 'react-icons/hi2';
import { 
  FaWhatsapp, 
  FaInstagram, 
  FaFacebook, 
  FaLinkedin 
} from 'react-icons/fa';

const contactInfo = [
  {
    icon: HiPhone,
    title: 'Phone',
    detail: '7009987733',
    link: 'tel:7009987733',
    gradient: 'from-purple-500 to-pink-600'
  },
  {
    icon: HiEnvelope,
    title: 'Email',
    detail: 'info@bizztunes.com',
    link: 'mailto:info@bizztunes.com',
    gradient: 'from-blue-500 to-indigo-600'
  },
  {
    icon: HiMapPin,
    title: 'Location',
    detail: 'Ludhiana, Punjab, India',
    link: '#',
    gradient: 'from-emerald-500 to-teal-600'
  },
  {
    icon: HiClock,
    title: 'Business Hours',
    detail: '24/7 Support Available',
    link: '#',
    gradient: 'from-orange-500 to-red-600'
  }
];

const socialLinks = [
  { icon: FaWhatsapp, name: 'WhatsApp', link: '#', gradient: 'from-green-500 to-emerald-600' },
  { icon: FaInstagram, name: 'Instagram', link: '#', gradient: 'from-pink-500 to-purple-600' },
  { icon: FaFacebook, name: 'Facebook', link: '#', gradient: 'from-blue-500 to-indigo-600' },
  { icon: FaLinkedin, name: 'LinkedIn', link: '#', gradient: 'from-blue-600 to-cyan-600' }
];

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="contact" className="py-16 sm:py-24 bg-gradient-to-b from-gray-950 to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
        
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
          className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl"
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
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Ready to Transform
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Your Brand?</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            Contact us today and let's create the perfect audio identity for your business
          </p>
        </motion.div>

        {/* Contact Info Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <ContactCard key={info.title} info={info} index={index} inView={inView} />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 sm:p-12 border border-gray-700 text-center"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Start Your Audio Branding Journey Today
          </h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Call us now for a free consultation and discover how we can help your business stand out
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:7009987733"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold text-base sm:text-lg shadow-xl hover:shadow-purple-500/50 transition-all hover:scale-105 active:scale-95"
            >
              <HiPhone className="text-xl" />
              Call: 7009987733
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500/50 text-white rounded-full font-semibold text-base sm:text-lg transition-all"
            >
              <FaWhatsapp className="text-xl" />
              WhatsApp Us
            </a>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Logo & Copyright */}
            <div className="text-center md:text-left">
              <img 
                src="/Bizz-tunes-logo.png" 
                className="h-12 w-auto object-contain mx-auto md:mx-0 mb-3" 
                alt="Bizz Tunes Logo" 
              />
              <p className="text-gray-400 text-sm">
                © 2024 Bizz Tunes. All rights reserved.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.link}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-10 h-10 rounded-full bg-gradient-to-br ${social.gradient} flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all`}
                    aria-label={social.name}
                  >
                    <Icon className="text-lg" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Bottom Links */}
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-purple-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Refund Policy</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ContactCard({ info, index, inView }) {
  const Icon = info.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <a
        href={info.link}
        className="block relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 h-full group"
      >
        {/* Gradient Glow */}
        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${info.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl`} />
        
        {/* Icon */}
        <motion.div
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.6 }}
          className={`relative w-12 h-12 rounded-xl bg-gradient-to-br ${info.gradient} flex items-center justify-center mb-4 shadow-lg`}
        >
          <Icon className="text-2xl text-white" />
        </motion.div>

        {/* Title */}
        <h3 className="text-sm font-semibold text-gray-400 mb-2">
          {info.title}
        </h3>

        {/* Detail */}
        <p className="text-white font-medium">
          {info.detail}
        </p>
      </a>
    </motion.div>
  );
}