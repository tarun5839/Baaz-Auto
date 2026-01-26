import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const PhotoCarousel = () => {
  const scrollRef = useRef(null)
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  const [isScrolling, setIsScrolling] = useState(false)

  const images = [
    '/images/IMG_2488.jpg', // Position 2
    '/images/WA_001.jpeg', // WhatsApp Image 1
    '/images/WA_002.jpeg', // WhatsApp Image 2
    '/images/WA_003.jpeg', // WhatsApp Image 3
    '/images/IMG_2447.jpg', // Position 7
    '/images/IMG_2460.jpg', // Position 17
    '/images/IMG_2461.jpg', // Position 18
    '/images/IMG_2499.jpg', // Position 26
    '/images/IMG_2507.jpg', // Position 40
    '/images/IMG_2518.jpg', // Position 51
    '/images/IMG_2526.jpg', // Position 56
  ]

  const scroll = (direction) => {
    if (scrollRef.current) {
      setIsScrolling(true)
      const scrollAmount = scrollRef.current.offsetWidth * 0.8
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
      setTimeout(() => setIsScrolling(false), 500)
    }
  }

  return (
    <section className="py-20 bg-industrial-950 relative overflow-hidden" ref={containerRef}>
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary-500 font-semibold text-sm tracking-wider uppercase">Gallery</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mt-2 mb-4">
            Our <span className="gradient-text">Products</span>
          </h2>
          <p className="text-industrial-400 max-w-xl mx-auto">
            Browse through our collection of precision-engineered pulleys
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={() => scroll('left')}
            disabled={isScrolling}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-industrial-900/90 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-primary-500 hover:text-industrial-900 transition-all duration-300 shadow-lg border border-industrial-800 hover:border-primary-500 disabled:opacity-50"
            aria-label="Previous images"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Scrollable Container */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4 px-2"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-shrink-0 w-80 md:w-96 group"
              >
                <div className="relative rounded-2xl overflow-hidden border border-industrial-800 hover:border-primary-500/50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-primary-500/20">
                  <div className="aspect-[4/3] overflow-hidden bg-industrial-900">
                    <img
                      src={image}
                      alt={`BAAZ Product ${index + 1}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll('right')}
            disabled={isScrolling}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-industrial-900/90 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-primary-500 hover:text-industrial-900 transition-all duration-300 shadow-lg border border-industrial-800 hover:border-primary-500 disabled:opacity-50"
            aria-label="Next images"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center mt-8"
        >
          <p className="text-industrial-500 text-sm">
            Scroll horizontally to view more images
          </p>
        </motion.div>
      </div>

    </section>
  )
}

export default PhotoCarousel

