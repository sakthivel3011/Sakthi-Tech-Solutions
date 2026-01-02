import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import '../styles/Projects.css'

import G from '../assets/images/projects/G1.png'
import EN from '../assets/images/projects/EN1.png'
import E from '../assets/images/projects/E1.png'
import C from '../assets/images/projects/C1.png'
import A from '../assets/images/projects/A1.png'

const Projects = () => {
  const { isDarkMode } = useTheme()
  const navigate = useNavigate()
  const [selectedCategory, setSelectedCategory] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'GoLeave',
      category: 'web',
      image: G,
      description: 'A leave management system that streamlines the process of requesting, approving, and tracking employee leaves within an organization.',
      technologies: ['React', 'CSS', 'Appscript', 'Firebase'],
      status: 'completed'
    },
    {
      id: 2,
      title: 'Enthusia - Kec',
      category: 'web',
      image: EN,
      description: 'The biggest tech fest of Kongu Engineering College. An annual event that showcases technological innovations and hosts various competitions and workshops.',
      technologies: ['React', 'CSS', 'Appscript', 'Firebase', 'Ai'],
      status: 'completed'
    },
    {
      id: 3,
      title: 'Energy & Environment Conservation Club',
      category: 'web',
      image: E,
      description: 'Official website showcasing our mission, events, and sustainability initiatives on campus.',
      technologies: ['Html', 'CSS', 'JavaScript', 'Bootstrap'],
      status: 'completed'
    },
    {
      id: 4,
      title: 'Cultural & Music Club - Kec',
      category: 'web',
      image: C,
      description: 'Showcasing KEC\'s Cultural Excellence.Highlighting events, achievements, and member talents.',
      technologies: ['React', 'CSS', 'Appscript', 'Ai'],
      status: 'completed'
    },
    {
      id: 5,
      title: 'SRI ANNAKAMATCHI TRADERS',
      category: 'web',
      image: A,
      description: 'Built a responsive e-commerce website with secure checkout and easy navigation. Focused on a smooth.',
      technologies: ['Html', 'Bootstrap', 'Node.js', 'MongoDB'],
      status: 'completed'
    }
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
