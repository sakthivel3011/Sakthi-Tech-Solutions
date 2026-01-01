import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'

import { ThemeProvider } from './context/ThemeContext'
import MainLayout from './layouts/MainLayout'
// Importing Pages
import Home from './pages/Home'
import ServiceDetail from './pages/ServiceDetail'
import AboutDetail from './pages/AboutDetail'
import Feedback from './pages/Feedback'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Terms from './pages/Terms'
import CookiePolicy from './pages/CookiePolicy'
import Licensing from './pages/Licensing'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'

// Importing Components
import Chatbot from './components/Chatbot'

import './root.css'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out',
      once: true,
      offset: 100,
      delay: 100,
    })

    const handleScroll = () => {
      const backToTopButton = document.querySelector('.back-to-top')
      if (window.scrollY > 300) {
        backToTopButton?.classList.add('visible')
      } else {
        backToTopButton?.classList.remove('visible')
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <ThemeProvider>
      <Router>
        <Routes>
          {/* Layout Route */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/Service/:slug" element={<ServiceDetail />} />
            <Route path="/about-us" element={<AboutDetail />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<Terms />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="/licensing" element={<Licensing />} />
          </Route>
        </Routes>
        <Chatbot />
      </Router>
    </ThemeProvider>
  )
}

export default App
