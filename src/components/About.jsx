// src/components/About.jsx
import { FiCheckCircle, FiUsers, FiTarget, FiAward, FiCode, FiSmartphone, FiTool, FiZap, FiShield, FiTrendingUp, FiMonitor } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import '../styles/About.css'

const About = () => {



  return (
    <section id="about" className="about-section">
      {/* Background Elements */}
      
      

      <div className="section-container">
        <div className="section-header" data-aos="fade-up">
          <div className="section-header-wrapper">
            <h2 className="section-subtitle">
              <span className="subtitle-line"></span>
              Who We Are
              <span className="subtitle-line"></span>
            </h2>
            <h3 className="section-title">
             Crafting Digital Excellence with <br/>
            <span className="brand-name"> Sakthi Tech Solutions</span>
            </h3>

            <p className="section-description">
              A freelance technology brand founded by Sakthivel, delivering reliable and scalable
              web and software solutions for businesses and startups.
            </p>
          </div>
        </div>

        <div className="about-content">
          <div className="about-text" data-aos="fade-right">
            <div className="about-card">
              <h4 className="about-card-title">Our Story</h4>
              <div className="about-content-wrapper">
                <div className="text-column">
                  <p className="about-paragraph">
                   Sakthi Tech Solutions is a freelance technology brand founded by Sakthivel, delivering reliable and scalable websites, web applications, PWAs, admin panels, and custom business software for startups and businesses, with a transparent, client-focused process focused on performance, long-term growth, and ongoing support.
                  </p>
                 
                </div>
                
              </div>
            </div>

            

            

            <div className="about-cta">
              <Link to="/about-us" className="btn-primary">
                More About Us
              </Link>
            </div>
          </div>

          <div className="about-visual" data-aos="fade-left" data-aos-delay="200">
            <div className="visual-container">
              {/* Floating Logo */}
              <div className="floating-logo-container">
                <div className="logo-ring ring-1"></div>
                <div className="logo-ring ring-2"></div>
                <div className="logo-ring ring-3"></div>
                <img 
                  src="/logofull.png" 
                  alt="Sakthi Tech Solutions Logo" 
                  className="about-logo"
                />
              </div>

              {/* Tech Stack Icons */}
              


              {/* Achievement Badge */}
              
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About