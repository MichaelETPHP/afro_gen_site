import { Instagram, Linkedin, Mail } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
    { name: 'Email', icon: Mail, href: 'mailto:contact@example.com' },
  ]

  return (
    <footer className='bg-gray-900 text-white'>
      <div className='container-max section-padding'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {/* Brand Section */}
          <div className='space-y-4'>
            <h3 className='text-xl font-bold gradient-text'>Portfolio</h3>
            <p className='text-gray-400 max-w-md'>
              A passionate developer and designer creating beautiful,
              functional, and user-centered digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className='space-y-4'>
            <h4 className='text-lg font-semibold'>Quick Links</h4>
            <ul className='space-y-2'>
              <li>
                <a
                  href='/'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href='/about'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href='/projects'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href='/contact'
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className='space-y-4'>
            <h4 className='text-lg font-semibold'>Connect</h4>
            <div className='flex space-x-4'>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='p-2 bg-gray-800 rounded-lg hover:bg-primary-600 transition-colors'
                  aria-label={social.name}
                >
                  <social.icon className='h-5 w-5' />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='border-t border-gray-800 mt-8 pt-8 text-center'>
          <p className='text-gray-400'>
            © {currentYear} Portfolio. All rights reserved. Built with React &
            TypeScript.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
