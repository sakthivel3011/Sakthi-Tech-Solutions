import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  FiMail,
  FiPhone,
  FiMessageCircle,
  FiMapPin,
  FiFacebook,
  FiInstagram
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

import '../styles/Footer.css';
import '/icon.png';

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  /* ---------- LINKS DATA ---------- */

  const platformLinks = [
   
    
    
   
    { name: 'About Us', path: '/about-us' },
    { name: 'Contact', path: '/contact' },
    { name: 'Feedback', path: '/feedback' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Terms & Conditions', path: '/terms-and-conditions' },
    { name: 'Cookie Policy', path: '/cookie-policy' },
    { name: 'Licensing', path: '/licensing' }
  ];

  const socialLinks = [
    {
      icon: <FiMail />,
      href: 'mailto:sakthitech.contact@gmail.com',
      label: 'Email'
    },
    {
      icon: <FiFacebook />,
      href: 'https://facebook.com',
      label: 'Facebook'
    },
    {
      icon: <FiInstagram />,
      href: 'https://instagram.com',
      label: 'Instagram'
    },
    {
      icon: <FaWhatsapp />,
      href: 'https://wa.me/918925490989',
      label: 'WhatsApp'
    }
  ];

  /* ---------- SCROLL HANDLER ---------- */

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    const scrollStep = -window.scrollY / (1000 / 15); // Slower scroll over 1000ms
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
  };

  /* ---------- JSX ---------- */

  return (
    <footer className="fo-footer">

      {/* ================= MAIN FOOTER ================= */}
      <div className="fo-main-content">
        <div className="fo-container">

          {/* LEFT BRAND SECTION */}
          <div className="fo-left-section">
            <h2 className="fo-brand-title">
              Sakthi Tech Solutions helps you grow your business digitally.
            </h2>
           
          </div>

          {/* RIGHT LINKS SECTION */}
          <div className="fo-right-section">

            {/* PLATFORM */}
            <div className="fo-link-column">
              <h4 className="fo-column-title">Platform</h4>
              <ul className="fo-link-list">
                {platformLinks.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path} className="fo-link">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* RESOURCES 
            <div className="fo-link-column">
              <h4 className="fo-column-title">Resources</h4>
              <ul className="fo-link-list">
                {resourceLinks.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path} className="fo-link">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>} */}
            

            {/* LEGALS */}
            <div className="fo-link-column">
              <h4 className="fo-column-title">Legals</h4>
              <ul className="fo-link-list">
                {legalLinks.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path} className="fo-link">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* LOGO SECTION */}
            <div className="fo-logo-section">
              <img src="/icon.png" alt="Sakthi Tech Logo" className="fo-footer-logo" />
              
            </div>

          </div>
        </div>
      </div>

      {/* ================= BOTTOM BAR ================= */}
      <div className="fo-bottom">
        <div className="fo-container fo-bottom-content">

          <div className="fo-copyright">
  <p className="fo-tagline">
    Powering Your Digital Growth.
  </p>
  <p>
    © {new Date().getFullYear()} Sakthi Tech Solutions. All rights reserved.
  </p>
</div>


          <div className="fo-social-links">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="fo-social-link"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>

        </div>
      </div>

      {/* ================= BACK TO TOP ================= */}
      <button
        className={`fo-back-to-top ${showBackToTop ? 'fo-visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <img src="/bot1.png" alt="Up" className="fo-back-to-top-img" />
      </button>

    </footer>
  );
};

export default Footer;
