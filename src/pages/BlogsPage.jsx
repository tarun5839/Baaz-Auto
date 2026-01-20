import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Calendar, MessageSquare, Star, Send, CheckCircle, Clock, ArrowRight } from 'lucide-react'

const BlogsPage = () => {
  const [feedbackForm, setFeedbackForm] = useState({ name: '', email: '', rating: 5, feedback: '' })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const blogs = [
    {
      id: '1',
      title: 'Understanding Different Types of Automotive Pulleys',
      excerpt: 'A comprehensive guide to alternator, crankshaft, idler, and tensioner pulleys.',
      image: '/images/IMG_2445.jpg',
      date: 'January 10, 2026',
      category: 'Technical',
      readTime: '5 min read'
    },
    {
      id: '2',
      title: 'How to Choose the Right Pulley for Your Vehicle',
      excerpt: 'Expert tips on selecting the correct pulley specifications and materials.',
      image: '/images/IMG_2447.jpg',
      date: 'January 5, 2026',
      category: 'Guide',
      readTime: '4 min read'
    },
    {
      id: '3',
      title: 'Signs Your Pulley Needs Replacement',
      excerpt: 'Learn to identify common symptoms of worn or failing pulleys.',
      image: '/images/IMG_2448.jpg',
      date: 'December 28, 2025',
      category: 'Maintenance',
      readTime: '3 min read'
    },
    {
      id: '4',
      title: 'The Manufacturing Process Behind Quality Pulleys',
      excerpt: 'An inside look at how BAAZ manufactures precision pulleys.',
      image: '/images/IMG_2451.jpg',
      date: 'December 20, 2025',
      category: 'Behind Scenes',
      readTime: '6 min read'
    },
    {
      id: '5',
      title: 'Serpentine Belt System: Complete Guide',
      excerpt: 'Everything you need to know about serpentine belt systems and pulleys.',
      image: '/images/IMG_2452.jpg',
      date: 'December 15, 2025',
      category: 'Technical',
      readTime: '5 min read'
    },
    {
      id: '6',
      title: 'OAD vs Solid Alternator Pulleys',
      excerpt: 'Understanding the difference between decoupler and solid alternator pulleys.',
      image: '/images/IMG_2453.jpg',
      date: 'December 10, 2025',
      category: 'Technical',
      readTime: '4 min read'
    },
  ]

  const testimonials = [
    { name: 'Rajesh Kumar', company: 'Kumar Auto Parts, Mumbai', rating: 5, text: 'Excellent quality pulleys! Been sourcing from BAAZ for over 10 years.' },
    { name: 'Amit Singh', company: 'Singh Motors, Pune', rating: 5, text: 'Best pulley manufacturer in India. Products match OE quality.' },
    { name: 'Sanjay Gupta', company: 'Gupta Auto Spares, Ahmedabad', rating: 5, text: 'Timely delivery and great customer service. Highly recommended!' },
  ]

  const validateForm = () => {
    const newErrors = {}
    if (!feedbackForm.name.trim()) newErrors.name = 'Name is required'
    if (!feedbackForm.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(feedbackForm.email)) {
      newErrors.email = 'Valid email required'
    }
    if (!feedbackForm.feedback.trim() || feedbackForm.feedback.trim().length < 10) {
      newErrors.feedback = 'Feedback must be at least 10 characters'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateForm()) return
    setIsSubmitting(true)
    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      setSubmitStatus('success')
      setFeedbackForm({ name: '', email: '', rating: 5, feedback: '' })
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus(null), 5000)
    }
  }

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
            <span className="text-primary-500 font-semibold text-sm tracking-wider uppercase">Knowledge Hub</span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mt-3 mb-4">
              Blogs & <span className="gradient-text">Feedback</span>
            </h1>
            <p className="text-industrial-300 text-lg">
              Industry insights, technical guides, and customer testimonials.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blogs */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-display font-bold text-white mb-8">Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog, index) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={`/blogs/${blog.id}`}
                  className="group block bg-industrial-900/50 rounded-xl overflow-hidden border border-industrial-800 hover:border-primary-500/50 transition-all"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={blog.image} 
                      alt={blog.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-industrial-950 via-transparent to-transparent" />
                    <span className="absolute top-3 left-3 px-3 py-1 bg-primary-500 text-xs font-bold text-white rounded-full">
                      {blog.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-4 text-xs text-industrial-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />{blog.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={12} />{blog.readTime}
                      </span>
                    </div>
                    <h3 className="text-lg font-display font-bold text-white mb-2 group-hover:text-primary-400 transition-colors line-clamp-2">
                      {blog.title}
                    </h3>
                    <p className="text-industrial-400 text-sm line-clamp-2 mb-4">
                      {blog.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-1 text-primary-400 text-sm font-semibold group-hover:gap-2 transition-all">
                      Read Article <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-industrial-900/30">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-display font-bold text-white mb-8 text-center">Customer Testimonials</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-industrial-900/50 rounded-xl p-6 border border-industrial-800"
              >
                <div className="flex gap-1 mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <p className="text-industrial-300 text-sm mb-4 italic">"{t.text}"</p>
                <div>
                  <p className="font-semibold text-white text-sm">{t.name}</p>
                  <p className="text-xs text-industrial-500">{t.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feedback Form */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-industrial-900/50 rounded-2xl p-8 border border-industrial-800"
          >
            <div className="text-center mb-6">
              <MessageSquare className="w-10 h-10 text-primary-400 mx-auto mb-3" />
              <h2 className="text-xl font-display font-bold text-white">Share Your Feedback</h2>
              <p className="text-industrial-400 text-sm mt-1">Help us improve with your valuable feedback</p>
            </div>

            {submitStatus === 'success' && (
              <div className="flex items-center gap-2 p-3 bg-green-500/20 border border-green-500/30 rounded-lg mb-6">
                <CheckCircle className="text-green-400" size={18} />
                <span className="text-green-400 text-sm">Thank you for your feedback!</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    value={feedbackForm.name}
                    onChange={(e) => setFeedbackForm(p => ({ ...p, name: e.target.value }))}
                    placeholder="Name *"
                    className={`w-full px-4 py-2.5 bg-industrial-800 border ${errors.name ? 'border-red-500' : 'border-industrial-700'} rounded-lg text-white placeholder-industrial-500 text-sm focus:outline-none focus:border-primary-500`}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    value={feedbackForm.email}
                    onChange={(e) => setFeedbackForm(p => ({ ...p, email: e.target.value }))}
                    placeholder="Email *"
                    className={`w-full px-4 py-2.5 bg-industrial-800 border ${errors.email ? 'border-red-500' : 'border-industrial-700'} rounded-lg text-white placeholder-industrial-500 text-sm focus:outline-none focus:border-primary-500`}
                  />
                </div>
              </div>

              <div>
                <label className="text-industrial-400 text-sm mb-2 block">Rating</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setFeedbackForm(p => ({ ...p, rating: star }))}
                    >
                      <Star className={`w-6 h-6 ${star <= feedbackForm.rating ? 'fill-yellow-500 text-yellow-500' : 'text-industrial-600'}`} />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <textarea
                  value={feedbackForm.feedback}
                  onChange={(e) => setFeedbackForm(p => ({ ...p, feedback: e.target.value }))}
                  rows={4}
                  placeholder="Your Feedback *"
                  className={`w-full px-4 py-2.5 bg-industrial-800 border ${errors.feedback ? 'border-red-500' : 'border-industrial-700'} rounded-lg text-white placeholder-industrial-500 text-sm focus:outline-none focus:border-primary-500 resize-none`}
                />
                {errors.feedback && <p className="text-red-400 text-xs mt-1">{errors.feedback}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? 'Submitting...' : <><Send size={16} /> Submit Feedback</>}
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default BlogsPage
