import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, Clock, Wrench, Truck, HeadphonesIcon, BadgeCheck } from 'lucide-react'

const WhyChooseUs = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    {
      icon: Award,
      title: 'Premium Quality Materials',
      description: 'High-grade metals and modern technology ensuring impeccable finishing and exceptional durability.',
      highlight: 'High-Grade'
    },
    {
      icon: Clock,
      title: 'Quick Turnaround',
      description: 'Fast production and delivery with standard orders shipped within 5-7 working days.',
      highlight: '5-7 Days'
    },
    {
      icon: Wrench,
      title: 'CNC Precision Manufacturing',
      description: 'State-of-the-art CNC machines for micron-level accuracy in every pulley we manufacture.',
      highlight: 'CNC Machined'
    },
    {
      icon: Truck,
      title: 'Pan-India Delivery',
      description: 'Reliable shipping across India with proper packaging to prevent damage during transit.',
      highlight: 'All India'
    },
    {
      icon: HeadphonesIcon,
      title: 'Technical Support',
      description: 'Expert engineering team available to help with selection, sizing, and custom requirements.',
      highlight: 'Expert Team'
    },
    {
      icon: BadgeCheck,
      title: 'Rigorous Quality Testing',
      description: 'Every pulley tested for weight loading strength, durability, finishing, and anti-corrosive properties.',
      highlight: '100% Tested'
    },
  ]

  return (
    <section id="why-us" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-industrial-900 via-industrial-950 to-industrial-900" />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-primary-500/5 rounded-full blur-3xl" />

      <div className="relative container mx-auto px-6" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-500 font-display font-semibold tracking-widest text-sm">
            WHY CHOOSE US
          </span>
          <h2 className="section-title mt-2 mb-4">
            THE <span className="gradient-text">BAAZ</span> ADVANTAGE
          </h2>
          <p className="section-subtitle mx-auto">
            Since 1967, we've been India's most trusted pulley manufacturer. 
            Experience the BAAZ difference - quality, precision, and reliability.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group"
            >
              <div className="relative h-full bg-industrial-900/50 backdrop-blur border border-industrial-800 rounded-2xl p-8 hover:border-primary-500/50 transition-all duration-500 card-hover">
                {/* Highlight Badge */}
                <div className="absolute top-4 right-4 bg-primary-500/10 border border-primary-500/30 rounded-full px-3 py-1">
                  <span className="text-primary-500 text-xs font-semibold">{feature.highlight}</span>
                </div>

                {/* Icon */}
                <div className="w-16 h-16 bg-primary-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-500 transition-colors duration-300">
                  <feature.icon className="text-primary-500 group-hover:text-industrial-900 transition-colors duration-300" size={32} />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-industrial-400 leading-relaxed">
                  {feature.description}
                </p>

                {/* Decorative Line */}
                <div className="absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r from-transparent via-primary-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 bg-gradient-to-r from-primary-600 via-primary-500 to-primary-600 rounded-2xl p-8 md:p-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '57+', label: 'Years Since 1967' },
              { value: '10000+', label: 'Products Delivered' },
              { value: '1000+', label: 'Happy Clients' },
              { value: '100+', label: 'Product Variants' },
            ].map((stat, index) => (
              <div key={index} className="text-industrial-900">
                <div className="text-4xl md:text-5xl font-display font-bold mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold opacity-80">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChooseUs

