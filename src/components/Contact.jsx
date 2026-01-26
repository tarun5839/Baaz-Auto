import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Instagram, Facebook } from 'lucide-react'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    product: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
    alert('Thank you for your inquiry! We will contact you soon.')
    setFormData({ name: '', email: '', phone: '', company: '', product: '', message: '' })
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91 9990094513'],
      action: 'tel:+919990094513'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['baazpulley@gmail.com'],
      action: 'mailto:baazpulley@gmail.com'
    },
    {
      icon: MapPin,
      title: 'Factory Address',
      details: ['Plot No. 130, Pocket C, Sector 5', 'DSIDC Industrial Area, Bawana', 'Delhi - 110039, India'],
      action: 'https://maps.google.com/?q=DSIDC+Bawana+Industrial+Area+Delhi+110039'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: ['Mon - Sat: 9:00 AM - 7:00 PM', 'Sunday: Closed'],
      action: null
    },
  ]

  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-industrial-900 via-industrial-950 to-industrial-950" />
      
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />

      <div className="relative container mx-auto px-6" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-500 font-display font-semibold tracking-widest text-sm">
            GET IN TOUCH
          </span>
          <h2 className="section-title mt-2 mb-4">
            REQUEST A <span className="gradient-text">QUOTE</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Have a requirement? Send us your specifications and our team 
            will get back to you with the best solution.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.action || '#'}
                className={`flex items-start gap-4 p-6 glass rounded-xl hover:border-primary-500/30 transition-all duration-300 ${
                  info.action ? 'cursor-pointer' : 'cursor-default'
                }`}
              >
                <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <info.icon className="text-primary-500" size={24} />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-white mb-1">
                    {info.title}
                  </h4>
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-industrial-400 text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              </a>
            ))}

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/919990094513?text=Hi%20BAAZ%20Team,%20I%20am%20interested%20in%20your%20pulley%20products.%20Could%20you%20please%20share%20the%20product%20catalog%20and%20pricing%20details?"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 p-4 bg-green-600 hover:bg-green-500 rounded-xl transition-colors duration-300"
            >
              <MessageCircle size={24} />
              <span className="font-display font-semibold">Chat on WhatsApp</span>
            </a>
            
            {/* Social Media Links */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href="https://www.instagram.com/_baazpulley_?igsh=cHdmaXBpNWNhbG8z&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-3 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-400 rounded-xl transition-all duration-300"
              >
                <Instagram size={20} />
                <span className="font-display font-semibold text-sm">Instagram</span>
              </a>
              <a
                href="https://www.facebook.com/baazpulley/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-3 bg-blue-600 hover:bg-blue-500 rounded-xl transition-colors duration-300"
              >
                <Facebook size={20} />
                <span className="font-display font-semibold text-sm">Facebook</span>
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-8">
              <h3 className="font-display text-2xl font-bold text-white mb-6">
                Send Your Enquiry
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm text-industrial-400 mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-industrial-800 border border-industrial-700 rounded-lg text-white focus:border-primary-500 focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm text-industrial-400 mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-industrial-800 border border-industrial-700 rounded-lg text-white focus:border-primary-500 focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm text-industrial-400 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-industrial-800 border border-industrial-700 rounded-lg text-white focus:border-primary-500 focus:outline-none transition-colors"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                <div>
                  <label className="block text-sm text-industrial-400 mb-2">Company Name</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-industrial-800 border border-industrial-700 rounded-lg text-white focus:border-primary-500 focus:outline-none transition-colors"
                    placeholder="Your company"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm text-industrial-400 mb-2">Product Interest *</label>
                <select
                  name="product"
                  value={formData.product}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-industrial-800 border border-industrial-700 rounded-lg text-white focus:border-primary-500 focus:outline-none transition-colors"
                >
                  <option value="">Select a product category</option>
                  <option value="v-belt">V-Belt Pulleys</option>
                  <option value="timing">Timing Belt Pulleys</option>
                  <option value="flat">Flat Belt Pulleys</option>
                  <option value="custom">Custom Pulleys</option>
                  <option value="other">Other / Multiple</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-sm text-industrial-400 mb-2">Message / Requirements *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-industrial-800 border border-industrial-700 rounded-lg text-white focus:border-primary-500 focus:outline-none transition-colors resize-none"
                  placeholder="Please describe your requirements, specifications, quantity needed, etc."
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary flex items-center justify-center gap-2"
              >
                <Send size={18} />
                Submit Enquiry
              </button>

              <p className="text-sm text-industrial-500 text-center mt-4">
                We typically respond within 24 hours on business days.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact

