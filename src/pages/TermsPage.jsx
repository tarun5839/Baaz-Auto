import React from 'react'
import { motion } from 'framer-motion'
import { FileText, ShoppingCart, Truck, RefreshCw, Scale, Mail } from 'lucide-react'

const TermsPage = () => {
  const sections = [
    {
      icon: FileText,
      title: 'Acceptance of Terms',
      content: 'By using this website or engaging with BAAZ - Kalgidhar Auto Mobiles, you agree to these Terms and Conditions.'
    },
    {
      icon: ShoppingCart,
      title: 'Products & Services',
      content: 'We manufacture automotive pulleys including Alternator, Crankshaft, Idler, Tensioner, Water Pump, AC, and Power Steering Pulleys.',
      items: ['Product images are for representation', 'Specifications may change', 'Custom manufacturing available']
    },
    {
      icon: Truck,
      title: 'Orders & Delivery',
      content: 'All orders subject to acceptance and availability.',
      items: ['Prices subject to change', 'Delivery timelines are estimates', 'Bulk order terms negotiable']
    },
    {
      icon: RefreshCw,
      title: 'Returns & Warranty',
      content: 'We offer warranty on manufacturing defects.',
      items: ['Warranty covers manufacturing defects', 'Returns within 15 days for unused products', 'Product must be in original condition']
    },
    {
      icon: Scale,
      title: 'Intellectual Property',
      content: 'All content, logos, and designs are property of BAAZ - Kalgidhar Auto Mobiles.',
      items: ['BAAZ is a registered trademark', 'Content may not be reproduced without permission']
    },
  ]

  return (
    <div className="min-h-screen bg-industrial-950 pt-24">
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-transparent" />
        <div className="container mx-auto px-6 relative">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto">
            <span className="text-primary-500 font-semibold text-sm tracking-wider uppercase">Legal</span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mt-3 mb-4">
              Terms & <span className="gradient-text">Conditions</span>
            </h1>
            <p className="text-industrial-300">Please read these terms carefully. Last updated: January 2026</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="space-y-6">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-industrial-900/50 rounded-2xl p-6 border border-industrial-800"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center">
                    <section.icon className="text-primary-400" size={20} />
                  </div>
                  <h2 className="text-lg font-display font-bold text-white">{section.title}</h2>
                </div>
                <p className="text-industrial-300 text-sm mb-3">{section.content}</p>
                {section.items && (
                  <ul className="space-y-2">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-industrial-400 text-sm">
                        <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="bg-industrial-900/50 rounded-2xl p-6 border border-industrial-800 mt-6">
            <h2 className="text-lg font-display font-bold text-white mb-3">Governing Law</h2>
            <p className="text-industrial-300 text-sm">
              These terms are governed by laws of India. Disputes subject to Delhi courts jurisdiction.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="bg-primary-500/10 rounded-2xl p-6 border border-primary-500/30 mt-8">
            <div className="flex items-center gap-3 mb-3">
              <Mail className="text-primary-400" size={20} />
              <h2 className="text-lg font-display font-bold text-white">Questions?</h2>
            </div>
            <p className="text-industrial-300 text-sm">
              Contact us at <a href="mailto:baazpulley@gmail.com" className="text-primary-400 hover:underline">baazpulley@gmail.com</a> or call <a href="tel:+919315020967" className="text-primary-400 hover:underline">+91 9315020967</a>
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default TermsPage
