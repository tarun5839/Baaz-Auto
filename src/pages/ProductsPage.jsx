import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ChevronRight, Zap, Cog, CircleDot, Settings, CheckCircle } from 'lucide-react'
import Gallery from '../components/Gallery'

const ProductsPage = () => {
  const products = [
    {
      name: 'Starting Pulley',
      description: 'High-quality starting pulleys for reliable engine startup and smooth operation.',
      icon: Zap,
      features: ['Durable Design', 'Precision Fit', 'Long Lasting'],
      images: ['/images/IMG_2438.jpg', '/images/IMG_2445.jpg']
    },
    {
      name: 'Alternator Pulley Multi Groove & V Type',
      description: 'Premium alternator pulleys available in multi-groove and V-type designs for all vehicle applications.',
      icon: Cog,
      features: ['Multi-Groove', 'V-Type', 'High Performance'],
      images: ['/images/IMG_2497.jpg', '/images/IMG_2505.jpg']
    },
    {
      name: 'Over Running Alternator Pulley',
      description: 'Advanced overrunning alternator pulleys (OAD/OAP) for enhanced engine efficiency and reduced vibration.',
      icon: CircleDot,
      features: ['OAD/OAP Design', 'Vibration Reduction', 'Energy Efficient'],
      images: ['/images/IMG_2542.jpg', '/images/IMG_2546.jpg']
    },
    {
      name: 'Idler Mild Steel & Nylon Glass Filled',
      description: 'Quality idler pulleys available in mild steel and nylon glass filled variants for optimal performance.',
      icon: Settings,
      features: ['Mild Steel', 'Nylon Glass Filled', 'Wear Resistant'],
      images: ['/images/IMG_2589.jpg', '/images/IMG_2536.jpg']
    },
  ]

  const qualityChecks = [
    'Dynamic Balancing',
    'Dimensional Accuracy',
    'Hardness Testing',
    'Surface Finish Check',
    'Endurance Testing',
    'Visual Inspection',
  ]

  return (
    <div className="min-h-screen bg-industrial-950 pt-24">
      {/* Hero */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-transparent" />
        <div className="container mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-primary-500 font-semibold text-sm tracking-wider uppercase">Our Products</span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mt-3 mb-4">
              Premium <span className="gradient-text">Automotive Pulleys</span>
            </h1>
            <p className="text-industrial-300 text-lg">
              Precision-engineered pulleys for all automotive and industrial applications. 
              Trusted by manufacturers since 1967.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-industrial-900/50 rounded-2xl overflow-hidden border border-industrial-800 hover:border-primary-500/50 transition-all"
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="grid grid-cols-2 h-full">
                    {product.images ? (
                      product.images.map((img, imgIndex) => (
                        <img 
                          key={imgIndex}
                          src={img} 
                          alt={`${product.name} ${imgIndex + 1}`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      ))
                    ) : (
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    )}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-industrial-950 to-transparent" />
                  <div className="absolute top-4 right-4 w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center">
                    <product.icon className="text-primary-400" size={20} />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-display font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-industrial-400 text-sm mb-4 line-clamp-2">{product.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.features.map((feature, i) => (
                      <span key={i} className="px-2 py-1 bg-industrial-800 text-industrial-300 text-xs rounded">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <Link 
                    to="/contact"
                    className="text-primary-400 font-semibold text-sm inline-flex items-center hover:text-primary-300"
                  >
                    Get Quote <ChevronRight size={16} className="ml-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product List */}
      <section className="py-12 bg-industrial-900/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto bg-industrial-900/50 rounded-2xl p-8 md:p-10 border border-industrial-800"
          >
            <h2 className="text-3xl font-display font-bold text-white mb-8 text-center">
              Our <span className="gradient-text">Products</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-3 bg-industrial-800/50 rounded-lg border border-industrial-700/50 hover:border-primary-500/30 transition-colors">
                <CheckCircle className="text-primary-400 flex-shrink-0" size={20} />
                <span className="text-white font-medium">Power steering pulley</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-industrial-800/50 rounded-lg border border-industrial-700/50 hover:border-primary-500/30 transition-colors">
                <CheckCircle className="text-primary-400 flex-shrink-0" size={20} />
                <span className="text-white font-medium">Engine pulley</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-industrial-800/50 rounded-lg border border-industrial-700/50 hover:border-primary-500/30 transition-colors">
                <CheckCircle className="text-primary-400 flex-shrink-0" size={20} />
                <span className="text-white font-medium">Alternator pulley</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-industrial-800/50 rounded-lg border border-industrial-700/50 hover:border-primary-500/30 transition-colors">
                <CheckCircle className="text-primary-400 flex-shrink-0" size={20} />
                <span className="text-white font-medium">Water pump pulley</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-industrial-800/50 rounded-lg border border-industrial-700/50 hover:border-primary-500/30 transition-colors">
                <CheckCircle className="text-primary-400 flex-shrink-0" size={20} />
                <span className="text-white font-medium">Tensioner pulley</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-industrial-800/50 rounded-lg border border-industrial-700/50 hover:border-primary-500/30 transition-colors">
                <CheckCircle className="text-primary-400 flex-shrink-0" size={20} />
                <span className="text-white font-medium">Machinery pulley</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-industrial-800/50 rounded-lg border border-industrial-700/50 hover:border-primary-500/30 transition-colors md:col-span-2 lg:col-span-3 justify-center">
                <CheckCircle className="text-primary-400 flex-shrink-0" size={20} />
                <span className="text-white font-medium">Casting and forging goods</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quality Section */}
      <section className="py-16 bg-industrial-900/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-500">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
              <h2 className="text-3xl font-display font-bold text-white">
                Quality <span className="gradient-text">Assured</span>
              </h2>
            </div>
            <p className="text-industrial-400">Every pulley undergoes rigorous testing</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {qualityChecks.map((check, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-2xl px-5 py-3 backdrop-blur-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="text-green-400" size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{check}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary-500/20 to-primary-600/10 rounded-2xl p-10 text-center border border-primary-500/30"
          >
            <h2 className="text-3xl font-display font-bold text-white mb-3">Need Custom Pulleys?</h2>
            <p className="text-industrial-300 mb-6 max-w-xl mx-auto">
              We manufacture custom pulleys as per your specifications. Contact us for bulk orders.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-primary">Request Quote</Link>
              <a href="/BAAZ-Catalogue.pdf" download className="btn-outline">📄 Download Catalogue</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products Gallery */}
      <Gallery />
    </div>
  )
}

export default ProductsPage
