'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, Mail } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Vision', href: '/vision' },
    { name: 'The Walk Movement', href: '/walk-movement' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'News', href: '/news' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-primary-500/95 backdrop-blur-md shadow-lg'
          : 'bg-orange-500'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between py-3 sm:py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="https://res.cloudinary.com/dyfnobo9r/image/upload/v1757747145/Major_Idris_umab7k.png"
              alt="Major Idris Logo"
              width={50}
              height={50}
              className="rounded-full sm:w-[60px] sm:h-[60px]"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white hover:text-orange-200 font-medium transition-colors duration-300 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Contact Info - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+254729880056"
              className="flex items-center space-x-2 text-white hover:text-orange-200 transition-colors"
            >
              <Phone size={16} />
              <span className="text-sm">+254 729 880 056</span>
            </a>
            <a
              href="mailto:info@majoridris.com"
              className="flex items-center space-x-2 text-white hover:text-orange-200 transition-colors"
            >
              <Mail size={16} />
              <span className="text-sm">info@majoridris.com</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-white/20 transition-colors text-white touch-manipulation"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-primary-500 border-t border-primary-400"
            >
              <nav className="py-4 space-y-1">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="block px-4 py-3 text-white hover:text-orange-200 hover:bg-white/10 transition-colors text-base font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                
                {/* Mobile Contact Info */}
                <div className="px-4 py-4 border-t border-primary-400 space-y-3">
                  <a
                    href="tel:+254729880056"
                    className="flex items-center space-x-3 text-white hover:text-orange-200 transition-colors py-2"
                  >
                    <Phone size={18} />
                    <span className="text-base">+254 729 880 056</span>
                  </a>
                  <a
                    href="mailto:info@majoridris.com"
                    className="flex items-center space-x-3 text-white hover:text-orange-200 transition-colors py-2"
                  >
                    <Mail size={18} />
                    <span className="text-base">info@majoridris.com</span>
                  </a>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}

export default Header
