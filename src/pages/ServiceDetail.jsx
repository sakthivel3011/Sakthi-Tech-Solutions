// src/pages/ServiceDetail.jsx
import { useParams, Link } from 'react-router-dom'
import { FiGlobe, FiSmartphone, FiBarChart2, FiServer, FiTool, FiLifeBuoy, FiArrowLeft, FiCheckCircle, FiTarget } from 'react-icons/fi'
import '../styles/ServiceDetail.css'
import dev from '../assets/images/services/dev.gif'
import apps from '../assets/images/services/apps.gif'
import admin from '../assets/images/services/Admin.gif'
import business from '../assets/images/services/Business.gif'
import hosting from '../assets/images/services/hosting.gif'
import main from '../assets/images/services/main.gif'

const ServiceDetail = () => {
  const { slug } = useParams()

  const servicesData = {
    'web-development': {
      icon: <FiGlobe />,
      title: 'Web Development',
      image: dev,
      shortDescription: 'Professional websites that are fast, secure, and designed to convert your visitors into customers.',
      longDescription: `At Sakthi Tech Solutions, we specialize in creating modern, responsive, and high-performance websites tailored to your business needs. Whether you need a simple business website, a complex e-commerce platform, or a custom portfolio site, we deliver solutions that not only look great but also drive results.

Our web development process focuses on creating user-friendly interfaces, ensuring fast loading times, and implementing SEO best practices from the ground up. We use the latest technologies and frameworks to build websites that are scalable, secure, and easy to maintain.`,
      features: [
  'Custom responsive website design',
  'Business & corporate websites',
  'E-commerce platforms',
  'SEO-friendly architecture',
  'Fast loading performance',
  'Mobile-first approach'
],
      benefits: [
        'Increased online visibility and brand recognition',
        'Better user experience leading to higher conversions',
        'Scalable architecture for future growth',
        'Search engine optimized for better rankings',
        'Responsive design works on all devices',
        'Secure and reliable infrastructure'
      ]
    },
    'web-applications': {
      icon: <FiSmartphone />,
      title: 'Web Applications & PWA',
      image: apps,
      shortDescription: 'Custom web applications and Progressive Web Apps (installable) with modern features.',
      longDescription: `We build powerful web applications and Progressive Web Apps (PWAs) that deliver native app-like experiences directly through the browser. Our custom web applications are designed to streamline your business operations, enhance user engagement, and provide seamless functionality across all devices.

Progressive Web Apps combine the best of web and mobile apps, offering offline functionality, push notifications, and the ability to install on users' devices without going through app stores. This provides a cost-effective alternative to traditional mobile app development while maintaining high performance and user experience.`,
      features: [
        'Custom web application development',
        'Progressive Web Apps (PWA)',
        'Installable on mobile devices',
        'Offline functionality',
        'Push notifications',
        'Secure user authentication',
        'Real-time data synchronization',
        'API integration',
        'Cloud-based architecture',
        'Role-based access control'
      ],
      benefits: [
        'Lower development costs compared to native apps',
        'Works across all platforms and devices',
        'Improved performance and speed',
        'Enhanced user engagement',
        'Reduced data usage with offline capabilities',
        'Easy updates without app store approval'
      ]
    },
    'admin-panel': {
      icon: <FiBarChart2 />,
      title: 'Admin Panel Development',
      image: admin,
      shortDescription: 'Powerful admin dashboards to manage your data, users, and business operations efficiently.',
      longDescription: `Our admin panel solutions provide you with complete control over your business operations. We create intuitive, feature-rich dashboards that make it easy to manage users, content, data, and various aspects of your digital platform. Each admin panel is custom-built to match your specific workflow and business requirements.

From simple content management systems to complex enterprise dashboards with advanced analytics and reporting, we deliver solutions that enhance productivity and streamline your operations. Our admin panels are designed with security in mind, ensuring that sensitive data remains protected.`,
      features: [
        'Custom admin dashboard design',
        'User & role management',
        'Data management systems',
        'Content management capabilities',
        'Analytics & reporting tools',
        'Real-time monitoring',
        'Activity logs & audit trails',
        'Advanced search & filtering',
        'Bulk operations support',
        'Export data functionality'
      ],
      benefits: [
        'Centralized control of your platform',
        'Improved operational efficiency',
        'Better data insights and decision making',
        'Enhanced security with role-based access',
        'Time-saving automation features',
        'Scalable for growing businesses'
      ]
    },
    'business-software': {
      icon: <FiTool />,
      title: 'Business Software Solutions',
      image: business,
      shortDescription: 'Custom software tailored to your business needs, automating workflows and improving efficiency.',
      longDescription: `We develop custom business software solutions that automate repetitive tasks, streamline workflows, and improve overall operational efficiency. Whether you need billing software, inventory management systems, CRM tools, or custom business applications, we create solutions that are perfectly aligned with your business processes.

Our approach involves understanding your unique challenges and requirements, then designing and implementing software that addresses those specific needs. We focus on creating intuitive, user-friendly interfaces that require minimal training while delivering maximum productivity.`,
      features: [
        'Billing & invoicing software',
        'Inventory management systems',
        'CRM (Customer Relationship Management)',
        'Custom business tools',
        'Workflow automation',
        'Document management systems',
        'Reporting & analytics',
        'Integration with existing systems',
        'Cloud-based or on-premise deployment',
        'Multi-user support'
      ],
      benefits: [
        'Reduced manual work and errors',
        'Improved productivity and efficiency',
        'Better data accuracy and consistency',
        'Cost savings through automation',
        'Scalable solutions that grow with your business',
        'Competitive advantage through custom features'
      ]
    },
    'hosting-deployment': {
      icon: <FiServer />,
      title: 'Hosting & Deployment',
      image: hosting,
      shortDescription: 'Complete hosting setup and deployment services with optimized performance and security.',
      longDescription: `We handle all aspects of hosting and deployment for your web applications, ensuring optimal performance, security, and reliability. From domain registration to SSL certificates, from server configuration to continuous deployment pipelines, we take care of everything so you can focus on your business.

Our hosting solutions utilize modern cloud platforms like Netlify, Vercel, Firebase, AWS, and Azure, providing scalability, high availability, and excellent performance. We implement best practices for security, backup, and disaster recovery to ensure your applications are always up and running.`,
      features: [
        'Domain registration & DNS setup',
        'SSL certificate installation',
        'Cloud hosting on Netlify, Vercel, Firebase',
        'Custom server configuration',
        'CDN setup for faster loading',
        'Automated deployment pipelines',
        'Performance optimization',
        'Security hardening',
        'Regular backups',
        'Monitoring & uptime tracking'
      ],
      benefits: [
        'Fast loading times with global CDN',
        'High availability and reliability',
        'Enhanced security with SSL and firewall',
        'Scalable infrastructure',
        'Reduced downtime with automated deployments',
        'Peace of mind with regular backups'
      ]
    },
    'maintenance-support': {
      icon: <FiLifeBuoy />,
      title: 'Maintenance & Support',
      image: main,
      shortDescription: 'Ongoing technical support and maintenance to keep your applications running smoothly.',
      longDescription: `Our maintenance and support services ensure that your websites and applications continue to run smoothly long after launch. We provide ongoing technical support, bug fixes, security updates, and feature enhancements to keep your digital assets up-to-date and performing at their best.

Technology evolves rapidly, and so do security threats. Our maintenance services include regular updates, security patches, performance monitoring, and optimization. We're here to help you whenever issues arise and to implement new features as your business needs grow.`,
      features: [
        'Bug fixes & troubleshooting',
        'Security updates & patches',
        'Performance monitoring & optimization',
        'Feature enhancements',
        'Technical support',
        'Content updates',
        'Database maintenance',
        'Backup management',
        'Analytics & reporting',
        'Emergency support'
      ],
      benefits: [
        'Reduced downtime and technical issues',
        'Enhanced security and protection',
        'Improved performance over time',
        'Quick resolution of issues',
        'Regular updates keep your software current',
        'Focus on your business while we handle the tech'
      ]
    }
  }

  const service = servicesData[slug]

  if (!service) {
    return (
      <div className="service-detail">
        <div className="section-container">
          <h2>Service not found</h2>
         
        </div>
      </div>
    )
  }

  return (
    <section className="service-detail">
      <div className="section-container">
        

        <div className="service-detail-header">
          <div className="service-detail-content">
            <div className="service-icon-large">
              {service.icon}
            </div>
            <h1 className="service-detail-title">{service.title}</h1>
            <p className="service-detail-subtitle">{service.shortDescription}</p>
          </div>
          <div className="service-detail-image">
            <div className="window-dots">
              <span className="dot dot-red"></span>
              <span className="dot dot-yellow"></span>
              <span className="dot dot-green"></span>
            </div>
            <img src={service.image} alt={service.title} />
          </div>
        </div>

        <div className="service-detail-body">
          <div className="service-description-section">
            <h2>Overview</h2>
            <p className="service-long-description">{service.longDescription}</p>
          </div>

          <div className="service-features-section">
            <h2>What We Offer</h2>
            <div className="features-grid-horizontal">
              {service.features.map((feature, index) => (
                <div key={index} className="feature-card-horizontal">
                  <FiCheckCircle className="feature-icon-horizontal" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="service-benefits-section">
            <h2>Key Benefits</h2>
            <div className="benefits-grid">
              {service.benefits.map((benefit, index) => (
                <div key={index} className="benefit-card">
                  <FiTarget className="benefit-icon" />
                  <p>{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          
        </div>
      </div>
    </section>
  )
}

export default ServiceDetail
