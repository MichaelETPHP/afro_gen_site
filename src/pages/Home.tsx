import { motion } from 'framer-motion'
import {
  ArrowRight,
  Palette,
  FileText,
  Instagram,
  Lightbulb,
} from 'lucide-react'
import { Link } from 'react-router-dom'

const Home = () => {
  const services = [
    {
      icon: Palette,
      title: 'Logo Design',
      description:
        'Brand identity, logo systems, and vector graphics that make your brand stand out',
    },
    {
      icon: FileText,
      title: 'Flyer Design',
      description:
        'Event posters, promotional flyers, and handouts that capture attention',
    },
    {
      icon: Instagram,
      title: 'Social Media Ads',
      description:
        'Instagram, Facebook, TikTok ad designs that drive engagement and conversions',
    },
    {
      icon: Lightbulb,
      title: 'Conceptual Design',
      description:
        'Creative illustrations, branding ideas, and visual case studies',
    },
  ]

  return (
    <div className='pt-16'>
      {/* Hero Section */}
      <section className='section-padding bg-gradient-to-br from-primary-50 to-secondary-50'>
        <div className='container-max text-center'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='max-w-4xl mx-auto'
          >
            <h1 className='text-4xl md:text-6xl font-bold mb-6'>
              Hello There! I'm <span className='gradient-text'>Your Name</span>
            </h1>
            <p className='text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto'>
              Creative Graphic Designer based in [Location] creating stunning
              visual experiences.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                to='/projects'
                className='btn-primary inline-flex items-center gap-2'
              >
                Portfolio
                <ArrowRight className='h-4 w-4' />
              </Link>
              <Link
                to='/contact'
                className='btn-secondary inline-flex items-center gap-2'
              >
                Contact Me
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className='section-padding'>
        <div className='container-max'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-center mb-16'
          >
            <h2 className='text-3xl md:text-4xl font-bold mb-4'>
              Services I Provide
            </h2>
            <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
              I specialize in creating stunning visual designs and branding
              solutions that help businesses stand out.
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow'
              >
                <div className='w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4'>
                  <service.icon className='h-6 w-6 text-primary-600' />
                </div>
                <h3 className='text-xl font-semibold mb-2'>{service.title}</h3>
                <p className='text-gray-600'>{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='section-padding bg-gray-900 text-white'>
        <div className='container-max text-center'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className='text-3xl md:text-4xl font-bold mb-4'>
              Let's Work Together
            </h2>
            <p className='text-xl text-gray-300 mb-8 max-w-2xl mx-auto'>
              Ready to bring your creative vision to life? Let's collaborate on
              something amazing.
            </p>
            <Link
              to='/contact'
              className='btn-primary inline-flex items-center gap-2 bg-white text-gray-900 hover:bg-gray-100'
            >
              Let's Talk
              <ArrowRight className='h-4 w-4' />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
