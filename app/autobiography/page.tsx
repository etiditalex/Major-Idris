'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Briefcase, GraduationCap, Award, MapPin, Calendar, Users, Shield, Building } from 'lucide-react'

const AutobiographyPage = () => {
  const professionalExperience = [
    {
      icon: Building,
      title: "Director of Political Affairs",
      organization: "Office of the Governor, Mombasa County",
      period: "Current",
      description: "Leading political strategy and governance initiatives for Mombasa County, working directly with the Governor to implement policies that benefit the residents of Mombasa.",
      highlights: [
        "Strategic policy development and implementation",
        "Stakeholder engagement and relationship building",
        "Cross-departmental coordination",
        "Public service delivery optimization"
      ]
    },
    {
      icon: Shield,
      title: "Security Advisor",
      organization: "Mombasa County",
      period: "Current",
      description: "Providing expert security counsel and strategic guidance to ensure the safety and security of Mombasa County residents and infrastructure.",
      highlights: [
        "Security threat assessment and mitigation",
        "Emergency response coordination",
        "Community safety initiatives",
        "Inter-agency security collaboration"
      ]
    },
    {
      icon: Briefcase,
      title: "Coordinator, Sub County Administration",
      organization: "Mombasa County",
      period: "Previous",
      description: "Managed administrative operations and service delivery at the sub-county level, ensuring efficient governance and citizen engagement.",
      highlights: [
        "Administrative oversight and management",
        "Service delivery coordination",
        "Community development initiatives",
        "Resource allocation and management"
      ]
    },
    {
      icon: Award,
      title: "Various Positions",
      organization: "Office of the Prime Minister - Kenya",
      period: "Previous",
      description: "Served in various capacities within the Office of the Prime Minister, contributing to national-level governance and policy implementation.",
      highlights: [
        "National policy implementation",
        "Government coordination",
        "Public service excellence",
        "Cross-ministerial collaboration"
      ]
    }
  ]

  const education = [
    {
      icon: GraduationCap,
      institution: "Garissa High School",
      period: "Secondary Education",
      description: "Completed secondary education at Garissa High School, laying the foundation for a career dedicated to public service and community development."
    }
  ]

  const achievements = [
    {
      icon: Users,
      title: "Community Leadership",
      description: "Over 15 years of dedicated service to community development and public administration"
    },
    {
      icon: Shield,
      title: "Security Expertise",
      description: "Extensive experience in security advisory and emergency response coordination"
    },
    {
      icon: Building,
      title: "Governance Excellence",
      description: "Proven track record in political affairs and administrative coordination"
    },
    {
      icon: Award,
      title: "Public Service",
      description: "Committed to serving the people of Mombasa County with integrity and dedication"
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
              My Autobiography
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              A journey of dedicated public service, community leadership, and commitment 
              to the people of Mombasa County.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 mb-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-6 text-gray-900">
                    A Life of Service
                  </h2>
                  <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-primary-500 rounded-full mb-6"></div>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    My journey in public service began with a simple yet profound commitment: 
                    to serve the people of Kenya with integrity, dedication, and unwavering 
                    commitment to community development.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    From my early days at Garissa High School to my current role as Director 
                    of Political Affairs at the Office of the Governor, Mombasa County, I have 
                    dedicated my career to improving the lives of citizens through effective 
                    governance and community engagement.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    This autobiography chronicles my professional journey, the challenges overcome, 
                    and the impact made in service to the people of Mombasa County and Kenya at large.
                  </p>
                </div>
                <div className="relative">
                  <Image
                    src="https://res.cloudinary.com/dyfnobo9r/image/upload/v1758031167/Major_idris_e1cqdn.jpg"
                    alt="Major Idris - Professional Portrait"
                    width={400}
                    height={500}
                    className="rounded-2xl shadow-xl object-contain"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-orange-500 text-white p-4 rounded-xl shadow-lg">
                    <div className="text-2xl font-bold">15+</div>
                    <div className="text-sm">Years of Service</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Professional Experience */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-8 text-center text-gray-900">
                Professional Experience
              </h2>
              <div className="space-y-8">
                {professionalExperience.map((experience, index) => (
                  <motion.div
                    key={experience.title}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-2xl shadow-lg p-6 sm:p-8"
                  >
                    <div className="flex items-start space-x-4 mb-6">
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <experience.icon className="text-orange-500" size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl sm:text-2xl font-heading font-bold text-gray-900 mb-2">
                          {experience.title}
                        </h3>
                        <p className="text-lg text-primary-600 font-semibold mb-1">
                          {experience.organization}
                        </p>
                        <p className="text-gray-500 text-sm flex items-center">
                          <Calendar size={16} className="mr-2" />
                          {experience.period}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {experience.description}
                    </p>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Key Responsibilities:</h4>
                      <ul className="space-y-2">
                        {experience.highlights.map((highlight, highlightIndex) => (
                          <li key={highlightIndex} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-600 leading-relaxed">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-8 text-center text-gray-900">
                Education
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.institution}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-2xl shadow-lg p-6 sm:p-8"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <edu.icon className="text-primary-500" size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-heading font-bold text-gray-900 mb-2">
                          {edu.institution}
                        </h3>
                        <p className="text-primary-600 font-semibold mb-3">
                          {edu.period}
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                          {edu.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Key Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-8 text-center text-gray-900">
                Key Achievements
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <achievement.icon className="text-white" size={28} />
                    </div>
                    <h3 className="text-lg font-heading font-bold text-gray-900 mb-3">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {achievement.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Personal Philosophy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-r from-orange-50 to-primary-50 rounded-2xl p-6 sm:p-8 mb-8"
            >
              <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-6 text-center text-gray-900">
                Personal Philosophy
              </h2>
              <div className="max-w-4xl mx-auto text-center">
                <blockquote className="text-lg sm:text-xl text-gray-700 italic leading-relaxed mb-6">
                  "Service to others is the rent we pay for our room here on earth. 
                  My commitment to the people of Mombasa County is not just a job—it's 
                  a calling that drives every decision I make and every action I take."
                </blockquote>
                <p className="text-gray-600 leading-relaxed">
                  This philosophy has guided me through every role I've held, from my early 
                  days in public administration to my current position as Director of Political 
                  Affairs. It's the foundation upon which I build relationships, make decisions, 
                  and work tirelessly to improve the lives of those I serve.
                </p>
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
                <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4 text-gray-900">
                  Join Me in Service
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Together, we can continue building a better future for Mombasa County. 
                  Learn more about my vision and join The Walk Movement.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/vision"
                    className="bg-gradient-to-r from-orange-500 to-primary-500 text-white font-semibold py-3 px-8 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                  >
                    View My Vision
                  </Link>
                  <Link
                    href="/walk-movement"
                    className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    Join The Walk Movement
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Back to Home */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
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

export default AutobiographyPage
