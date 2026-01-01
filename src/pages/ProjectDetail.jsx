import { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { FiArrowLeft, FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { useTheme } from '../context/ThemeContext'
import '../styles/ProjectDetail.css'

const ProjectDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { isDarkMode } = useTheme()
  const [selectedImage, setSelectedImage] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  const projectData = {
    1: {
      title: 'E-Commerce Platform',
      category: 'Web Application',
      description: 'A comprehensive e-commerce solution with advanced features including product management, shopping cart, secure checkout, payment integration, order tracking, and admin dashboard.',
      fullDescription: 'This full-featured e-commerce platform revolutionizes online shopping with its intuitive interface and powerful backend. Built with modern technologies, it provides seamless shopping experience with real-time inventory updates, multiple payment gateways, automated email notifications, and comprehensive analytics dashboard for business insights.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux', 'Express', 'JWT'],
      images: [
        '/projects/ecommerce.jpg',
        '/projects/ecommerce-1.jpg',
        '/projects/ecommerce-2.jpg',
        '/projects/ecommerce-3.jpg',
        '/projects/ecommerce-4.jpg'
      ],
      features: [
        'User authentication and authorization',
        'Product catalog with search and filters',
        'Shopping cart and wishlist',
        'Secure payment gateway integration',
        'Order management system',
        'Admin dashboard',
        'Real-time inventory tracking',
        'Customer reviews and ratings'
      ],
      client: 'Retail Business',
      duration: '3 months',
      year: '2024',
      status: 'completed'
    },
    2: {
      title: 'Business Dashboard',
      category: 'Analytics Dashboard',
      description: 'Real-time analytics and reporting dashboard providing comprehensive business insights with interactive charts, data visualization, and performance metrics.',
      fullDescription: 'An enterprise-grade dashboard that transforms raw data into actionable insights. Features real-time data updates, customizable widgets, advanced filtering, export capabilities, and role-based access control. Perfect for monitoring KPIs, sales metrics, and business performance.',
      technologies: ['React', 'Chart.js', 'Firebase', 'Material-UI', 'Redux', 'D3.js'],
      images: [
        '/projects/dashboard.jpg',
        '/projects/dashboard-1.jpg',
        '/projects/dashboard-2.jpg',
        '/projects/dashboard-3.jpg'
      ],
      features: [
        'Real-time data visualization',
        'Customizable dashboard widgets',
        'Advanced analytics and reporting',
        'Export data to PDF/Excel',
        'Role-based access control',
        'Interactive charts and graphs',
        'Performance monitoring',
        'Automated report generation'
      ],
      client: 'Corporate Enterprise',
      duration: '2 months',
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

            <h3>Technologies Used</h3>
            <div className="tech-stack">
              {project.technologies.map((tech, index) => (
                <span key={index} className="tech-badge">{tech}</span>
              ))}
            </div>
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
