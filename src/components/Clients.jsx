import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Star, Quote } from 'lucide-react'

const Clients = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const industries = [
    'Automotive OEM', 'Aftermarket Parts', 'Commercial Vehicles', 'Tractors & Agriculture', 
    'Two Wheelers', 'Three Wheelers', 'Construction Equipment', 'Industrial Machinery',
    'Generator Sets', 'Compressors', 'HVAC Systems', 'Material Handling'
  ]

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      company: 'Kumar Industries Pvt Ltd',
      role: 'Production Manager',
      content: 'Excellent quality pulleys with precise dimensions. We have been ordering from PulleyWorks for 5 years and never faced any quality issues. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Suresh Sharma',
      company: 'Sharma Textiles',
      role: 'Owner',
      content: 'Fast delivery and great customer support. Their technical team helped us choose the right pulleys for our textile machines. Very professional service.',
      rating: 5,
    },
    {
      name: 'Amit Verma',
      company: 'Verma Engineering Works',
      role: 'Chief Engineer',
      content: 'Custom pulleys manufactured exactly as per our drawings. The quality and finish exceeded our expectations. Will definitely order again.',
      rating: 5,
    },
  ]

  return (
    <section className="py-20 md:py-32 relative overflow-hidden bg-industrial-900">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-industrial-950 via-industrial-900 to-industrial-950" />
      
      <div className="relative container mx-auto px-6" ref={ref}>
        {/* Industries Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-primary-500 font-display font-semibold tracking-widest text-sm">
            INDUSTRIES WE SERVE
          </span>
          <h2 className="section-title mt-2 mb-8">
            TRUSTED ACROSS <span className="gradient-text">INDUSTRIES</span>
          </h2>
          
          {/* Industries Grid */}
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.05 * index }}
                className="px-6 py-3 bg-industrial-800/50 border border-industrial-700 rounded-full text-industrial-300 hover:border-primary-500/50 hover:text-primary-500 transition-all duration-300 cursor-default"
              >
                {industry}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="text-center mb-12">
            <span className="text-primary-500 font-display font-semibold tracking-widest text-sm">
              TESTIMONIALS
            </span>
            <h2 className="section-title mt-2">
              WHAT OUR <span className="gradient-text">CLIENTS</span> SAY
            </h2>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + 0.1 * index }}
                className="group"
              >
                <div className="h-full glass rounded-2xl p-8 hover:border-primary-500/30 transition-all duration-500 relative">
                  {/* Quote Icon */}
                  <div className="absolute -top-4 -left-4 w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center">
                    <Quote size={20} className="text-industrial-900" />
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4 pt-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-primary-500 text-primary-500" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-industrial-300 leading-relaxed mb-6 italic">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4 pt-4 border-t border-industrial-800">
                    <div className="w-12 h-12 bg-primary-500/20 rounded-full flex items-center justify-center">
                      <span className="text-primary-500 font-display font-bold">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-white">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-industrial-400">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Clients

