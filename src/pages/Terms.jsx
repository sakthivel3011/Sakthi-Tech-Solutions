// src/pages/Terms.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FiArrowLeft, 
  FiFileText, 
  FiDollarSign, 
  FiShield, 
  FiAlertCircle,
  FiCheckCircle,
  FiEdit,
  FiMail,
  FiHome
} from 'react-icons/fi';
import '../styles/LegalPage.css';

const termsPoints = [
  {
    icon: FiFileText,
    title: 'Services',
    details: 'Sakthi Tech Solutions provides web development, web applications, PWA, admin panels, business software, hosting support, and maintenance services based on mutually agreed requirements.',
    highlight: true
  },
  {
    icon: FiHome,
    title: 'Project Engagement',
    details: 'Project scope, timeline, and pricing are discussed and approved before work begins. Any changes after approval may require additional time and cost. Client cooperation is required for timely delivery.',
    highlight: false
  },
  {
    icon: FiDollarSign,
    title: 'Payments',
    details: 'Payments must be made as agreed (advance, milestone, or full payment). Payment delays may pause project progress. No refunds once work has started, except where explicitly agreed.',
    highlight: true
  },
  {
    icon: FiShield,
    title: 'Intellectual Property',
    details: 'Ownership of final deliverables is transferred to the client after full payment. Sakthi Tech Solutions reserves the right to showcase completed work in portfolios unless otherwise agreed.',
    highlight: false
  },
  {
    icon: FiAlertCircle,
    title: 'Liability',
    details: 'Sakthi Tech Solutions is not liable for: Third-party service failures, data loss due to external factors, or indirect/consequential damages.',
    highlight: false
  },
  {
    icon: FiCheckCircle,
    title: 'Termination',
    details: 'Either party may terminate the agreement with written notice. Work completed up to that point must be paid for.',
    highlight: false
  },
  {
    icon: FiEdit,
    title: 'Changes to Terms',
    details: 'We may update these terms at any time. Continued use of our services implies acceptance of updated terms.',
    highlight: false
  },
  {
    icon: FiMail,
    title: 'Contact',
    details: 'For questions regarding these Terms: sakthitech.contact@gmail.com',
    highlight: true
  }
];

const Terms = () => {
  return (
    <div className="legal-page privacy-policy-page">
      {/* Header Section */}
      <div className="legal-header" data-aos="fade-down">
        
        
        <h1 className="legal-title">Terms &amp; Conditions</h1>
        
        <p className="legal-subtitle">
          Please read these terms carefully before using our services.
        </p>

        <div className="legal-meta">
          <span><strong>Effective Date:</strong> January 2025</span>
          <span><strong>Last Updated:</strong> December 29, 2025</span>
        </div>
      </div>

      {/* Introduction */}
      

      {/* Terms Table */}
      <table className="privacy-table" data-aos="fade-up">
        <thead>
          <tr>
            <th className="icon-col">Icon</th>
            <th className="policy-col">Term</th>
            <th className="details-col">Details</th>
          </tr>
        </thead>
        <tbody>
          {termsPoints.map((point, idx) => {
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

      {/* Important Notice */}
      

      {/* Footer CTA */}
      
    </div>
  );
};

export default Terms;