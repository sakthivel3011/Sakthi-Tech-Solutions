import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  // Function to handle smooth scrolling to sections
  const smoothScrollToSection = (e, sectionId) => {
    if (e) {
      e.preventDefault()
    }
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 100 // Account for fixed navbar
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [])

  return (
    <>
      <Navbar smoothScrollToSection={smoothScrollToSection} />
      
      <main className="page-content">
        <Outlet />
      </main>
      
      <Footer />
    </>
  )
}

export default MainLayout
