# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. This project showcases professional work, skills, and provides a way for potential clients to get in touch.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **TypeScript**: Built with TypeScript for better type safety
- **Tailwind CSS**: Utility-first CSS framework for rapid development
- **Framer Motion**: Smooth animations and transitions
- **React Router**: Client-side routing for seamless navigation
- **Contact Form**: Functional contact form for client inquiries
- **Project Showcase**: Filterable project gallery with detailed information

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Package Manager**: npm

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.tsx      # Navigation component
│   └── Footer.tsx      # Footer component
├── pages/              # Page components
│   ├── Home.tsx        # Home page
│   ├── About.tsx       # About page
│   ├── Projects.tsx    # Projects page
│   └── Contact.tsx     # Contact page
├── assets/             # Static assets
├── types/              # TypeScript type definitions
├── utils/              # Utility functions
├── hooks/              # Custom React hooks
├── App.tsx             # Main app component
├── main.tsx            # Entry point
└── index.css           # Global styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd portfolio-website
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📝 Customization

### Personal Information

Update the following files with your personal information:

- `src/pages/Home.tsx` - Update hero section and services
- `src/pages/About.tsx` - Update personal story and skills
- `src/pages/Projects.tsx` - Add your projects
- `src/pages/Contact.tsx` - Update contact information
- `src/components/Footer.tsx` - Update social links

### Styling

The project uses Tailwind CSS with custom configuration in `tailwind.config.js`. You can:

- Modify the color scheme in the `theme.extend.colors` section
- Add custom animations in the `theme.extend.animation` section
- Update fonts in the `theme.extend.fontFamily` section

### Adding Projects

To add new projects, update the `projects` array in `src/pages/Projects.tsx`:

```typescript
{
  id: 7,
  title: 'Your Project Name',
  description: 'Project description...',
  image: '/path/to/image.jpg',
  category: 'web', // 'web', 'mobile', or 'design'
  technologies: ['React', 'TypeScript', 'Tailwind CSS'],
  liveUrl: 'https://your-project.com',
  githubUrl: 'https://github.com/your-username/project',
  featured: false
}
```

## 🎨 Design System

### Colors

- **Primary**: Blue gradient (#0ea5e9 to #0284c7)
- **Secondary**: Purple gradient (#d946ef to #c026d3)
- **Gray**: Various shades for text and backgrounds

### Typography

- **Primary Font**: Inter (sans-serif)
- **Monospace Font**: JetBrains Mono (for code)

### Components

The project includes several reusable components:

- **Buttons**: Primary and secondary button styles
- **Cards**: Project cards with hover effects
- **Forms**: Contact form with validation
- **Navigation**: Responsive navbar with mobile menu

## 📱 Responsive Design

The website is fully responsive and optimized for:

- Mobile devices (320px+)
- Tablets (768px+)
- Desktop (1024px+)
- Large screens (1280px+)

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Style

The project uses ESLint for code linting. Run `npm run lint` to check for issues.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help, please open an issue on GitHub or contact me directly.

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
