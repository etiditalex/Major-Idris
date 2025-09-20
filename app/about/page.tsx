'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Award, Users, Heart, Shield, GraduationCap, Briefcase } from 'lucide-react'

const AboutPage = () => {
  const achievements = [
    {
      icon: Award,
      title: 'Community Leadership',
      description: 'Over 15 years of dedicated service to the Nyali community'
    },
    {
      icon: Users,
      title: 'Youth Development',
      description: 'Mentored and empowered over 5,000 young people'
    },
    {
      icon: Heart,
      title: 'Healthcare Advocacy',
      description: 'Led 50+ health camps serving 25,000+ residents'
    },
    {
      icon: Shield,
      title: 'Good Governance',
      description: 'Championed transparency and accountability in local government'
    }
  ]

  const timeline = [
    {
      year: '2008',
      title: 'Community Service Begins',
      description: 'Started grassroots community organizing in Nyali, focusing on youth development and healthcare access.'
    },
    {
      year: '2012',
      title: 'The Walk Movement Founded',
      description: 'Established The Walk Movement as a platform for community engagement and sustainable development.'
    },
    {
      year: '2016',
      title: 'Healthcare Initiative Launch',
      description: 'Launched comprehensive healthcare program providing free medical services to underserved communities.'
    },
    {
      year: '2020',
      title: 'COVID-19 Response',
      description: 'Led community response during pandemic, providing essential services and support to vulnerable families.'
    },
    {
      year: '2024',
      title: 'Political Leadership',
      description: 'Announced candidacy for Nyali constituency, bringing years of community experience to formal governance.'
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
              About Major Idris
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              A dedicated community leader, healthcare advocate, and champion for progress in Nyali
            </p>
          </motion.div>
        </div>
      </section>

      {/* Biography Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="https://res.cloudinary.com/dyfnobo9r/image/upload/v1758220139/Major_idris_3_17_z2dev2.jpg"
                alt="Major Idris Portrait"
                width={600}
                height={800}
                className="rounded-xl shadow-2xl"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">
                A Life Dedicated to Service
              </h2>
              
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Major Idris is a distinguished community leader with over 15 years of dedicated service 
                  to the people of Nyali. Born and raised in Mombasa County, he has always been deeply 
                  connected to the community and its challenges.
                </p>
                
                <p>
                  His journey in public service began in 2008 when he recognized the urgent need for 
                  better healthcare access and youth development programs in Nyali. What started as 
                  small community initiatives has grown into a comprehensive movement for positive change.
                </p>
                
                <p>
                  As the founder of The Walk Movement, Major Idris has been instrumental in organizing 
                  over 50 health camps that have served more than 25,000 residents. His commitment to 
                  youth empowerment has seen him mentor and support over 5,000 young people through 
                  various educational and skills development programs.
                </p>
                
                <p>
                  Major Idris believes in the power of community engagement and participatory governance. 
                  His approach to leadership is rooted in listening to the people, understanding their 
                  needs, and working collaboratively to find sustainable solutions to local challenges.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-gray-900">
              Key Achievements
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Major Idris's impact on the Nyali community spans multiple areas of development
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon
              return (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card p-8 text-center group"
                >
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-500 transition-colors duration-300">
                    <Icon className="text-orange-500 group-hover:text-white transition-colors duration-300" size={32} />
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-4 text-gray-900">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {achievement.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-gray-900">
              Journey of Service
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A timeline of Major Idris's commitment to community development
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex items-center mb-12 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div className="card p-8">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                        {item.year.slice(-2)}
                      </div>
                      <h3 className="text-xl font-heading font-semibold text-gray-900">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
                
                <div className="w-4 h-4 bg-orange-500 rounded-full flex-shrink-0 z-10"></div>
                
                <div className={`flex-1 ${index % 2 === 0 ? 'pl-8' : 'pr-8'}`}>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-500 mb-2">
                      {item.year}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-gray-900">
              Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The principles that guide Major Idris's leadership and service
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="card p-8 text-center"
            >
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="text-orange-500" size={32} />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-4 text-gray-900">
                Compassion
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Every decision is guided by genuine care for the community's well-being and future prosperity.
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
                Integrity
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Transparent, accountable leadership that puts the community's interests above personal gain.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card p-8 text-center"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="text-primary-500" size={32} />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-4 text-gray-900">
                Community First
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Every initiative is designed to empower and uplift the people of Nyali for generations to come.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
