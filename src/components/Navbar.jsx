import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react'
import Logo from './Logo'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'Contact', href: '/contact' },
  ]

  const isActive = (path) => {
    return location.pathname === path
  }

  const handleLinkClick = () => {
    setIsOpen(false)
    // Ensure scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-industrial-950 via-industrial-900 to-industrial-950 text-industrial-300 py-2.5 text-sm hidden md:block border-b border-industrial-800/50">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-8">
            <a href="tel:+919315020967" className="flex items-center gap-2 hover:text-primary-500 transition-colors group">
              <div className="w-7 h-7 rounded-full bg-primary-500/10 flex items-center justify-center group-hover:bg-primary-500/20 transition-colors">
                <Phone size={12} className="text-primary-500" />
              </div>
              <span className="font-medium">+91 9315020967</span>
            </a>
            <a href="mailto:baazpulley@gmail.com" className="flex items-center gap-2 hover:text-primary-500 transition-colors group">
              <div className="w-7 h-7 rounded-full bg-primary-500/10 flex items-center justify-center group-hover:bg-primary-500/20 transition-colors">
                <Mail size={12} className="text-primary-500" />
              </div>
              <span className="font-medium">baazpulley@gmail.com</span>
            </a>
          </div>
          <a 
            href="https://maps.app.goo.gl/zhjQ6KUS9M9TKZih6?g_st=iw" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-industrial-400 hover:text-primary-500 transition-colors group"
          >
            <MapPin size={14} className="text-primary-500" />
            <span>Plot 130, DSIDC Bawana Industrial Area, Delhi-110039</span>
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-industrial-950/98 backdrop-blur-xl shadow-2xl shadow-black/30 py-2' 
          : 'bg-gradient-to-b from-industrial-950/80 to-transparent py-4'
      }`} style={{ top: isScrolled ? 0 : '44px' }}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="relative group">
              <Logo size="sm" showText={true} />
              <div className="absolute inset-0 bg-primary-500/0 group-hover:bg-primary-500/5 rounded-xl transition-colors duration-300" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={handleLinkClick}
                  className={`relative px-4 py-2 font-display text-sm tracking-wider transition-all duration-300 group ${
                    isActive(link.href) ? 'text-primary-500' : 'text-industrial-200 hover:text-primary-500'
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-primary-400 to-primary-600 transition-all duration-300 rounded-full ${
                    isActive(link.href) ? 'w-3/4' : 'w-0 group-hover:w-3/4'
                  }`} />
                </Link>
              ))}
              <Link to="/contact" onClick={handleLinkClick} className="ml-4 btn-primary text-sm">
                Get Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-xl bg-industrial-800/50 text-white hover:bg-primary-500/20 transition-colors"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className={`lg:hidden transition-all duration-500 overflow-hidden ${
            isOpen ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}>
            <div className="bg-industrial-900/98 backdrop-blur-xl rounded-2xl p-6 border border-industrial-800/50 shadow-2xl">
              {navLinks.map((link, index) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={handleLinkClick}
                  className={`block py-3.5 font-display text-sm tracking-wider transition-all duration-300 border-b border-industrial-800/50 last:border-0 ${
                    isActive(link.href) ? 'text-primary-500' : 'text-industrial-200 hover:text-primary-500'
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/contact" onClick={handleLinkClick} className="btn-primary text-sm mt-6 block text-center">
                Get Quote
              </Link>
              
              {/* Mobile Contact Info */}
              <div className="mt-6 pt-6 border-t border-industrial-800/50 space-y-3">
                <a href="tel:+919315020967" className="flex items-center gap-3 text-sm text-industrial-400 hover:text-primary-500">
                  <Phone size={16} className="text-primary-500" />
                  +91 9315020967
                </a>
                <a href="mailto:baazpulley@gmail.com" className="flex items-center gap-3 text-sm text-industrial-400 hover:text-primary-500">
                  <Mail size={16} className="text-primary-500" />
                  baazpulley@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Spacer for fixed navbar */}
      <div className="h-[44px] hidden md:block" />
    </>
  )
}

export default Navbar
