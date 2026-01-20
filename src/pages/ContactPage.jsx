import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, AlertCircle, Instagram, Facebook, MessageCircle } from 'lucide-react'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const validateForm = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Enter a valid email'
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required'
    } else if (!/^[6-9]\d{9}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Enter valid 10-digit number'
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateForm()) return
    setIsSubmitting(true)
    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      setSubmitStatus('success')
      setFormData({ name: '', email: '', phone: '', company: '', subject: '', message: '' })
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus(null), 5000)
    }
  }

  const mapUrl = 'https://maps.app.goo.gl/zhjQ6KUS9M9TKZih6?g_st=iw'
  const mapEmbedUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.1234567890!2d77.1234567!3d28.1234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDA3JzI0LjQiTiA3N8KwMDcnMjQuNCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin'

  const contactInfo = [
    { 
      icon: MapPin, 
      title: 'Factory Address', 
      content: 'Plot No. 130, Pocket C, Sector 5, DSIDC Industrial Area, Bawana, Delhi-110039',
      link: mapUrl
    },
    { icon: Phone, title: 'Phone', content: '+91 9315020967 | +91 9990094513', link: 'tel:+919315020967' },
    { icon: Mail, title: 'Email', content: 'baazpulley@gmail.com', link: 'mailto:baazpulley@gmail.com' },
    { icon: Clock, title: 'Hours', content: 'Mon - Sat: 9:00 AM - 6:00 PM' }
  ]

  return (
    <div className="min-h-screen bg-industrial-950 pt-24">
      {/* Hero */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-transparent" />
        <div className="container mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-primary-500 font-semibold text-sm tracking-wider uppercase">Contact Us</span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mt-3 mb-4">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-industrial-300 text-lg">
              Have questions? Need a quote? We're here to help!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-industrial-900/50 rounded-2xl p-8 border border-industrial-800"
            >
              <h2 className="text-2xl font-display font-bold text-white mb-6">Send a Message</h2>

              {submitStatus === 'success' && (
                <div className="flex items-center gap-3 p-4 bg-green-500/20 border border-green-500/30 rounded-lg mb-6">
                  <CheckCircle className="text-green-400" size={20} />
                  <span className="text-green-400">Message sent! We'll get back to you soon.</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="flex items-center gap-3 p-4 bg-red-500/20 border border-red-500/30 rounded-lg mb-6">
                  <AlertCircle className="text-red-400" size={20} />
                  <span className="text-red-400">Something went wrong. Please try again.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name *"
                      className={`w-full px-4 py-3 bg-industrial-800 border ${errors.name ? 'border-red-500' : 'border-industrial-700'} rounded-lg text-white placeholder-industrial-500 focus:outline-none focus:border-primary-500 transition-colors`}
                    />
                    {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email *"
                      className={`w-full px-4 py-3 bg-industrial-800 border ${errors.email ? 'border-red-500' : 'border-industrial-700'} rounded-lg text-white placeholder-industrial-500 focus:outline-none focus:border-primary-500 transition-colors`}
                    />
                    {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone *"
                      maxLength={10}
                      className={`w-full px-4 py-3 bg-industrial-800 border ${errors.phone ? 'border-red-500' : 'border-industrial-700'} rounded-lg text-white placeholder-industrial-500 focus:outline-none focus:border-primary-500 transition-colors`}
                    />
                    {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
                  </div>
                  <div>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Company (Optional)"
                      className="w-full px-4 py-3 bg-industrial-800 border border-industrial-700 rounded-lg text-white placeholder-industrial-500 focus:outline-none focus:border-primary-500 transition-colors"
                    />
                  </div>
                </div>

                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-industrial-800 border border-industrial-700 rounded-lg text-white focus:outline-none focus:border-primary-500 transition-colors"
                >
                  <option value="">Select Subject</option>
                  <option value="quote">Request a Quote</option>
                  <option value="product">Product Inquiry</option>
                  <option value="bulk">Bulk Order</option>
                  <option value="custom">Custom Manufacturing</option>
                  <option value="other">Other</option>
                </select>

                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Your Message *"
                    className={`w-full px-4 py-3 bg-industrial-800 border ${errors.message ? 'border-red-500' : 'border-industrial-700'} rounded-lg text-white placeholder-industrial-500 focus:outline-none focus:border-primary-500 transition-colors resize-none`}
                  />
                  {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-4 p-5 bg-industrial-900/50 rounded-xl border border-industrial-800 hover:border-primary-500/30 transition-colors">
                  <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <info.icon className="text-primary-400" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-semibold text-white mb-1">{info.title}</h3>
                    {info.link ? (
                      <a 
                        href={info.link} 
                        target={info.link.startsWith('http') ? '_blank' : '_self'}
                        rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                        className="text-industrial-400 text-sm hover:text-primary-400 transition-colors block"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-industrial-400 text-sm">{info.content}</p>
                    )}
                  </div>
                </div>
              ))}

              {/* Social */}
              <div className="p-5 bg-industrial-900/50 rounded-xl border border-industrial-800">
                <h3 className="font-display font-semibold text-white mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  <a href="https://www.instagram.com/_baazpulley_" target="_blank" rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center hover:scale-110 transition-transform">
                    <Instagram className="text-white" size={22} />
                  </a>
                  <a href="https://www.facebook.com/baazpulley/" target="_blank" rel="noopener noreferrer"
                    className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center hover:scale-110 transition-transform">
                    <Facebook className="text-white" size={22} />
                  </a>
                  <a href="https://wa.me/919315020967" target="_blank" rel="noopener noreferrer"
                    className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center hover:scale-110 transition-transform">
                    <MessageCircle className="text-white" size={22} />
                  </a>
                </div>
              </div>

              {/* GST */}
              <div className="p-4 bg-primary-500/10 rounded-xl border border-primary-500/20">
                <p className="text-sm text-industrial-300">
                  <span className="text-primary-400 font-semibold">GST TIN:</span> 07AXKPS7998E1ZL
                </p>
                <p className="text-sm text-industrial-300 mt-1">
                  <span className="text-primary-400 font-semibold">Banker:</span> Punjab & Sind Bank
                </p>
              </div>
            </motion.div>
          </div>

          {/* Google Map Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <div className="bg-industrial-900/50 rounded-2xl p-6 border border-industrial-800">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center">
                    <MapPin className="text-primary-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-white">Find Us on Map</h3>
                    <p className="text-industrial-400 text-sm">Visit our factory location</p>
                  </div>
                </div>
                <a
                  href={mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-sm whitespace-nowrap"
                >
                  Open in Maps
                </a>
              </div>
              
              {/* Embedded Google Map */}
              <div className="relative w-full h-96 rounded-xl overflow-hidden border border-industrial-800">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.1234567890!2d77.1234567!3d28.1234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19e099684123%3A0x88f176771146205e!2sPlot%20No.%20130%2C%20Pocket%20C%2C%20Sector%205%2C%20DSIDC%20Industrial%20Area%2C%20Bawana%2C%20Delhi%20110039!5e0!3m2!1sen!2sin!4v1740052300000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                  title="BAAZ Factory Location"
                />
              </div>
              
              <div className="mt-4 flex items-center gap-2 text-industrial-400 text-sm">
                <MapPin size={16} className="text-primary-500" />
                <span>Plot No. 130, Pocket C, Sector 5, DSIDC Industrial Area, Bawana, Delhi-110039</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
