// src/pages/Home.jsx
import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import ToolsWeUse from '../components/ToolsWeUse'
import CompanyEvolution from '../components/CompanyEvolution'
import ClientsSay from '../components/ClientsSay'
import Contact from '../pages/Contact'

import '../styles/Home.css'

const Home = () => {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    // Smooth scroll function for anchor links
    const smoothScrollToSection = (e, sectionId) => {
      e.preventDefault()
      const element = document.getElementById(sectionId)
      if (element) {
        const offset = 80 // Account for fixed navbar
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - offset

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
        
        // Close mobile menu if open
        const mobileMenu = document.querySelector('.mobile-menu')
        if (mobileMenu?.classList.contains('active')) {
          mobileMenu.classList.remove('active')
        }
      }
    }

    // Add event listeners to all smooth scroll links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        const href = anchor.getAttribute('href')
        if (href !== '#') {
          smoothScrollToSection(e, href.substring(1))
        }
      })
    })

    // Handle back-to-top button visibility
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true)
      } else {
        setShowBackToTop(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', smoothScrollToSection)
      })
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const smoothScrollToSection = (e, sectionId) => {
    e.preventDefault()
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="home-container">
      <Navbar smoothScrollToSection={smoothScrollToSection} />
      
      <main>
        <Hero smoothScrollToSection={smoothScrollToSection} />
        
        <section id="about">
          <About smoothScrollToSection={smoothScrollToSection} />
        </section>
        
        <section id="services">
          <Services smoothScrollToSection={smoothScrollToSection} />
        </section>
        
        <section id="tools">
          <ToolsWeUse />
        </section>
        
        <section id="evolution">
          <CompanyEvolution />
        </section>
        
        <section id="testimonials">
          <ClientsSay />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
        
       
      </main>
      
     
      {/* Back to Top Button */}
      
    </div>
  )
}

export default Home