import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Phone, Award, Factory, Users, Download } from 'lucide-react'
import { Link } from 'react-router-dom'

const Hero = () => {
  const stats = [
    { number: '57+', label: 'Years Experience', icon: Award },
    { number: '50K', label: 'Monthly Capacity', icon: Factory },
    { number: '1000+', label: 'Happy Clients', icon: Users },
  ]

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-industrial-950">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/IMG_2478.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-industrial-950 via-industrial-950/95 to-industrial-950/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-industrial-950 via-transparent to-industrial-950/50" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative container mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-3 bg-primary-500/10 border border-primary-500/20 rounded-full px-4 py-2 mb-6"
            >
              <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
              <span className="text-primary-400 font-medium text-sm">Since 1967 • Delhi, India</span>
            </motion.div>

            {/* Company Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6"
            >
              <h2 className="mb-2" style={{ letterSpacing: '0.05em' }}>
                <span className="gradient-text text-6xl md:text-7xl lg:text-8xl font-display font-bold">BAAZ</span>
              </h2>
              <p className="text-xl md:text-2xl text-industrial-300 font-medium">Kalgidhar Auto Mobiles</p>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6"
            >
              India's No. 1{' '}
              <span className="gradient-text">Pulley</span>
              <br />
              Manufacturer
            </motion.h1>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-2xl mb-8"
          >
            <div className="space-y-2">
              <p className="text-primary-400 font-display font-semibold text-sm uppercase tracking-wider mb-3">
                Our Products
              </p>
              <p className="text-white text-base leading-relaxed">
                Power steering pulley, Engine pulley, Alternator pulley, Water pump pulley, Tensioner pulley, Machinery pulley, and Casting and forging goods.
              </p>
            </div>
          </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                Get Quote <ArrowRight size={18} />
              </Link>
              <Link to="/products" className="btn-outline">
                View Products
              </Link>
              <a 
                href="/BAAZ-Catalogue.pdf" 
                download
                className="inline-flex items-center gap-2 px-6 py-4 bg-industrial-800/50 border border-industrial-700 rounded-lg text-white font-medium hover:bg-industrial-800 hover:border-primary-500/30 transition-all"
              >
                <Download size={18} />
                Catalogue
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-3 gap-4 max-w-lg"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-industrial-900/50 rounded-xl border border-industrial-800">
                  <stat.icon className="w-5 h-5 text-primary-500 mx-auto mb-2" />
                  <div className="text-2xl font-display font-bold text-white">{stat.number}</div>
                  <div className="text-xs text-industrial-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Side - Logo with Circle and Sparkles */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex items-center justify-center lg:justify-end"
          >
            {/* Sparkling Circles */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Outer Glow Circle */}
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute w-96 h-96 bg-primary-500/20 rounded-full blur-3xl"
              />
              
              {/* Medium Sparkle Circles */}
              {[...Array(6)].map((_, i) => {
                const angle = (i * 60) * (Math.PI / 180)
                const radius = 180
                const x = Math.cos(angle) * radius
                const y = Math.sin(angle) * radius
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ 
                      opacity: [0.4, 0.8, 0.4],
                      scale: [0.8, 1.2, 0.8],
                      x: [x, x * 1.1, x],
                      y: [y, y * 1.1, y]
                    }}
                    transition={{ 
                      duration: 2 + i * 0.3,
                      repeat: Infinity,
                      delay: i * 0.2
                    }}
                    className="absolute w-3 h-3 bg-primary-400 rounded-full blur-sm"
                    style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)` }}
                  />
                )
              })}
              
              {/* Small Sparkle Particles */}
              {[...Array(12)].map((_, i) => {
                const angle = (i * 30) * (Math.PI / 180)
                const radius = 220
                const x = Math.cos(angle) * radius
                const y = Math.sin(angle) * radius
                return (
                  <motion.div
                    key={`small-${i}`}
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: [0, 1, 0],
                      scale: [0.5, 1, 0.5]
                    }}
                    transition={{ 
                      duration: 1.5 + i * 0.1,
                      repeat: Infinity,
                      delay: i * 0.1
                    }}
                    className="absolute w-1.5 h-1.5 bg-primary-300 rounded-full"
                    style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)` }}
                  />
                )
              })}
            </div>

            {/* Main Logo Circle */}
            <div className="relative z-10">
              {/* Rotating Border Circle */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute w-[380px] h-[380px] rounded-full border border-primary-500/10"
                style={{ 
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%) rotate(137.758deg)',
                  transformOrigin: 'center'
                }}
              />
              
              {/* Light Ring Lines - Outer */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 w-64 h-64 border border-primary-500/30 rounded-full"
              />
              
              {/* Light Ring Lines - Middle */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 w-72 h-72 border border-primary-400/20 rounded-full"
                style={{ left: '-16px', top: '-16px' }}
              />
              
              {/* Light Ring Lines - Inner */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 w-56 h-56 border border-primary-300/25 rounded-full"
                style={{ left: '4px', top: '4px' }}
              />
              
              {/* Main Circle Container */}
              <div className="relative w-64 h-64 rounded-full flex items-center justify-center">
                <motion.div
                  animate={{ 
                    scale: [1, 1.05, 1],
                    boxShadow: [
                      '0 0 20px rgba(59, 130, 246, 0.3)',
                      '0 0 40px rgba(59, 130, 246, 0.5)',
                      '0 0 20px rgba(59, 130, 246, 0.3)'
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-48 h-48 rounded-full border-4 border-primary-500/50 bg-industrial-900/50 flex items-center justify-center overflow-hidden"
                >
                  <img 
                    src="/images/LOGO.jpeg" 
                    alt="BAAZ Logo" 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Contact Badge - Fixed Right */}
        <motion.a
          href="tel:+919315020967"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="hidden lg:flex fixed right-0 top-1/2 -translate-y-1/2 items-center gap-3 bg-primary-500 text-white px-4 py-3 rounded-l-xl shadow-lg hover:bg-primary-600 transition-colors z-40"
        >
          <Phone size={20} />
          <div className="text-right">
            <p className="text-xs opacity-80">Call Us Now</p>
            <p className="font-bold">9315020967</p>
          </div>
        </motion.a>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-industrial-600 flex justify-center pt-2"
        >
          <div className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
