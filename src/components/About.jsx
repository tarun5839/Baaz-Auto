import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Target, Users, Lightbulb, Shield, CheckCircle, ArrowRight, 
  Building2, Calendar, FileText, Warehouse, Factory, 
  Cpu, Package, Cog, Award, TestTube, Gauge, Layers, Eye, Zap,
  BadgeCheck
} from 'lucide-react'
import { CompactLogo } from './Logo'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const businessSpecs = [
    { icon: Building2, label: 'Business Type', value: 'Manufacturer, Exporter, Wholesaler, Supplier' },
    { icon: Calendar, label: 'Established', value: '1967 (57+ Years)' },
    { icon: FileText, label: 'GST TIN', value: '07AXKPS7998E1ZL' },
    { icon: Warehouse, label: 'Warehousing', value: 'Yes' },
    { icon: Factory, label: 'Production Units', value: '02 Units' },
    { icon: Cpu, label: 'Machinery', value: '10 CNC + Lathe Centres' },
    { icon: Package, label: 'Monthly Capacity', value: '50,000 Pieces' },
  ]

  const productRange = [
    'Overrunning Alternator Pulleys',
    'Crank Pulleys',
    'Belt Tensioner Pulleys',
    'Water Pump Pulleys',
    'AC Pulleys',
    'Starting Pulleys',
    'Power Steering Pulleys',
    'Machinery Pulleys',
  ]

  const qualityTests = [
    {
      icon: Cog,
      title: 'Dynamic Balancing',
      desc: 'Smooth rotation at high speeds, reduced vibration, extended bearing life'
    },
    {
      icon: Gauge,
      title: 'Dimensional Accuracy',
      desc: 'Precision gauges, micrometers, calipers for exact fitment'
    },
    {
      icon: Layers,
      title: 'Hardness Testing',
      desc: 'Material strength & surface hardness for structural reliability'
    },
    {
      icon: Target,
      title: 'Surface Finish & Runout',
      desc: 'Perfect alignment, smooth finish for optimal belt engagement'
    },
    {
      icon: Zap,
      title: 'Endurance Testing',
      desc: 'JAZZ/Load tests - continuous load cycles & stress conditions'
    },
    {
      icon: Eye,
      title: 'Visual Inspection',
      desc: 'Final quality check for finishing, coating & defects'
    },
  ]

  const valuedBuyers = [
    'Shalimar Precision Enterprises LLP',
    'Empire Trading',
    'Jay Bee Enterprise',
    'Swiss Auto',
  ]

  return (
    <section id="about" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-industrial-950 via-industrial-900 to-industrial-950" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
      
      <div className="relative container mx-auto px-6" ref={ref}>
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            About <span className="gradient-text">Kalgidhar Automobiles</span>
          </h2>
          <p className="text-industrial-400 max-w-3xl mx-auto text-lg">
            India's No. 1 Pulley Manufacturer Since 1967
          </p>
        </motion.div>

        {/* Company Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-industrial-900/50 rounded-3xl p-8 md:p-10 border border-industrial-800 mb-12"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-display font-bold text-white mb-4">
                Who We Are
              </h3>
              <p className="text-white leading-relaxed mb-4">
                Located in the capital city of Delhi, we, <span className="text-primary-400">Kalgidhar Automobiles</span>, 
                are a leading manufacturer, exporter, and supplier of high-quality automotive pulleys. Our product range includes 
                Overrunning Alternator Pulleys, Crank Pulleys, Belt Tensioner Pulleys, Water Pump Pulleys, AC Pulleys, and various 
                other precision-engineered components.
              </p>
              <p className="text-industrial-300 leading-relaxed mb-4">
                We manufacture our pulleys using high-grade metals sourced from reputed and authentic vendors in the industry. 
                Known for their corrosion resistance, durability, heavy-load capacity, precise dimensions, and fine finishing, 
                our pulleys have earned consistent appreciation across domestic and international markets.
              </p>
              <p className="text-industrial-300 leading-relaxed">
                Along with our strong product lineup, our ethical business practices, timely commitments, and dedication to 
                customer feedback enable us to maintain a competitive edge in the industry.
              </p>
            </div>
            
            {/* Images */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src="/images/IMG_2478.jpg" 
                  alt="BAAZ Pulleys" 
                  className="rounded-2xl w-full h-40 object-cover"
                />
                <img 
                  src="/images/IMG_2488.jpg" 
                  alt="BAAZ Products" 
                  className="rounded-2xl w-full h-48 object-cover"
                />
              </div>
              <div className="space-y-4 pt-6">
                <img 
                  src="/images/IMG_1177.jpg" 
                  alt="BAAZ Manufacturing" 
                  className="rounded-2xl w-full h-48 object-cover"
                />
                <img 
                  src="/images/IMG_2445.jpg" 
                  alt="BAAZ Quality" 
                  className="rounded-2xl w-full h-40 object-cover"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Business Specifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-display font-bold text-white mb-6 text-center">
            Business <span className="gradient-text">Specifications</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {businessSpecs.map((spec, index) => (
              <motion.div
                key={`${spec.label}-${index}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                className="bg-industrial-900/50 rounded-xl p-4 border border-industrial-800 hover:border-primary-500/30 transition-all"
              >
                <div className="w-10 h-10 bg-primary-500/10 rounded-lg flex items-center justify-center mb-3">
                  <spec.icon className="text-primary-400" size={20} />
                </div>
                <p className="text-xs text-industrial-500 uppercase tracking-wide mb-1">{spec.label}</p>
                <p className="text-sm font-semibold text-white">{spec.value}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Product Range & Quality Control */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          
          {/* Product Range */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-industrial-900/50 rounded-2xl p-6 border border-industrial-800"
          >
            <h3 className="text-xl font-display font-bold text-white mb-4 flex items-center gap-2">
              <Package className="text-primary-400" size={24} />
              Product Range
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {productRange.map((product, index) => (
                <div key={index} className="flex items-center gap-2 text-industrial-300 text-sm">
                  <CheckCircle size={14} className="text-primary-500 flex-shrink-0" />
                  {product}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Valued Buyers */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-industrial-900/50 rounded-2xl p-6 border border-industrial-800"
          >
            <h3 className="text-xl font-display font-bold text-white mb-4 flex items-center gap-2">
              <Award className="text-primary-400" size={24} />
              Our Valued Buyers
            </h3>
            <p className="text-industrial-400 text-sm mb-4">
              We proudly supply to some of the most trusted names in the automotive components industry:
            </p>
            <div className="space-y-2">
              {valuedBuyers.map((buyer, index) => (
                <div key={index} className="flex items-center gap-2 text-industrial-300">
                  <BadgeCheck size={16} className="text-green-400 flex-shrink-0" />
                  {buyer}
                </div>
              ))}
              <p className="text-xs text-industrial-500 mt-3 italic">
                And several other domestic and international buyers...
              </p>
            </div>
          </motion.div>
        </div>

        {/* Quality Control & Testing */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-display font-bold text-white mb-2 text-center">
            Quality Control & <span className="gradient-text">Testing Procedures</span>
          </h3>
          <p className="text-industrial-400 text-center mb-8 max-w-2xl mx-auto">
            To ensure consistent quality, performance, and durability, every pulley undergoes rigorous tests
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {qualityTests.map((test, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="bg-industrial-900/50 rounded-xl p-5 border border-industrial-800 hover:border-primary-500/30 transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary-500/20 transition-colors">
                    <test.icon className="text-primary-400" size={24} />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-white mb-1">{test.title}</h4>
                    <p className="text-xs text-industrial-400 leading-relaxed">{test.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a href="/products" className="btn-primary inline-flex items-center gap-2">
            Explore Our Products <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default About
