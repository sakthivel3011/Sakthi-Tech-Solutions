// src/pages/Licensing.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiFileText, FiLock, FiCode, FiImage, FiMail } from 'react-icons/fi';
import '../styles/LegalPage.css';

const licensingPoints = [
  {
    icon: FiLock,
    title: 'Project License',
    details: 'Custom projects are licensed exclusively to the client after full payment. The client may use the project for personal or business purposes.',
    highlight: true
  },
  {
    icon: FiCode,
    title: 'Reusable Components',
    details: 'Sakthi Tech Solutions may reuse general code patterns, UI components, and non-confidential logic. This does not include client-specific data or branding.',
    highlight: false
  },
  {
    icon: FiFileText,
    title: 'Third-Party Licenses',
    details: 'Some projects may include open-source libraries and third-party tools. These are governed by their respective licenses (MIT, Apache, GPL, etc).',
    highlight: false
  },
  {
    icon: FiImage,
    title: 'Portfolio Rights',
    details: 'We reserve the right to display completed projects in portfolios, case studies, and marketing materials (unless client requests confidentiality).',
    highlight: false
  },
  {
    icon: FiMail,
    title: 'Licensing Questions',
    details: 'For licensing inquiries or special requests: sakthitech.contact@gmail.com',
    highlight: true
  }
];

const Licensing = () => (
  <div className="legal-page privacy-policy-page">
    {/* Header Section */}
    <div className="legal-header" data-aos="fade-down">
      
      
      <h1 className="legal-title">Licensing</h1>
      
      <p className="legal-subtitle">
        Understand our licensing terms and intellectual property policies.
      </p>

      <div className="legal-meta">
        <span><strong>Effective Date:</strong> January 2025</span>
        <span><strong>Last Updated:</strong> December 29, 2025</span>
      </div>
    </div>

    {/* Introduction */}
    

    {/* Licensing Table */}
    <table className="privacy-table" data-aos="fade-up">
      <thead>
        <tr>
          <th className="icon-col">Icon</th>
          <th className="policy-col">License Term</th>
          <th className="details-col">Details</th>
        </tr>
      </thead>
      <tbody>
        {licensingPoints.map((point, idx) => {
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

    {/* Footer CTA */}
   
  </div>
);

export default Licensing;