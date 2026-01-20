import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Eye, Lock, Database, UserCheck, Mail, Cookie, Globe, Clock, AlertCircle, FileText } from 'lucide-react'

const PrivacyPolicyPage = () => {
  const sections = [
    {
      icon: Eye,
      title: 'Information We Collect',
      content: [
        {
          subtitle: 'Personal Information',
          text: 'When you contact us, place an order, or request information, we may collect:',
          items: [
            'Name and contact details (email, phone number, address)',
            'Company name and business information',
            'Payment and billing information (processed securely)',
            'Product preferences and order history'
          ]
        },
        {
          subtitle: 'Automatically Collected Information',
          text: 'When you visit our website, we automatically collect:',
          items: [
            'IP address and browser type',
            'Device information and operating system',
            'Pages visited and time spent on our site',
            'Referring website addresses',
            'Cookies and similar tracking technologies'
          ]
        }
      ]
    },
    {
      icon: Database,
      title: 'How We Use Your Information',
      content: [
        {
          subtitle: 'Business Operations',
          text: 'We use your information to:',
          items: [
            'Process and fulfill your product orders and inquiries',
            'Communicate with you about orders, products, and services',
            'Provide customer support and respond to your requests',
            'Send you important updates about our products and services',
            'Manage your account and preferences'
          ]
        },
        {
          subtitle: 'Improvement & Analytics',
          text: 'We analyze data to:',
          items: [
            'Improve our website functionality and user experience',
            'Understand how visitors use our website',
            'Develop new products and services',
            'Conduct market research and analysis'
          ]
        },
        {
          subtitle: 'Legal Compliance',
          text: 'We may use your information to:',
          items: [
            'Comply with legal obligations and regulations',
            'Respond to legal requests and court orders',
            'Protect our rights, property, and safety',
            'Prevent fraud and ensure security'
          ]
        }
      ]
    },
    {
      icon: Lock,
      title: 'Data Protection & Security',
      content: [
        {
          subtitle: 'Security Measures',
          text: 'We implement industry-standard security measures to protect your information:',
          items: [
            'SSL/TLS encryption for data transmission',
            'Secure servers and databases with restricted access',
            'Regular security audits and vulnerability assessments',
            'Employee training on data protection practices',
            'Firewall and intrusion detection systems'
          ]
        },
        {
          subtitle: 'Data Retention',
          text: 'We retain your personal information only for as long as necessary:',
          items: [
            'Active customer data: Retained while you have an active relationship with us',
            'Order records: Retained for legal and accounting purposes (typically 7 years)',
            'Marketing data: Retained until you opt-out or request deletion',
            'Website analytics: Aggregated and anonymized data may be retained longer'
          ]
        }
      ]
    },
    {
      icon: Cookie,
      title: 'Cookies & Tracking Technologies',
      content: [
        {
          subtitle: 'Types of Cookies We Use',
          text: 'We use cookies and similar technologies to enhance your experience:',
          items: [
            'Essential Cookies: Required for website functionality and security',
            'Analytics Cookies: Help us understand website usage and improve performance',
            'Functional Cookies: Remember your preferences and settings',
            'Marketing Cookies: Used to deliver relevant advertisements (with your consent)'
          ]
        },
        {
          subtitle: 'Managing Cookies',
          text: 'You can control cookies through:',
          items: [
            'Your browser settings (most browsers allow you to refuse or delete cookies)',
            'Our cookie consent banner (when applicable)',
            'Third-party opt-out tools for advertising cookies',
            'Note: Disabling cookies may affect website functionality'
          ]
        }
      ]
    },
    {
      icon: Globe,
      title: 'Third-Party Services & Data Sharing',
      content: [
        {
          subtitle: 'Service Providers',
          text: 'We may share your information with trusted third-party service providers:',
          items: [
            'Payment processors for secure transaction handling',
            'Shipping and logistics companies for order fulfillment',
            'Email service providers for communications',
            'Analytics providers to understand website usage',
            'Cloud storage providers for data hosting'
          ]
        },
        {
          subtitle: 'Legal Requirements',
          text: 'We may disclose your information when required by law:',
          items: [
            'To comply with legal obligations or court orders',
            'To protect our rights, property, or safety',
            'In connection with a business transfer or merger',
            'To prevent fraud or investigate security issues'
          ]
        },
        {
          subtitle: 'No Sale of Data',
          text: 'We do not sell, rent, or trade your personal information to third parties for their marketing purposes.'
        }
      ]
    },
    {
      icon: UserCheck,
      title: 'Your Privacy Rights',
      content: [
        {
          subtitle: 'Access & Control',
          text: 'You have the right to:',
          items: [
            'Access your personal information we hold about you',
            'Request correction of inaccurate or incomplete data',
            'Request deletion of your personal information (subject to legal requirements)',
            'Object to processing of your personal information',
            'Request restriction of processing in certain circumstances',
            'Data portability: Receive your data in a structured format'
          ]
        },
        {
          subtitle: 'Marketing Communications',
          text: 'You can opt-out of marketing communications:',
          items: [
            'Unsubscribe links in all marketing emails',
            'Contact us directly to update your preferences',
            'Adjust your account settings (if applicable)',
            'Note: You may still receive transactional emails related to your orders'
          ]
        },
        {
          subtitle: 'Exercising Your Rights',
          text: 'To exercise any of these rights, please contact us at baazpulley@gmail.com or +91 9315020967. We will respond to your request within 30 days.'
        }
      ]
    },
    {
      icon: AlertCircle,
      title: 'Children\'s Privacy',
      content: [
        {
          text: 'Our website is not intended for children under the age of 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us immediately and we will delete such information.'
        }
      ]
    },
    {
      icon: Clock,
      title: 'Changes to This Privacy Policy',
      content: [
        {
          text: 'We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by:',
          items: [
            'Posting the updated policy on this page with a new "Last Updated" date',
            'Sending an email notification (for significant changes)',
            'Displaying a notice on our website'
          ]
        },
        {
          text: 'We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information.'
        }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-industrial-950 pt-24">
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-transparent" />
        <div className="container mx-auto px-6 relative">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto">
            <span className="text-primary-500 font-semibold text-sm tracking-wider uppercase">Legal</span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mt-3 mb-4">
              Privacy <span className="gradient-text">Policy</span>
            </h1>
            <p className="text-industrial-300">Your privacy is important to us. Last updated: January 2026</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="bg-industrial-900/50 rounded-2xl p-8 md:p-10 border border-industrial-800 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="text-primary-400" size={24} />
              <h2 className="text-2xl font-display font-bold text-white">Introduction</h2>
            </div>
            <div className="space-y-4 text-industrial-300 leading-relaxed">
              <p>
                <strong className="text-white">BAAZ - Kalgidhar Auto Mobiles</strong> ("we," "our," or "us") is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <strong className="text-primary-400">baazpulley.com</strong> or interact with our services.
              </p>
              <p>
                As India's leading pulley manufacturer since 1967, we understand the importance of maintaining your trust. This policy applies to all information collected through our website, email communications, phone calls, and any other interactions you may have with us.
              </p>
              <p>
                Please read this Privacy Policy carefully. By accessing or using our website, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy. If you do not agree with our policies and practices, please do not use our website.
              </p>
            </div>
          </motion.div>

          <div className="space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-industrial-900/50 rounded-2xl p-6 md:p-8 border border-industrial-800"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center">
                    <section.icon className="text-primary-400" size={24} />
                  </div>
                  <h2 className="text-2xl font-display font-bold text-white">{section.title}</h2>
                </div>
                
                <div className="space-y-6">
                  {section.content.map((contentItem, contentIndex) => (
                    <div key={contentIndex} className="space-y-3">
                      {contentItem.subtitle && (
                        <h3 className="text-lg font-display font-semibold text-primary-400">
                          {contentItem.subtitle}
                        </h3>
                      )}
                      {contentItem.text && (
                        <p className="text-industrial-300 leading-relaxed">
                          {contentItem.text}
                        </p>
                      )}
                      {contentItem.items && (
                        <ul className="space-y-2 ml-4">
                          {contentItem.items.map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-industrial-300 text-sm leading-relaxed">
                              <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="bg-primary-500/10 rounded-2xl p-6 md:p-8 border border-primary-500/30 mt-8">
            <div className="flex items-center gap-3 mb-4">
              <Mail className="text-primary-400" size={24} />
              <h2 className="text-xl font-display font-bold text-white">Contact Us</h2>
            </div>
            <p className="text-industrial-300 mb-4 leading-relaxed">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="space-y-2 text-industrial-300">
              <p>
                <strong className="text-white">BAAZ - Kalgidhar Auto Mobiles</strong>
              </p>
              <p>
                <strong className="text-primary-400">Address:</strong> C-130, Sector-5, Bawana Industrial Area, Delhi-110039, India
              </p>
              <p>
                <strong className="text-primary-400">Email:</strong> <a href="mailto:baazpulley@gmail.com" className="text-primary-400 hover:underline">baazpulley@gmail.com</a>
              </p>
              <p>
                <strong className="text-primary-400">Phone:</strong> <a href="tel:+919315020967" className="text-primary-400 hover:underline">+91 9315020967</a>
              </p>
              <p>
                <strong className="text-primary-400">Website:</strong> <a href="https://baazpulley.com" className="text-primary-400 hover:underline">baazpulley.com</a>
              </p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="bg-industrial-900/30 rounded-2xl p-6 border border-industrial-800 mt-6">
            <div className="flex items-start gap-3">
              <FileText className="text-primary-400 mt-1" size={20} />
              <div>
                <h3 className="text-lg font-display font-semibold text-white mb-2">Effective Date & Updates</h3>
                <p className="text-industrial-300 text-sm leading-relaxed mb-2">
                  This Privacy Policy is effective as of <strong className="text-white">January 2026</strong> and was last updated on <strong className="text-white">January 2026</strong>.
                </p>
                <p className="text-industrial-400 text-xs">
                  By using our website, you acknowledge that you have read and understood this Privacy Policy and agree to the collection and use of your information as described herein.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default PrivacyPolicyPage
