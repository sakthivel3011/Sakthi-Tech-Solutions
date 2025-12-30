// src/pages/PrivacyPolicy.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiShield, FiLock, FiCheckCircle, FiMail } from 'react-icons/fi';
import '../styles/LegalPage.css';

const privacyPoints = [
  {
    icon: FiCheckCircle,
    title: 'Information We Collect',
    details: 'Name, Email address, Phone number, Project details submitted via contact forms, and usage analytics.',
    highlight: true
  },
  {
    icon: FiShield,
    title: 'How We Use Information',
    details: 'Your data is used only to respond to inquiries, communicate about projects, and provide services. We do NOT sell, rent, or share your personal data with third parties.',
    highlight: true
  },
  {
    icon: FiLock,
    title: 'Data Security',
    details: 'We implement industry-standard security measures to protect your information against unauthorized access, loss, or misuse.',
    highlight: false
  },
  {
    icon: FiCheckCircle,
    title: 'Cookies & Tracking',
    details: 'Our website uses basic cookies to improve user experience. No tracking or advertising cookies are used.',
    highlight: false
  },
  {
    icon: FiShield,
    title: 'Third-Party Services',
    details: 'We use third-party tools for hosting, analytics, and email services. Their privacy policies apply to their platforms.',
    highlight: false
  },
  {
    icon: FiCheckCircle,
    title: 'Your Rights',
    details: 'You may request access to your data, correction of inaccuracies, or deletion of your personal information.',
    highlight: false
  },
  {
    icon: FiMail,
    title: 'Contact Us',
    details: 'For privacy-related questions or requests: sakthitech.contact@gmail.com',
    highlight: true
  }
];

const PrivacyPolicy = () => (
  <div className="legal-page privacy-policy-page">
    {/* Header Section */}
    <div className="legal-header" data-aos="fade-down">
      
      
      <h1 className="legal-title">Privacy Policy</h1>
      
      <p className="legal-subtitle">
        We are committed to protecting your privacy and ensuring transparency about how we handle your data.
      </p>

      <div className="legal-meta">
        <span><strong>Effective Date:</strong> January 2025</span>
        <span><strong>Last Updated:</strong> December 29, 2025</span>
      </div>
    </div>

    {/* Introduction */}
    

    {/* Privacy Table */}
    <table className="privacy-table" data-aos="fade-up">
      <thead>
        <tr>
          <th className="icon-col">Icon</th>
          <th className="policy-col">Policy Section</th>
          <th className="details-col">Details</th>
        </tr>
      </thead>
      <tbody>
        {privacyPoints.map((point, idx) => {
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

export default PrivacyPolicy;