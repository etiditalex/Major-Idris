'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Clock, Eye, MessageCircle } from 'lucide-react'

interface NewsItem {
  id: number
  title: string
  description: string
  image: string
  author: string
  date: string
  views: number
  comments: number
  category: string
}

const NewsUpdates = () => {
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  const newsItems: NewsItem[] = [
    {
      id: 1,
      title: "Major Idris Launches New Healthcare Initiative in Nyali",
      description: "A comprehensive healthcare program targeting underserved communities with mobile clinics and free medical services.",
      image: "https://res.cloudinary.com/dyfnobo9r/image/upload/v1758220139/Major_idris_3_18_ea4mss.jpg",
      author: "Major Idris Team",
      date: "Dec 15, 2024",
      views: 1247,
      comments: 23,
      category: "Healthcare"
    },
    {
      id: 2,
      title: "Youth Empowerment Program Reaches 500+ Participants",
      description: "Skills training and entrepreneurship development program shows remarkable success in Nyali constituency.",
      image: "https://res.cloudinary.com/dyfnobo9r/image/upload/v1758031167/Major_idris_e1cqdn.jpg",
      author: "Community Development",
      date: "Dec 12, 2024",
      views: 892,
      comments: 15,
      category: "Youth"
    },
    {
      id: 3,
      title: "Infrastructure Development Project Breaks Ground",
      description: "New road construction and water supply systems begin implementation across Nyali constituency.",
      image: "https://res.cloudinary.com/dyfnobo9r/image/upload/v1758220139/Major_idris_3_17_z2dev2.jpg",
      author: "Infrastructure Team",
      date: "Dec 10, 2024",
      views: 1563,
      comments: 31,
      category: "Infrastructure"
    },
    {
      id: 4,
      title: "Community Town Hall Addresses Key Issues",
      description: "Transparent governance initiative brings together residents for open dialogue and policy discussions.",
      image: "https://res.cloudinary.com/dyfnobo9r/image/upload/v1758220139/Major_idris_3_16_bivkhm.jpg",
      author: "Governance Office",
      date: "Dec 8, 2024",
      views: 743,
      comments: 18,
      category: "Governance"
    },
    {
      id: 5,
      title: "Environmental Conservation Program Launched",
      description: "Coastal protection and waste management initiatives begin to preserve Nyali's natural beauty.",
      image: "https://res.cloudinary.com/dyfnobo9r/image/upload/v1758220138/Major_idris_3_14_c1h9mb.jpg",
      author: "Environment Team",
      date: "Dec 5, 2024",
      views: 634,
      comments: 12,
      category: "Environment"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)
      
      setTimeout(() => {
        setCurrentNewsIndex((prev) => (prev + 1) % newsItems.length)
        setIsVisible(true)
      }, 300)
    }, 5000) // Change news every 5 seconds

    return () => clearInterval(interval)
  }, [newsItems.length])

  const currentNews = newsItems[currentNewsIndex]

  return (
    <section className="section-padding bg-gray-900 text-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Latest News Updates
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Stay informed with real-time updates on Major Idris's initiatives and community progress
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            {isVisible && (
              <motion.div
                key={currentNews.id}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl shadow-2xl overflow-hidden"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                  {/* Image Section */}
                  <div className="relative h-64 md:h-auto">
                    <Image
                      src={currentNews.image}
                      alt={currentNews.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {currentNews.category}
                      </span>
                    </div>
                    <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg px-3 py-2">
                      <div className="flex items-center space-x-4 text-white text-sm">
                        <div className="flex items-center space-x-1">
                          <Eye size={16} />
                          <span>{currentNews.views}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MessageCircle size={16} />
                          <span>{currentNews.comments}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="md:col-span-2 p-6 md:p-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="flex items-center space-x-2 text-gray-500">
                        <Clock size={16} />
                        <span className="text-sm">{currentNews.date}</span>
                      </div>
                      <div className="text-sm text-gray-500">
                        by {currentNews.author}
                      </div>
                    </div>

                    <h3 className="text-xl md:text-2xl font-heading font-bold mb-4 text-gray-900 leading-tight">
                      {currentNews.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed mb-6">
                      {currentNews.description}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
                        Read More
                      </button>
                      <button className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
                        Share
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* News Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {newsItems.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsVisible(false)
                  setTimeout(() => {
                    setCurrentNewsIndex(index)
                    setIsVisible(true)
                  }, 300)
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentNewsIndex
                    ? 'bg-orange-500 scale-125'
                    : 'bg-gray-400 hover:bg-gray-300'
                }`}
              />
            ))}
          </div>

          {/* View All News Button */}
          <div className="text-center mt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-orange-500 to-primary-500 text-white font-semibold py-3 px-8 rounded-lg hover:shadow-lg transition-all duration-300"
            >
              View All News Updates
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewsUpdates
