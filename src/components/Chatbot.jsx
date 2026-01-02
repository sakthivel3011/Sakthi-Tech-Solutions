import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiMessageCircle, FiX, FiSend, FiPhone, FiClock, FiDollarSign, FiExternalLink } from 'react-icons/fi'
import { MdRocketLaunch } from 'react-icons/md'
import { AiOutlineAppstore } from 'react-icons/ai'
import { useTheme } from '../context/ThemeContext'
import '../styles/Chatbot.css'

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [userName, setUserName] = useState('')
  const [isWaitingForName, setIsWaitingForName] = useState(false)
  const [messages, setMessages] = useState([])
  const [inputValue, setInputValue] = useState('')
  const messagesEndRef = useRef(null)
  const { isDarkMode } = useTheme()
  const navigate = useNavigate()

  // Initialize chatbot with name from localStorage
  useEffect(() => {
    const storedName = localStorage.getItem('chatbotUserName')
    if (storedName) {
      setUserName(storedName)
      setMessages([
        {
          type: 'bot',
          text: `Welcome back, ${storedName}! How can I assist you today?`,
          timestamp: new Date()
        }
      ])
    } else {
      setMessages([
        {
          type: 'bot',
          text: "Hello! Welcome to Sakthi Tech Solutions. I'm your virtual assistant. May I know your name?",
          timestamp: new Date()
        }
      ])
      setIsWaitingForName(true)
    }
  }, [])

  // Quick access buttons
  const quickButtons = [
    
    { label: 'Contact', keyword: 'contact', icon: <FiPhone /> },
   
    { label: 'Pages', keyword: 'pages', icon: <FiClock /> }
  ]

  // Knowledge base with keywords
  const knowledgeBase = {
    services: {
      keywords: ['service', 'services', 'what do you do', 'what you offer', 'offerings'],
      response: `We offer comprehensive digital solutions:

• Web Development 
• Progressive Web Apps (PWA) 
• Admin Panels 
• Business Software 
• Hosting & Support 

Would you like to know more about any specific service?`
    },
    pages: {
      keywords: ['pages', 'page', 'navigate', 'navigation', 'go to', 'show me', 'where is'],
      response: ` Website Pages:

 Home - /
 About Us - /about-us
 Services - /services (on Home page)
 Projects - /projects
 Contact - /contact
 Feedback - /feedback

 Legal Pages:
• Privacy Policy - /privacy-policy
• Terms & Conditions - /terms-and-conditions
• Cookie Policy - /cookie-policy
• Licensing - /licensing

Click the buttons below to navigate!`,
      showPageButtons: true
    },
    home: {
      keywords: ['home', 'homepage', 'main page', 'home page'],
      response: ` Home Page: /

The homepage showcases:
• Hero section with our mission
• Services overview
• Company evolution
• Client testimonials
• Tools we use

Visit: Click "Home" in the navigation menu or go to /`
    },
    about: {
      keywords: ['about', 'who are you', 'company', 'team', 'experience', 'background', 'about us'],
      response: ` About Us: /about-us

Learn about:
• Our Mission & Vision
• Company Background
• Team & Expertise
• Our Journey

Visit: Click "About Us" in the menu or go to /about-us

Want to know more about our work?`
    },
    projects: {
      keywords: ['projects', 'portfolio', 'work', 'examples', 'showcase', 'previous work'],
      response: ` Projects Page: /projects

See our completed projects:
• GoLeave - Leave Management System
• Enthusia - KEC Tech Fest
• Energy & Environment Club
• Cultural & Music Club - KEC
• SRI ANNAKAMATCHI TRADERS

Technologies: React, Firebase, Node.js, MongoDB & more!

Visit: Click "Projects" in the menu or go to /projects`
    },
    contact: {
      keywords: ['contact', 'reach', 'email', 'phone', 'call', 'message', 'talk', 'contact page'],
      response: ` Contact Us: /contact

Get in Touch:

 SAKTHIVEL S
 Phone: +91 8925490989
 Email: sakthitech.contact@gmail.com
Portfolio: https://sakthis.netlify.app

 Working Hours:
Mon-Fri: 9:00 AM - 6:00 PM IST
Saturday: 10:00 AM - 4:00 PM IST

Visit: Go to /contact to fill the contact form!`
    },
    feedback: {
      keywords: ['feedback', 'review', 'rate', 'rating', 'comment', 'suggestion', 'feedback page'],
      response: `Feedback Page: /feedback

Share your experience with us!

• Rate our services
• Leave comments
• Share suggestions
• Help us improve

Visit: Click "Feedback" in the menu or go to /feedback

Your feedback helps us grow! `
    },
    privacy: {
      keywords: ['privacy', 'privacy policy', 'data', 'private', 'security'],
      response: ` Privacy Policy: /privacy-policy

Learn about:
• How we collect data
• Data usage & protection
• Your privacy rights
• Security measures

Visit: Go to /privacy-policy

We take your privacy seriously!`
    },
    terms: {
      keywords: ['terms', 'terms and conditions', 'conditions', 'rules', 'agreement'],
      response: ` Terms & Conditions: /terms-and-conditions

Review our:
• Service terms
• User agreements
• Policies & guidelines
• Legal information

Visit: Go to /terms-and-conditions`
    },
    cookie: {
      keywords: ['cookie', 'cookies', 'cookie policy', 'tracking'],
      response: ` Cookie Policy: /cookie-policy

Learn about:
• What cookies we use
• Why we use them
• How to manage cookies
• Your preferences

Visit: Go to /cookie-policy`
    },
    license: {
      keywords: ['license', 'licensing', 'copyright', 'legal'],
      response: ` Licensing: /licensing

Information about:
• Software licenses
• Usage rights
• Copyright information
• Legal compliance

Visit: Go to /licensing`
    },
    hours: {
      keywords: ['hours', 'working hours', 'timing', 'time', 'when open', 'availability', 'available'],
      response: ` Working Hours:

Monday - Friday: 9:00 AM - 6:00 PM IST
Saturday: 10:00 AM - 4:00 PM IST
Sunday: Closed (Emergency support available)

 Email responses within 24 hours, even on holidays!

Need urgent assistance? Call us at +91 8925490989`
    },
    'get started': {
      keywords: ['get started', 'start', 'begin', 'how to start', 'first step', 'onboarding'],
      response: ` Getting Started is Easy!

Share Your Requirements - Tell us about your project
 Free Consultation - We'll discuss your needs
 Custom Proposal - Receive a detailed plan & quote
 Project Kickoff - Let's build something amazing!

 Contact us: /contact
 Give feedback: /feedback

Ready to start? Share your project idea!`
    },
    support: {
      keywords: ['support', 'help', 'assist', 'problem', 'issue', 'maintenance'],
      response: ` Support & Maintenance:

We provide:
• 24/7 Technical Support
• Regular Updates & Maintenance
• Bug Fixes & Improvements
• Performance Monitoring
• Security Updates

All our projects come with dedicated support. Need help with something?`
    },
    technology: {
      keywords: ['technology', 'tech', 'tools', 'stack', 'framework', 'languages'],
      response: ` Technologies We Use:

• Frontend: React, Vue.js, Next.js
• Backend: Node.js, Python, PHP
• Database: MongoDB, MySQL, PostgreSQL
• Cloud: AWS, Firebase, Google Cloud
• Mobile: React Native, Flutter

We choose the best tech stack for your specific needs!`
    },
    payment: {
      keywords: ['payment', 'pay', 'payment method', 'installment', 'deposit', 'price', 'pricing', 'cost'],
      response: ` Payment Options:

We accept:
• Bank Transfer / NEFT / RTGS
• UPI Payment
• Credit/Debit Cards
• PayPal (International)

Payment Structure:
• 30% - Project Start
• 40% - Mid-Development
• 30% - Final Delivery

Flexible payment plans available for long-term projects!`
    },
    timeline: {
      keywords: ['timeline', 'duration', 'how long', 'time taken', 'delivery', 'deadline'],
      response: ` Project Timeline:

Typical delivery times:
• Landing Page: 1-2 weeks
• Business Website: 3-4 weeks
• Web Application: 6-12 weeks
• E-commerce: 8-12 weeks

Timeline depends on:
- Project complexity
- Feature requirements
- Client feedback cycles

Need a rush delivery? We can discuss expedited options!`
    }
  }

  // Scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  // Find matching response based on keywords
  const findResponse = (input) => {
    const lowercaseInput = input.toLowerCase().trim()
    
    // Check for greetings
    if (lowercaseInput.match(/^(hi|hello|hey|good morning|good afternoon|good evening|namaste)/)) {
      return `Hello ${userName}! How can I assist you with your project today? Feel free to ask about our services, pricing, or anything else!`
    }

    // Check for thanks
    if (lowercaseInput.match(/(thank|thanks|appreciate)/)) {
      return `You're welcome, ${userName}! Is there anything else I can help you with?`
    }

    // Search knowledge base
    for (const [key, value] of Object.entries(knowledgeBase)) {
      for (const keyword of value.keywords) {
        if (lowercaseInput.includes(keyword)) {
          return value.response
        }
      }
    }

    // Default response
    return `I'd be happy to help, ${userName}! 

I can provide information about:

 Website Pages:
• Home, About, Projects, Contact, Feedback

Services & Solutions

 Pricing & Payment

 Contact Info:
  - Phone: +91 8925490989
  - Email: sakthitech.contact@gmail.com
  - Portfolio: sakthis.netlify.app

 Working Hours & Timeline

Technology Stack

Type your question or use quick buttons!

Example: "show me feedback page" or "contact details"`
  }

  const handleSend = () => {
    if (!inputValue.trim()) return

    // If waiting for name, store it
    if (isWaitingForName) {
      const name = inputValue.trim()
      setUserName(name)
      localStorage.setItem('chatbotUserName', name)
      setIsWaitingForName(false)
      
      // Add user message
      setMessages(prev => [...prev, {
        type: 'user',
        text: name,
        timestamp: new Date()
      }])
      
      // Welcome message with name
      setTimeout(() => {
        setMessages(prev => [...prev, {
          type: 'bot',
          text: `Nice to meet you, ${name}! I'm here to help you with any questions about our services, pricing, or anything else. How can I assist you today?`,
          timestamp: new Date()
        }])
      }, 500)
      
      setInputValue('')
      return
    }

    // Add user message
    const userMessage = {
      type: 'user',
      text: inputValue,
      timestamp: new Date()
    }
    setMessages(prev => [...prev, userMessage])

    // Get bot response
    setTimeout(() => {
      const botResponse = {
        type: 'bot',
        text: findResponse(inputValue),
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botResponse])
    }, 500)

    setInputValue('')
  }

  const handleQuickButton = (keyword) => {
    const response = knowledgeBase[keyword]
    if (response) {
      const newMessages = [
        ...messages,
        {
          type: 'user',
          text: keyword.charAt(0).toUpperCase() + keyword.slice(1),
          timestamp: new Date()
        },
        {
          type: 'bot',
          text: response.response,
          timestamp: new Date(),
          showPageButtons: response.showPageButtons || false
        }
      ]
      setMessages(newMessages)
    }
  }

  const handlePageNavigation = (path) => {
    navigate(path)
    setIsOpen(false)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <>
      {/* Chat Button */}
      <button
        className={`chatbot-button ${isOpen ? 'hidden' : ''}`}
        onClick={() => setIsOpen(true)}
        aria-label="Open chat"
      >
        <img src="/bot1.png" alt="Chat Bot" className="chatbot-button-image" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className={`chatbot-window ${isDarkMode ? 'dark' : ''}`}>
          {/* Header */}
          <div className="chatbot-header">
            <div className="chatbot-header-content">
              <div className="chatbot-avatar">
                <img src="/icon.png" alt="Sakthi Tech Bot" />
              </div>
              <div>
                <h3>Sakthi Tech Support</h3>
                <span className="status-indicator">
                  <span className="status-dot"></span> Online
                </span>
              </div>
            </div>
            <button
              className="chatbot-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
            >
              <FiX size={24} />
            </button>
          </div>

          {/* Messages */}
          <div className="chatbot-messages">
            {messages.map((message, index) => (
              <div key={index}>
                <div
                  className={`message ${message.type === 'user' ? 'user-message' : 'bot-message'}`}
                >
                  <div className="message-content">
                    <p style={{ whiteSpace: 'pre-line' }}>{message.text}</p>
                    <span className="message-time">
                      {message.timestamp.toLocaleTimeString('en-US', {
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </span>
                  </div>
                </div>
                
                {/* Page Navigation Buttons */}
                {message.showPageButtons && (
                  <div className="page-navigation-buttons">
                    <div className="page-nav-section">
                      <h4> Website Pages:</h4>
                      <button onClick={() => handlePageNavigation('/')} className="page-nav-btn">
                        <span> Home</span>
                        <FiExternalLink size={14} />
                      </button>
                      <button onClick={() => handlePageNavigation('/about-us')} className="page-nav-btn">
                        <span> About Us</span>
                        <FiExternalLink size={14} />
                      </button>
                      <button onClick={() => handlePageNavigation('/projects')} className="page-nav-btn">
                        <span> Projects</span>
                        <FiExternalLink size={14} />
                      </button>
                      <button onClick={() => handlePageNavigation('/contact')} className="page-nav-btn">
                        <span> Contact</span>
                        <FiExternalLink size={14} />
                      </button>
                      <button onClick={() => handlePageNavigation('/feedback')} className="page-nav-btn">
                        <span> Feedback</span>
                        <FiExternalLink size={14} />
                      </button>
                    </div>
                    
                    <div className="page-nav-section">
                      <h4> Legal Pages:</h4>
                      <button onClick={() => handlePageNavigation('/privacy-policy')} className="page-nav-btn">
                        <span>Privacy Policy</span>
                        <FiExternalLink size={14} />
                      </button>
                      <button onClick={() => handlePageNavigation('/terms-and-conditions')} className="page-nav-btn">
                        <span>Terms & Conditions</span>
                        <FiExternalLink size={14} />
                      </button>
                      <button onClick={() => handlePageNavigation('/cookie-policy')} className="page-nav-btn">
                        <span>Cookie Policy</span>
                        <FiExternalLink size={14} />
                      </button>
                      <button onClick={() => handlePageNavigation('/licensing')} className="page-nav-btn">
                        <span>Licensing</span>
                        <FiExternalLink size={14} />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Access Buttons */}
          <div className="quick-buttons">
            {quickButtons.map((button, index) => (
              <button
                key={index}
                className="quick-button"
                onClick={() => handleQuickButton(button.keyword)}
              >
                <span className="quick-button-icon">{button.icon}</span>
                <span className="quick-button-text">{button.label}</span>
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="chatbot-input">
            <input
              type="text"
              placeholder="Type your message..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button
              className="send-button"
              onClick={handleSend}
              disabled={!inputValue.trim()}
              aria-label="Send message"
            >
              <FiSend size={20} />
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default Chatbot
