import React, { useState } from 'react';
import './Navbar.css';
import Maskgroup from '../../assets/Maskgroup.png';
import { Phone, Mail } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => {
      const newState = !prev;
      if (newState) {
        document.body.classList.add('menu-open');
      } else {
        document.body.classList.remove('menu-open');
      }
      return newState;
    });
  };

  return (
    <nav className="navbar">
      <div className="navbar-header">
        <div className="navbar-logo">
          <img src={Maskgroup} alt="PhoenixPath logo" />
        </div>

        <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
        <li>
          <ScrollLink
            to="home-section"
            smooth={true}
            duration={500}
            onClick={() => setMenuOpen(false)}
            className="navbar-link"
          >
            Home
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="services-section"
            smooth={true}
            duration={500}
            onClick={() => setMenuOpen(false)}
            className="navbar-link"
          >
            Services
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="reviews-section"
            smooth={true}
            duration={500}
            onClick={() => setMenuOpen(false)}
            className="navbar-link"
          >
            Reviews
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="contact-section"
            smooth={true}
            duration={500}
            onClick={() => setMenuOpen(false)}
            className="navbar-link"
          >
            Contact Us
          </ScrollLink>
        </li>

        <div className="vert-line"></div>

        {/* Phone link */}
        <li>
          <a
            href="tel:+442544210420"
            className="icon-link"
            style={{
              background: 'rgba(255, 255, 255, 0.3)',
              width: "40px",
              height: "40px",
              border: "1px solid white",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color:"white"
            }}
          >
            <Phone size={16} />
          </a>
        </li>

        {/* Gmail link */}
        <li>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=info@phoenixpathwellness.com"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
            style={{
              background: 'rgba(255, 255, 255, 0.3)',
              width: "40px",
              height: "40px",
              border: "1px solid white",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color:"white"
            }}
          >
            <Mail size={16} />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
