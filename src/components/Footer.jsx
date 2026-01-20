import React from 'react'
import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Facebook, Instagram, ArrowUp, Download } from 'lucide-react'
import Logo from './Logo'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Blogs & Feedback', href: '/blogs' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms & Conditions', href: '/terms' },
  ]

  const products = [
    'Alternator Pulleys',
    'Crankshaft Pulleys',
    'Timing Belt Pulleys',
    'Idler Pulleys',
    'Decoupler Pulleys',
    'V-Belt Pulleys',
  ]

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/baazpulley/', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/_baazpulley_', label: 'Instagram' },
  ]

  return (
    <footer className="relative bg-industrial-950 pt-24 pb-8">
      {/* Top Decorative Border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent" />

      <div className="container mx-auto px-6">
        {/* CTA Section */}
        <div className="relative mb-20">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-600 via-primary-500 to-primary-600 rounded-3xl blur-xl opacity-20" />
          <div className="relative bg-gradient-to-r from-primary-600 via-primary-500 to-primary-600 rounded-3xl p-10 md:p-14 text-center overflow-hidden">
            {/* Decorative Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                backgroundSize: '30px 30px'
              }} />
            </div>
            
            <h3 className="relative text-3xl md:text-4xl font-display font-bold text-industrial-900 mb-4">
              Ready to Order Quality Pulleys?
            </h3>
            <p className="relative text-industrial-800 mb-8 max-w-2xl mx-auto">
              Get in touch with India's No. 1 Pulley Manufacturer. We offer competitive pricing and pan-India delivery.
            </p>
            <div className="relative flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="px-8 py-4 bg-industrial-900 text-white font-display font-bold uppercase tracking-wider rounded-lg hover:bg-industrial-800 transition-colors shadow-xl">
                Get Quote Now
              </Link>
              <a href="/BAAZ-Catalogue.pdf" download className="px-8 py-4 bg-white/20 backdrop-blur text-industrial-900 font-display font-bold uppercase tracking-wider rounded-lg hover:bg-white/30 transition-colors flex items-center gap-2">
                <Download size={18} /> Catalogue
              </a>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Logo size="md" className="mb-6" />
            <p className="text-industrial-300 font-semibold mb-2">Kalgidhar Auto Mobiles</p>
            <p className="text-industrial-400 mb-6 leading-relaxed text-sm">
              India's No. 1 Pulley Manufacturer since 1967. 
              Genuine Service Equipments - All types of premium quality 
              pulleys manufactured in Bawana Industrial Area, Delhi.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 bg-industrial-800/50 rounded-xl flex items-center justify-center text-industrial-400 hover:bg-primary-500 hover:text-industrial-900 transition-all duration-300"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-primary-500" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    onClick={scrollToTop}
                    className="text-industrial-400 hover:text-primary-500 transition-colors flex items-center gap-2 group text-sm"
                  >
                    <span className="w-1.5 h-1.5 bg-primary-500/50 rounded-full group-hover:bg-primary-500 transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-display text-lg font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-primary-500" />
              Our Products
            </h4>
            <ul className="space-y-3">
              {products.map((product, index) => (
                <li key={index}>
                  <Link
                    to="/products"
                    className="text-industrial-400 hover:text-primary-500 transition-colors flex items-center gap-2 group text-sm"
                  >
                    <span className="w-1.5 h-1.5 bg-primary-500/50 rounded-full group-hover:bg-primary-500 transition-colors" />
                    {product}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-primary-500" />
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+919315020967" className="flex items-start gap-3 text-industrial-400 hover:text-primary-500 transition-colors group">
                  <div className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-500/20">
                    <Phone size={14} className="text-primary-500" />
                  </div>
                  <span className="text-sm">+91 9315020967<br/>+91 9990094513</span>
                </a>
              </li>
              <li>
                <a href="mailto:baazpulley@gmail.com" className="flex items-start gap-3 text-industrial-400 hover:text-primary-500 transition-colors group">
                  <div className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-500/20">
                    <Mail size={14} className="text-primary-500" />
                  </div>
                  <span className="text-sm">baazpulley@gmail.com</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://maps.app.goo.gl/zhjQ6KUS9M9TKZih6?g_st=iw" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-industrial-400 hover:text-primary-500 transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-500/20">
                    <MapPin size={14} className="text-primary-500" />
                  </div>
                  <span className="text-sm">Plot No. 130, Pocket C, Sector 5<br />DSIDC Industrial Area, Bawana<br />Delhi - 110039, India</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-industrial-800 to-transparent mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-industrial-500 text-sm text-center md:text-left">
            <p>© {new Date().getFullYear()} BAAZ - Kalgidhar Auto Mobiles. All rights reserved.</p>
            <p className="mt-1">
              <Link to="/privacy-policy" onClick={scrollToTop} className="hover:text-primary-500 transition-colors">Privacy Policy</Link>
              {' | '}
              <Link to="/terms" onClick={scrollToTop} className="hover:text-primary-500 transition-colors">Terms & Conditions</Link>
              {' | '}
              Made in India 🇮🇳
            </p>
          </div>
          
          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-industrial-800/50 text-primary-500 hover:bg-primary-500 hover:text-industrial-900 transition-all duration-300 font-display text-sm"
          >
            <ArrowUp size={16} />
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
