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
    '/images/IMG_2478.jpg',
    '/images/IMG_2488.jpg',
    '/images/IMG_2497.jpg',
    '/images/IMG_1177.jpg',
    '/images/IMG_2522.jpg',
    '/images/IMG_2445.jpg',
    '/images/IMG_2447.jpg',
    '/images/IMG_2448.jpg',
    '/images/IMG_2451.jpg',
    '/images/IMG_2452.jpg',
    '/images/IMG_2453.jpg',
    '/images/IMG_2455.jpg',
    '/images/IMG_2456.jpg',
    '/images/IMG_2457.jpg',
    '/images/IMG_2458.jpg',
    '/images/IMG_2459.jpg',
    '/images/IMG_2460.jpg',
    '/images/IMG_2461.jpg',
    '/images/IMG_2462.jpg',
    '/images/IMG_2463.jpg',
    '/images/IMG_2464.jpg',
    '/images/IMG_2465.jpg',
    '/images/IMG_2466.jpg',
    '/images/IMG_2467.jpg',
    '/images/IMG_2468.jpg',
    '/images/IMG_2498.jpg',
    '/images/IMG_2499.jpg',
    '/images/IMG_2500.jpg',
    '/images/IMG_2501.jpg',
    '/images/IMG_2502.jpg',
    '/images/IMG_2503.jpg',
    '/images/IMG_2504.jpg',
    '/images/IMG_2505.jpg',
    '/images/IMG_2506.jpg',
    '/images/IMG_2507.jpg',
    '/images/IMG_2508.jpg',
    '/images/IMG_2510.jpg',
    '/images/IMG_2512.jpg',
    '/images/IMG_2518.jpg',
    '/images/IMG_2523.jpg',
    '/images/IMG_2524.jpg',
    '/images/IMG_2525.jpg',
    '/images/IMG_2526.jpg',
    '/images/IMG_2532.jpg',
    '/images/IMG_2533.jpg',
    '/images/IMG_2534.jpg',
    '/images/IMG_2535.jpg',
    '/images/IMG_2536.jpg',
    '/images/IMG_2540.jpg',
    '/images/IMG_2541.jpg',
    '/images/IMG_2542.jpg',
    '/images/IMG_2543.jpg',
    '/images/IMG_2544.jpg',
    '/images/IMG_2545.jpg',
    '/images/IMG_2546.jpg',
    '/images/IMG_2547.jpg',
    '/images/IMG_2548.jpg',
    '/images/IMG_2551.jpg',
    '/images/IMG_2556.jpg',
    '/images/IMG_2558.jpg',
    '/images/IMG_2559.jpg',
    '/images/IMG_2560.jpg',
    '/images/IMG_2561.jpg',
    '/images/IMG_2562.jpg',
    '/images/IMG_2563.jpg',
    '/images/IMG_2565.jpg',
    '/images/IMG_2566.jpg',
    '/images/IMG_2570.jpg',
    '/images/IMG_2571.jpg',
    '/images/IMG_2572.jpg',
    '/images/IMG_2573.jpg',
    '/images/IMG_2589.jpg',
    '/images/IMG_1173.jpg',
    '/images/IMG_1178.jpg',
    '/images/IMG_1199.jpg',
    '/images/IMG_1200.jpg',
    '/images/IMG_1201.jpg',
    '/images/IMG_2444.jpg',
    '/images/IMG_2446.jpg',
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

