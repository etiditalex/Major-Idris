'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Heart, Users, Wrench, Shield, Leaf, Target, ArrowRight } from 'lucide-react'

const VisionPage = () => {
  const agendaPillars = [
    {
      icon: Heart,
      title: 'Healthcare',
      color: 'from-red-500 to-pink-500',
      description: 'Ensuring accessible, affordable, and quality healthcare for all residents of Nyali.',
      goals: [
        'Establish 24/7 emergency medical services',
        'Build modern health centers in underserved areas',
        'Provide free maternal and child healthcare',
        'Implement mental health support programs'
      ],
      stats: '50+ Health Camps Completed'
    },
    {
      icon: Users,
      title: 'Youth Empowerment',
      color: 'from-blue-500 to-cyan-500',
      description: 'Creating opportunities for young people through education, skills training, and employment.',
      goals: [
        'Establish youth skills development centers',
        'Create internship and apprenticeship programs',
        'Support youth entrepreneurship initiatives',
        'Provide scholarships for higher education'
      ],
      stats: '200+ Youth Programs Launched'
    },
    {
      icon: Wrench,
      title: 'Infrastructure',
      color: 'from-orange-500 to-yellow-500',
      description: 'Building modern infrastructure to support economic growth and improve quality of life.',
      goals: [
        'Upgrade road networks and public transport',
        'Improve water and sanitation systems',
        'Build modern schools and community centers',
        'Enhance digital connectivity and internet access'
      ],
      stats: '15+ Infrastructure Projects'
    },
    {
      icon: Shield,
      title: 'Governance',
      color: 'from-purple-500 to-indigo-500',
      description: 'Promoting transparent, accountable, and participatory governance at all levels.',
      goals: [
        'Implement digital governance platforms',
        'Establish community feedback mechanisms',
        'Ensure transparent budget allocation',
        'Promote citizen participation in decision-making'
      ],
      stats: '100% Transparency Commitment'
    },
    {
      icon: Leaf,
      title: 'Environment',
      color: 'from-green-500 to-emerald-500',
      description: 'Protecting and preserving the environment for sustainable development and future generations.',
      goals: [
        'Implement waste management programs',
        'Promote renewable energy initiatives',
        'Protect coastal and marine ecosystems',
        'Establish community tree planting programs'
      ],
      stats: '5+ Green Projects Initiated'
    }
  ]

  const visionStatement = {
    title: 'Our Vision for Nyali',
    content: 'To transform Nyali into a model constituency that exemplifies sustainable development, social equity, and economic prosperity. We envision a community where every resident has access to quality healthcare, education, and opportunities for growth, while preserving our natural heritage for future generations.',
    values: [
      'Inclusive Development',
      'Sustainable Growth',
      'Community Participation',
      'Environmental Stewardship',
      'Transparent Governance'
    ]
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
              Our Vision & Agenda
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Five key pillars for transforming Nyali into a model constituency
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 text-gray-900">
              {visionStatement.title}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              {visionStatement.content}
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              {visionStatement.values.map((value, index) => (
                <motion.span
                  key={value}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold"
                >
                  {value}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Agenda Pillars */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-gray-900">
              Five Pillars of Progress
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our comprehensive agenda focuses on five key areas that will drive sustainable development in Nyali
            </p>
          </motion.div>

          <div className="space-y-16">
            {agendaPillars.map((pillar, index) => {
              const Icon = pillar.icon
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                  }`}
                >
                  <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="card p-8 h-full">
                      <div className="flex items-center mb-6">
                        <div className={`w-16 h-16 bg-gradient-to-r ${pillar.color} rounded-full flex items-center justify-center mr-4`}>
                          <Icon className="text-white" size={32} />
                        </div>
                        <div>
                          <h3 className="text-2xl font-heading font-bold text-gray-900">
                            {pillar.title}
                          </h3>
                          <p className="text-primary-500 font-semibold">
                            {pillar.stats}
                          </p>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {pillar.description}
                      </p>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">
                          Key Goals:
                        </h4>
                        <ul className="space-y-2">
                          {pillar.goals.map((goal, goalIndex) => (
                            <motion.li
                              key={goalIndex}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: goalIndex * 0.1 }}
                              className="flex items-start space-x-3"
                            >
                              <ArrowRight className="text-primary-500 mt-1 flex-shrink-0" size={16} />
                              <span className="text-gray-600">{goal}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className={`w-full h-80 bg-gradient-to-br ${pillar.color} rounded-2xl flex items-center justify-center`}
                    >
                      <Icon className="text-white opacity-20" size={120} />
                    </motion.div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Implementation Strategy */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-gray-900">
              Implementation Strategy
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our systematic approach to achieving our vision through community engagement and sustainable development
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="card p-8 text-center"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="text-primary-500" size={32} />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-4 text-gray-900">
                Community Engagement
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Regular town halls, community surveys, and participatory planning to ensure all initiatives meet local needs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="card p-8 text-center"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="text-primary-500" size={32} />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-4 text-gray-900">
                Transparent Governance
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Open budget processes, regular progress reports, and accountability mechanisms for all projects.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card p-8 text-center"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf className="text-primary-500" size={32} />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-4 text-gray-900">
                Sustainable Development
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Long-term planning that balances economic growth with environmental protection and social equity.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-r from-orange-500 to-primary-500 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Join Us in Building the Future
            </h2>
            <p className="text-lg mb-8 text-white/90 leading-relaxed">
              Together, we can transform Nyali into a model constituency that serves as an example 
              of sustainable development and community prosperity for the entire region.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="bg-white text-primary-500 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Get Involved
              </Link>
              <Link
                href="/walk-movement"
                className="border-2 border-white text-white hover:bg-white hover:text-primary-500 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Learn About The Walk Movement
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default VisionPage
