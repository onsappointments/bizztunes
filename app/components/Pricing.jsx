'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiCheck, HiSparkles, HiStar } from 'react-icons/hi2';

const pricingPlans = [
  {
    name: 'Basic',
    price: '₹999',
    description: 'Perfect for startups and small businesses',
    gradient: 'from-blue-500 to-indigo-600',
    features: [
      'Standard voice-over',
      'Basic script writing',
      'Single language',
      'MP3 format delivery',
      'Email support',
      'Lifetime validity'
    ],
    popular: false
  },
  {
    name: 'Professional',
    price: '₹1,999',
    description: 'Ideal for growing businesses',
    gradient: 'from-purple-500 to-pink-600',
    features: [
      'Premium voice-over',
      'Professional script writing',
      'Up to 2 languages',
      'Background music included',
      'Multiple format delivery',
      'Priority support',
      'Free revisions (2)',
      'Lifetime validity'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    price: '₹3,999',
    description: 'Complete solution for established brands',
    gradient: 'from-emerald-500 to-teal-600',
    features: [
      'Celebrity voice-over available',
      'Custom jingle composition',
      'Multiple languages',
      'Original music production',
      'All format delivery',
      'Dedicated account manager',
      'Unlimited revisions',
      '24/7 priority support',
      'Lifetime validity'
    ],
    popular: false
  }
];

export default function Pricing() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="pricing" className="py-16 sm:py-24 bg-gradient-to-b from-gray-950 via-purple-950 to-gray-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
        
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 right-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl"
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
            Simple Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Choose Your Perfect
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Plan</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            One-time payment, lifetime validity. No hidden charges, no subscriptions.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={plan.name} plan={plan} index={index} inView={inView} />
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12 sm:mt-16"
        >
          <p className="text-gray-400 mb-6">
            All plans include lifetime validity and support for all major networks
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <span className="flex items-center gap-2">
              <HiCheck className="text-purple-400" /> No recurring fees
            </span>
            <span className="flex items-center gap-2">
              <HiCheck className="text-purple-400" /> Instant activation
            </span>
            <span className="flex items-center gap-2">
              <HiCheck className="text-purple-400" /> All networks supported
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
function PricingCard({ plan, index, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      whileHover={{ y: -8 }}
      className="relative group"
    >
      {/* Popular Badge */}
      {plan.popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
          <div
            className={`px-3 py-1 bg-gradient-to-r ${plan.gradient} rounded-full flex items-center gap-1 shadow-lg`}
          >
            <HiStar className="text-white text-xs" />
            <span className="text-white text-[11px] font-bold">
              MOST POPULAR
            </span>
          </div>
        </div>
      )}

      <div
        className={`relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl
        p-5 sm:p-6 border transition-all duration-300 h-full ${
          plan.popular
            ? 'border-purple-500 shadow-xl shadow-purple-500/20 scale-[1.02]'
            : 'border-gray-700 hover:border-purple-500 hover:shadow-xl hover:shadow-purple-500/20'
        }`}
      >
        {/* Gradient Glow */}
        <div
          className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${plan.gradient}
          opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-lg`}
        />

        {/* Icon */}
        <motion.div
          whileHover={{ rotate: 180, scale: 1.05 }}
          transition={{ duration: 0.5 }}
          className={`relative w-10 h-10 sm:w-12 sm:h-12 rounded-lg
          bg-gradient-to-br ${plan.gradient}
          flex items-center justify-center mb-4 shadow-md`}
        >
          <HiSparkles className="text-xl text-white" />
        </motion.div>

        {/* Plan Name */}
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
          {plan.name}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-xs sm:text-sm mb-4">
          {plan.description}
        </p>

        {/* Price */}
        <div className="mb-5">
          <div className="flex items-end gap-2">
            <span
              className={`text-3xl sm:text-4xl font-bold bg-gradient-to-r ${plan.gradient}
              bg-clip-text text-transparent`}
            >
              {plan.price}
            </span>
            <span className="text-gray-400 text-xs mb-1">one-time</span>
          </div>
        </div>

        {/* Features */}
        <ul className="space-y-2 mb-6">
          {plan.features.map((feature, idx) => (
            <li
              key={idx}
              className="flex items-start gap-2 text-gray-300"
            >
              <div
                className={`w-4 h-4 rounded-full bg-gradient-to-br ${plan.gradient}
                flex items-center justify-center flex-shrink-0 mt-0.5`}
              >
                <HiCheck className="text-white text-[10px]" />
              </div>
              <span className="text-xs sm:text-sm leading-snug">
                {feature}
              </span>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <a
          href="tel:7009987733"
          className={`block w-full py-2.5 sm:py-3 text-center rounded-lg
          font-semibold text-sm transition-all duration-300 ${
            plan.popular
              ? `bg-gradient-to-r ${plan.gradient} text-white shadow-md hover:shadow-lg`
              : 'bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500/50 text-white'
          }`}
        >
          Get Started
        </a>

        {/* Decorative Corner */}
        {plan.popular && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className={`absolute bottom-0 right-0 w-14 h-14
            bg-gradient-to-tl ${plan.gradient}
            rounded-tl-2xl rounded-br-2xl opacity-10`}
          />
        )}
      </div>
    </motion.div>
  );
}
