'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, User, ArrowRight, Clock } from 'lucide-react'

const NewsPage = () => {
  const newsPosts = [
    {
      id: 1,
      title: 'Major Idris Meets with Right Honorable Raila Odinga',
      excerpt: 'Strategic meeting with ODM Party Leader and former Prime Minister of Kenya to discuss Nyali constituency development priorities.',
      image: 'https://res.cloudinary.com/dyfnobo9r/image/upload/v1758276117/Majro_Idris_with_Raila_Odinga_ewljai.jpg',
      category: 'Political Meetings',
      date: '2024-01-20',
      readTime: '4 min read',
      featured: true
    },
    {
      id: 2,
      title: 'Major Idris Holds Strategic Meeting with ODM Party Secretary Edwin Sifuna',
      excerpt: 'High-level discussions on party strategy and constituency development initiatives with ODM Party Secretary General.',
      image: 'https://res.cloudinary.com/dyfnobo9r/image/upload/v1758220086/WhatsApp_Image_2025-09-18_at_9.26.19_PM_2_ttriec.jpg',
      category: 'Political Meetings',
      date: '2024-01-18',
      readTime: '3 min read',
      featured: false
    },
    {
      id: 3,
      title: 'Major Idris Launches New Healthcare Initiative for Nyali',
      excerpt: 'A comprehensive healthcare program that will provide free medical services to over 10,000 residents in underserved areas.',
      image: 'https://res.cloudinary.com/dyfnobo9r/image/upload/v1758220139/Major_idris_3_18_ea4mss.jpg',
      category: 'Healthcare',
      date: '2024-01-15',
      readTime: '5 min read',
      featured: false
    },
    {
      id: 4,
      title: 'Youth Skills Development Program Reaches 500 Participants',
      excerpt: 'The Walk Movement\'s flagship youth program has successfully trained 500 young people in various technical skills.',
      image: 'https://res.cloudinary.com/dyfnobo9r/image/upload/v1758220139/Major_idris_3_16_bivkhm.jpg',
      category: 'Youth Development',
      date: '2024-01-10',
      readTime: '3 min read',
      featured: false
    },
    {
      id: 5,
      title: 'Infrastructure Project: New Community Center Opens',
      excerpt: 'A state-of-the-art community center has been inaugurated, providing space for various community activities and programs.',
      image: 'https://res.cloudinary.com/dyfnobo9r/image/upload/v1758220138/Major_idris_3_14_c1h9mb.jpg',
      category: 'Infrastructure',
      date: '2024-01-05',
      readTime: '4 min read',
      featured: false
    },
    {
      id: 6,
      title: 'Environmental Conservation Campaign Launched',
      excerpt: 'New initiative focuses on coastal protection and waste management to preserve Nyali\'s natural beauty.',
      image: 'https://res.cloudinary.com/dyfnobo9r/image/upload/v1758220139/Major_idris_3_17_z2dev2.jpg',
      category: 'Environment',
      date: '2024-01-01',
      readTime: '6 min read',
      featured: false
    },
    {
      id: 7,
      title: 'Community Town Hall: Residents Voice Their Priorities',
      excerpt: 'Over 1,000 residents participated in the quarterly town hall meeting to discuss community development priorities.',
      image: 'https://res.cloudinary.com/dyfnobo9r/image/upload/v1758220139/Major_idris_3_18_ea4mss.jpg',
      category: 'Governance',
      date: '2023-12-28',
      readTime: '4 min read',
      featured: false
    },
    {
      id: 8,
      title: 'Partnership with Local University Strengthens Education Programs',
      excerpt: 'New collaboration will provide scholarships and research opportunities for Nyali students.',
      image: 'https://res.cloudinary.com/dyfnobo9r/image/upload/v1758220139/Major_idris_3_16_bivkhm.jpg',
      category: 'Education',
      date: '2023-12-20',
      readTime: '5 min read',
      featured: false
    }
  ]

  const categories = ['All', 'Political Meetings', 'Healthcare', 'Youth Development', 'Infrastructure', 'Environment', 'Governance', 'Education']
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredPosts = activeCategory === 'All' 
    ? newsPosts 
    : newsPosts.filter(post => post.category === activeCategory)

  const featuredPost = newsPosts.find(post => post.featured)
  const regularPosts = filteredPosts.filter(post => !post.featured)

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
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
              News & Updates
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Stay informed about our latest initiatives, community developments, and progress updates
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

      {/* Featured Post */}
      {featuredPost && activeCategory === 'All' && (
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <h2 className="text-2xl font-heading font-bold mb-6 text-gray-900">
                Featured Story
              </h2>
            </motion.div>
            
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="card overflow-hidden group hover:shadow-xl transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative h-80 lg:h-auto">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500">
                    <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded text-xs font-semibold">
                      {featuredPost.category}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Calendar size={16} />
                      <span>{formatDate(featuredPost.date)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock size={16} />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-heading font-bold mb-4 text-gray-900 group-hover:text-primary-500 transition-colors">
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <Link
                    href={`/news/${featuredPost.id}`}
                    className="inline-flex items-center text-orange-500 hover:text-orange-600 font-semibold group-hover:translate-x-1 transition-all duration-300"
                  >
                    Read More
                    <ArrowRight className="ml-2" size={16} />
                  </Link>
                </div>
              </div>
            </motion.article>
          </div>
        </section>
      )}

      {/* News Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h2 className="text-2xl font-heading font-bold mb-6 text-gray-900">
              {activeCategory === 'All' ? 'Latest News' : `${activeCategory} News`}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card overflow-hidden group hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-64">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-3 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Calendar size={16} />
                      <span>{formatDate(post.date)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock size={16} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-3 text-gray-900 group-hover:text-orange-500 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/news/${post.id}`}
                    className="inline-flex items-center text-orange-500 hover:text-orange-600 font-semibold group-hover:translate-x-1 transition-all duration-300"
                  >
                    Read More
                    <ArrowRight className="ml-2" size={16} />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          {regularPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center py-16"
            >
              <div className="text-gray-400 text-lg">No news articles found in this category</div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl font-heading font-bold mb-6 text-gray-900">
              Stay Updated
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Subscribe to our newsletter to receive the latest news and updates directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 px-8 py-3">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default NewsPage
