// src/components/Services.jsx
import { FiGlobe, FiSmartphone, FiBarChart2, FiServer, FiTool, FiLifeBuoy } from 'react-icons/fi'
import { useEffect, useRef } from 'react'
import '../styles/Services.css'
import dev from '../assets/images/services/dev.gif'
import apps from '../assets/images/services/apps.gif'
import admin from '../assets/images/services/Admin.gif'
import business from '../assets/images/services/Business.gif'
import hosting from '../assets/images/services/hosting.gif'
import main from '../assets/images/services/main.gif'


const Services = ({ smoothScrollToSection }) => {
const services = [
  {
    icon: <FiGlobe />,
    title: 'Web Development',
    slug: 'web-development',
    description: 'Fast, secure, and responsive websites designed for business growth.',
    features: [
      'Business & portfolio websites',
      'Responsive, SEO-friendly design'
    ],
    image: dev
  },
  {
    icon: <FiSmartphone />,
    title: 'Web Applications & PWA',
    slug: 'web-applications',
    description: 'Modern web applications and installable PWAs with powerful features.',
    features: [
      'Custom web applications',
      'Installable Progressive Web Apps'
    ],
    image: apps
  },
  {
    icon: <FiBarChart2 />,
    title: 'Admin Panel Development',
    slug: 'admin-panel',
    description: 'Efficient admin dashboards to manage users, data, and operations.',
    features: [
      'Admin dashboards',
      'User & data management'
    ],
    image: admin
  },
  {
    icon: <FiTool />,
    title: 'Business Software Solutions',
    slug: 'business-software',
    description: 'Custom software solutions tailored to your business workflows.',
    features: [
      'Billing & invoicing systems',
      'Custom business tools'
    ],
    image: business
  },
  {
    icon: <FiServer />,
    title: 'Hosting & Deployment',
    slug: 'hosting-deployment',
    description: 'Secure hosting and smooth deployment with optimized performance.',
    features: [
      'Domain & hosting setup',
      'Secure deployment & SSL'
    ],
    image: hosting
  },
  {
    icon: <FiLifeBuoy />,
    title: 'Maintenance & Support',
    slug: 'maintenance-support',
    description: 'Reliable support to keep your applications stable and updated.',
    features: [
      'Bug fixes & updates',
      'Ongoing technical support'
    ],
    image: main
  }
];


  const gifRefs = useRef([])

  useEffect(() => {
    // Reload GIFs every 2 seconds to restart animation
    const interval = setInterval(() => {
      gifRefs.current.forEach((img) => {
        if (img) {
          const src = img.src
          img.src = ''
          img.src = src
        }
      })
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="services" className="services-section">
      <div className="section-container">
        <div className="section-header" data-aos="fade-up">
          <h2 className="section-subtitle">
              <span className="subtitle-line"></span>
              Our Services
              <span className="subtitle-line"></span>
            </h2>
          <h3 className="section-title">
  Digital Solutions That <span className="highlight-text">Drive Growth</span>
</h3>
<p className="section-description">
  Comprehensive web and software solutions tailored to meet your business needs and deliver real results.
</p>

        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="service-image-wrapper">
                <img 
                  ref={(el) => (gifRefs.current[index] = el)}
                  src={service.image} 
                  alt={service.title} 
                  className="service-image"
                />
              </div>
              
              <h4 className="service-title">{service.title}</h4>
              <p className="service-description">{service.description}</p>
              
              <div className="service-features">
                {service.features.map((feature, idx) => (
                  <span key={idx} className="feature-tag">
                    {feature}
                  </span>
                ))}
              </div>
              
              <a href={`/service/${service.slug}`} className="service-cta">
                Learn More <span className="arrow">→</span>
              </a>
            </div>
          ))}
        </div>

        <div className="services-cta" data-aos="fade-up">
          <div className="cta-card">
            <div className="cta-content">
              <h3>Ready to Transform Your Digital Presence?</h3>
              <p>Let's discuss how we can help achieve your business goals</p>
            </div>
            <button className="btn-primary" onClick={(e) => smoothScrollToSection(e, 'contact')}>Get Free Consultation</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services