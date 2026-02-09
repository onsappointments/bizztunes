'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  HiPhone,
  HiPencilSquare,
  HiMusicalNote,
  HiCheckCircle,
  HiRocketLaunch,
} from 'react-icons/hi2';

const steps = [
  {
    number: '01',
    icon: HiPhone,
    title: 'Contact Us',
    description:
      'Call us at 7009987733 or reach out via WhatsApp. Share your business details and requirements.',
    gradient: 'from-blue-500 to-cyan-600',
  },
  {
    number: '02',
    icon: HiPencilSquare,
    title: 'Script Development',
    description:
      'Our creative team crafts a custom script that perfectly captures your brand message and values.',
    gradient: 'from-purple-500 to-pink-600',
  },
  {
    number: '03',
    icon: HiMusicalNote,
    title: 'Production',
    description:
      'Professional voiceover artists and musicians bring your script to life with studio-quality recording.',
    gradient: 'from-pink-500 to-rose-600',
  },
  {
    number: '04',
    icon: HiCheckCircle,
    title: 'Review & Revise',
    description:
      "Listen to the preview and request any changes. We refine until you're 100% satisfied.",
    gradient: 'from-orange-500 to-amber-600',
  },
  {
    number: '05',
    icon: HiRocketLaunch,
    title: 'Activation',
    description:
      'We activate your callertune across all networks. Start impressing your callers within 24 hours!',
    gradient: 'from-emerald-500 to-teal-600',
  },
];

export default function HowItWorks() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section
      id="process"
      className="py-16 sm:py-24 bg-gradient-to-b from-gray-950 to-gray-900 relative overflow-hidden"
    >
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
          className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"
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
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"
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
            Simple Process
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            How It
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Works</span>
          </h2>

          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            Get your professional callertune in 5 easy steps
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
          {steps.map((step, index) => (
            <StepCard key={step.number} step={step} index={index} inView={inView} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12 sm:mt-16"
        >
          <motion.a
            href="tel:7009987733"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold text-base sm:text-lg shadow-xl hover:shadow-purple-500/50 transition-all"
          >
            <HiPhone className="text-xl" />
            Start Your Journey
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

function StepCard({ step, index, inView }) {
  const Icon = step.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -5 }}
      className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20"
    >
      {/* Gradient Glow on Hover */}
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl`} />
      
      {/* Icon */}
      <div className="mb-6 flex justify-center">
        <motion.div
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.6 }}
          className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg`}
        >
          <Icon className="text-2xl text-white" />
        </motion.div>
      </div>

      {/* Step Number */}
      <div className="text-xs font-bold text-purple-400 mb-2 text-center">
        STEP {step.number}
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold text-white mb-3 text-center group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
        {step.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-gray-400 leading-relaxed text-center">
        {step.description}
      </p>
    </motion.div>
  );
}