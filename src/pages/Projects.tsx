import { motion } from 'framer-motion'
import { ExternalLink, Github, Filter } from 'lucide-react'
import { useState } from 'react'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'Tech Startup Brand Identity',
      description:
        'Complete brand identity design including logo, color palette, typography, and brand guidelines for a modern tech startup.',
      image: '/api/placeholder/400/300',
      category: 'design',
      technologies: [
        'Adobe Illustrator',
        'Adobe Photoshop',
        'Brand Guidelines',
      ],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: true,
    },
    {
      id: 2,
      title: 'Restaurant Menu Design',
      description:
        'Creative menu design with custom illustrations, typography, and layout that enhances the dining experience.',
      image: '/api/placeholder/400/300',
      category: 'design',
      technologies: ['Adobe InDesign', 'Adobe Illustrator', 'Typography'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: true,
    },
    {
      id: 3,
      title: 'Social Media Campaign',
      description:
        'Complete social media campaign design including Instagram posts, stories, and Facebook ads for a fashion brand.',
      image: '/api/placeholder/400/300',
      category: 'design',
      technologies: ['Adobe Photoshop', 'Instagram Templates', 'Social Media'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: false,
    },
    {
      id: 4,
      title: 'Event Flyer Collection',
      description:
        'Series of event flyers and promotional materials for music festivals and cultural events.',
      image: '/api/placeholder/400/300',
      category: 'design',
      technologies: ['Adobe Illustrator', 'Typography', 'Print Design'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: false,
    },
    {
      id: 5,
      title: 'Product Packaging Design',
      description:
        'Creative packaging design for organic skincare products with sustainable materials and modern aesthetics.',
      image: '/api/placeholder/400/300',
      category: 'design',
      technologies: [
        'Adobe Illustrator',
        'Packaging Design',
        'Print Production',
      ],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: false,
    },
    {
      id: 6,
      title: 'Website UI Design',
      description:
        'Modern website UI design with custom illustrations, icons, and user interface elements.',
      image: '/api/placeholder/400/300',
      category: 'design',
      technologies: ['Figma', 'Adobe Illustrator', 'UI/UX Design'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: false,
    },
  ]

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'design', label: 'Graphic Design' },
    { id: 'branding', label: 'Brand Identity' },
    { id: 'print', label: 'Print Design' },
  ]

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((project) => project.category === activeFilter)

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
              Featured <span className='gradient-text'>Projects</span>
            </h1>
            <p className='text-xl text-gray-600 mb-8 max-w-2xl mx-auto'>
              A collection of my recent work showcasing my skills in graphic
              design, branding, and visual communication.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className='section-padding'>
        <div className='container-max'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='flex flex-wrap justify-center gap-4 mb-12'
          >
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  activeFilter === filter.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </motion.div>

          {/* Featured Projects */}
          {activeFilter === 'all' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className='mb-16'
            >
              <h2 className='text-3xl font-bold mb-8 text-center'>
                Featured Projects
              </h2>
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                {projects
                  .filter((p) => p.featured)
                  .map((project, index) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className='bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow'
                    >
                      <div className='h-48 bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center'>
                        <span className='text-gray-500'>Project Image</span>
                      </div>
                      <div className='p-6'>
                        <h3 className='text-xl font-bold mb-2'>
                          {project.title}
                        </h3>
                        <p className='text-gray-600 mb-4'>
                          {project.description}
                        </p>
                        <div className='flex flex-wrap gap-2 mb-4'>
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className='px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm'
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className='flex gap-4'>
                          <a
                            href={project.liveUrl}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='btn-primary inline-flex items-center gap-2'
                          >
                            <ExternalLink className='h-4 w-4' />
                            Live Demo
                          </a>
                          <a
                            href={project.githubUrl}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='btn-secondary inline-flex items-center gap-2'
                          >
                            <Github className='h-4 w-4' />
                            Code
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          )}

          {/* All Projects Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow'
              >
                <div className='h-48 bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center'>
                  <span className='text-gray-500'>Project Image</span>
                </div>
                <div className='p-6'>
                  <h3 className='text-xl font-bold mb-2'>{project.title}</h3>
                  <p className='text-gray-600 mb-4 line-clamp-3'>
                    {project.description}
                  </p>
                  <div className='flex flex-wrap gap-2 mb-4'>
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className='px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs'
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className='px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs'>
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                  <div className='flex gap-2'>
                    <a
                      href={project.liveUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='btn-primary text-sm inline-flex items-center gap-1'
                    >
                      <ExternalLink className='h-3 w-3' />
                      Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='btn-secondary text-sm inline-flex items-center gap-1'
                    >
                      <Github className='h-3 w-3' />
                      Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projects
