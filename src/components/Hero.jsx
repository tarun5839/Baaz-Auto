import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Sparkles, Award, Shield, Truck } from 'lucide-react'
import { AnimatedLogo } from './Logo'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Base Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-industrial-950 via-industrial-900 to-industrial-950" />
        
        {/* Animated Mesh Gradient */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary-600/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(249, 115, 22, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(249, 115, 22, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }} />
        </div>

        {/* Subtle Floating Particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary-500/20 rounded-full"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
            }}
            animate={{
              y: [-15, 15, -15],
              opacity: [0.1, 0.5, 0.1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500/20 to-primary-600/10 border border-primary-500/30 rounded-full px-5 py-2.5 mb-8 backdrop-blur-sm"
            >
              <Sparkles size={16} className="text-primary-400" />
              <span className="text-primary-400 font-semibold text-sm tracking-wide">SINCE 1967 • INDIA'S No. 1 PULLEY MFG.</span>
            </motion.div>
            
            {/* Main Heading */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] mb-6"
            >
              <span className="gradient-text text-6xl md:text-7xl lg:text-8xl">BAAZ</span>
              <br />
              <span className="text-white text-2xl md:text-3xl lg:text-4xl block mt-2">GENUINE SERVICE EQUIPMENTS</span>
              <br />
              <span className="text-white">ALL TYPE PULLEYS</span>
            </motion.h1>
            
            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-industrial-300 mb-10 max-w-lg leading-relaxed"
            >
              <strong className="text-primary-500">Kalgidhar Auto Mobiles</strong> - India's most trusted manufacturer 
              of Alternator, Crankshaft, Idler, Timing & Decoupler Pulleys.
              Premium quality from Bawana Industrial Area, Delhi.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <a href="#contact" className="btn-primary group">
                <span>Request Quote</span>
                <motion.span
                  className="inline-block ml-2"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </a>
              <a href="#products" className="btn-outline group">
                <span>View Products</span>
              </a>
              <a 
                href="/BAAZ-Catalogue.pdf" 
                download 
                className="px-6 py-4 bg-industrial-800/50 border border-industrial-700 rounded-lg text-industrial-300 font-display font-semibold uppercase tracking-wider hover:bg-industrial-800 hover:border-primary-500/30 transition-all duration-300"
              >
                📄 Download Catalogue
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-3 gap-6"
            >
              {[
                { number: '57+', label: 'Years Legacy', icon: Award },
                { number: '10K+', label: 'Products Delivered', icon: Truck },
                { number: '1000+', label: 'Happy Clients', icon: Shield },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative text-center p-4 rounded-xl border border-transparent group-hover:border-primary-500/20 transition-all duration-300">
                    <stat.icon className="w-5 h-5 text-primary-500 mx-auto mb-2" />
                    <div className="text-2xl md:text-3xl font-display font-bold text-primary-500">
                      {stat.number}
                    </div>
                    <div className="text-xs text-industrial-400 mt-1 uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Clean Logo Display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative hidden lg:flex justify-center items-center"
          >
            {/* Subtle Decorative Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
              className="absolute w-[380px] h-[380px] rounded-full border border-primary-500/10"
            />
            
            {/* Main Logo - Clean & Prominent */}
            <AnimatedLogo />

            {/* Single Quality Badge */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="absolute -bottom-6 right-0 glass rounded-2xl px-5 py-3 backdrop-blur-xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                  <Shield className="text-green-400" size={20} />
                </div>
                <div>
                  <p className="text-xs text-industrial-400">Since 1967</p>
                  <p className="text-sm font-semibold text-white">57+ Years Trust</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a href="#about" className="flex flex-col items-center text-industrial-400 hover:text-primary-500 transition-colors group">
            <span className="text-xs uppercase tracking-widest mb-2 group-hover:text-primary-500">Explore</span>
            <div className="w-6 h-10 rounded-full border-2 border-current flex justify-center pt-2">
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-1.5 bg-current rounded-full"
              />
            </div>
          </a>
        </motion.div>
      </div>
      
      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-industrial-950 to-transparent" />
    </section>
  )
}

export default Hero
