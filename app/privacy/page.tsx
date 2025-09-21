'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Shield, Eye, Lock, User, Database, Mail, Phone } from 'lucide-react'

const PrivacyPolicyPage = () => {
  const lastUpdated = "January 2025"

  const sections = [
    {
      icon: Shield,
      title: "Information We Collect",
      content: [
        "Personal information you provide when contacting us (name, email, phone number)",
        "Information you provide when subscribing to our newsletter",
        "Usage data and analytics when you visit our website",
        "Information you provide when participating in our community programs"
      ]
    },
    {
      icon: Eye,
      title: "How We Use Your Information",
      content: [
        "To respond to your inquiries and provide customer support",
        "To send you newsletters and updates about our initiatives",
        "To improve our website and services",
        "To organize community events and programs",
        "To comply with legal obligations"
      ]
    },
    {
      icon: Lock,
      title: "Information Protection",
      content: [
        "We implement appropriate security measures to protect your personal information",
        "We use secure servers and encryption technologies",
        "We regularly review and update our security practices",
        "We limit access to personal information to authorized personnel only"
      ]
    },
    {
      icon: Database,
      title: "Information Sharing",
      content: [
        "We do not sell, trade, or rent your personal information to third parties",
        "We may share information with trusted service providers who assist us in operating our website",
        "We may disclose information when required by law or to protect our rights",
        "We may share aggregated, non-personal information for research purposes"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-primary-500 text-white py-16 sm:py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Link 
              href="/"
              className="inline-flex items-center text-white/80 hover:text-white transition-colors mb-6"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Home
            </Link>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Your privacy is important to us. This policy explains how we collect, 
              use, and protect your personal information.
            </p>
            <p className="text-sm text-white/70 mt-4">
              Last updated: {lastUpdated}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 mb-8"
            >
              <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-6 text-gray-900">
                Introduction
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
                <p className="mb-4">
                  Major Idris ("we," "our," or "us") is committed to protecting your privacy and 
                  personal information. This Privacy Policy explains how we collect, use, disclose, 
                  and safeguard your information when you visit our website or interact with our 
                  community programs.
                </p>
                <p className="mb-4">
                  By using our website or providing us with your personal information, you consent 
                  to the collection and use of information in accordance with this policy.
                </p>
                <p>
                  If you do not agree with the terms of this Privacy Policy, please do not access 
                  our website or provide us with your personal information.
                </p>
              </div>
            </motion.div>

            {/* Privacy Sections */}
            <div className="space-y-8">
              {sections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg p-6 sm:p-8"
                >
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <section.icon className="text-orange-500" size={24} />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-heading font-bold text-gray-900">
                      {section.title}
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Additional Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 mt-8"
            >
              <h3 className="text-xl sm:text-2xl font-heading font-bold mb-6 text-gray-900">
                Your Rights
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">You have the right to:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Access your personal information</li>
                    <li>• Correct inaccurate information</li>
                    <li>• Request deletion of your information</li>
                    <li>• Object to processing of your information</li>
                    <li>• Withdraw consent at any time</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Contact us to:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Update your information</li>
                    <li>• Unsubscribe from communications</li>
                    <li>• Request data portability</li>
                    <li>• File a complaint</li>
                    <li>• Ask questions about this policy</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gradient-to-r from-orange-50 to-primary-50 rounded-2xl p-6 sm:p-8 mt-8"
            >
              <h3 className="text-xl sm:text-2xl font-heading font-bold mb-6 text-gray-900">
                Contact Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="text-orange-500" size={20} />
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <a 
                        href="mailto:privacy@majoridris.com" 
                        className="text-gray-600 hover:text-orange-500 transition-colors"
                      >
                        privacy@majoridris.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="text-orange-500" size={20} />
                    <div>
                      <p className="font-semibold text-gray-900">Phone</p>
                      <a 
                        href="tel:+254729880056" 
                        className="text-gray-600 hover:text-orange-500 transition-colors"
                      >
                        +254 729 880 056
                      </a>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-start space-x-3">
                    <User className="text-orange-500 mt-1" size={20} />
                    <div>
                      <p className="font-semibold text-gray-900">Address</p>
                      <p className="text-gray-600">
                        Nyali Constituency<br />
                        Mombasa County, Kenya
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Policy Updates */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 mt-8"
            >
              <h3 className="text-xl sm:text-2xl font-heading font-bold mb-6 text-gray-900">
                Policy Updates
              </h3>
              <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
                <p className="mb-4">
                  We may update this Privacy Policy from time to time to reflect changes in our 
                  practices or for other operational, legal, or regulatory reasons. We will notify 
                  you of any material changes by posting the new Privacy Policy on this page and 
                  updating the "Last updated" date.
                </p>
                <p>
                  We encourage you to review this Privacy Policy periodically for any changes. 
                  Your continued use of our website after any modifications to this Privacy Policy 
                  will constitute your acknowledgment of the modifications and your consent to abide 
                  and be bound by the updated Privacy Policy.
                </p>
              </div>
            </motion.div>

            {/* Back to Home */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-center mt-12"
            >
              <Link 
                href="/"
                className="inline-flex items-center bg-gradient-to-r from-orange-500 to-primary-500 text-white font-semibold py-3 px-8 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <ArrowLeft className="mr-2" size={20} />
                Back to Home
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PrivacyPolicyPage
