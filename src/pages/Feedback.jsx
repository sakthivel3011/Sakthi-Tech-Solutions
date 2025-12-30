// src/pages/Feedback.jsx
/* eslint-disable react-hooks/set-state-in-effect */
import { useState, useEffect, useCallback } from 'react'
import { FiStar, FiThumbsUp, FiMessageSquare, FiSend } from 'react-icons/fi'
import '../styles/Feedback.css'

const Feedback = () => {
  const [feedback, setFeedback] = useState({
    rating: 0,
    name: '',
    email: '',
    message: '',
    category: 'general'
  })
  const [hoverRating, setHoverRating] = useState(0)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')
  
  const [stats, setStats] = useState({
    averageRating: 4.8,
    totalFeedback: 0,
    ratings: { 5: 85, 4: 12, 3: 2, 2: 1, 1: 0 }
  })

  const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzJXa0eEMXgKAcIMC_6jB5fczPFfolPncvTOC_TgZl3RdpNJ12Bezwf4LuQ8GZd1knYcA/exec'

  const loadStatistics = useCallback(async () => {
    try {
      const response = await fetch(SCRIPT_URL, {
        method: 'GET'
      })
      const data = await response.json()
      setStats(data)
    } catch (err) {
      console.error('Failed to load statistics:', err)
    }
  }, [SCRIPT_URL])

  useEffect(() => {
    loadStatistics()
  }, [loadStatistics])

  useEffect(() => {
    const interval = setInterval(() => {
      loadStatistics()
    }, 30000)

    return () => clearInterval(interval)
  }, [loadStatistics])

  const categories = [
    { value: 'general', label: 'General Feedback' },
    { value: 'service', label: 'Service Quality' },
    { value: 'website', label: 'Website Experience' },
    { value: 'support', label: 'Customer Support' },
    { value: 'suggestion', label: 'Suggestion' }
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (feedback.rating === 0) {
      setError('Please select a rating before submitting')
      return
    }

    setIsSubmitting(true)
    setError('')

    try {
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(feedback)
      })

      setIsSubmitting(false)
      setIsSubmitted(true)
      
      setFeedback({
        rating: 0,
        name: '',
        email: '',
        message: '',
        category: 'general'
      })
      
      setTimeout(() => {
        loadStatistics()
      }, 2000)
      
      setTimeout(() => setIsSubmitted(false), 7000)

    } catch (err) {
      console.error('Submission error:', err)
      setError('Failed to submit feedback. Please try again.')
      setIsSubmitting(false)
    }
  }

  const getRatingText = (rating) => {
    if (rating === 0) return 'Select a rating'
    if (rating === 1) return 'Poor'
    if (rating === 2) return 'Fair'
    if (rating === 3) return 'Good'
    if (rating === 4) return 'Very Good'
    return 'Excellent'
  }

  return (
    <section className="feedback-section">
      <div className="feedback-container">
        <div className="section-header" data-aos="fade-up">
          <h2 className="section-subtitle">
            <span className="subtitle-line"></span>
            Your Opinion 
            <span className="subtitle-line"></span>
          </h2>
          <h3 className="section-title">
            Share Your <span className="highlight-text">Feedback</span>
          </h3>
          <p className="section-description">
            Help us improve by sharing your experience. We value every feedback we receive.
          </p>
        </div>

        <div className="feedback-content">
          <div className="feedback-stats" data-aos="fade-right">
            <div className="stats-card">
              <div className="stats-header">
                <h4>Overall Rating</h4>
                <div className="average-rating">
                  <span className="rating-number">{stats.averageRating}</span>
                  <div className="rating-stars">
                    {[...Array(5)].map((_, i) => (
                      <FiStar 
                        key={i} 
                        className={`star-icon ${i < Math.round(parseFloat(stats.averageRating)) ? 'filled' : ''}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="rating-breakdown">
                <div className="rating-item">
                  <span className="rating-label">5 Stars</span>
                  <div className="rating-bar">
                    <div className="bar-fill" style={{ width: `${stats.ratings[5]}%` }}></div>
                  </div>
                  <span className="rating-percent">{stats.ratings[5]}%</span>
                </div>
                <div className="rating-item">
                  <span className="rating-label">4 Stars</span>
                  <div className="rating-bar">
                    <div className="bar-fill" style={{ width: `${stats.ratings[4]}%` }}></div>
                  </div>
                  <span className="rating-percent">{stats.ratings[4]}%</span>
                </div>
                <div className="rating-item">
                  <span className="rating-label">3 Stars</span>
                  <div className="rating-bar">
                    <div className="bar-fill" style={{ width: `${stats.ratings[3]}%` }}></div>
                  </div>
                  <span className="rating-percent">{stats.ratings[3]}%</span>
                </div>
                <div className="rating-item">
                  <span className="rating-label">2 Stars</span>
                  <div className="rating-bar">
                    <div className="bar-fill" style={{ width: `${stats.ratings[2]}%` }}></div>
                  </div>
                  <span className="rating-percent">{stats.ratings[2]}%</span>
                </div>
                <div className="rating-item">
                  <span className="rating-label">1 Star</span>
                  <div className="rating-bar">
                    <div className="bar-fill" style={{ width: `${stats.ratings[1]}%` }}></div>
                  </div>
                  <span className="rating-percent">{stats.ratings[1]}%</span>
                </div>
              </div>
            </div>

            <div className="quick-feedback">
              <h5>Quick Feedback</h5>
              <div className="quick-buttons">
                <button 
                  className="quick-btn"
                  onClick={() => setFeedback({...feedback, rating: 5, message: 'Great Service'})}
                >
                  <FiThumbsUp />
                  Great Service
                </button>
                <button 
                  className="quick-btn"
                  onClick={() => setFeedback({...feedback, rating: 3, message: 'Need Improvement'})}
                >
                  <FiMessageSquare />
                  Need Improvement
                </button>
              </div>
            </div>
          </div>

          <div className="feedback-form-wrapper" data-aos="fade-left" data-aos-delay="200">
            <div className="form-card">
              {isSubmitted ? (
                <div className="success-message">
                  <FiThumbsUp className="success-icon" />
                  <h4>Thank You for Your Feedback!</h4>
                  <p>Your feedback helps us improve our services. We appreciate your time and will use your input to enhance our offerings.</p>
                  <button 
                    className="btn-outline"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Submit More Feedback
                  </button>
                </div>
              ) : (
                <>
                  <h4 className="form-title">Share Your Experience</h4>
                  
                  {error && (
                    <div className="error-message">
                      {error}
                    </div>
                  )}

                  <div className="rating-selector">
                    <p className="rating-selector-label">Rate your experience:</p>
                    <div className="stars-container">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          className="star-btn"
                          onClick={() => {
                            setFeedback({...feedback, rating: star})
                            setError('')
                          }}
                          onMouseEnter={() => setHoverRating(star)}
                          onMouseLeave={() => setHoverRating(0)}
                          aria-label={`Rate ${star} stars`}
                        >
                          <FiStar 
                            className={`star-icon ${star <= (hoverRating || feedback.rating) ? 'filled' : ''}`}
                          />
                        </button>
                      ))}
                    </div>
                    <p className="rating-text">
                      {getRatingText(feedback.rating)}
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="feedback-form">
                    <div className="form-group">
                      <select
                        name="category"
                        value={feedback.category}
                        onChange={(e) => setFeedback({...feedback, category: e.target.value})}
                        className="form-select"
                      >
                        {categories.map((category) => (
                          <option key={category.value} value={category.value}>
                            {category.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name (Optional)"
                        value={feedback.name}
                        onChange={(e) => setFeedback({...feedback, name: e.target.value})}
                        className="form-input"
                      />
                    </div>

                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email (Optional - for thank you message)"
                        value={feedback.email}
                        onChange={(e) => setFeedback({...feedback, email: e.target.value})}
                        className="form-input"
                      />
                    </div>

                    <div className="form-group">
                      <textarea
                        name="message"
                        placeholder="Your feedback or suggestions..."
                        value={feedback.message}
                        onChange={(e) => setFeedback({...feedback, message: e.target.value})}
                        required
                        rows="5"
                        className="form-textarea"
                      />
                    </div>

                    <button 
                      type="submit" 
                      className="submit-button"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="spinner"></span>
                          Submitting...
                        </>
                      ) : (
                        <>
                          Submit Feedback
                          <FiSend className="btn-icon" />
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

export default Feedback