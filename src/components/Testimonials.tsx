import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      client: 'Jane Doe',
      text: 'Professional, fast, and creative! The logo design exceeded my expectations and perfectly captured our brand essence.',
      rating: 5,
      company: 'Tech Startup CEO',
    },
    {
      id: 2,
      client: 'John Smith',
      text: 'Transformed my brand visuals completely. The social media campaign designs drove incredible engagement and conversions.',
      rating: 5,
      company: 'Marketing Director',
    },
    {
      id: 3,
      client: 'Sarah Johnson',
      text: 'Amazing attention to detail and creative vision. The flyer designs for our event were absolutely stunning!',
      rating: 5,
      company: 'Event Coordinator',
    },
    {
      id: 4,
      client: 'Mike Chen',
      text: 'Outstanding conceptual design work. The branding ideas were innovative and perfectly aligned with our vision.',
      rating: 5,
      company: 'Creative Director',
    },
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    )
  }

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial()
    }, 5000) // Change every 5 seconds

    return () => clearInterval(interval)
  }, [currentIndex])

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-5 w-5 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ))
  }

  return (
    <section className='section-padding bg-gray-50'>
      <div className='container-max'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            Client Feedback
          </h2>
          <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
            What my clients say about working together
          </p>
        </motion.div>

        <div className='relative max-w-4xl mx-auto'>
          {/* Testimonial Cards */}
          <div className='relative overflow-hidden'>
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className='bg-white p-8 md:p-12 rounded-2xl shadow-lg'
            >
              <div className='flex items-start space-x-4'>
                <div className='flex-shrink-0'>
                  <div className='w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center'>
                    <Quote className='h-6 w-6 text-primary-600' />
                  </div>
                </div>
                <div className='flex-1'>
                  <div className='flex items-center mb-4'>
                    {renderStars(testimonials[currentIndex].rating)}
                  </div>
                  <blockquote className='text-lg md:text-xl text-gray-700 mb-6 italic'>
                    "{testimonials[currentIndex].text}"
                  </blockquote>
                  <div className='flex items-center justify-between'>
                    <div>
                      <cite className='not-italic font-semibold text-lg text-gray-900'>
                        {testimonials[currentIndex].client}
                      </cite>
                      <p className='text-gray-600'>
                        {testimonials[currentIndex].company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <div className='flex justify-center items-center mt-8 space-x-4'>
            <button
              onClick={prevTestimonial}
              className='w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary-50 transition-colors'
              aria-label='Previous testimonial'
            >
              <ChevronLeft className='h-5 w-5 text-gray-600' />
            </button>

            {/* Dots Indicator */}
            <div className='flex space-x-2'>
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-primary-600' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className='w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary-50 transition-colors'
              aria-label='Next testimonial'
            >
              <ChevronRight className='h-5 w-5 text-gray-600' />
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className='mt-16 grid grid-cols-1 md:grid-cols-3 gap-8'
        >
          <div className='text-center'>
            <div className='text-3xl font-bold text-primary-600 mb-2'>4.9</div>
            <div className='text-gray-600'>Average Rating</div>
          </div>
          <div className='text-center'>
            <div className='text-3xl font-bold text-primary-600 mb-2'>50+</div>
            <div className='text-gray-600'>Happy Clients</div>
          </div>
          <div className='text-center'>
            <div className='text-3xl font-bold text-primary-600 mb-2'>100%</div>
            <div className='text-gray-600'>Satisfaction Rate</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
