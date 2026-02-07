'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  HiShieldCheck, 
  HiClock, 
  HiUserGroup, 
  HiSparkles,
  HiCurrencyRupee,
  HiCheckBadge
} from 'react-icons/hi2';

const features = [
  {
    icon: HiShieldCheck,
    title: 'Lifetime Validity',
    description: 'Once activated, your callertune stays active forever. No recurring charges, no expiry dates.',
    gradient: 'from-emerald-500 to-teal-600',
    stat: '100%',
    statLabel: 'One-time Payment'
  },
  {
    icon: HiClock,
    title: '24/7 Support',
    description: 'Round-the-clock technical assistance and customer support whenever you need help.',
    gradient: 'from-blue-500 to-indigo-600',
    stat: '24/7',
    statLabel: 'Available Always'
  },
  {
    icon: HiUserGroup,
    title: '1000+ Happy Clients',
    description: 'Trusted by businesses across India for professional audio branding solutions.',
    gradient: 'from-purple-500 to-pink-600',
    stat: '1000+',
    statLabel: 'Satisfied Clients'
  },
  {
    icon: HiSparkles,
    title: 'Custom Creation',
    description: 'Fully customized scripts, voiceovers, and music tailored to your brand identity.',
    gradient: 'from-orange-500 to-red-600',
    stat: '100%',
    statLabel: 'Customized'
  },
  {
    icon: HiCurrencyRupee,
    title: 'Affordable Pricing',
    description: 'Premium quality at competitive prices. Professional branding accessible to all businesses.',
    gradient: 'from-cyan-500 to-blue-600',
    stat: 'Best',
    statLabel: 'Value for Money'
  },
  {
    icon: HiCheckBadge,
    title: 'All Networks',
    description: 'Compatible with all major telecom operators - Airtel, Jio, VI, BSNL, and more.',
    gradient: 'from-violet-500 to-purple-600',
    stat: 'All',
    statLabel: 'Networks Supported'
  }
];

export default function WhyBizzTunes() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id='why-us' className="py-24 bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
        
        {/* Floating Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.3, 0.2],
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
            scale: [1.3, 1, 1.3],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 left-20 w-96 h-96 bg-pink-500 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold rounded-full mb-4"
          >
            WHY CHOOSE US
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold mb-6 text-white"
          >
            India's Most Trusted
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Callertune Service
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl text-blue-200 max-w-3xl mx-auto"
          >
            We combine professional quality, reliability, and exceptional customer service to deliver audio branding that truly represents your business
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} inView={inView} />
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-16 border-t border-white/10"
        >
          {[
            { value: '99.9%', label: 'Uptime Guarantee' },
            { value: '< 24h', label: 'Activation Time' },
            { value: '5★', label: 'Average Rating' },
            { value: '0', label: 'Hidden Charges' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-blue-300 text-sm md:text-base">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function FeatureCard({ feature, index, inView }) {
  const Icon = feature.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group relative"
    >
      {/* Card */}
      <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 h-full hover:bg-white/10 transition-all duration-500">
        {/* Gradient Glow on Hover */}
        <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`} />
        
        {/* Icon Container */}
        <motion.div
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.6 }}
          className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 shadow-lg`}
        >
          <Icon className="text-3xl text-white" />
        </motion.div>

        {/* Stat Badge */}
        <div className="absolute top-6 right-6">
          <div className={`px-3 py-1 bg-gradient-to-r ${feature.gradient} rounded-full`}>
            <div className="text-white text-xs font-bold">{feature.stat}</div>
          </div>
          <div className="text-xs text-blue-300 text-center mt-1">{feature.statLabel}</div>
        </div>

        {/* Content */}
        <h3 className="text-2xl font-bold text-white mb-4 group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
          {feature.title}
        </h3>
        
        <p className="text-blue-200 leading-relaxed">
          {feature.description}
        </p>

        {/* Decorative Corner */}
        <motion.div
          initial={{ scale: 0 }}
          whileHover={{ scale: 1 }}
          className={`absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl ${feature.gradient} rounded-tl-3xl rounded-br-3xl opacity-10`}
        />
      </div>
    </motion.div>
  );
}