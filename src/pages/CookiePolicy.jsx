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

const CookiePolicy = () => (
  <div className="legal-page privacy-policy-page">
    {/* Header Section */}
    <div className="legal-header" data-aos="fade-down">
      
      
      <h1 className="legal-title">Cookie Policy</h1>
      
      <p className="legal-subtitle">
        Understanding how we use cookies to enhance your experience and improve our services.
      </p>

      <div className="legal-meta">
        <span><strong>Effective Date:</strong> January 2025</span>
        <span><strong>Last Updated:</strong> December 30, 2025</span>
      </div>
    </div>

    {/* Cookie Table */}
    <table className="privacy-table" data-aos="fade-up">
      <thead>
        <tr>
          <th className="icon-col">Icon</th>
          <th className="policy-col">Cookie Type</th>
          <th className="details-col">Details</th>
        </tr>
      </thead>
      <tbody>
        {cookiePoints.map((point, idx) => {
          const IconComponent = point.icon;
          return (
            <tr key={idx} className={point.highlight ? 'highlight-row' : ''}>
              <td className="icon-cell">
                <IconComponent className="table-icon" />
              </td>
              <td className="policy-title">{point.title}</td>
              <td className="policy-details">{point.details}</td>
            </tr>
          );
        })}
      </tbody>
    </table>

  </div>
);

export default CookiePolicy;
