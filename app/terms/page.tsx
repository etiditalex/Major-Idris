'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, FileText, Scale, AlertTriangle, Shield, Users, Globe, Mail, Phone } from 'lucide-react'

const TermsOfServicePage = () => {
  const lastUpdated = "January 2025"

  const sections = [
    {
      icon: FileText,
      title: "Acceptance of Terms",
      content: [
        "By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement",
        "If you do not agree to abide by the above, please do not use this service",
        "These terms apply to all visitors, users, and others who access or use the service",
        "We reserve the right to update, change or replace any part of these Terms of Service"
      ]
    },
    {
      icon: Users,
      title: "Use License",
      content: [
        "Permission is granted to temporarily download one copy of the materials on Major Idris's website for personal, non-commercial transitory viewing only",
        "This is the grant of a license, not a transfer of title, and under this license you may not modify or copy the materials",
        "Use the materials for any commercial purpose or for any public display (commercial or non-commercial)",
        "Attempt to decompile or reverse engineer any software contained on the website"
      ]
    },
    {
      icon: AlertTriangle,
      title: "Disclaimer",
      content: [
        "The materials on Major Idris's website are provided on an 'as is' basis",
        "Major Idris makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights",
        "Further, Major Idris does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site"
      ]
    },
    {
      icon: Scale,
      title: "Limitations",
      content: [
        "In no event shall Major Idris or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Major Idris's website",
        "Even if Major Idris or a Major Idris authorized representative has been notified orally or in writing of the possibility of such damage",
        "Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you"
      ]
    },
    {
      icon: Shield,
      title: "Accuracy of Materials",
      content: [
        "The materials appearing on Major Idris's website could include technical, typographical, or photographic errors",
        "Major Idris does not warrant that any of the materials on its website are accurate, complete, or current",
        "Major Idris may make changes to the materials contained on its website at any time without notice",
        "However, Major Idris does not make any commitment to update the materials"
      ]
    },
    {
      icon: Globe,
      title: "Links",
      content: [
        "Major Idris has not reviewed all of the sites linked to our website and is not responsible for the contents of any such linked site",
        "The inclusion of any link does not imply endorsement by Major Idris of the site",
        "Use of any such linked website is at the user's own risk",
        "We reserve the right to remove any links at any time without notice"
      ]
    }
  ]

  const prohibitedUses = [
    "Use our service for any unlawful purpose or to solicit others to perform unlawful acts",
    "Violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances",
    "Transmit, or procure the sending of, any advertising or promotional material without our prior written consent",
    "Impersonate or attempt to impersonate another person or entity",
    "Interfere with or circumvent the security features of the service or any related website",
    "Use any manual or automated system to access the service for any purpose without our express written permission"
  ]

  const userResponsibilities = [
    "Provide accurate and complete information when using our services",
    "Maintain the confidentiality of any account credentials",
    "Notify us immediately of any unauthorized use of your account",
    "Comply with all applicable laws and regulations",
    "Respect the rights and privacy of other users",
    "Use the service in a manner consistent with its intended purpose"
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
              Terms of Service
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Please read these terms and conditions carefully before using our website 
              and services.
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
                  These Terms of Service ("Terms") govern your use of the Major Idris website 
                  and services. By accessing or using our website, you agree to be bound by 
                  these Terms and all applicable laws and regulations.
                </p>
                <p className="mb-4">
                  If you do not agree with any of these terms, you are prohibited from using 
                  or accessing this site. The materials contained in this website are protected 
                  by applicable copyright and trademark law.
                </p>
                <p>
                  We reserve the right to change these terms at any time without notice. 
                  Your continued use of the website after any such changes constitutes your 
                  acceptance of the new Terms.
                </p>
              </div>
            </motion.div>

            {/* Terms Sections */}
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

            {/* Prohibited Uses */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-red-50 border border-red-200 rounded-2xl p-6 sm:p-8 mt-8"
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="text-red-500" size={24} />
                </div>
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-gray-900">
                  Prohibited Uses
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                You may not use our service:
              </p>
              <ul className="space-y-2">
                {prohibitedUses.map((use, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600 leading-relaxed">{use}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* User Responsibilities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="bg-blue-50 border border-blue-200 rounded-2xl p-6 sm:p-8 mt-8"
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="text-blue-500" size={24} />
                </div>
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-gray-900">
                  User Responsibilities
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                As a user of our service, you agree to:
              </p>
              <ul className="space-y-2">
                {userResponsibilities.map((responsibility, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600 leading-relaxed">{responsibility}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Termination */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 mt-8"
            >
              <h3 className="text-xl sm:text-2xl font-heading font-bold mb-6 text-gray-900">
                Termination
              </h3>
              <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
                <p className="mb-4">
                  We may terminate or suspend your access immediately, without prior notice or 
                  liability, for any reason whatsoever, including without limitation if you 
                  breach the Terms.
                </p>
                <p className="mb-4">
                  Upon termination, your right to use the service will cease immediately. 
                  If you wish to terminate your account, you may simply discontinue using 
                  the service.
                </p>
                <p>
                  All provisions of the Terms which by their nature should survive termination 
                  shall survive termination, including, without limitation, ownership provisions, 
                  warranty disclaimers, indemnity, and limitations of liability.
                </p>
              </div>
            </motion.div>

            {/* Governing Law */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 mt-8"
            >
              <h3 className="text-xl sm:text-2xl font-heading font-bold mb-6 text-gray-900">
                Governing Law
              </h3>
              <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
                <p className="mb-4">
                  These Terms shall be interpreted and governed by the laws of Kenya, without 
                  regard to its conflict of law provisions. Our failure to enforce any right 
                  or provision of these Terms will not be considered a waiver of those rights.
                </p>
                <p>
                  If any provision of these Terms is held to be invalid or unenforceable by a 
                  court, the remaining provisions of these Terms will remain in effect. These 
                  Terms constitute the entire agreement between us regarding our service, and 
                  supersede and replace any prior agreements we might have between us regarding 
                  the service.
                </p>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
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
                        href="mailto:legal@majoridris.com" 
                        className="text-gray-600 hover:text-orange-500 transition-colors"
                      >
                        legal@majoridris.com
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
                    <Globe className="text-orange-500 mt-1" size={20} />
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

            {/* Back to Home */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
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

export default TermsOfServicePage
