import React from 'react'
import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import PhotoCarousel from '../components/PhotoCarousel'

const HomePage = () => {
  return (
    <div className="relative">
      <Hero />
      
      {/* Trust Badge - Middle of first page */}
      <div className="absolute top-1/2 right-6 -translate-y-1/2 z-30 hidden lg:block">
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="glass rounded-2xl px-5 py-3 backdrop-blur-xl"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-400">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
              </svg>
            </div>
            <div>
              <p className="text-xs text-industrial-400">Since 1967</p>
              <p className="text-sm font-semibold text-white">57+ Years Trust</p>
            </div>
          </div>
        </motion.div>
      </div>
      
      <PhotoCarousel />
    </div>
  )
}

export default HomePage
