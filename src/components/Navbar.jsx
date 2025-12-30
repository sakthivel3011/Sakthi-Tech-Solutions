// src/components/Navbar.jsx - Updated version with smooth scroll
import { useState } from 'react'
import { FiMenu, FiX, FiChevronDown, FiMoon, FiSun } from 'react-icons/fi'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import '../styles/Navbar.css'

const Navbar = ({ smoothScrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const { isDarkMode, toggleTheme } = useTheme()

  const navItems = [
    { name: 'Home', href: 'home' },
    { name: 'Services', href: 'services' },
    { name: 'About', href: 'about' },
    { 
      name: 'Solutions', 
      href: 'services',
      dropdown: [
        { name: 'Web Development', href: 'services' },
        { name: 'Web Apps & PWA', href: 'services' },
        { name: 'Admin Panels', href: 'services' },
        { name: 'Business Software', href: 'services' },
        { name: 'Hosting & Support', href: 'services' },
      ]
    },
    { name: 'Tools', href: 'tools' },
    { name: 'Evolution', href: 'evolution' },
    { name: 'Testimonials', href: 'testimonials' },
    { name: 'Contact', href: 'contact' },
    { name: 'Feedback', href: 'feedback' },

  ]

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setIsOpen(false)
    
    // If not on home page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/')
      // After navigating, scroll to section
      setTimeout(() => {
        const element = document.getElementById(href)
        if (element) {
          const offset = 100
          const elementPosition = element.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - offset
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          })
        }
      }, 300)
    } else {
      // Already on home page, just scroll to section
      smoothScrollToSection(e, href)
    }
  }

return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-brand">
          <div className="brand-logo">
            <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <img src="/icon.png" alt="Sakthi Tech Logo" className="logo-image" />
              <div className="brand-text">
                <h1>Sakthi Tech</h1>
                <p className="tagline">Powering Your Digital Growth</p>
              </div>
            </Link>
          </div>
        </div>

            {/* Desktop Navigation */}
            <div className="nav-links-desktop">
                {navItems.map((item) => (
                    <div key={item.name} className="nav-item-wrapper">
                        {item.dropdown ? (
                            <div 
                                className="nav-item dropdown-trigger"
                                onMouseEnter={() => setDropdownOpen(true)}
                                onMouseLeave={() => setDropdownOpen(false)}
                            >
                                {item.name} <FiChevronDown />
                                {dropdownOpen && (
                                    <div className="dropdown-menu">
                                        {item.dropdown.map((subItem) => (
                                            <Link 
                                                key={subItem.name} 
                                                to={subItem.href === 'feedback' ? '/feedback' : `#${subItem.href}`}
                                                className="dropdown-item"
                                                onClick={(e) => handleNavClick(e, subItem.href)}
                                            >
                                                {subItem.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ) : (
                            item.href === 'feedback' ? (
                              <Link 
                                to="/feedback" 
                                className="nav-item"
                                onClick={() => setIsOpen(false)}
                              >
                                {item.name}
                              </Link>
                            ) : item.href === 'home' ? (
                              <a 
                                href="/" 
                                className="nav-item"
                                onClick={(e) => {
                                  e.preventDefault()
                                  setIsOpen(false)
                                  navigate('/')
                                  setTimeout(() => {
                                    window.scrollTo({ top: 0, behavior: 'smooth' })
                                  }, 100)
                                }}
                              >
                                {item.name}
                              </a>
                            ) : (
                              <a 
                                href={`#${item.href}`} 
                                className="nav-item"
                                onClick={(e) => handleNavClick(e, item.href)}
                              >
                                {item.name}
                              </a>
                            )
                        )}
                    </div>
                ))}
                
            </div>

            {/* Mobile Menu Button */}
            <div className="nav-actions">
              <button 
                className="theme-toggle mobile-theme-toggle"
                onClick={toggleTheme}
                aria-label="Toggle dark mode"
                title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {isDarkMode ? <FiSun /> : <FiMoon />}
              </button>
              <button 
                  className="menu-toggle" 
                  onClick={() => setIsOpen(!isOpen)}
                  aria-label="Toggle menu"
                  aria-expanded={isOpen}
              >
                  {isOpen ? <FiX /> : <FiMenu />}
              </button>
            </div>

            {/* Mobile Navigation */}
            <div className={`nav-links-mobile ${isOpen ? 'active' : ''}`}>
                {navItems.map((item) => (
                    item.href === 'feedback' ? (
                      <Link 
                        key={item.name} 
                        to="/feedback" 
                        className="nav-item-mobile"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ) : item.href === 'home' ? (
                      <a 
                        key={item.name} 
                        href="/" 
                        className="nav-item-mobile"
                        onClick={(e) => {
                          e.preventDefault()
                          setIsOpen(false)
                          navigate('/')
                          setTimeout(() => {
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                          }, 100)
                        }}
                      >
                        {item.name}
                      </a>
                    ) : (
                      <a 
                        key={item.name} 
                        href={`#${item.href}`} 
                        className="nav-item-mobile"
                        onClick={(e) => handleNavClick(e, item.href)}
                      >
                        {item.name}
                      </a>
                    )
                ))}
             
            </div>
        </div>
    </nav>
)
}

export default Navbar

