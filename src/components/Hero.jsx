// src/components/Hero.jsx
import { FiArrowRight, FiPlayCircle, FiZap, FiGlobe, FiSmartphone, FiLayout } from 'react-icons/fi'
import '../styles/Hero.css'

const Hero = ({ smoothScrollToSection }) => {
  const handleScrollToContact = (e) => {
    smoothScrollToSection(e, 'contact')
  }

  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <div className="hero-content" data-aos="fade-up">
          <div className="hero-badge">
            <span className="badge-text"><FiZap className="badge-icon" /> Sakthi Tech Solutions</span>
          </div>
          
          <h1 className="hero-title">
            Transform Your Vision Into  
            <span className="highlight-text">. Digital Reality</span>
          </h1>
          
          <p className="hero-description">
            We craft cutting-edge web and software solutions that drive business growth, 
            enhance user engagement, and deliver measurable results for startups and enterprises.
          </p>
          
          <div className="hero-buttons">
            <button className="btn-primary" onClick={handleScrollToContact}>
              Start Project <FiArrowRight className="btn-icon" />
            </button>
            <button className="btn-secondary" onClick={(e) => smoothScrollToSection(e, 'services')}>
              <FiPlayCircle className="btn-icon" /> Our Services
            </button>
          </div>
          
          <div className="hero-stats">
            <div className="stat-item">
              <h3>10+</h3>
              <p>Projects Delivered</p>
            </div>
            <div className="stat-item">
              <h3>100%</h3>
              <p>Client Satisfaction</p>
            </div>
            <div className="stat-item">
              <h3>24/7</h3>
              <p>Support</p>
            </div>
          </div>
        </div>
        
        <div className="hero-visual" data-aos="fade-left" data-aos-delay="300">
          
          <div className="hero-3d-container">
            <div className="cube">
              <div className="cube-face front"><img src="/icon.png" alt="Logo" className="cube-logo" /></div>
              <div className="cube-face back"><FiLayout /></div>
              <div className="cube-face right"><FiPlayCircle /></div>
              <div className="cube-face left"><FiZap /></div>
              <div className="cube-face top"><FiSmartphone /></div>
              <div className="cube-face bottom"><FiGlobe /></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Animated Background Elements */}
      <div className="hero-bg-elements">
        <div className="bg-circle circle-1"></div>
        <div className="bg-circle circle-2"></div>
        <div className="bg-circle circle-3"></div>
      </div>
    </section>
  )
}

export default Hero