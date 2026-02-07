'use client';

import { motion } from 'framer-motion';
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
      'Listen to the preview and request any changes. We refine until you’re 100% satisfied.',
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
  return (
    <section
      id="process"
      className="py-20 sm:py-28 bg-gradient-to-b from-gray-950 to-gray-900 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-sm font-semibold mb-4">
            Simple Process
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            How It{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Works
            </span>
          </h2>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Get your professional callertune in 5 easy steps
          </p>
        </motion.div>

        {/* STEPS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <StepCard key={step.number} step={step} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <a
            href="tel:7009987733"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full
            bg-gradient-to-r from-purple-500 to-pink-500 text-white
            font-semibold shadow-lg shadow-purple-500/40 hover:scale-105 transition"
          >
            <HiPhone className="text-xl" />
            Start Your Journey
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function StepCard({ step, index }) {
  const Icon = step.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative bg-gradient-to-br from-gray-900 to-gray-800
      border border-white/10 rounded-2xl p-6 hover:border-purple-500/40
      transition"
    >
      {/* ICON */}
      <div className="mb-6 flex justify-center">
        <div
          className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.gradient}
          flex items-center justify-center shadow-md group-hover:scale-110
          transition-transform duration-300`}
        >
          <Icon className="text-2xl text-white" />
        </div>
      </div>

      {/* NUMBER */}
      <div className="text-xs font-bold text-purple-400 mb-2">
        STEP {step.number}
      </div>

      <h3 className="text-lg font-bold text-white mb-2">
        {step.title}
      </h3>

      <p className="text-sm text-gray-400 leading-relaxed">
        {step.description}
      </p>
    </motion.div>
  );
}
