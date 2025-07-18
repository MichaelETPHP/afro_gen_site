import { motion } from 'framer-motion'
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
} from 'lucide-react'
import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'contact@example.com',
      href: 'mailto:contact@example.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'San Francisco, CA',
      href: '#',
    },
  ]

  const socialLinks = [
    { name: 'GitHub', icon: Github, href: 'https://github.com' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
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
              Let's Work <span className='gradient-text'>Together</span>
            </h1>
            <p className='text-xl text-gray-600 mb-8 max-w-2xl mx-auto'>
              Ready to bring your creative vision to life? Let's discuss your
              project and create something amazing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className='section-padding'>
        <div className='container-max'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className='text-3xl font-bold mb-6'>Send a Message</h2>
              <form onSubmit={handleSubmit} className='space-y-6'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <div>
                    <label
                      htmlFor='name'
                      className='block text-sm font-medium text-gray-700 mb-2'
                    >
                      Name
                    </label>
                    <input
                      type='text'
                      id='name'
                      name='name'
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent'
                      placeholder='Your name'
                    />
                  </div>
                  <div>
                    <label
                      htmlFor='email'
                      className='block text-sm font-medium text-gray-700 mb-2'
                    >
                      Email
                    </label>
                    <input
                      type='email'
                      id='email'
                      name='email'
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent'
                      placeholder='your@email.com'
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor='subject'
                    className='block text-sm font-medium text-gray-700 mb-2'
                  >
                    Subject
                  </label>
                  <input
                    type='text'
                    id='subject'
                    name='subject'
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent'
                    placeholder='Project inquiry'
                  />
                </div>
                <div>
                  <label
                    htmlFor='message'
                    className='block text-sm font-medium text-gray-700 mb-2'
                  >
                    Message
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none'
                    placeholder='Tell me about your project...'
                  />
                </div>
                <button
                  type='submit'
                  className='btn-primary inline-flex items-center gap-2 w-full md:w-auto'
                >
                  <Send className='h-4 w-4' />
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className='space-y-8'
            >
              <div>
                <h2 className='text-3xl font-bold mb-6'>Contact Information</h2>
                <p className='text-gray-600 mb-8'>
                  I'm always open to discussing new projects, creative ideas, or
                  opportunities to be part of your visions.
                </p>
              </div>

              {/* Contact Details */}
              <div className='space-y-6'>
                {contactInfo.map((info) => (
                  <div key={info.title} className='flex items-center space-x-4'>
                    <div className='w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center'>
                      <info.icon className='h-6 w-6 text-primary-600' />
                    </div>
                    <div>
                      <h3 className='font-semibold'>{info.title}</h3>
                      <a
                        href={info.href}
                        className='text-gray-600 hover:text-primary-600 transition-colors'
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h3 className='text-xl font-semibold mb-4'>Follow Me</h3>
                <div className='flex space-x-4'>
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-primary-100 transition-colors'
                      aria-label={social.name}
                    >
                      <social.icon className='h-6 w-6 text-gray-600 hover:text-primary-600' />
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div className='bg-gray-50 p-6 rounded-xl'>
                <h3 className='text-xl font-semibold mb-2'>Availability</h3>
                <p className='text-gray-600 mb-4'>
                  I'm currently available for freelance work and full-time
                  opportunities.
                </p>
                <div className='flex items-center space-x-2'>
                  <div className='w-3 h-3 bg-green-500 rounded-full'></div>
                  <span className='text-sm text-gray-600'>
                    Available for new projects
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className='section-padding bg-gray-50'>
        <div className='container-max'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-center mb-12'
          >
            <h2 className='text-3xl font-bold mb-4'>
              Frequently Asked Questions
            </h2>
            <p className='text-xl text-gray-600'>
              Common questions about working together
            </p>
          </motion.div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {[
              {
                question: 'What is your typical project timeline?',
                answer:
                  'Project timelines vary depending on complexity. A simple website might take 2-4 weeks, while a complex web application could take 2-3 months.',
              },
              {
                question: 'Do you work with clients internationally?',
                answer:
                  'Yes! I work with clients from around the world. I am comfortable with different time zones and communication tools.',
              },
              {
                question: 'What is your pricing structure?',
                answer:
                  'I offer both hourly rates and project-based pricing. The best approach depends on your project scope and requirements.',
              },
              {
                question: 'Do you provide ongoing support?',
                answer:
                  'Absolutely! I offer maintenance packages and ongoing support to ensure your project continues to perform well.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='bg-white p-6 rounded-xl shadow-lg'
              >
                <h3 className='text-lg font-semibold mb-3'>{faq.question}</h3>
                <p className='text-gray-600'>{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
