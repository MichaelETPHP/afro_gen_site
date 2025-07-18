// Project types
export interface Project {
  id: number
  title: string
  description: string
  image: string
  category: 'web' | 'mobile' | 'design'
  technologies: string[]
  liveUrl: string
  githubUrl: string
  featured: boolean
}

// Contact form types
export interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
}

// Skill types
export interface Skill {
  name: string
  level: number
}

// Service types
export interface Service {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
}

// Navigation types
export interface NavItem {
  name: string
  path: string
}

// Social link types
export interface SocialLink {
  name: string
  icon: React.ComponentType<{ className?: string }>
  href: string
}

// Contact info types
export interface ContactInfo {
  icon: React.ComponentType<{ className?: string }>
  title: string
  value: string
  href: string
}
