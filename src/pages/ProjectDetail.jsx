import { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { FiArrowLeft, FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { useTheme } from '../context/ThemeContext'
import '../styles/ProjectDetail.css'
import G1 from '../assets/images/projects/G1.png'
import G2 from '../assets/images/projects/G2.png'
import G3 from '../assets/images/projects/G3.png'
import G4 from '../assets/images/projects/G4.png'


import EN1 from '../assets/images/projects/EN1.png'
import EN2 from '../assets/images/projects/EN2.png'
import EN3 from '../assets/images/projects/EN3.png'


import E1 from '../assets/images/projects/E1.png'
import E2 from '../assets/images/projects/E2.png'
import E3 from '../assets/images/projects/E3.png'

import C1 from '../assets/images/projects/C1.png'
import C2 from '../assets/images/projects/C2.png'
import C3 from '../assets/images/projects/C3.png'

import A1 from '../assets/images/projects/A1.png'
import A2 from '../assets/images/projects/A2.png'
import A3 from '../assets/images/projects/A3.png'
import A4 from '../assets/images/projects/A4.png'
import A5 from '../assets/images/projects/A5.png'

const ProjectDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { isDarkMode } = useTheme()
  const [selectedImage, setSelectedImage] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  const projectData = {
    1: {
      title: 'GoLeave',
      category: 'Leave Management System',
      description: 'A leave management system that streamlines the process of requesting, approving, and tracking employee leaves within an organization.',
      fullDescription: 'GoLeave is a comprehensive leave management solution designed to simplify the entire leave request process. With automated workflows, real-time notifications, and detailed analytics, it helps organizations manage their workforce efficiently. The system integrates seamlessly with existing HR systems and provides a user-friendly interface for both employees and managers.',
      technologies: ['React', 'CSS', 'Appscript', 'Firebase'],
      images: [
        G1,
        G2,
        G3,
        G4
      ],
      features: [
        'Easy leave request submission',
        'Manager approval workflow',
        'Real-time leave balance tracking',
        'Automated email notifications',
        'Calendar integration',
        'Multiple leave types support',
        'Leave history and reports',
        'Mobile responsive design'
      ],
      client: 'Kongu Engineering College',
      duration: '2 months',
      year: '2025',
      status: 'completed'
    },
    2: {
      title: 'Enthusia - Kec',
      category: 'Tech Fest Website',
      description: 'The biggest tech fest of Kongu Engineering College.',
      fullDescription: 'Enthusia is the flagship technical festival of Kongu Engineering College, bringing together innovative minds and cutting-edge technology. This comprehensive web platform features event registration, live countdown timers, event schedules, participant management, and real-time updates. The AI-powered chatbot assists users with queries and navigation throughout the website.',
      technologies: ['React', 'CSS', 'Appscript', 'Firebase', 'Ai'],
      images: [
        EN1,
        EN2,
        EN3
      ],
      features: [
        'Event registration and management',
        'Live countdown timers',
        'AI-powered chatbot assistance',
        'Real-time event updates',
        'Participant dashboard',
        'Event schedule and calendar',
        'Photo gallery and highlights',
        'Responsive design for all devices'
      ],
      client: 'Kongu Engineering College',
      duration: '2 months',
      year: '2025',
      status: 'completed'
    },
    3: {
      title: 'Energy & Environment Conservation Club',
      category: 'Official Club Website',
      description: 'Official website showcasing our mission, events, and sustainability initiatives on campus.',
      fullDescription: 'The Energy & Environment Conservation Club website serves as a digital platform to promote environmental awareness and sustainability initiatives on campus. Built with modern web technologies, it features engaging content about eco-friendly practices, upcoming events, volunteer opportunities, and educational resources. The website aims to inspire students to take action towards a greener future.',
      technologies: ['Html', 'CSS', 'JavaScript', 'Bootstrap'],
      images: [
        E1,
        E2,
        E3
      ],
      features: [
        'Mission and vision showcase',
        'Event calendar and registration',
        'Sustainability initiatives tracker',
        'Educational resources library',
        'Member profiles and testimonials',
        'Photo gallery of activities',
        'Newsletter subscription',
        'Contact and volunteer forms'
      ],
      client: 'Kongu Engineering College - E&E Club',
      duration: '1 month',
      year: '2025',
      status: 'completed'
    },
    4: {
      title: 'Cultural & Music Club - Kec',
      category: 'Cultural Club Website',
      description: 'Showcasing KEC\'s Cultural Excellence.',
      fullDescription: 'The Cultural & Music Club website celebrates the rich cultural heritage and artistic talents of Kongu Engineering College. This dynamic platform features event highlights, performance schedules, member showcases, and cultural news. With an elegant dark-themed design and smooth animations, it captures the essence of cultural excellence and artistic expression.',
      technologies: ['React', 'CSS', 'Appscript', 'Ai'],
      images: [
       C1,
       C2,
       C3
      ],
      features: [
        'Event showcase and highlights',
        'Performance video gallery',
        'Member talent profiles',
        'Event registration system',
        'Cultural news and updates',
        'AI-powered event recommendations',
        'Interactive event calendar',
        'Social media integration'
      ],
      client: 'Kongu Engineering College - Cultural Club',
      duration: '1 month',
      year: '2025',
      status: 'completed'
    },
    5: {
      title: 'SRI ANNAKAMATCHI TRADERS',
      category: 'E-Commerce Website',
      description: 'Built a responsive e-commerce website with secure checkout and easy navigation. Focused on a smooth experience.',
      fullDescription: 'SRI ANNAKAMATCHI TRADERS is a premium e-commerce platform specializing in rice varieties and agricultural products. The website features a comprehensive product catalog with detailed descriptions, secure payment processing, order tracking, and customer management. Built with a focus on user experience, it provides seamless navigation and smooth checkout process, making online shopping convenient for customers.',
      technologies: ['Html', 'CSS', 'JavaScript', 'Bootstrap', 'Node.js', 'MongoDB'],
      images: [
        A1,
        A2,
        A3,
        A4,
        A5
      ],
      features: [
        'Rice varieties product catalog',
        'Secure checkout system',
        'Order tracking and management',
        'Customer account dashboard',
        'Shopping cart functionality',
        'Payment gateway integration',
        'Product search and filters',
        'Responsive mobile design'
      ],
      client: 'Sri Annakamatchi Traders',
      duration: '1 month',
      year: '2024',
      status: 'completed'
    }
  }

  const project = projectData[id] || projectData[1]

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % project.images.length)
  }

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + project.images.length) % project.images.length)
  }

  const openLightbox = (index) => {
    setSelectedImage(index)
    setLightboxOpen(true)
  }

  return (
    <div className={`project-detail-page ${isDarkMode ? 'dark' : ''}`}>
      <div className="project-detail-container">
        {/* Header */}
        <div className="detail-header" data-aos="fade-down">
          <button className="back-button" onClick={() => navigate('/projects')}>
            <FiArrowLeft /> Back to Projects
          </button>
          <div className="project-title-section">
            <h1>{project.title}</h1>
            <p className="project-category">{project.category}</p>
          </div>
        </div>

        {/* Main Image Gallery */}
        <div className="main-image-section" data-aos="fade-up">
          <div className="large-image">
            <img 
              src={project.images[selectedImage]} 
              alt={`${project.title} - Image ${selectedImage + 1}`}
              onClick={() => openLightbox(selectedImage)}
            />
            {project.images.length > 1 && (
              <>
                <button className="nav-btn prev-btn" onClick={prevImage}>
                  <FiChevronLeft />
                </button>
                <button className="nav-btn next-btn" onClick={nextImage}>
                  <FiChevronRight />
                </button>
              </>
            )}
          </div>
          <div className="thumbnail-grid">
            {project.images.map((img, index) => (
              <div 
                key={index}
                className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                onClick={() => setSelectedImage(index)}
              >
                <img src={img} alt={`Thumbnail ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>

        {/* Project Info */}
        <div className="project-info-section">
          <div className="info-left" data-aos="fade-right">
            <h2>Project Overview</h2>
            <p>{project.fullDescription}</p>
            
            <h3>Key Features</h3>
            <ul className="features-list">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>

            
          </div>

          <div className="info-right" data-aos="fade-left">
            <div className="info-card">
              <h3>Project Details</h3>
              <div className="detail-item">
                <strong>Client:</strong>
                <span>{project.client}</span>
              </div>
              <div className="detail-item">
                <strong>Duration:</strong>
                <span>{project.duration}</span>
              </div>
              <div className="detail-item">
                <strong>Year:</strong>
                <span>{project.year}</span>
              </div>
              <div className="detail-item">
                <strong>Status:</strong>
                <span className={`status-badge ${project.status}`}>
                  {project.status === 'completed' ? '✓ Completed' : 'In Progress'}
                </span>
              </div>
            </div>

            <Link to="/contact" className="cta-button">
              Start Your Project
            </Link>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="lightbox" onClick={() => setLightboxOpen(false)}>
          <button className="close-lightbox" onClick={() => setLightboxOpen(false)}>
            <FiX />
          </button>
          <img 
            src={project.images[selectedImage]} 
            alt={`${project.title} - Full view`}
            onClick={(e) => e.stopPropagation()}
          />
          {project.images.length > 1 && (
            <>
              <button className="lightbox-nav prev" onClick={(e) => { e.stopPropagation(); prevImage(); }}>
                <FiChevronLeft />
              </button>
              <button className="lightbox-nav next" onClick={(e) => { e.stopPropagation(); nextImage(); }}>
                <FiChevronRight />
              </button>
            </>
          )}
          <div className="lightbox-counter">
            {selectedImage + 1} / {project.images.length}
          </div>
        </div>
      )}
    </div>
  )
}

export default ProjectDetail
