import { useState, useRef, useEffect } from 'react'
import { FiMessageCircle, FiX, FiSend, FiPhone, FiClock, FiDollarSign } from 'react-icons/fi'
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
    { label: 'Services', keyword: 'services', icon: <AiOutlineAppstore /> },
    
    { label: 'Contact', keyword: 'contact', icon: <FiPhone /> },
   
    
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
   
    contact: {
      keywords: ['contact', 'reach', 'email', 'phone', 'call', 'message', 'talk'],
      response: `Get in Touch:

• Email: sakthitech.contact@gmail.com
• Phone: +91 89254 90989
• Website: https://sakthis.netlify.app/

Or use our contact form on the website. We typically respond within 24 hours!

Want to schedule a meeting?`
    },
    hours: {
      keywords: ['hours', 'working hours', 'timing', 'time', 'when open', 'availability', 'available'],
      response: `Working Hours:

Monday - Friday: 9:00 AM - 6:00 PM IST
Saturday: 10:00 AM - 4:00 PM IST
Sunday: Closed (Emergency support available)

We respond to emails within 24 hours, even on holidays!

Need urgent assistance?`
    },
    about: {
      keywords: ['about', 'who are you', 'company', 'team', 'experience', 'background'],
      response: `About Sakthi Tech Solutions:

We're a leading digital transformation company specializing in:
• Custom Web Development
• Business Solutions
• Digital Innovation

Our Mission: Powering Your Digital Growths

With years of experience and a passionate team, we've helped numerous businesses achieve their digital goals.

Want to know more about our work?`
    },
    'get started': {
      keywords: ['get started', 'start', 'begin', 'how to start', 'first step', 'onboarding'],
      response: `Getting Started is Easy!

1. Share Your Requirements - Tell us about your project
2. Free Consultation - We'll discuss your needs
3. Custom Proposal - Receive a detailed plan & quote
4. Project Kickoff - Let's build something amazing!

Ready to start? Click the Contact button or tell me about your project!`
    },
    support: {
      keywords: ['support', 'help', 'assist', 'problem', 'issue', 'maintenance'],
      response: `Support & Maintenance:

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
      response: `Technologies We Use:

• Frontend: React, Vue.js, Next.js
• Backend: Node.js, Python, PHP
• Database: MongoDB, MySQL, PostgreSQL
• Cloud: AWS, Firebase, Google Cloud
• Mobile: React Native, Flutter

We choose the best tech stack for your specific needs!`
    },
    portfolio: {
      keywords: ['portfolio', 'work', 'projects', 'examples', 'showcase', 'previous work'],
      response: `Our Portfolio:

We've successfully delivered:
• 100+ Web Applications
• 50+ E-commerce Platforms
• 30+ Admin Dashboards
• 20+ Mobile Apps

Check our website's Evolution section to see our journey and success stories!

Want to see specific examples?`
    },
    payment: {
      keywords: ['payment', 'pay', 'payment method', 'installment', 'deposit'],
      response: `Payment Options:

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
      response: `Project Timeline:

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

I can answer questions about:
• Our Services & Solutions
• Pricing & Packages
• Contact Information
• Working Hours
• Technology Stack
• Project Timeline

You can also use the quick buttons below or type your question!

Need to speak with our team? Click the Contact button!`
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
      setMessages(prev => [
        ...prev,
        {
          type: 'user',
          text: keyword.charAt(0).toUpperCase() + keyword.slice(1),
          timestamp: new Date()
        },
        {
          type: 'bot',
          text: response.response,
          timestamp: new Date()
        }
      ])
    }
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
              <div
                key={index}
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
