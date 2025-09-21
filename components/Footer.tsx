'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, Send } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/majoridris' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/majoridris' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/majoridris' },
    { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/majoridris' },
  ]

  const quickLinks = [
    { name: 'About', href: '/about' },
    { name: 'Vision', href: '/vision' },
    { name: 'The Walk Movement', href: '/walk-movement' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'News', href: '/news' },
    { name: 'Contact', href: '/contact' },
  ]

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    alert('Thank you for subscribing to our newsletter!')
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom">
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-1"
            >
              <Link href="/" className="flex items-center space-x-3 mb-6">
                <Image
                  src="https://res.cloudinary.com/dyfnobo9r/image/upload/v1757747145/Major_Idris_umab7k.png"
                  alt="Major Idris Logo"
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div>
                  <h3 className="text-xl font-heading font-bold">Major Idris</h3>
                  <p className="text-sm text-gray-400">Championing Progress for Nyali</p>
                </div>
              </Link>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Dedicated to healthcare, youth empowerment, infrastructure development, 
                and community progress in Nyali. Join us in building a better future.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-800 rounded-lg hover:bg-primary-500 transition-colors duration-300"
                      aria-label={social.name}
                    >
                      <Icon size={20} />
                    </a>
                  )
                })}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4 className="text-lg font-heading font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-primary-400 transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="text-lg font-heading font-semibold mb-6">Contact Info</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin size={20} className="text-primary-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300">Nyali Constituency</p>
                    <p className="text-gray-300">Mombasa County, Kenya</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone size={20} className="text-primary-400 flex-shrink-0" />
                  <a
                    href="tel:+254729880056"
                    className="text-gray-300 hover:text-primary-400 transition-colors"
                  >
                    +254 729 880 056
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail size={20} className="text-primary-400 flex-shrink-0" />
                  <a
                    href="mailto:info@majoridris.com"
                    className="text-gray-300 hover:text-primary-400 transition-colors"
                  >
                    info@majoridris.com
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Newsletter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h4 className="text-lg font-heading font-semibold mb-6">Newsletter</h4>
              <p className="text-gray-300 mb-4">
                Stay updated with our latest news and initiatives.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-gray-400"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Subscribe</span>
                  <Send size={16} />
                </button>
              </form>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-gray-800 py-6"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Major Idris. All rights reserved.
            </p>
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-gray-400 text-sm">
                Built by Alex Etidit for the Love of Nyali ❤️
              </p>
              <div className="flex space-x-6 text-sm">
                <Link href="/privacy" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
