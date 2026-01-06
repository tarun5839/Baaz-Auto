import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Target, Users, Lightbulb, Shield, CheckCircle, ArrowRight } from 'lucide-react'
import Logo, { CompactLogo } from './Logo'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const values = [
    {
      icon: Target,
      title: 'Precision',
      description: 'Micron-level accuracy in every pulley manufactured.'
    },
    {
      icon: Shield,
      title: 'Quality',
      description: '100% quality tested before delivery.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Modern CNC technology for best results.'
    },
    {
      icon: Users,
      title: 'Trust',
      description: '57+ years of customer satisfaction.'
    },
  ]

  const highlights = [
    'Alternator Pulleys (OAD/OAP)',
    'Crankshaft Damper Pulleys',
    'Belt Tensioner Pulleys',
    'Idler Pulleys & Bearings',
    'Timing Belt Pulleys',
    'Custom OEM Manufacturing'
  ]

  return (
    <section id="about" className="py-24 md:py-36 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-industrial-950 via-industrial-900 to-industrial-950" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent" />
      
      {/* Decorative */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-primary-600/5 rounded-full blur-3xl" />
      
      <div className="relative container mx-auto px-6" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main Image Grid */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-4"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl h-48">
                  <img 
                    src="/images/IMG_2478.jpg" 
                    alt="BAAZ Alternator Pulleys" 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-industrial-950/60 to-transparent" />
                </div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl h-64">
                  <img 
                    src="/images/IMG_2488.jpg" 
                    alt="BAAZ Product Range" 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-industrial-950/60 to-transparent" />
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="space-y-4 pt-8"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl h-64">
                  <img 
                    src="/images/IMG_1177.jpg" 
                    alt="BAAZ Crankshaft Pulleys" 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-industrial-950/60 to-transparent" />
                </div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl h-48">
                  <img 
                    src="/images/aa19b3f0-3811-4b44-8f22-cc93cf61872f.jpg" 
                    alt="BAAZ Idler Pulleys" 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-industrial-950/60 to-transparent" />
                </div>
              </motion.div>
            </div>
              
            {/* Experience Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6, type: "spring" }}
              className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gradient-to-br from-primary-500 to-primary-600 text-industrial-900 rounded-2xl p-6 shadow-2xl shadow-primary-500/30 text-center"
            >
              <div className="text-5xl font-display font-bold">57+</div>
              <div className="text-sm font-semibold uppercase tracking-wide">Years Since 1967</div>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <CompactLogo />
              <span className="text-primary-500 font-display font-semibold tracking-widest text-sm">
                ABOUT BAAZ
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
              INDIA'S No. 1<br />
              <span className="gradient-text">PULLEY MANUFACTURER</span>
            </h2>
            
            <p className="text-industrial-300 text-lg leading-relaxed mb-4">
              <strong className="text-white">Kalgidhar Auto Mobiles</strong> presents <strong className="text-primary-500">BAAZ</strong> - 
              India's most trusted brand for genuine service equipments since 1967. 
              With over 57 years of manufacturing excellence, our state-of-the-art facility in 
              DSIDC Industrial Area, Bawana, Delhi delivers precision-engineered pulleys.
            </p>
            
            <p className="text-industrial-400 leading-relaxed mb-6">
              Our journey began with a vision to redefine excellence in the automotive industry. 
              We've evolved from a humble retail outlet to a leading manufacturer, earning the 
              trust and respect of customers nationwide. We utilize <strong className="text-industrial-300">high-grade metals</strong> and 
              <strong className="text-industrial-300"> modern CNC technology</strong> in our manufacturing processes, adhering to national standards.
            </p>
            
            {/* Highlights */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                  className="flex items-center gap-2"
                >
                  <CheckCircle size={16} className="text-primary-500 flex-shrink-0" />
                  <span className="text-sm text-industrial-300">{item}</span>
                </motion.div>
              ))}
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="glass rounded-xl p-5 hover:border-primary-500/30 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary-500/10 flex items-center justify-center mb-3 group-hover:bg-primary-500/20 transition-colors">
                    <value.icon className="text-primary-500" size={20} />
                  </div>
                  <h4 className="font-display font-semibold text-white mb-1">
                    {value.title}
                  </h4>
                  <p className="text-sm text-industrial-400">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
            
            {/* CTA */}
            <a href="#products" className="inline-flex items-center gap-2 text-primary-500 font-display font-semibold hover:gap-4 transition-all duration-300">
              Explore Our Products <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
