'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiStar } from 'react-icons/hi2';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    company: 'Kumar Enterprises',
    role: 'Managing Director',
    image: '👨‍💼',
    rating: 5,
    text: 'Bizz Tunes transformed our business identity! The professional callertune has significantly improved our brand image. Highly recommended!',
    gradient: 'from-blue-500 to-indigo-600'
  },
  {
    name: 'Priya Sharma',
    company: 'Sharma Medical Center',
    role: 'Hospital Administrator',
    image: '👩‍⚕️',
    rating: 5,
    text: 'The warm and reassuring tone of our callertune puts patients at ease even before they speak to us. Excellent service and support!',
    gradient: 'from-purple-500 to-pink-600'
  },
  {
    name: 'Amit Patel',
    company: 'Patel Fashion Hub',
    role: 'Store Owner',
    image: '👨‍💻',
    rating: 5,
    text: 'Our custom jingle is so catchy that customers often mention it! The lifetime validity is a great value for money.',
    gradient: 'from-emerald-500 to-teal-600'
  },
  {
    name: 'Neha Verma',
    company: 'Verma Real Estate',
    role: 'CEO',
    image: '👩‍💼',
    rating: 5,
    text: 'Professional quality, quick turnaround, and amazing customer support. The best investment we made for our brand.',
    gradient: 'from-orange-500 to-red-600'
  },
  {
    name: 'Sanjay Singh',
    company: 'Singh Automobile',
    role: 'Business Owner',
    image: '👨‍🔧',
    rating: 5,
    text: 'The 24/7 support team is incredibly helpful. Our callertune perfectly represents our premium automotive brand.',
    gradient: 'from-cyan-500 to-blue-600'
  },
  {
    name: 'Kavita Reddy',
    company: 'Reddy Consultancy',
    role: 'Founder',
    image: '👩‍🏫',
    rating: 5,
    text: 'From script to final production, everything was perfect. The team understood our vision and delivered beyond expectations.',
    gradient: 'from-violet-500 to-purple-600'
  }
];

export default function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-gray-900 to-gray-950 relative overflow-hidden">
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
          className="absolute top-20 right-10 w-96 h-96 bg-pink-500 rounded-full blur-3xl"
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
            Client Reviews
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            What Our Clients
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Say About Us</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            Join 1000+ satisfied businesses who trust Bizz Tunes for their audio branding
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} index={index} inView={inView} />
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-12 border-t border-white/10"
        >
          {[
            { value: '1000+', label: 'Happy Clients' },
            { value: '5.0', label: 'Average Rating' },
            { value: '100%', label: 'Satisfaction Rate' },
            { value: '24/7', label: 'Support Available' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial, index, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group relative"
    >
      <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 sm:p-8 border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 h-full">
        {/* Gradient Glow */}
        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl`} />
        
        {/* Quote Icon */}
        <div className={`relative w-10 h-10 rounded-lg bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center mb-6 shadow-lg`}>
          <FaQuoteLeft className="text-white text-lg" />
        </div>

        {/* Rating */}
        <div className="flex gap-1 mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <HiStar key={i} className="text-yellow-400 text-lg" />
          ))}
        </div>

        {/* Testimonial Text */}
        <p className="text-gray-300 mb-6 leading-relaxed text-sm sm:text-base">
          "{testimonial.text}"
        </p>

        {/* Author Info */}
        <div className="flex items-center gap-4 pt-6 border-t border-white/10">
          <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-2xl shadow-lg`}>
            {testimonial.image}
          </div>
          <div>
            <h4 className="text-white font-semibold">
              {testimonial.name}
            </h4>
            <p className="text-gray-400 text-sm">
              {testimonial.role}
            </p>
            <p className="text-gray-500 text-xs">
              {testimonial.company}
            </p>
          </div>
        </div>

        {/* Decorative Corner */}
        <motion.div
          initial={{ scale: 0 }}
          whileHover={{ scale: 1 }}
          className={`absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl ${testimonial.gradient} rounded-tl-2xl rounded-br-2xl opacity-5`}
        />
      </div>
    </motion.div>
  );
}