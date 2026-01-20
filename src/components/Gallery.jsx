import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { X, ChevronLeft, ChevronRight, ZoomIn, Grid3X3 } from 'lucide-react'

const Gallery = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showFullGallery, setShowFullGallery] = useState(false)

  const images = [
    { src: '/images/IMG_2478.jpg', title: 'Alternator Pulleys' },
    { src: '/images/IMG_2488.jpg', title: 'Premium Range' },
    { src: '/images/IMG_2497.jpg', title: 'Multi-Groove Pulley' },
    { src: '/images/IMG_1177.jpg', title: 'Crankshaft Pulley' },
    { src: '/images/IMG_2522.jpg', title: 'Timing Belt Pulley' },
    { src: '/images/IMG_2445.jpg', title: 'Engine Pulley' },
    { src: '/images/IMG_2447.jpg', title: 'V-Belt Pulley' },
    { src: '/images/IMG_2448.jpg', title: 'Idler Pulley' },
    { src: '/images/IMG_2451.jpg', title: 'Tensioner Pulley' },
    { src: '/images/IMG_2452.jpg', title: 'Water Pump Pulley' },
    { src: '/images/IMG_2453.jpg', title: 'AC Pulley' },
    { src: '/images/IMG_2455.jpg', title: 'Power Steering' },
    { src: '/images/IMG_2532.jpg', title: 'Precision Pulley' },
    { src: '/images/IMG_2540.jpg', title: 'Heavy Duty' },
    { src: '/images/IMG_2545.jpg', title: 'Automotive' },
    { src: '/images/IMG_2556.jpg', title: 'Multi-Groove' },
  ]

  const displayImages = showFullGallery ? images : images.slice(0, 6)

  const openLightbox = (index) => {
    setCurrentIndex(index)
    setSelectedImage(images[index])
  }

  const closeLightbox = () => setSelectedImage(null)

  const navigate = (direction) => {
    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % images.length 
      : (currentIndex - 1 + images.length) % images.length
    setCurrentIndex(newIndex)
    setSelectedImage(images[newIndex])
  }

  return (
    <section className="py-20 bg-industrial-900/50" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <span className="text-primary-500 font-semibold text-sm tracking-wider uppercase">Gallery</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mt-2">
            Our <span className="gradient-text">Products</span>
          </h2>
          <p className="text-industrial-400 mt-3 max-w-xl mx-auto">
            Browse through our collection of precision-engineered pulleys
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {displayImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.05 }}
              className="relative group cursor-pointer aspect-square rounded-xl overflow-hidden"
              onClick={() => openLightbox(index)}
            >
              <img 
                src={image.src} 
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-industrial-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-12 h-12 bg-primary-500/90 rounded-full flex items-center justify-center">
                  <ZoomIn className="text-white" size={20} />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white font-medium text-sm">{image.title}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        {!showFullGallery && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="text-center mt-8"
          >
            <button 
              onClick={() => setShowFullGallery(true)}
              className="btn-outline inline-flex items-center gap-2"
            >
              <Grid3X3 size={18} />
              View All ({images.length} Images)
            </button>
          </motion.div>
        )}

        {showFullGallery && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mt-8"
          >
            <button 
              onClick={() => setShowFullGallery(false)}
              className="text-primary-500 font-medium hover:text-primary-400 transition-colors"
            >
              Show Less
            </button>
          </motion.div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button 
              onClick={closeLightbox}
              className="absolute top-4 right-4 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <X size={24} />
            </button>

            <button 
              onClick={(e) => { e.stopPropagation(); navigate('prev'); }}
              className="absolute left-4 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <ChevronLeft size={28} />
            </button>

            <button 
              onClick={(e) => { e.stopPropagation(); navigate('next'); }}
              className="absolute right-4 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <ChevronRight size={28} />
            </button>

            <motion.div
              key={currentIndex}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full max-h-[80vh] object-contain rounded-lg"
              />
              <div className="text-center mt-4">
                <p className="text-white font-display font-bold text-lg">{selectedImage.title}</p>
                <p className="text-industrial-400 text-sm mt-1">{currentIndex + 1} / {images.length}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Gallery
