import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { MessageSquare, Ruler, Factory, CheckCircle, Truck, ThumbsUp } from 'lucide-react'

const Process = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const steps = [
    {
      icon: MessageSquare,
      number: '01',
      title: 'Consultation',
      description: 'Share your requirements with our technical team. We understand your application needs.',
    },
    {
      icon: Ruler,
      number: '02',
      title: 'Design & Quote',
      description: 'Our engineers design the optimal solution and provide detailed quotation.',
    },
    {
      icon: Factory,
      number: '03',
      title: 'Manufacturing',
      description: 'Precision manufacturing using CNC machines and quality raw materials.',
    },
    {
      icon: CheckCircle,
      number: '04',
      title: 'Quality Testing',
      description: 'Rigorous inspection and testing to ensure dimensional accuracy and quality.',
    },
    {
      icon: Truck,
      number: '05',
      title: 'Delivery',
      description: 'Safe packaging and timely delivery to your doorstep across India.',
    },
    {
      icon: ThumbsUp,
      number: '06',
      title: 'After Support',
      description: 'Continued technical support and assistance for optimal performance.',
    },
  ]

  return (
    <section id="process" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-industrial-950" />
      
      {/* Animated Background Lines */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern id="process-grid" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#f5b52e" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#process-grid)" />
        </svg>
      </div>

      <div className="relative container mx-auto px-6" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-500 font-display font-semibold tracking-widest text-sm">
            OUR PROCESS
          </span>
          <h2 className="section-title mt-2 mb-4">
            FROM <span className="gradient-text">CONCEPT</span> TO DELIVERY
          </h2>
          <p className="section-subtitle mx-auto">
            A streamlined process ensuring quality at every step. 
            Experience seamless ordering from inquiry to installation.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary-500/30 to-transparent -translate-y-1/2" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="relative group"
              >
                <div className="relative bg-industrial-900/80 backdrop-blur border border-industrial-800 rounded-2xl p-8 hover:border-primary-500/50 transition-all duration-500 h-full">
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center font-display font-bold text-industrial-900 shadow-lg shadow-primary-500/30">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="flex justify-center mb-6 pt-4">
                    <div className="w-20 h-20 bg-industrial-800 rounded-full flex items-center justify-center group-hover:bg-primary-500/20 transition-colors duration-300">
                      <step.icon className="text-primary-500" size={36} />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="font-display text-xl font-bold text-white text-center mb-3">
                    {step.title}
                  </h3>
                  <p className="text-industrial-400 text-center leading-relaxed">
                    {step.description}
                  </p>

                  {/* Arrow (for larger screens) */}
                  {index < steps.length - 1 && (index + 1) % 3 !== 0 && (
                    <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2 text-primary-500">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-industrial-400 mb-6">
            Ready to start your project? Get in touch with our team today.
          </p>
          <a href="#contact" className="btn-primary">
            Start Your Order
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Process

