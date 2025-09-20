'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const galleryImages = [
    {
      src: 'https://res.cloudinary.com/dyfnobo9r/image/upload/v1758276117/Majro_Idris_with_Raila_Odinga_ewljai.jpg',
      alt: 'Major Idris with Right Honorable Raila Odinga',
      category: 'Political Meetings',
      description: 'Major Idris meeting with Right Honorable Raila Odinga, ODM Party Leader and former Prime Minister of Kenya'
    },
    {
      src: 'https://res.cloudinary.com/dyfnobo9r/image/upload/v1758220086/WhatsApp_Image_2025-09-18_at_9.26.19_PM_2_ttriec.jpg',
      alt: 'Major Idris with ODM Party Secretary Edwin Sifuna',
      category: 'Political Meetings',
      description: 'Major Idris in a strategic meeting with ODM Party Secretary Edwin Sifuna'
    },
    {
      src: 'https://res.cloudinary.com/dyfnobo9r/image/upload/v1758220139/Major_idris_3_18_ea4mss.jpg',
      alt: 'Major Idris at community event',
      category: 'Community Events',
      description: 'Major Idris engaging with community members during a health camp'
    },
    {
      src: 'https://res.cloudinary.com/dyfnobo9r/image/upload/v1758220139/Major_idris_3_17_z2dev2.jpg',
      alt: 'Major Idris portrait',
      category: 'Portraits',
      description: 'Official portrait of Major Idris'
    },
    {
      src: 'https://res.cloudinary.com/dyfnobo9r/image/upload/v1758220139/Major_idris_3_16_bivkhm.jpg',
      alt: 'Major Idris with youth group',
      category: 'Youth Programs',
      description: 'Major Idris mentoring young people in skills development'
    },
    {
      src: 'https://res.cloudinary.com/dyfnobo9r/image/upload/v1758220138/Major_idris_3_14_c1h9mb.jpg',
      alt: 'Major Idris at infrastructure project',
      category: 'Infrastructure',
      description: 'Major Idris inspecting a community infrastructure project'
    }
  ]

  const categories = ['All', 'Political Meetings', 'Community Events', 'Portraits', 'Youth Programs', 'Infrastructure']
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredImages = activeCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory)

  const openLightbox = (index: number) => {
    setSelectedImage(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1)
    }
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-orange-500 to-primary-500 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Gallery
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Capturing moments of community engagement, development, and progress
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-orange-500 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <div className="relative overflow-hidden rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={400}
                    height={300}
                    className="w-full h-80 object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/90 rounded-full p-3">
                        <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <div className="text-white">
                      <div className="text-sm font-semibold mb-1">{image.category}</div>
                      <div className="text-xs opacity-90">{image.description}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredImages.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center py-16"
            >
              <div className="text-gray-400 text-lg">No images found in this category</div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative max-w-4xl max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X size={32} />
            </button>
            
            <div className="relative">
              <Image
                src={filteredImages[selectedImage].src}
                alt={filteredImages[selectedImage].alt}
                width={800}
                height={600}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              
              {/* Navigation arrows */}
              {filteredImages.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}
            </div>
            
            <div className="mt-4 text-center text-white">
              <h3 className="text-lg font-semibold mb-2">
                {filteredImages[selectedImage].category}
              </h3>
              <p className="text-sm opacity-90">
                {filteredImages[selectedImage].description}
              </p>
              <div className="text-xs opacity-75 mt-2">
                {selectedImage + 1} of {filteredImages.length}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Call to Action */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-gray-900">
              Be Part of Our Story
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Join us in creating more moments of positive change and community development. 
              Your participation helps us build a better future for Nyali.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/contact"
                className="btn-primary text-lg px-8 py-4"
              >
                Get Involved
              </a>
              <a
                href="/walk-movement"
                className="btn-outline text-lg px-8 py-4"
              >
                Learn About The Walk Movement
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default GalleryPage
