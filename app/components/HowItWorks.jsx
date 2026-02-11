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
    title: 'Contact Our Team',
    description:
      'Get started by contacting us for your business caller tune. Share your company details, brand tone, and requirements.',
    gradient: 'from-blue-500 to-cyan-600',
  },
  {
    number: '02',
    icon: HiPencilSquare,
    title: 'Script & Concept Creation',
    description:
      'We create a custom script and concept for your business caller tune or jingle that matches your brand identity.',
    gradient: 'from-purple-500 to-pink-600',
  },
  {
    number: '03',
    icon: HiMusicalNote,
    title: 'Professional Audio Production',
    description:
      'Our professional voice artists and musicians produce your business caller tune using studio-quality recording.',
    gradient: 'from-pink-500 to-rose-600',
  },
  {
    number: '04',
    icon: HiCheckCircle,
    title: 'Review & Refinement',
    description:
      'Listen to your business caller tune preview and request revisions. We refine until you are fully satisfied.',
    gradient: 'from-orange-500 to-amber-600',
  },
  {
    number: '05',
    icon: HiRocketLaunch,
    title: 'Activation Across Networks',
    description:
      'Your business caller tune is activated across supported networks so every caller hears your branded message.',
    gradient: 'from-emerald-500 to-teal-600',
  },
];

export default function HowItWorks() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id="process"
      className="py-16 sm:py-24 bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* SECTION HEADER */}
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

          {/* SEO-CORRECT H2 */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            How Our
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {' '}Business Caller Tune Works
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            Our streamlined process makes it easy to create and activate
            professional business caller tunes and branded jingles in just
            a few simple steps.
          </p>
        </motion.div>

        {/* STEPS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
          {steps.map((step, index) => (
            <StepCard
              key={step.number}
              step={step}
              index={index}
              inView={inView}
            />
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
            Get Your Business Caller Tune
          </motion.a>
        </motion.div>
      </div>

      {/* INVISIBLE SEO SUPPORT */}
      <p className="sr-only">
        This section explains how businesses can create professional
        business caller tunes and branded jingles, from script creation
        and audio production to final activation across supported networks.
      </p>
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
      <div
        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl`}
      />

      <div className="mb-6 flex justify-center">
        <motion.div
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.6 }}
          className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg`}
        >
          <Icon className="text-2xl text-white" />
        </motion.div>
      </div>

      <div className="text-xs font-bold text-purple-400 mb-2 text-center">
        STEP {step.number}
      </div>

      <h3 className="text-lg font-bold text-white mb-3 text-center">
        {step.title}
      </h3>

      <p className="text-sm text-gray-400 leading-relaxed text-center">
        {step.description}
      </p>
    </motion.div>
  );
}
