import React, { useState, useRef, useEffect } from 'react';
import './Navbar.css';
import Maskgroup from '../../assets/Maskgroup.png';
import { Phone, Mail } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const navLinks = [
    { to: 'home-section', label: 'Home' },
    { to: 'services-section', label: 'Services' },
    { to: 'reviews-section', label: 'Reviews' },
    { to: 'contact-section', label: 'Contact Us' },
  ];

  const toggleMenu = () => setMenuOpen(prev => !prev);
  const closeMenu = () => setMenuOpen(false);

  // Close menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  return (
    <>
      <nav className="navbar-normal">
        <div className="navbar-logo">
          <img src={Maskgroup} alt="PhoenixPath logo" />
        </div>

        {/* Desktop links */}
        <ul className="navbar-links-desktop">
          {navLinks.map(link => (
            <li key={link.to}>
              <ScrollLink
                to={link.to}
                smooth={true}
                duration={500}
                className="navbar-link"
                onClick={closeMenu}
              >
                {link.label}
              </ScrollLink>
            </li>
          ))}
          <div className="vert-line"></div>
          <li>
            <a href="tel:+442544210420" className="icon-link">
              <Phone size={16} />
            </a>
          </li>
          <li>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=info@phoenixpathwellness.com"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
            >
              <Mail size={16} />
            </a>
          </li>
        </ul>

        {/* Hamburger */}
        <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      {/* Mobile overlay */}
      {menuOpen && <div className="menu-overlay" onClick={closeMenu} />}

      {/* Mobile sidebar */}
      <div ref={menuRef} className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={closeMenu}>✕</button>
        <ul className="mobile-menu-links">
          {navLinks.map(link => (
            <li key={link.to}>
              <ScrollLink
                to={link.to}
                smooth={true}
                duration={500}
                className="mobile-link"
                onClick={closeMenu}
              >
                {link.label}
              </ScrollLink>
            </li>
          ))}
        </ul>
        <div className="mobile-menu-footer">
          <a href="tel:+442544210420" className="mobile-contact-link">
            <Phone size={20} /> +44 254 421 0420
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=info@phoenixpathwellness.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-contact-link"
          >
            <Mail size={20} /> info@phoenixpathwellness.com
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
