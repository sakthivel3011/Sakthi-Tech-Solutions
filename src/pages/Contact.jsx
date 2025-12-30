// src/pages/Contact.jsx
import { useState } from 'react'
import { FiSend, FiUser, FiMail, FiPhone, FiCheckCircle, FiMapPin, FiMessageCircle, FiTarget, FiZap, FiShield, FiBriefcase } from 'react-icons/fi'
import '../styles/Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  // IMPORTANT: Replace this with your actual Google Apps Script Web App URL
  const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbw0m481pfmKuc0ph2mwo6olIpvhK0amq90RN3FQg-P5lEe_xCOkictkd2sQ-6Z2A1j9/exec'

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    setError('') // Clear error on input change
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Important for Google Apps Script
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      // With no-cors mode, we can't read the response
      // So we assume success if no error is thrown
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      })

      // Reset success message after 7 seconds
      setTimeout(() => setIsSubmitted(false), 7000)

    } catch (err) {
      console.error('Submission error:', err)
      setError('Failed to send message. Please try again or contact us directly.')
      setIsSubmitting(false)
    }
  }



  return (
    <section id="contact" className="ca-contact-section">
      <div className="ca-section-container">
        <div className="ca-section-header" data-aos="fade-up">
  <h2 className="section-subtitle">
    <span className="subtitle-line"></span>
    Get in Touch
    <span className="subtitle-line"></span>
  </h2>

  <h3 className="section-title">
    Let’s <span className="highlight-text">Build Your Solution</span>
  </h3>

  <p className="ca-section-description">
    Have a project idea or business requirement? Reach out to us and let’s build a reliable digital solution together.
  </p>
</div>


        <div className="ca-contact-container">
          <div className="ca-contact-info" data-aos="fade-right">
            <div className="ca-info-card">
              <h4 className="ca-info-title">Why Choose Us?</h4>
              <ul className="ca-benefits-list">
                <li className="ca-benefit-item">
                  <div className="ca-benefit-icon"><FiCheckCircle /></div>
                  <div>
                    <h5>Prompt Communication</h5>
                    <p>We respond quickly and keep you informed at every stage</p>
                  </div>
                </li>

                <li className="ca-benefit-item">
                  <div className="ca-benefit-icon"><FiTarget /></div>
                  <div>
                    <h5>Free Project Consultation</h5>
                    <p>Clear guidance and planning before development begins</p>
                  </div>
                </li>

                <li className="ca-benefit-item">
                  <div className="ca-benefit-icon"><FiZap /></div>
                  <div>
                    <h5>On-Time Delivery</h5>
                    <p>We follow timelines and deliver projects as committed</p>
                  </div>
                </li>

                <li className="ca-benefit-item">
                  <div className="ca-benefit-icon"><FiShield /></div>
                  <div>
                    <h5>Quality-Focused Development</h5>
                    <p>Clean code, thorough testing, and reliable performance</p>
                  </div>
                </li>
              </ul>
            </div>

            
          </div>

          <div className="ca-contact-form-wrapper" data-aos="fade-left" data-aos-delay="200">
            <div className="ca-form-card">
              {isSubmitted ? (
                <div className="ca-success-message">
                  <FiCheckCircle className="ca-success-icon" />
                  <h4>Message Sent Successfully!</h4>
                  <p>Thank you for contacting us. We'll get back to you within 24 hours.</p>
                  <button 
                    className="ca-btn-outline"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <h4 className="ca-form-title">Contact Us</h4>
                  
                  {error && (
                    <div className="ca-error-message">
                      {error}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="ca-contact-form">
                    <div className="ca-form-group">
                      <div className="ca-input-icon">
                        <FiUser />
                      </div>
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="ca-form-input"
                      />
                    </div>

                    <div className="ca-form-group">
                      <div className="ca-input-icon">
                        <FiMail />
                      </div>
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter your email address"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="ca-form-input"
                      />
                    </div>

                    <div className="ca-form-group">
                      <div className="ca-input-icon">
                        <FiPhone />
                      </div>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Enter your mobile number"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="ca-form-input"
                      />
                    </div>

                    <div className="ca-form-group">
                      <div className="ca-input-icon">
                        <FiBriefcase />
                      </div>
                      
                      <select
                        name="service"
                        id="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="ca-form-input"
                        style={{ paddingLeft: '3.5rem' }}
                      >
                        <option value="">Service Interested In</option>
                        <option value="Web Development">Web Development</option>
                        <option value="Web Apps & PWA">Web Apps & PWA</option>
                        <option value="Admin Panels">Admin Panels</option>
                        <option value="Business Software">Business Software</option>
                        <option value="Hosting & Deployment">Hosting & Deployment</option>
                        <option value="Maintenance & Support">Maintenance & Support</option>
                      </select>
                    </div>

                    <div className="ca-form-group ca-full-width">
                      <textarea
                        name="message"
                        placeholder="Tell us about your project or requirement"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="5"
                        className="ca-form-textarea"
                      />
                    </div>

                    <button 
                      type="submit" 
                      className="ca-submit-button"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="ca-spinner"></span>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <FiSend className="ca-btn-icon" />
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact