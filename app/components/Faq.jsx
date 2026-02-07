'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiChevronDown, HiQuestionMarkCircle } from 'react-icons/hi2';
import { useState } from 'react';

const faqs = [
  {
    question: 'What is a business callertune and how does it work?',
    answer: 'A business callertune is a customized audio message that plays when someone calls your number. Instead of the standard ringing tone, your callers hear your professional message with background music, creating a strong first impression and communicating important information about your business.',
    gradient: 'from-blue-500 to-cyan-600'
  },
  {
    question: 'How long does it take to activate my callertune?',
    answer: 'Once we finalize your callertune and you approve it, activation typically takes less than 24 hours. We handle all the technical aspects and coordinate with your telecom operator to ensure a smooth activation process.',
    gradient: 'from-purple-500 to-pink-600'
  },
  {
    question: 'Is the callertune compatible with all mobile networks?',
    answer: 'Yes! Our callertunes work seamlessly with all major Indian telecom operators including Airtel, Jio, VI (Vodafone Idea), BSNL, and others. We ensure complete compatibility across all networks.',
    gradient: 'from-pink-500 to-rose-600'
  },
  {
    question: 'What if I want to make changes after activation?',
    answer: 'You can request revisions at any time. Depending on your plan, you get a specific number of revisions included. For the Professional and Enterprise plans, revisions are unlimited. We\'re committed to ensuring you\'re 100% satisfied with your callertune.',
    gradient: 'from-orange-500 to-amber-600'
  },
  {
    question: 'Do I need to pay monthly charges?',
    answer: 'No! Our service is a one-time payment with lifetime validity. Once you pay and your callertune is activated, it stays active forever. There are no recurring monthly fees or hidden charges.',
    gradient: 'from-emerald-500 to-teal-600'
  },
  {
    question: 'Can I use the same callertune for multiple numbers?',
    answer: 'Yes, you can use the same callertune on multiple phone numbers. However, each number requires a separate activation. We offer special discounts for bulk activations. Contact us at 7009987733 for details.',
    gradient: 'from-indigo-500 to-blue-600'
  },
  {
    question: 'What languages do you support?',
    answer: 'We support all major Indian languages including Hindi, English, Tamil, Telugu, Kannada, Malayalam, Bengali, Marathi, Gujarati, and many more. Our Basic plan includes one language, while Enterprise plans support up to 3 languages.',
    gradient: 'from-violet-500 to-purple-600'
  },
  {
    question: 'How do I provide the script or content?',
    answer: 'You can either provide your own script or we can help create one for you. Our creative team will work with you to develop a script that effectively communicates your brand message and resonates with your target audience.',
    gradient: 'from-cyan-500 to-blue-600'
  }
];

export default function FAQ() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id='faq' className="py-16 sm:py-24 bg-gradient-to-b from-gray-900 to-gray-950 relative overflow-hidden">
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
          className="absolute top-20 right-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl"
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
          className="absolute bottom-20 left-20 w-96 h-96 bg-pink-500 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full text-purple-300 text-sm font-semibold mb-4">
            FAQ
          </span>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Got Questions?
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> We've Got Answers</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            Can't find what you're looking for? Call us at 7009987733
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              index={index}
              isOpen={openIndex === index}
              toggle={() => setOpenIndex(openIndex === index ? -1 : index)}
              inView={inView}
            />
          ))}
        </div>

        {/* Still have questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 sm:mt-16"
        >
          <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 sm:p-12 border border-gray-700 text-center group hover:border-purple-500 transition-all duration-300">
            {/* Gradient Glow */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl" />
            
            <motion.div
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
              className="relative w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg"
            >
              <HiQuestionMarkCircle className="text-3xl text-white" />
            </motion.div>
            
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Still have questions?
            </h3>
            <p className="text-gray-400 mb-6 sm:mb-8">
              Our team is here to help you 24/7
            </p>
            <motion.a
              href="tel:7009987733"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold text-base sm:text-lg shadow-xl hover:shadow-purple-500/50 transition-all"
            >
              Contact Support
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FAQItem({ faq, index, isOpen, toggle, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group"
    >
      <motion.button
        onClick={toggle}
        className={`w-full text-left bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 ${
          isOpen ? 'rounded-b-none border-b-0' : ''
        }`}
        whileHover={{ scale: 1.01 }}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <h3 className={`text-base sm:text-lg font-bold transition-colors ${
              isOpen
                ? 'bg-gradient-to-r ' + faq.gradient + ' bg-clip-text text-transparent'
                : 'text-white group-hover:text-purple-300'
            }`}>
              {faq.question}
            </h3>
          </div>
          
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className={`flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r ${faq.gradient} flex items-center justify-center shadow-lg`}
          >
            <HiChevronDown className="text-white text-xl" />
          </motion.div>
        </div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-b-2xl px-6 pb-6 border-x border-b border-gray-700 hover:border-purple-500 transition-colors duration-300">
              <motion.div
                initial={{ y: -10 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.3 }}
                className="pt-4"
              >
                <div className={`w-12 h-1 rounded-full bg-gradient-to-r ${faq.gradient} mb-4`} />
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}