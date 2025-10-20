import React from 'react'
import './Footer.css'
import Footerimg from '../../assets/Footerimg.png'
import Maskgroup from '../../assets/Maskgroup.png'
import ig from '../../assets/Social icon.png'
import fb from '../../assets/Social icon (1).png'
import x from '../../assets/Social icon (2).png'
import yt from '../../assets/Social icon (3).png'
import ln from '../../assets/Social icon (4).png'
import { Link as ScrollLink } from 'react-scroll'

const Footer = () => {
  return (
    <div className='Footer'>
        <div className="footer-left">
            <img src={Footerimg} />
        </div>
        <div className="vertical-line"></div>
        <div className="footer-right">
            <div className="footer-right-header">
                <img src={Maskgroup} alt="" />
                <p>PhoenixPath Mental Health </p>
            </div>
            <ul>
                <li><ScrollLink to='home-section' smooth={true} duration={500} >Home</ScrollLink></li>
                 <li>Instagram</li>
                <li><ScrollLink to='services-section' smooth={true} duration={500} >Services</ScrollLink></li>
                <li>Facebook</li>
                <li><ScrollLink to='conditions-section' smooth={true} duration={500} >Conditions Treated</ScrollLink></li>
                <li>X</li>
                <li><ScrollLink to='contact-section' smooth={true} duration={500} >Contact</ScrollLink></li>
                <li>LinkedIn</li>
            </ul>
            <div className="footer-icons">
                <img src={ig} alt="" />
                <img src={fb} alt="" />
                <img src={x} alt="" />
                <img src={ln} alt="" />
            </div>
            <p style={{textAlign:"center"}}> &copy; {new Date().getFullYear()}PhoenixPath Wellness </p>
        </div>
    </div>
  )
}

export default Footer