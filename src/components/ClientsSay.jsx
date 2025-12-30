// src/components/ClientsSay.jsx
import { useState } from 'react'
import {
  FiStar,
  FiChevronLeft,
  FiChevronRight,
  FiMessageCircle
} from 'react-icons/fi'
import '../styles/ClientsSay.css'

const ClientsSay = () => {
  const testimonials = [
    {
      name: 'Chemical Department Coordinator',
      role: 'Faculty',
      company: 'GoLeave',
      content:
        'GoLeave significantly simplified our departmental leave and OD approval process. The admin panel and workflow were well designed and easy to manage.',
      rating: 5,
      project: 'GoLeave – Leave Management System'
    },
    {
      name: 'Club Faculty Advisor',
      role: 'Faculty',
      company: 'EECC Club',
      content:
        'The EECC club website helped us manage events and announcements digitally. The site was clean, responsive, and easy for students to access.',
      rating: 5,
      project: 'EECC Club Website'
    },
    {
      name: 'Club Faculty Advisor',
      role: 'Faculty',
      company: 'CMC Club',
      content:
        'The CMC website improved our online presence and made event updates more organized. The project was delivered with clear structure and good UI.',
      rating: 5,
      project: 'CMC Club Website'
    },
    {
      name: 'Project Supervisor',
      role: 'Academic Mentor',
      company: 'Planning Bot',
      content:
        'The planning bot integrated with Google Sheets and WhatsApp was an innovative solution. Automating event-based notifications was implemented effectively.',
      rating: 5,
      project: 'Planning Bot – WhatsApp Integration'
    },
    {
      name: 'Business Owner',
      role: 'Rice Seller',
      company: 'Rice Business',
      content:
        'The rice e-commerce website made it easy to showcase products and receive orders online. It helped improve customer reach and business visibility.',
      rating: 5,
      project: 'Rice E-commerce Website'
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    )
  }

  return (
    <section className="clients-section">
      <div className="section-container">

        {/* Section Header */}
        <div className="section-header" data-aos="fade-up">
          <h2 className="section-subtitle">
            <span className="subtitle-line"></span>
            Testimonials
            <span className="subtitle-line"></span>
          </h2>
          <h3 className="section-title">
            Project <span className="highlight-text">Feedback</span>
          </h3>
          <p className="section-description">
            Feedback from academic, internal, and project-based clients who have used the systems and websites developed.
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="testimonial-container" data-aos="fade-up">
          <div className="testimonial-nav">
            <button className="nav-button nav-left" onClick={prevTestimonial}>
              <FiChevronLeft />
            </button>

            <div className="testimonial-slide">
              <div className="testimonial-card">
                <div className="testimonial-header">
                  <div className="client-info">
                    <div className="client-avatar">
                      <span className="avatar-text">
                        {testimonials[currentIndex].name.charAt(0)}
                      </span>
                    </div>

                    <div className="client-details">
                      <h4 className="client-name">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="client-role">
                        {testimonials[currentIndex].role}
                      </p>

                      <div className="client-project">
                        <FiMessageCircle />
                        <span>{testimonials[currentIndex].project}</span>
                      </div>
                    </div>
                  </div>

                  
                </div>

                <div className="testimonial-content">
                  <p>"{testimonials[currentIndex].content}"</p>
                </div>

                <div className="company-badge">
                  {testimonials[currentIndex].company}
                </div>
              </div>
            </div>

            <button className="nav-button nav-right" onClick={nextTestimonial}>
              <FiChevronRight />
            </button>
          </div>

          {/* Indicators */}
          <div className="testimonial-indicators">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`indicator ${
                  currentIndex === index ? 'active' : ''
                }`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default ClientsSay