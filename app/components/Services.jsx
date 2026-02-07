'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  HiMicrophone, 
  HiMusicalNote, 
  HiSparkles,
  HiDocumentText,
  HiSpeakerWave,
  HiUserGroup
} from 'react-icons/hi2';

const services = [
  {
    icon: HiMicrophone,
    title: 'Professional Voice-over',
    description: 'High-quality voice recordings by experienced voice artists in multiple languages and accents.',
    gradient: 'from-blue-500 to-indigo-600',
    features: ['Male & Female voices', 'Multiple languages', 'Professional quality']
  },
  {
    icon: HiMusicalNote,
    title: 'Custom Jingles',
    description: 'Catchy, memorable tunes composed specifically for your brand to create lasting impressions.',
    gradient: 'from-purple-500 to-pink-600',
    features: ['Original composition', 'Brand-specific', 'Copyright-free']
  },
  {
    icon: HiSparkles,
    title: 'Brand Identity Audio',
    description: 'Complete audio branding solution that reflects your company values and personality.',
    gradient: 'from-emerald-500 to-teal-600',
    features: ['Custom scripts', 'Unique identity', 'Brand consistency']
  },
  {
    icon: HiDocumentText,
    title: 'Script Writing',
    description: 'Expert copywriters craft compelling messages that engage and inform your callers.',
    gradient: 'from-orange-500 to-red-600',
    features: ['Professional writers', 'Engaging content', 'Message optimization']
  },
  {
    icon: HiSpeakerWave,
    title: 'Audio Production',
    description: 'State-of-the-art audio production with mixing, mastering, and sound design.',
    gradient: 'from-cyan-500 to-blue-600',
    features: ['Studio quality', 'Sound effects', 'Perfect mixing']
  },
  {
    icon: HiUserGroup,
    title: 'Consultation & Support',
    description: 'Dedicated support team to help you choose the perfect audio solution for your needs.',
    gradient: 'from-violet-500 to-purple-600',
    features: ['Free consultation', '24/7 support', 'Expert guidance']
  }
];

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="services" className="py-16 sm:py-24 bg-gradient-to-b from-gray-900 to-gray-950 relative overflow-hidden">
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
          className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl"
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
          className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500 rounded-full blur-3xl"
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
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Complete Audio
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Branding Solutions</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            From professional voice-overs to custom jingles, we provide everything you need for perfect audio branding
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} inView={inView} />
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
            Discuss Your Requirements
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index, inView }) {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group relative"
    >
      <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 sm:p-8 border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 h-full">
        {/* Gradient Glow on Hover */}
        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl`} />
        
        {/* Icon */}
        <motion.div
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.6 }}
          className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 shadow-lg`}
        >
          <Icon className="text-2xl sm:text-3xl text-white" />
        </motion.div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 mb-6 text-sm sm:text-base leading-relaxed">
          {service.description}
        </p>

        {/* Features */}
        <ul className="space-y-2">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
              <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient}`} />
              {feature}
            </li>
          ))}
        </ul>

        {/* Decorative Corner */}
        <motion.div
          initial={{ scale: 0 }}
          whileHover={{ scale: 1 }}
          className={`absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl ${service.gradient} rounded-tl-2xl rounded-br-2xl opacity-5`}
        />
      </div>
    </motion.div>
  );
}