import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, Download } from 'lucide-react'

const Products = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'alternator', name: 'Alternator Pulleys' },
    { id: 'crankshaft', name: 'Crankshaft Pulleys' },
    { id: 'idler', name: 'Idler & Tensioner' },
    { id: 'timing', name: 'Timing Pulleys' },
    { id: 'decoupler', name: 'Decoupler (OAD)' },
  ]

  const products = [
    {
      id: 1,
      name: 'Alternator Pulley - Multi Groove',
      category: 'alternator',
      description: 'High-quality zinc plated alternator pulleys with multi-ribbed design for superior belt grip',
      image: '/images/IMG_2497.jpg',
      applications: 'Cars, Trucks, Commercial Vehicles',
    },
    {
      id: 2,
      name: 'Crankshaft Pulley - V-Belt',
      category: 'crankshaft',
      description: 'Heavy-duty crankshaft pulleys with precision-machined grooves for V-belt drives',
      image: '/images/IMG_2438.jpg',
      applications: 'Tractors, Industrial Engines',
    },
    {
      id: 3,
      name: 'Alternator Decoupler Pulley',
      category: 'decoupler',
      description: 'Advanced decoupler pulleys with overrunning clutch mechanism for smooth operation',
      image: '/images/IMG_1173.jpg',
      applications: 'Modern Vehicles, Diesel Engines',
    },
    {
      id: 4,
      name: 'Timing Belt Pulley',
      category: 'timing',
      description: 'Precision timing pulleys with accurate tooth profile for synchronous belt drives',
      image: '/images/IMG_2522.jpg',
      applications: 'Engine Timing Systems',
    },
    {
      id: 5,
      name: 'Idler Pulley - Threaded Stud',
      category: 'idler',
      description: 'High-quality idler pulleys with integrated threaded stud for easy installation',
      image: '/images/aa19b3f0-3811-4b44-8f22-cc93cf61872f.jpg',
      applications: 'Belt Tensioning Systems',
    },
    {
      id: 6,
      name: 'Crankshaft Damper Pulley',
      category: 'crankshaft',
      description: 'Multi-groove crankshaft pulleys with vibration damping for smooth power transmission',
      image: '/images/IMG_2460.jpg',
      applications: 'Heavy Vehicles, Industrial',
    },
    {
      id: 7,
      name: 'Alternator Pulley Collection',
      category: 'alternator',
      description: 'Premium gold zinc coated alternator pulleys with excellent corrosion resistance',
      image: '/images/IMG_2478.jpg',
      applications: 'All Vehicle Types',
    },
    {
      id: 8,
      name: 'Flat Idler Pulley',
      category: 'idler',
      description: 'Smooth bore idler pulleys with integrated bearing for flat belt applications',
      image: '/images/IMG_2589.jpg',
      applications: 'Accessory Drive Systems',
    },
    {
      id: 9,
      name: 'V-Belt Pulley - Double Groove',
      category: 'crankshaft',
      description: 'Double groove V-belt pulleys for dual belt drive systems',
      image: '/images/IMG_2444.jpg',
      applications: 'Agricultural Equipment',
    },
    {
      id: 10,
      name: 'Multi-Rib Alternator Pulley',
      category: 'alternator',
      description: 'Poly-V alternator pulleys with precision grooves for modern serpentine belt systems',
      image: '/images/IMG_2532.jpg',
      applications: 'Passenger Cars, SUVs',
    },
    {
      id: 11,
      name: 'Heavy Duty Idler Pulley',
      category: 'idler',
      description: 'Industrial grade idler pulleys designed for high-load applications',
      image: '/images/IMG_2570.jpg',
      applications: 'Industrial Machinery',
    },
    {
      id: 12,
      name: 'Overrunning Decoupler',
      category: 'decoupler',
      description: 'Advanced OAD pulleys with one-way clutch for reduced vibration and noise',
      image: '/images/IMG_2560.jpg',
      applications: 'Premium Vehicles',
    },
  ]

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory)

  return (
    <section id="products" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-industrial-950" />
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #f5b52e 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative container mx-auto px-6" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-500 font-display font-semibold tracking-widest text-sm">
            OUR PRODUCTS
          </span>
          <h2 className="section-title mt-2 mb-4">
            ALL TYPE <span className="gradient-text">PULLEY</span> MANUFACTURER
          </h2>
          <p className="section-subtitle mx-auto">
            Premium quality pulleys for Automotive, Agricultural, and Industrial applications.
            Manufactured with precision since 1967.
          </p>
          
          {/* Download Catalogue Button */}
          <a 
            href="/BAAZ-Catalogue.pdf" 
            download
            className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-primary-500/10 border border-primary-500/30 rounded-full text-primary-500 hover:bg-primary-500 hover:text-industrial-900 transition-all duration-300"
          >
            <Download size={18} />
            <span className="font-display font-semibold">Download Catalogue</span>
          </a>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2.5 rounded-full font-display text-sm tracking-wider transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-primary-500 text-industrial-900'
                  : 'bg-industrial-800 text-industrial-300 hover:bg-industrial-700'
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group"
            >
              <div className="glass rounded-2xl overflow-hidden card-hover h-full flex flex-col">
                {/* Product Image */}
                <div className="relative h-56 bg-gradient-to-br from-industrial-800 to-industrial-900 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-primary-500 text-industrial-900 text-xs font-display font-bold px-3 py-1 rounded-full uppercase">
                    {product.category}
                  </div>
                  
                  {/* BAAZ Watermark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-industrial-950/80 via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-primary-500 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-industrial-400 text-sm mb-4 flex-1">
                    {product.description}
                  </p>

                  {/* Applications */}
                  <div className="flex items-center justify-between pt-4 border-t border-industrial-800">
                    <div>
                      <span className="text-xs text-industrial-500">Applications</span>
                      <p className="text-primary-500 font-medium text-sm">{product.applications}</p>
                    </div>
                    <a 
                      href="#contact" 
                      className="flex items-center gap-2 text-primary-500 font-display text-sm hover:gap-3 transition-all"
                    >
                      Enquire <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Product Range Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-display font-bold text-center mb-8">
            Our Complete <span className="text-primary-500">Product Range</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['/images/IMG_2478.jpg', '/images/IMG_2488.jpg', '/images/IMG_1177.jpg', '/images/IMG_2522.jpg', '/images/IMG_2540.jpg', '/images/IMG_2551.jpg', '/images/IMG_2565.jpg', '/images/IMG_5641 B.jpg'].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.7 + i * 0.05 }}
                className="relative aspect-square rounded-xl overflow-hidden group"
              >
                <img src={img} alt={`BAAZ Product ${i + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                <div className="absolute inset-0 bg-primary-500/0 group-hover:bg-primary-500/20 transition-colors duration-300" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-industrial-400 mb-6">
            Need a specific pulley? We manufacture custom pulleys as per your requirements.
          </p>
          <a href="#contact" className="btn-primary inline-flex items-center gap-2">
            Request Custom Quote <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Products
