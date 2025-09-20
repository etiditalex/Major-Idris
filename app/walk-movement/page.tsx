'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Users, Heart, Target, Globe, Award, TrendingUp, ArrowRight, CheckCircle } from 'lucide-react'

const WalkMovementPage = () => {
  const movementStats = [
    { number: '10,000+', label: 'Active Members', icon: Users },
    { number: '50+', label: 'Health Camps', icon: Heart },
    { number: '200+', label: 'Youth Programs', icon: Target },
    { number: '15+', label: 'Infrastructure Projects', icon: TrendingUp },
  ]

  const sdgAlignment = [
    {
      number: '3',
      title: 'Good Health and Well-being',
      description: 'Ensuring healthy lives and promoting well-being for all at all ages through our healthcare initiatives.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      number: '4',
      title: 'Quality Education',
      description: 'Ensuring inclusive and equitable quality education through our youth empowerment programs.',
      color: 'from-red-500 to-pink-500'
    },
    {
      number: '8',
      title: 'Decent Work and Economic Growth',
      description: 'Promoting sustained, inclusive economic growth and employment opportunities.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      number: '11',
      title: 'Sustainable Cities and Communities',
      description: 'Making cities and human settlements inclusive, safe, resilient and sustainable.',
      color: 'from-orange-500 to-red-500'
    },
    {
      number: '13',
      title: 'Climate Action',
      description: 'Taking urgent action to combat climate change and its impacts through environmental initiatives.',
      color: 'from-green-600 to-green-800'
    },
    {
      number: '16',
      title: 'Peace, Justice and Strong Institutions',
      description: 'Promoting peaceful and inclusive societies through transparent governance.',
      color: 'from-blue-500 to-indigo-500'
    }
  ]

  const partnerships = [
    {
      name: 'Ministry of Health',
      description: 'Collaborating on healthcare infrastructure and service delivery',
      logo: '🏥'
    },
    {
      name: 'Youth Development Fund',
      description: 'Supporting youth entrepreneurship and skills development',
      logo: '👥'
    },
    {
      name: 'Environmental NGOs',
      description: 'Implementing sustainable development and conservation projects',
      logo: '🌱'
    },
    {
      name: 'Local Universities',
      description: 'Research partnerships and educational programs',
      logo: '🎓'
    },
    {
      name: 'Community Organizations',
      description: 'Grassroots mobilization and community engagement',
      logo: '🤝'
    },
    {
      name: 'International Development Partners',
      description: 'Funding and technical support for major projects',
      logo: '🌍'
    }
  ]

  const impactAreas = [
    {
      title: 'Healthcare Access',
      description: 'Transformed healthcare delivery in underserved communities',
      achievements: [
        '50+ free health camps conducted',
        '25,000+ residents served',
        'Mobile clinic services established',
        'Maternal health programs launched'
      ]
    },
    {
      title: 'Youth Development',
      description: 'Empowered young people with skills and opportunities',
      achievements: [
        '200+ skills training programs',
        '5,000+ youth mentored',
        '100+ scholarships awarded',
        '50+ youth businesses supported'
      ]
    },
    {
      title: 'Community Infrastructure',
      description: 'Improved living conditions through infrastructure development',
      achievements: [
        '15+ road projects completed',
        '10+ schools renovated',
        '5+ water projects implemented',
        'Community centers established'
      ]
    },
    {
      title: 'Environmental Conservation',
      description: 'Protected and preserved natural resources',
      achievements: [
        '5+ tree planting campaigns',
        'Waste management programs',
        'Coastal protection initiatives',
        'Renewable energy projects'
      ]
    }
  ]

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
              The Walk Movement
            </h1>
            <p className="text-xl text-white/90 leading-relaxed mb-8">
              A grassroots movement dedicated to transforming Nyali through community engagement, 
              sustainable development, and people-centered governance.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-semibold">
                Community-Driven
              </span>
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-semibold">
                Sustainable Development
              </span>
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-semibold">
                Transparent Governance
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Movement Stats */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {movementStats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-orange-500" size={32} />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-sm md:text-base text-gray-600">{stat.label}</div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Movement History */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-gray-900">
              Our Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From grassroots community organizing to a comprehensive movement for positive change
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="card p-8 mb-8"
            >
              <h3 className="text-2xl font-heading font-bold mb-6 text-gray-900">
                The Beginning
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                The Walk Movement was founded in 2012 by Major Idris as a response to the growing 
                needs of the Nyali community. What started as small community meetings and informal 
                gatherings has evolved into a comprehensive movement that addresses healthcare, 
                education, infrastructure, and governance challenges.
              </p>
              <p className="text-gray-600 leading-relaxed">
                The name "The Walk Movement" reflects our belief that real change happens through 
                walking alongside the community, listening to their needs, and working together 
                to find sustainable solutions. We don't just talk about problems – we walk the 
                talk by taking concrete action.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="card p-6"
              >
                <h4 className="text-xl font-heading font-semibold mb-4 text-gray-900">
                  Our Mission
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  To empower communities through participatory development, ensuring that every 
                  resident has access to quality healthcare, education, and opportunities for 
                  economic growth while preserving our environment for future generations.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="card p-6"
              >
                <h4 className="text-xl font-heading font-semibold mb-4 text-gray-900">
                  Our Approach
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  We believe in bottom-up development that starts with community needs and 
                  aspirations. Our approach combines grassroots mobilization with strategic 
                  partnerships to create lasting impact and sustainable change.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* SDG Alignment */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-gray-900">
              Aligned with Global Goals
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The Walk Movement contributes to the United Nations Sustainable Development Goals
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sdgAlignment.map((sdg, index) => (
              <motion.div
                key={sdg.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-6 group hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${sdg.color} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-white font-bold text-xl">{sdg.number}</span>
                </div>
                <h3 className="text-lg font-heading font-semibold mb-3 text-gray-900">
                  {sdg.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {sdg.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-gray-900">
              Strategic Partnerships
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Working with diverse partners to maximize our impact and reach
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partnerships.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-6 text-center group hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl mb-4">{partner.logo}</div>
                <h3 className="text-lg font-heading font-semibold mb-3 text-gray-900">
                  {partner.name}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {partner.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-gray-900">
              Our Impact
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Measurable results across key development areas
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {impactAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-8"
              >
                <h3 className="text-xl font-heading font-semibold mb-4 text-gray-900">
                  {area.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {area.description}
                </p>
                <ul className="space-y-2">
                  {area.achievements.map((achievement, achievementIndex) => (
                    <motion.li
                      key={achievementIndex}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: achievementIndex * 0.1 }}
                      className="flex items-start space-x-3"
                    >
                      <CheckCircle className="text-primary-500 mt-1 flex-shrink-0" size={16} />
                      <span className="text-gray-600 text-sm">{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Movement CTA */}
      <section className="section-padding bg-gradient-to-r from-orange-500 to-primary-500 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Join The Walk Movement
            </h2>
            <p className="text-lg mb-8 text-white/90 leading-relaxed">
              Be part of a movement that's transforming Nyali through community action, 
              sustainable development, and people-centered governance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/contact"
                className="bg-white text-primary-500 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Get Involved
              </a>
              <a
                href="/gallery"
                className="border-2 border-white text-white hover:bg-white hover:text-primary-500 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                See Our Work
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default WalkMovementPage
