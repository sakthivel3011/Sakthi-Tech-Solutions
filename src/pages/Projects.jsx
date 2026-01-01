import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import '../styles/Projects.css'

const Projects = () => {
  const { isDarkMode } = useTheme()
  const navigate = useNavigate()
  const [selectedCategory, setSelectedCategory] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'web',
      image: '/projects/ecommerce.jpg',
      description: 'Full-featured online shopping platform with payment integration',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      status: 'completed'
    },
    {
      id: 2,
      title: 'Business Dashboard',
      category: 'dashboard',
      image: '/projects/dashboard.jpg',
      description: 'Real-time analytics and reporting dashboard for business insights',
      technologies: ['React', 'Chart.js', 'Firebase', 'Material-UI'],
      status: 'completed'
    },
    {
      id: 3,
      title: 'Restaurant App',
      category: 'mobile',
      image: '/projects/restaurant.jpg',
      description: 'Food ordering and delivery mobile application',
      technologies: ['React Native', 'Redux', 'Node.js', 'PostgreSQL'],
      status: 'completed'
    },
    {
      id: 4,
      title: 'Portfolio Website',
      category: 'web',
      image: '/projects/portfolio.jpg',
      description: 'Modern and responsive portfolio website with animations',
      technologies: ['React', 'Vite', 'CSS3', 'AOS'],
      status: 'completed'
    },
    {
      id: 5,
      title: 'Inventory System',
      category: 'software',
      image: '/projects/inventory.jpg',
      description: 'Complete inventory management system for retail businesses',
      technologies: ['React', 'Express', 'MySQL', 'PDF Generator'],
      status: 'completed'
    },
    {
      id: 6,
      title: 'Booking Platform',
      category: 'web',
      image: '/projects/booking.jpg',
      description: 'Hotel and travel booking management system',
      technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'Tailwind'],
      status: 'completed'
    },
    {
      id: 7,
      title: 'Fitness Tracker',
      category: 'mobile',
      image: '/projects/fitness.jpg',
      description: 'Health and fitness tracking mobile application',
      technologies: ['React Native', 'Firebase', 'Charts', 'AsyncStorage'],
      status: 'completed'
    },
    {
      id: 8,
      title: 'CRM System',
      category: 'software',
      image: '/projects/crm.jpg',
      description: 'Customer relationship management software',
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'Redis'],
      status: 'completed'
    }
  ]

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Apps' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'dashboard', name: 'Dashboards' },
    { id: 'software', name: 'Software' }
  ]

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <div className={`projects-page ${isDarkMode ? 'dark' : ''}`}>
      <div className="projects-container">
        {/* Header */}
        <div className="projects-header" data-aos="fade-down">
          <h1>Our Projects</h1>
          <p>Showcasing our successful digital solutions and innovations</p>
        </div>

        {/* Category Filter */}
        <div className="category-filter" data-aos="fade-up">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              onClick={() => navigate(`/project/${project.id}`)}
            >
              <div className="project-image">
                <img 
                  src={project.image} 
                  alt={project.title}
                  loading="lazy"
                />
                <div className="project-overlay">
                  <div className="project-overlay-content">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-badge">{tech}</span>
                  ))}
                </div>
                <div className="project-status">
                  <span className={`status-badge ${project.status}`}>
                    {project.status === 'completed' ? '✓ Completed' : 'In Progress'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
       
      </div>
    </div>
  )
}

export default Projects
