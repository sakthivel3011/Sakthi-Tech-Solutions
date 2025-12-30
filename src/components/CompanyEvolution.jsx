// src/components/CompanyEvolution.jsx
import { useState } from 'react'
import {
  FiCalendar,
  FiTarget,
  FiUsers,
  FiAward,
  FiCheckCircle,
  FiStar,
  FiZap,
  FiGlobe
} from 'react-icons/fi'
import '../styles/CompanyEvolution.css'

const CompanyEvolution = () => {
  const milestones = [
    {
      year: '2022',
      icon: <FiCalendar />,
      title: 'Foundation',
      description:
        'Sakthi Tech Solutions was founded with a mission to deliver reliable and affordable web solutions.',
      achievements: [
        'First client project delivered',
        'Brand identity established'
      ]
    },
    {
      year: '2023',
      icon: <FiTarget />,
      title: 'Growth Phase',
      description:
        'Expanded services into full-stack development and modern web applications.',
      achievements: [
        'Multiple client projects completed',
        'Web apps & PWA services introduced'
      ]
    },
    {
      year: '2024',
      icon: <FiUsers />,
      title: 'Collaboration',
      description:
        'Collaborated with skilled freelancers to deliver scalable and efficient solutions.',
      achievements: [
        'Freelance collaboration network',
        'Improved project delivery workflow'
      ]
    },
    {
      year: '2025',
      icon: <FiAward />,
      title: 'Business Focus',
      description:
        'Focused on building business software, admin panels, and long-term client partnerships.',
      achievements: [
        'Business software solutions delivered',
        'High client satisfaction maintained'
      ]
    }
  ]

  const [activeMilestone, setActiveMilestone] = useState(0)

  return (
    <section className="evolution-section">
      <div className="section-container">

        {/* Section Header */}
        <div className="section-header" data-aos="fade-up">
          <h2 className="section-subtitle">
            <span className="subtitle-line"></span>
            Our Journey
            <span className="subtitle-line"></span>
          </h2>

          <h3 className="section-title">
            Company <span className="highlight-text">Evolution</span>
          </h3>

          <p className="section-description">
            From humble beginnings to becoming a reliable technology partner for startups and growing businesses.
          </p>
        </div>

        {/* Timeline */}
        <div className="evolution-timeline" data-aos="fade-up">
          <div className="timeline-track">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`timeline-point ${
                  activeMilestone === index ? 'active' : ''
                } ${index < activeMilestone ? 'completed' : ''}`}
                onClick={() => setActiveMilestone(index)}
              >
                <div className="point-circle">
                  <div className="point-icon">{milestone.icon}</div>
                </div>
                <span className="point-year">{milestone.year}</span>
              </div>
            ))}
            <div className="timeline-line"></div>
          </div>

          {/* Active Milestone Content */}
          <div
            className="milestone-content"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="milestone-header">
              <h3 className="milestone-title">
                {milestones[activeMilestone].title}
              </h3>
              <div className="milestone-year">
                {milestones[activeMilestone].year}
              </div>
            </div>

            <p className="milestone-description">
              {milestones[activeMilestone].description}
            </p>

            <div className="milestone-achievements">
              {milestones[activeMilestone].achievements.map(
                (achievement, idx) => (
                  <div key={idx} className="achievement-item">
                    <div className="achievement-check">
                      <FiCheckCircle />
                    </div>
                    <span>{achievement}</span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default CompanyEvolution
