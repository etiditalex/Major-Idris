'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Users, Heart, Wrench, Shield, Leaf, TrendingUp } from 'lucide-react'
import NewsUpdates from '@/components/NewsUpdates'

const HomePage = () => {
  const stats = [
    { number: '10,000+', label: 'Community Members' },
    { number: '50+', label: 'Health Camps' },
    { number: '200+', label: 'Youth Programs' },
    { number: '15+', label: 'Infrastructure Projects' },
  ]

  const walkMovementFeatures = [
    {
      icon: Heart,
      title: 'Healthcare Access',
      description: 'Providing free medical camps and healthcare services to underserved communities.',
      stat: '50+ Health Camps'
    },
    {
      icon: Users,
      title: 'Youth Empowerment',
      description: 'Creating opportunities for young people through education and skills training.',
      stat: '200+ Youth Programs'
    },
    {
      icon: Wrench,
      title: 'Infrastructure Development',
      description: 'Building roads, schools, and community facilities for better living conditions.',
      stat: '15+ Projects'
    },
    {
      icon: Shield,
      title: 'Good Governance',
      description: 'Promoting transparency, accountability, and citizen participation in governance.',
      stat: '100% Transparency'
    },
    {
      icon: Leaf,
      title: 'Environmental Protection',
      description: 'Implementing sustainable practices and environmental conservation initiatives.',
      stat: '5+ Green Projects'
    },
    {
      icon: TrendingUp,
      title: 'Economic Growth',
      description: 'Supporting local businesses and creating employment opportunities.',
      stat: '500+ Jobs Created'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://res.cloudinary.com/dyfnobo9r/image/upload/v1758220139/Major_idris_3_18_ea4mss.jpg"
            alt="Major Idris Hero Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container-custom text-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-4 sm:mb-6 leading-tight">
              Major Idris
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-heading font-semibold mb-3 sm:mb-4 text-gradient leading-tight">
              Championing Health, Community & Progress for Nyali
            </h2>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed px-2">
              Join us in building a better future for Nyali through healthcare access, 
              youth empowerment, infrastructure development, and transparent governance.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-2">
              <Link href="/about" className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 text-center">
                Learn More
                <ArrowRight className="ml-2 inline-block" size={18} />
              </Link>
              <Link href="/contact" className="w-full sm:w-auto bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 text-center">
                Join Our Movement
              </Link>
              <Link href="/walk-movement" className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-orange-500 font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 text-center">
                The Walk Movement
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 bg-orange-500 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center px-2"
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2">{stat.number}</div>
                <div className="text-xs sm:text-sm md:text-base text-primary-100 leading-tight">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Major Idris Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative h-80 sm:h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://res.cloudinary.com/dyfnobo9r/image/upload/v1758031167/Major_idris_e1cqdn.jpg"
                  alt="Major Idris - Community Leader"
                  fill
                  className="object-contain"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* Floating Stats */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-orange-500 text-white p-4 sm:p-6 rounded-2xl shadow-xl"
              >
                <div className="text-xl sm:text-2xl font-bold">15+</div>
                <div className="text-xs sm:text-sm">Years of Service</div>
              </motion.div>
            </motion.div>

            {/* Content Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4 sm:space-y-6 order-1 lg:order-2"
            >
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-4 sm:mb-6 text-gray-900">
                  About Major Idris
                </h2>
                <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-orange-500 to-primary-500 rounded-full mb-4 sm:mb-6"></div>
              </div>

              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Major Idris is a dedicated community leader and advocate for positive change in Nyali constituency. 
                With over 15 years of service to the community, he has consistently worked to improve the lives 
                of residents through healthcare access, youth empowerment, and infrastructure development.
              </p>

              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                His vision of "Championing Health, Community & Progress for Nyali" drives every initiative he undertakes. 
                Through The Walk Movement, Major Idris has mobilized thousands of community members to work together 
                towards a common goal of sustainable development and transparent governance.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-4 sm:pt-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex items-center space-x-3 sm:space-x-4"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart className="text-orange-500" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Healthcare Advocate</h4>
                    <p className="text-xs sm:text-sm text-gray-600">Free medical camps & health access</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="flex items-center space-x-3 sm:space-x-4"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="text-primary-500" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Youth Champion</h4>
                    <p className="text-xs sm:text-sm text-gray-600">Skills training & empowerment</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="flex items-center space-x-3 sm:space-x-4"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Wrench className="text-orange-500" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Infrastructure Builder</h4>
                    <p className="text-xs sm:text-sm text-gray-600">Roads, schools & community facilities</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="flex items-center space-x-3 sm:space-x-4"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="text-primary-500" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Transparent Leader</h4>
                    <p className="text-xs sm:text-sm text-gray-600">Accountable & people-centered governance</p>
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="pt-4 sm:pt-6"
              >
                <Link href="/about" className="inline-flex items-center bg-gradient-to-r from-orange-500 to-primary-500 text-white font-semibold py-3 px-6 sm:px-8 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-sm sm:text-base">
                  Learn More About Major Idris
                  <ArrowRight className="ml-2" size={18} />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Walk Movement Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-gray-900">
              The Walk Movement
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A grassroots movement dedicated to transforming Nyali through community engagement, 
              sustainable development, and people-centered governance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {walkMovementFeatures.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card p-8 text-center group hover:shadow-2xl"
                >
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-500 transition-colors duration-300">
                    <Icon className="text-primary-500 group-hover:text-white transition-colors duration-300" size={32} />
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-4 text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="text-primary-500 font-semibold text-sm">
                    {feature.stat}
                  </div>
                </motion.div>
              )
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Link href="/walk-movement" className="btn-primary text-lg px-8 py-4">
              Learn More About The Walk Movement
              <ArrowRight className="ml-2 inline-block" size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Political Agenda Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-gray-900">
              Political Agenda
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Major Idris's comprehensive political agenda focuses on five key pillars that will transform 
              Nyali constituency and improve the lives of all residents.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Healthcare Agenda */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="card p-8 text-center group hover:shadow-2xl border-l-4 border-orange-500"
            >
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-500 transition-colors duration-300">
                <Heart className="text-orange-500 group-hover:text-white transition-colors duration-300" size={32} />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-4 text-gray-900">
                Healthcare Access
              </h3>
              <ul className="text-gray-600 text-left space-y-2">
                <li>• Free medical camps in underserved areas</li>
                <li>• Mobile health units for remote communities</li>
                <li>• Maternal and child health programs</li>
                <li>• Mental health awareness and support</li>
                <li>• Community health worker training</li>
              </ul>
            </motion.div>

            {/* Youth Empowerment Agenda */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card p-8 text-center group hover:shadow-2xl border-l-4 border-primary-500"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-500 transition-colors duration-300">
                <Users className="text-primary-500 group-hover:text-white transition-colors duration-300" size={32} />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-4 text-gray-900">
                Youth Empowerment
              </h3>
              <ul className="text-gray-600 text-left space-y-2">
                <li>• Technical skills training programs</li>
                <li>• Entrepreneurship development</li>
                <li>• Sports and recreation facilities</li>
                <li>• Leadership development initiatives</li>
                <li>• Job placement and mentorship</li>
              </ul>
            </motion.div>

            {/* Infrastructure Agenda */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="card p-8 text-center group hover:shadow-2xl border-l-4 border-orange-500"
            >
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-500 transition-colors duration-300">
                <Wrench className="text-orange-500 group-hover:text-white transition-colors duration-300" size={32} />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-4 text-gray-900">
                Infrastructure Development
              </h3>
              <ul className="text-gray-600 text-left space-y-2">
                <li>• Road construction and maintenance</li>
                <li>• Clean water supply systems</li>
                <li>• School and community center upgrades</li>
                <li>• Street lighting and security</li>
                <li>• Digital infrastructure and connectivity</li>
              </ul>
            </motion.div>

            {/* Governance Agenda */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="card p-8 text-center group hover:shadow-2xl border-l-4 border-primary-500"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-500 transition-colors duration-300">
                <Shield className="text-primary-500 group-hover:text-white transition-colors duration-300" size={32} />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-4 text-gray-900">
                Transparent Governance
              </h3>
              <ul className="text-gray-600 text-left space-y-2">
                <li>• Open and accountable leadership</li>
                <li>• Regular community town halls</li>
                <li>• Public budget transparency</li>
                <li>• Citizen participation programs</li>
                <li>• Anti-corruption initiatives</li>
              </ul>
            </motion.div>

            {/* Environment Agenda */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="card p-8 text-center group hover:shadow-2xl border-l-4 border-orange-500"
            >
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-500 transition-colors duration-300">
                <Leaf className="text-orange-500 group-hover:text-white transition-colors duration-300" size={32} />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-4 text-gray-900">
                Environmental Protection
              </h3>
              <ul className="text-gray-600 text-left space-y-2">
                <li>• Coastal conservation programs</li>
                <li>• Waste management systems</li>
                <li>• Tree planting initiatives</li>
                <li>• Renewable energy projects</li>
                <li>• Environmental education</li>
              </ul>
            </motion.div>

            {/* Economic Development Agenda */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="card p-8 text-center group hover:shadow-2xl border-l-4 border-primary-500"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-500 transition-colors duration-300">
                <TrendingUp className="text-primary-500 group-hover:text-white transition-colors duration-300" size={32} />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-4 text-gray-900">
                Economic Growth
              </h3>
              <ul className="text-gray-600 text-left space-y-2">
                <li>• Support for local businesses</li>
                <li>• Tourism development</li>
                <li>• Agricultural modernization</li>
                <li>• Investment attraction</li>
                <li>• Job creation programs</li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-center mt-12"
          >
            <div className="bg-gradient-to-r from-orange-50 to-primary-50 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-heading font-bold mb-4 text-gray-900">
                Our Commitment to Nyali
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                This comprehensive agenda represents our unwavering commitment to transforming Nyali constituency 
                into a model of sustainable development, where every resident has access to quality healthcare, 
                education, and economic opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/vision" className="bg-gradient-to-r from-orange-500 to-primary-500 text-white font-semibold py-3 px-8 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  View Full Vision
                  <ArrowRight className="ml-2 inline-block" size={20} />
                </Link>
                <Link href="/contact" className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Join Our Movement
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Real-time News Updates Section */}
      <NewsUpdates />
    </div>
  )
}

export default HomePage
