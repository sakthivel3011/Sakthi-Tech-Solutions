// src/pages/CookiePolicy.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiShield, FiEye, FiSliders, FiInfo, FiCheckCircle } from 'react-icons/fi';
import '../styles/LegalPage.css';

const cookiePoints = [
  {
    icon: FiInfo,
    title: 'What are Cookies?',
    details: 'Cookies are small text files stored on your device when you visit our website. They help us enhance your experience by remembering your preferences and improving site functionality.',
    highlight: true
  },
  {
    icon: FiCheckCircle,
    title: 'Essential Cookies',
    details: 'These cookies are necessary for basic website functionality like routing, form submission, and session management. They cannot be disabled without affecting website performance.',
    highlight: false
  },
  {
    icon: FiSliders,
    title: 'Analytics Cookies',
    details: 'We use Google Analytics to understand how visitors interact with our website. These cookies help us improve content and user experience. Google Analytics processes data anonymously.',
    highlight: true
  },
  {
    icon: FiShield,
    title: 'Functional Cookies',
    details: 'These cookies remember your settings and preferences (like theme preferences) to provide a personalized experience on future visits.',
    highlight: false
  },
  {
    icon: FiInfo,
    title: 'Third-Party Cookies',
    details: 'We use Firebase hosting and Google Analytics, which may set cookies. We do NOT use marketing or tracking cookies from social media platforms or advertising networks.',
    highlight: false
  },
  {
    icon: FiSliders,
    title: 'Managing Cookies',
    details: 'You can control cookies through your browser settings. Most browsers allow you to refuse cookies or alert you when they are being set. Note that disabling cookies may affect website functionality.',
    highlight: true
  },
  {
    icon: FiShield,
    title: 'Cookie Retention',
    details: 'Essential cookies are retained for the duration of your session. Analytics cookies are typically retained for up to 26 months as per Google Analytics default settings.',
    highlight: false
  },
  {
    icon: FiEye,
    title: 'Data Privacy',
    details: 'We respect your privacy and ensure all collected data complies with applicable data protection laws. Your data is never sold to third parties.',
    highlight: false
  },
  {
    icon: FiArrowLeft,
    title: 'Changes to Policy',
    details: 'We may update this Cookie Policy periodically. Continued use of our website after updates indicates your acceptance of the new policy.',
    highlight: false
  }
];

const CookiePolicy = () => {
  return (
    <div className="legal-page-container">
      <div className="legal-page-header">
        <Link to="/" className="back-link">
          <FiArrowLeft /> Back to Home
        </Link>
        <h1>Cookie Policy</h1>
        <p className="last-updated">Last Updated: December 30, 2025</p>
      </div>

      <div className="legal-page-content">
        <div className="intro-section">
          <p>
            This Cookie Policy explains how Sakthi Tech Solutions uses cookies and similar technologies 
            on our website to enhance your experience and improve our services.
          </p>
        </div>

        <div className="legal-points">
          {cookiePoints.map((point, index) => {
            const IconComponent = point.icon;
            return (
              <div 
                key={index} 
                className={`legal-point ${point.highlight ? 'highlight' : ''}`}
              >
                <div className="point-icon">
                  <IconComponent />
                </div>
                <div className="point-content">
                  <h3>{point.title}</h3>
                  <p>{point.details}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="contact-section">
          <h2>Questions About Our Cookie Policy?</h2>
          <p>
            If you have any questions or concerns about our cookie usage or this policy, 
            please contact us at:
          </p>
          <ul>
            <li>
              <strong>Email:</strong> contact@sakthitechsolutions.com
            </li>
            <li>
              <strong>Contact Form:</strong> <Link to="/contact">Submit a message</Link>
            </li>
          </ul>
        </div>

        <div className="related-links">
          <h3>Related Policies</h3>
          <ul>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/terms-and-conditions">Terms & Conditions</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
