import { motion } from 'framer-motion'
import { Download, Award, Users, Clock } from 'lucide-react'

const About = () => {
  const skills = [
    { name: 'Adobe Illustrator', level: 95 },
    { name: 'Adobe Photoshop', level: 90 },
    { name: 'Adobe InDesign', level: 85 },
    { name: 'Figma', level: 80 },
    { name: 'Logo Design', level: 95 },
    { name: 'Brand Identity', level: 90 },
  ]

  const stats = [
    { icon: Award, label: 'Years Experience', value: '5+' },
    { icon: Users, label: 'Happy Clients', value: '50+' },
    { icon: Clock, label: 'Projects Completed', value: '100+' },
  ]

  return (
    <div className='pt-16'>
      {/* Hero Section */}
      <section className='section-padding bg-gradient-to-br from-primary-50 to-secondary-50'>
        <div className='container-max'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='text-center max-w-4xl mx-auto'
          >
            <h1 className='text-4xl md:text-6xl font-bold mb-6'>
              About <span className='gradient-text'>Me</span>
            </h1>
            <p className='text-xl text-gray-600 mb-8'>
              Passionate about creating stunning visual designs that make brands
              stand out
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className='section-padding'>
        <div className='container-max'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className='text-3xl font-bold mb-6'>My Story</h2>
              <div className='space-y-4 text-gray-600'>
                <p>
                  I'm a passionate graphic designer with over 5 years of
                  experience creating stunning visual designs that help brands
                  connect with their audiences.
                </p>
                <p>
                  My journey in design started with a love for art and
                  creativity, which quickly evolved into a deep passion for
                  creating meaningful visual experiences that tell compelling
                  stories.
                </p>
                <p>
                  I believe in creating designs that are not only beautiful but
                  also strategic, helping businesses communicate their message
                  effectively and stand out in a crowded market.
                </p>
              </div>
              <button className='btn-primary mt-6 inline-flex items-center gap-2'>
                <Download className='h-4 w-4' />
                Download Resume
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className='bg-white p-8 rounded-xl shadow-lg'
            >
              <h3 className='text-2xl font-bold mb-6'>My Skills</h3>
              <div className='space-y-4'>
                {skills.map((skill, index) => (
                  <div key={skill.name}>
                    <div className='flex justify-between mb-2'>
                      <span className='font-medium'>{skill.name}</span>
                      <span className='text-gray-600'>{skill.level}%</span>
                    </div>
                    <div className='w-full bg-gray-200 rounded-full h-2'>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className='bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full'
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className='section-padding bg-gray-900 text-white'>
        <div className='container-max'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-center mb-12'
          >
            <h2 className='text-3xl font-bold mb-4'>My Experience</h2>
            <p className='text-xl text-gray-300'>
              Numbers that tell the story of my journey
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='text-center'
              >
                <div className='w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4'>
                  <stat.icon className='h-8 w-8' />
                </div>
                <div className='text-3xl font-bold mb-2'>{stat.value}</div>
                <div className='text-gray-300'>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className='section-padding'>
        <div className='container-max'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-center mb-12'
          >
            <h2 className='text-3xl font-bold mb-4'>My Values</h2>
            <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
              The principles that guide my work and relationships
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {[
              {
                title: 'Quality',
                description:
                  'I believe in delivering high-quality work that exceeds expectations and stands the test of time.',
              },
              {
                title: 'Collaboration',
                description:
                  'Great results come from working together. I value open communication and teamwork.',
              },
              {
                title: 'Innovation',
                description:
                  'I stay current with the latest technologies and best practices to deliver cutting-edge solutions.',
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='bg-white p-6 rounded-xl shadow-lg text-center'
              >
                <h3 className='text-xl font-semibold mb-4'>{value.title}</h3>
                <p className='text-gray-600'>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
