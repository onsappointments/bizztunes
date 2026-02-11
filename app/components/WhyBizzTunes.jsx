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
    description:
      'Once activated, your business caller tune stays active forever with no recurring charges or expiry.',
    gradient: 'from-emerald-500 to-teal-600',
    stat: '100%',
    statLabel: 'One-time Payment'
  },
  {
    icon: HiClock,
    title: '24/7 Support',
    description:
      'Round-the-clock assistance to help businesses manage and update their caller tunes anytime.',
    gradient: 'from-blue-500 to-indigo-600',
    stat: '24/7',
    statLabel: 'Available Always'
  },
  {
    icon: HiUserGroup,
    title: 'Trusted by Businesses',
    description:
      'Used by startups, professionals, and companies worldwide for reliable business caller tunes.',
    gradient: 'from-purple-500 to-pink-600',
    stat: '1000+',
    statLabel: 'Businesses Served'
  },
  {
    icon: HiSparkles,
    title: 'Custom Jingles',
    description:
      'Fully customized business jingles, scripts, and voiceovers tailored to your brand identity.',
    gradient: 'from-orange-500 to-red-600',
    stat: '100%',
    statLabel: 'Customized'
  },
  {
    icon: HiCurrencyRupee,
    title: 'Affordable Pricing',
    description:
      'Professional business caller tunes and jingles at competitive, transparent pricing.',
    gradient: 'from-cyan-500 to-blue-600',
    stat: 'Best',
    statLabel: 'Value for Money'
  },
  {
    icon: HiCheckBadge,
    title: 'All Networks Supported',
    description:
      'Business caller tunes compatible with all major telecom networks and operators.',
    gradient: 'from-violet-500 to-purple-600',
    stat: 'All',
    statLabel: 'Networks'
  }
];

export default function WhyBizzTunes() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id="why-us"
      className="py-24 bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* SECTION HEADER */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold rounded-full mb-4">
            Why Choose BizzTunes
          </span>

          {/* SEO-CORRECT H2 */}
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Trusted Business Caller Tune
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              & Jingle Service Worldwide
            </span>
          </h2>

          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Businesses across the world choose BizzTunes for professional
            business caller tunes and branded jingles that build trust,
            improve brand perception, and sound premium from the first call.
          </p>
        </motion.div>

        {/* FEATURES */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              feature={feature}
              index={index}
              inView={inView}
            />
          ))}
        </div>
      </div>

      {/* INVISIBLE SEO SUPPORT */}
      <p className="sr-only">
        BizzTunes offers professional business caller tunes and custom
        business jingles for companies worldwide. Our services help
        businesses sound professional, improve customer trust, and create
        a strong audio brand identity on every incoming call.
      </p>
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
      <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 h-full hover:bg-white/10 transition-all duration-500">
        <div
          className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`}
        />

        <motion.div
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.6 }}
          className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 shadow-lg`}
        >
          <Icon className="text-3xl text-white" />
        </motion.div>

        <h3 className="text-2xl font-bold text-white mb-4">
          {feature.title}
        </h3>

        <p className="text-blue-200 leading-relaxed">
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
}
