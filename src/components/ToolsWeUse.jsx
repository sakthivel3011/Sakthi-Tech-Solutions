// src/components/ToolsWeUse.jsx
import { useState } from 'react'
import { FiTool, FiCode, FiDatabase, FiServer, FiTerminal } from 'react-icons/fi'
import { 
  SiReact, SiVite, SiNextdotjs, SiJavascript, SiHtml5, SiCss3, SiBootstrap,
  SiNodedotjs, SiFirebase, SiMongodb, SiMysql, SiPostgresql, SiExpress,
  SiNetlify, SiVercel, SiRailway,
  SiPython, SiC, SiCplusplus, SiOracle, SiGoogleappsscript,
  SiGit, SiGithub, SiFigma, SiDocker
} from 'react-icons/si'
import '../styles/ToolsWeUse.css'

const ToolsWeUse = () => {
  const tools = [
  {
    category: 'Frontend Development',
    icon: <FiCode />,
    tools: [
      { name: 'React', logo: <SiReact style={{ color: '#61DAFB' }} /> },
      { name: 'Vite', logo: <SiVite style={{ color: '#646CFF' }} /> },
      { name: 'Next.js', logo: <SiNextdotjs style={{ color: '#000000' }} /> },
      { name: 'JavaScript', logo: <SiJavascript style={{ color: '#F7DF1E' }} /> },
      { name: 'HTML5', logo: <SiHtml5 style={{ color: '#E34F26' }} /> },
      { name: 'CSS3', logo: <SiCss3 style={{ color: '#1572B6' }} /> },
      { name: 'Bootstrap', logo: <SiBootstrap style={{ color: '#7952B3' }} /> },
      { name: 'Figma', logo: <SiFigma style={{ color: '#F24E1E' }} /> }
    ]
  },
  {
    category: 'Backend & Database',
    icon: <FiDatabase />,
    tools: [
      { name: 'Node.js', logo: <SiNodedotjs style={{ color: '#339933' }} /> },
      { name: 'Express', logo: <SiExpress style={{ color: '#000000' }} /> },
      { name: 'Firebase', logo: <SiFirebase style={{ color: '#FFCA28' }} /> },
      { name: 'MongoDB', logo: <SiMongodb style={{ color: '#47A248' }} /> },
      { name: 'MySQL', logo: <SiMysql style={{ color: '#4479A1' }} /> },
      { name: 'PostgreSQL', logo: <SiPostgresql style={{ color: '#4169E1' }} /> }
    ]
  },
  {
    category: 'Hosting & Deployment',
    icon: <FiServer />,
    tools: [
      { name: 'Netlify', logo: <SiNetlify style={{ color: '#00C7B7' }} /> },
      { name: 'Vercel', logo: <SiVercel style={{ color: '#000000' }} /> },
      { name: 'Firebase', logo: <SiFirebase style={{ color: '#FFCA28' }} /> },
      { name: 'Railway', logo: <SiRailway style={{ color: '#0B0D0E' }} /> }
    ]
  },
  {
    category: 'Programming Languages',
    icon: <FiTerminal />,
    tools: [
      { name: 'Java', logo: <SiOracle style={{ color: '#F80000' }} /> },
      { name: 'Python', logo: <SiPython style={{ color: '#3776AB' }} /> },
      { name: 'C', logo: <SiC style={{ color: '#A8B9CC' }} /> },
      { name: 'C++', logo: <SiCplusplus style={{ color: '#00599C' }} /> }
    ]
  },
  {
    category: 'Automation & Tools',
    icon: <FiTool />,
    tools: [
      { name: 'Apps Script', logo: <SiGoogleappsscript style={{ color: '#4285F4' }} /> },
      { name: 'Git', logo: <SiGit style={{ color: '#F05032' }} /> },
      { name: 'GitHub', logo: <SiGithub style={{ color: '#181717' }} /> },
      { name: 'Docker', logo: <SiDocker style={{ color: '#2496ED' }} /> }
    ]
  }
];


  const [activeCategory, setActiveCategory] = useState(0)

  return (
    <section id="tools" className="tools-section">
      <div className="section-container">
        <div className="section-header" data-aos="fade-up">
          <h2 className="section-subtitle">
              <span className="subtitle-line"></span>
              Tools We Use
              <span className="subtitle-line"></span>
            </h2>
          <h3 className="section-title">
  Tools We <span className="highlight-text">Trust & Use</span>
</h3>
<p className="section-description">
  A quick look at the technologies and platforms we use daily to build reliable, high-quality solutions.
</p>

        </div>

        <div className="tools-categories" data-aos="fade-up">
          {tools.map((category, index) => (
            <button
              key={index}
              className={`category-tab ${activeCategory === index ? 'active' : ''}`}
              onClick={() => setActiveCategory(index)}
            >
              <span className="tab-icon">{category.icon}</span>
              {category.category}
            </button>
          ))}
        </div>

        <div className="tools-grid" data-aos="fade-up" data-aos-delay="200">
          {tools[activeCategory].tools.map((tool, index) => (
            <div key={index} className="tool-card">
              <div className="tool-logo">
                <div className="logo-circle">
                  {tool.logo}
                </div>
              </div>
              <div className="tool-content">
                <h4 className="tool-name">{tool.name}</h4>
                
              </div>
             
            </div>
          ))}
        </div>

        <div className="tools-all" data-aos="fade-up">
          <div className="all-tools-marquee">
            <div className="marquee-track">
              {tools.flatMap(category => category.tools).slice(0, 8).map((tool, index) => (
                <div key={index} className="tool-logo-mini">
                  <div className="mini-logo">{tool.logo}</div>
                  <span className="mini-name">{tool.name}</span>
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {tools.flatMap(category => category.tools).slice(0, 8).map((tool, index) => (
                <div key={"dup-"+index} className="tool-logo-mini">
                  <div className="mini-logo">{tool.logo}</div>
                  <span className="mini-name">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ToolsWeUse