import React, { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, ZoomIn, Grid3X3, Image } from 'lucide-react'

const Gallery = () => {
  const ref = useRef(null)
  const scrollRef = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showFullGallery, setShowFullGallery] = useState(false)

  const allImages = [
    { src: '/images/IMG_2478.jpg', title: 'Alternator Pulleys Collection', category: 'Alternator' },
    { src: '/images/IMG_2488.jpg', title: 'Premium Pulley Range', category: 'Mixed' },
    { src: '/images/IMG_2497.jpg', title: 'Multi-Groove Alternator Pulley', category: 'Alternator' },
    { src: '/images/IMG_2438.jpg', title: 'V-Belt Crankshaft Pulley', category: 'Crankshaft' },
    { src: '/images/IMG_1173.jpg', title: 'Decoupler Pulley Set', category: 'Decoupler' },
    { src: '/images/IMG_1177.jpg', title: 'Crankshaft Damper Pulley', category: 'Crankshaft' },
    { src: '/images/IMG_2522.jpg', title: 'Timing Belt Pulley', category: 'Timing' },
    { src: '/images/IMG_2589.jpg', title: 'Idler Pulleys', category: 'Idler' },
    { src: '/images/aa19b3f0-3811-4b44-8f22-cc93cf61872f.jpg', title: 'Idler Pulley Batch', category: 'Idler' },
    { src: '/images/IMG_2444.jpg', title: 'Double Groove V-Belt Pulley', category: 'Crankshaft' },
    { src: '/images/IMG_2460.jpg', title: 'Multi-Ribbed Crankshaft Pulley', category: 'Crankshaft' },
    { src: '/images/IMG_2523.jpg', title: 'Timing Pulley Variants', category: 'Timing' },
    { src: '/images/IMG_2532.jpg', title: 'Precision Alternator Pulley', category: 'Alternator' },
    { src: '/images/IMG_2533.jpg', title: 'Industrial Pulley Set', category: 'Industrial' },
    { src: '/images/IMG_2540.jpg', title: 'Premium V-Belt Pulley', category: 'V-Belt' },
    { src: '/images/IMG_2541.jpg', title: 'Heavy Duty Pulley', category: 'Industrial' },
    { src: '/images/IMG_2545.jpg', title: 'Automotive Pulley', category: 'Automotive' },
    { src: '/images/IMG_2551.jpg', title: 'Precision Machined Pulley', category: 'Precision' },
    { src: '/images/IMG_2556.jpg', title: 'Multi-Groove Pulley', category: 'Alternator' },
    { src: '/images/IMG_2558.jpg', title: 'Tensioner Pulley', category: 'Tensioner' },
    { src: '/images/IMG_2560.jpg', title: 'Decoupler Assembly', category: 'Decoupler' },
    { src: '/images/IMG_2565.jpg', title: 'Crankshaft Pulley Set', category: 'Crankshaft' },
    { src: '/images/IMG_2570.jpg', title: 'Idler Bearing Pulley', category: 'Idler' },
    { src: '/images/IMG_2571.jpg', title: 'Flat Belt Pulley', category: 'Flat Belt' },
    { src: '/images/IMG_5641 B.jpg', title: 'BAAZ Premium Collection', category: 'Premium' },
    { src: '/images/IMG_2524.jpg', title: 'Timing Belt Assembly', category: 'Timing' },
    { src: '/images/IMG_2525.jpg', title: 'V-Ribbed Pulley', category: 'V-Belt' },
    { src: '/images/IMG_2526.jpg', title: 'Engine Pulley System', category: 'Automotive' },
  ]

  // Show only 6 images in the carousel preview
  const previewImages = allImages.slice(0, 8)

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' })
    }
  }

  const openLightbox = (index, fromFullGallery = false) => {
    const images = fromFullGallery ? allImages : previewImages
    setCurrentIndex(index)
    setSelectedImage(images[index])
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    const images = showFullGallery ? allImages : previewImages
    const newIndex = (currentIndex + 1) % images.length
    setCurrentIndex(newIndex)
    setSelectedImage(images[newIndex])
  }

  const prevImage = () => {
    const images = showFullGallery ? allImages : previewImages
    const newIndex = (currentIndex - 1 + images.length) % images.length
    setCurrentIndex(newIndex)
    setSelectedImage(images[newIndex])
  }

  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-industrial-900">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-industrial-950 via-industrial-900 to-industrial-950" />
      
      <div className="relative container mx-auto px-6" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary-500 font-display font-semibold tracking-widest text-sm">
            PRODUCT GALLERY
          </span>
          <h2 className="section-title mt-2 mb-4">
            OUR <span className="gradient-text">CRAFTSMANSHIP</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Swipe through our collection of precision-engineered pulleys or view the full gallery.
          </p>
        </motion.div>

        {/* Horizontal Scroll Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          {/* Scroll Buttons */}
          <button 
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-industrial-900/90 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-primary-500 transition-colors shadow-lg -ml-4"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-industrial-900/90 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-primary-500 transition-colors shadow-lg -mr-4"
          >
            <ChevronRight size={24} />
          </button>

          {/* Scrollable Container */}
          <div 
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {previewImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="relative group cursor-pointer flex-shrink-0 w-72 h-72 rounded-2xl overflow-hidden"
                onClick={() => openLightbox(index)}
              >
                <img 
                  src={image.src} 
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-industrial-950 via-industrial-950/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
                
                {/* Category Badge */}
                <div className="absolute top-3 left-3 px-3 py-1 bg-primary-500/90 rounded-full text-xs font-display font-bold text-industrial-900 uppercase tracking-wider">
                  {image.category}
                </div>
                
                {/* Zoom Icon */}
                <div className="absolute top-3 right-3 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ZoomIn size={18} className="text-white" />
                </div>
                
                {/* Title */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="text-white font-display font-semibold text-sm">
                    {image.title}
                  </h4>
                </div>
              </motion.div>
            ))}
            
            {/* View All Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="relative group cursor-pointer flex-shrink-0 w-72 h-72 rounded-2xl overflow-hidden bg-gradient-to-br from-primary-500/20 to-primary-600/10 border-2 border-dashed border-primary-500/30 hover:border-primary-500 transition-colors"
              onClick={() => setShowFullGallery(true)}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-primary-500/20 flex items-center justify-center mb-4 group-hover:bg-primary-500/30 transition-colors">
                  <Grid3X3 size={32} className="text-primary-500" />
                </div>
                <p className="text-white font-display font-bold text-lg">View All</p>
                <p className="text-primary-500 text-sm mt-1">{allImages.length}+ Products</p>
              </div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center mt-6 gap-2">
            <span className="text-industrial-400 text-sm flex items-center gap-2">
              <ChevronLeft size={16} /> Swipe to explore <ChevronRight size={16} />
            </span>
          </div>
        </motion.div>

        {/* View Full Gallery Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-10"
        >
          <button 
            onClick={() => setShowFullGallery(true)}
            className="btn-primary inline-flex items-center gap-2"
          >
            <Image size={20} />
            Open Full Gallery ({allImages.length} Images)
          </button>
        </motion.div>
      </div>

      {/* Full Gallery Modal */}
      <AnimatePresence>
        {showFullGallery && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-industrial-950/98 backdrop-blur-xl overflow-y-auto"
          >
            {/* Header */}
            <div className="sticky top-0 z-10 bg-industrial-950/95 backdrop-blur-xl border-b border-industrial-800 px-6 py-4">
              <div className="container mx-auto flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-display font-bold text-white">
                    Product Gallery
                  </h3>
                  <p className="text-industrial-400 text-sm">{allImages.length} Products</p>
                </div>
                <button 
                  onClick={() => setShowFullGallery(false)}
                  className="w-12 h-12 rounded-full bg-industrial-800 hover:bg-primary-500 flex items-center justify-center text-white transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            {/* Gallery Grid */}
            <div className="container mx-auto px-6 py-8">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {allImages.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.02 }}
                    className="relative group cursor-pointer aspect-square rounded-xl overflow-hidden"
                    onClick={() => openLightbox(index, true)}
                  >
                    <img 
                      src={image.src} 
                      alt={image.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-industrial-950 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                    
                    <div className="absolute top-2 left-2 px-2 py-1 bg-primary-500/90 rounded text-xs font-display font-bold text-industrial-900 uppercase">
                      {image.category}
                    </div>
                    
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <ZoomIn size={24} className="text-white" />
                      </div>
                    </div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-3">
                      <h4 className="text-white font-display font-semibold text-xs truncate">
                        {image.title}
                      </h4>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Download Catalogue */}
              <div className="text-center mt-12">
                <a 
                  href="/BAAZ-Catalogue.pdf" 
                  download
                  className="btn-outline inline-flex items-center gap-2"
                >
                  📄 Download Full Catalogue (PDF)
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Image Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-industrial-950/98 backdrop-blur-xl p-4"
            onClick={closeLightbox}
          >
            <button 
              onClick={closeLightbox}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
            >
              <X size={24} />
            </button>

            <button 
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 md:left-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            >
              <ChevronLeft size={28} />
            </button>
            
            <button 
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 md:right-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            >
              <ChevronRight size={28} />
            </button>

            <motion.div
              key={currentIndex}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl max-h-[80vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-full object-contain rounded-2xl"
              />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-industrial-950 to-transparent rounded-b-2xl">
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-3 py-1 bg-primary-500 rounded-full text-xs font-display font-bold text-industrial-900 uppercase">
                    {selectedImage.category}
                  </span>
                  <span className="text-industrial-400 text-sm">
                    {currentIndex + 1} / {showFullGallery ? allImages.length : previewImages.length}
                  </span>
                </div>
                <h3 className="text-xl font-display font-bold text-white">
                  {selectedImage.title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  )
}

export default Gallery
