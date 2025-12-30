// src/pages/AboutDetail.jsx
import { Link } from 'react-router-dom'
import { FiArrowLeft, FiCheckCircle, FiTarget, FiUsers, FiTrendingUp, FiAward, FiZap } from 'react-icons/fi'
import '../styles/AboutDetail.css'
import aboutImage from '/logoletter.png'

const AboutDetail = () => {
  const whyChooseUs = [
    {
      icon: <FiUsers />,
      title: 'Client-Centric Approach',
      description: 'We prioritize your needs and work closely with you throughout the development process.'
    },
    {
      icon: <FiZap />,
      title: 'Fast Performance',
      description: 'Optimized solutions that deliver speed and efficiency for better user experience.'
    },
    {
      icon: <FiTarget />,
      title: 'Scalable Solutions',
      description: 'Build applications that grow with your business and adapt to future needs.'
    },
    {
      icon: <FiAward />,
      title: 'Quality Focused',
      description: 'Committed to delivering high-quality code and maintainable solutions.'
    },
    {
      icon: <FiTrendingUp />,
      title: 'Growth Oriented',
      description: 'Strategic development approach focused on long-term business growth.'
    },
    {
      icon: <FiCheckCircle />,
      title: 'Reliable Support',
      description: 'Ongoing support and maintenance to keep your applications running smoothly.'
    }
  ]

  const ourValues = [
    'Transparency in every step of development',
    'Quality over quantity in deliverables',
    'Client satisfaction as top priority',
    'Continuous learning and improvement',
    'Ethical business practices',
    'Innovation and creativity in solutions'
  ]

  const expertise = [
    'Web Development (React, Next.js, Vue)',
    'Progressive Web Apps (PWA)',
    'Admin Panel Development',
    'Business Software Solutions',
    'API Development & Integration',
    'Cloud Hosting & Deployment',
    'Database Design & Management',
    'UI/UX Design & Development',
    
    'Performance Optimization'
  ]

  return (
    <section className="about-detail">
      <div className="section-container">
       

        <div className="about-detail-header">
          <div className="about-detail-content">
            <h1 className="about-detail-title">About <span className="brand-name">Sakthi Tech Solutions</span></h1>
            <p className="about-detail-subtitle">
              Empowering businesses with reliable, scalable, and innovative technology solutions.
            </p>
          </div>
          <div className="about-detail-image">
            <div className="window-dots">
              <span className="dot dot-red"></span>
              <span className="dot dot-yellow"></span>
              <span className="dot dot-green"></span>
            </div>
            <img src={aboutImage} alt="Sakthi Tech Solutions" />
          </div>
        </div>

        <div className="about-detail-body">
          <div className="about-story-section">
            <h2>Our Story</h2>
            <p className="about-long-description">
              Sakthi Tech Solutions is a freelance technology brand founded by Sakthivel, dedicated to delivering reliable and scalable web and software solutions for startups, small businesses, and growing teams.
              
              What started as a passion for creating meaningful digital experiences has evolved into a professional service offering comprehensive technology solutions. With a deep understanding of modern web technologies and business needs, we help organizations build a strong digital presence and streamline their operations.
              
              Our approach combines technical expertise with a genuine commitment to understanding and solving your unique challenges. We believe that great software is not just about code—it's about creating solutions that truly serve your business goals and your users.
            </p>
          </div>

          <div className="about-mission-section">
            <h2>Our Mission</h2>
            <p className="mission-text">
              To empower businesses of all sizes with technology solutions that are reliable, scalable, and built for long-term success. We strive to make quality software development accessible and deliver value that goes beyond code.
            </p>
          </div>

          <div className="why-choose-section">
            <h2>Why Choose Us</h2>
            <div className="why-choose-grid">
              {whyChooseUs.map((item, index) => (
                <div key={index} className="why-choose-card">
                  <div className="why-icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="expertise-section">
            <h2>Our Expertise</h2>
            <div className="expertise-grid">
              {expertise.map((item, index) => (
                <div key={index} className="expertise-card">
                  <FiCheckCircle className="expertise-icon" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="values-section">
            <h2>Our Values</h2>
            <div className="values-grid">
              {ourValues.map((value, index) => (
                <div key={index} className="value-card">
                  <FiTarget className="value-icon" />
                  <p>{value}</p>
                </div>
              ))}
            </div>
          </div>

          
        </div>
      </div>
    </section>
  )
}

export default AboutDetail
