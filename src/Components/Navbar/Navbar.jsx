import React from 'react'
import './Navbar.css'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Maskgroup from '../../assets/Maskgroup.png'
import { Phone, Mail } from 'lucide-react'

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
          <NavLink to='/home'>
            <img src={Maskgroup} alt="PheonixPath logo" />
          </NavLink>
        </div>

        <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>



      <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
        <li>
          <NavLink
            to="/home"
            className={({ isActive }) => (isActive ? 'navbar-link active' : 'navbar-link')}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/world"
            className={({ isActive }) => (isActive ? 'navbar-link active' : 'navbar-link')}
            onClick={() => setMenuOpen(false)}
          >
            Services
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/nation"
            className={({ isActive }) => (isActive ? 'navbar-link active' : 'navbar-link')}
            onClick={() => setMenuOpen(false)}
          >
            Reviews
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/health"
            className={({ isActive }) => (isActive ? 'navbar-link active' : 'navbar-link')}
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </NavLink>
        </li>
        <li style={{fontSize: '20px', fontWeight: '600', marginLeft: '10px', marginTop: '-6px'}}>
          |
        </li>
        <li>
          <NavLink
            to="/health"
            className={({ isActive }) => (isActive ? 'navbar-link active' : 'navbar-link')}
            onClick={() => setMenuOpen(false)}
            style={{background: 'rgba(255, 255, 255, 0.3)', width: "40px", height: "40px", border:"1px solid white", borderRadius:"50%", display:"flex", justifyContent:"center", alignItems:"center", paddingLeft:'8px'}}
          >
            <Phone size={16} style={{ marginRight: '8px' }} />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/health"
            className={({ isActive }) => (isActive ? 'navbar-link active' : 'navbar-link')}
            onClick={() => setMenuOpen(false)}
            style={{background: 'rgba(255, 255, 255, 0.3)', width: "40px", height: "40px", border:"1px solid white", borderRadius:"50%", display:"flex", justifyContent:"center", alignItems:"center", paddingLeft:'6px'}}
          >
            <Mail size={16} style={{ marginRight: '8px' }} />
          </NavLink>
        </li>
      </ul>
      
    </nav>
  )
}

export default Navbar