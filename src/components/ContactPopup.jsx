import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Send, Phone, Mail, CheckCircle, AlertCircle } from 'lucide-react'

const ContactPopup = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  useEffect(() => {
    // Check if popup was already shown in this session
    const popupShown = sessionStorage.getItem('contactPopupShown')
    
    if (!popupShown) {
      const timer = setTimeout(() => {
        setIsOpen(true)
        sessionStorage.setItem('contactPopupShown', 'true')
      }, 4000) // 4 seconds delay

      return () => clearTimeout(timer)
    }
  }, [])

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    
    const phoneRegex = /^[6-9]\d{9}$/
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required'
    } else if (!phoneRegex.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Enter valid 10-digit number'
    }
    
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Enter a valid email'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateForm()) return
    
    setIsSubmitting(true)
    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      setSubmitStatus('success')
      setTimeout(() => {
        setIsOpen(false)
        setSubmitStatus(null)
        setFormData({ name: '', phone: '', email: '' })
      }, 2000)
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[9999] overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      />

      {/* Popup Wrapper */}
      <div className="min-h-screen flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.2 }}
          className="relative bg-industrial-900 rounded-2xl border border-industrial-700 shadow-2xl w-full max-w-sm"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-industrial-800 text-industrial-400 hover:text-white hover:bg-red-500 transition-colors z-10"
          >
            <X size={16} />
          </button>

          {/* Header */}
          <div className="bg-gradient-to-br from-primary-500/20 to-primary-600/10 p-4 rounded-t-2xl border-b border-industrial-800">
            <div className="flex items-center gap-3">
              <img 
                src="/images/LOGO.jpeg" 
                alt="BAAZ Logo" 
                className="w-11 h-11 rounded-full border-2 border-primary-500/30 object-cover"
              />
              <div>
                <h3 className="text-base font-display font-bold text-white">
                  Get in Touch!
                </h3>
                <p className="text-xs text-industrial-400">
                  India's No. 1 Pulley Mfg.
                </p>
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="p-4">
            {submitStatus === 'success' ? (
              <div className="text-center py-4">
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <CheckCircle className="text-green-400" size={24} />
                </div>
                <h4 className="text-base font-display font-bold text-white">Thank You!</h4>
                <p className="text-industrial-400 text-xs">We'll contact you soon.</p>
              </div>
            ) : (
              <>
                {submitStatus === 'error' && (
                  <div className="flex items-center gap-2 p-2 bg-red-500/20 border border-red-500/30 rounded-lg mb-3">
                    <AlertCircle className="text-red-400" size={14} />
                    <span className="text-red-400 text-xs">Something went wrong.</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-3">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name *"
                      className={`w-full px-3 py-2.5 bg-industrial-800 border ${errors.name ? 'border-red-500' : 'border-industrial-700'} rounded-lg text-white placeholder-industrial-500 focus:outline-none focus:border-primary-500 transition-colors text-sm`}
                    />
                    {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Mobile Number *"
                      maxLength={10}
                      className={`w-full px-3 py-2.5 bg-industrial-800 border ${errors.phone ? 'border-red-500' : 'border-industrial-700'} rounded-lg text-white placeholder-industrial-500 focus:outline-none focus:border-primary-500 transition-colors text-sm`}
                    />
                    {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email (Optional)"
                      className={`w-full px-3 py-2.5 bg-industrial-800 border ${errors.email ? 'border-red-500' : 'border-industrial-700'} rounded-lg text-white placeholder-industrial-500 focus:outline-none focus:border-primary-500 transition-colors text-sm`}
                    />
                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-2.5 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-display font-semibold rounded-lg flex items-center justify-center gap-2 hover:from-primary-600 hover:to-primary-700 transition-all disabled:opacity-50 text-sm"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={14} />
                        Get Quote
                      </>
                    )}
                  </button>
                </form>

                {/* Quick Contact */}
                <div className="mt-3 pt-3 border-t border-industrial-800 flex justify-center gap-4">
                  <a 
                    href="tel:+919315020967" 
                    className="flex items-center gap-1.5 text-industrial-400 hover:text-primary-400 transition-colors text-xs"
                  >
                    <Phone size={12} />
                    Call
                  </a>
                  <a 
                    href="https://wa.me/919315020967" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-industrial-400 hover:text-green-400 transition-colors text-xs"
                  >
                    <svg viewBox="0 0 24 24" className="w-3 h-3" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    WhatsApp
                  </a>
                  <a 
                    href="mailto:baazpulley@gmail.com" 
                    className="flex items-center gap-1.5 text-industrial-400 hover:text-primary-400 transition-colors text-xs"
                  >
                    <Mail size={12} />
                    Email
                  </a>
                </div>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ContactPopup
