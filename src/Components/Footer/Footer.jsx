import React from 'react'
import './Footer.css'
import Footerimg from '../../assets/Footerimg.png'
import Maskgroup from '../../assets/Maskgroup.png'
import ig from '../../assets/Social icon.png'
import fb from '../../assets/Social icon (1).png'
import x from '../../assets/Social icon (2).png'
import yt from '../../assets/Social icon (3).png'
import ln from '../../assets/Social icon (4).png'

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
                <li>Home</li>
                 <li>Instagram</li>
                <li>About Us</li>
                <li>Facebook</li>
                <li>Services</li>
                <li>X</li>
                <li>Conditions Treated</li>
                <li>Youtube</li>
                <li>Reviews</li>
                <li>LinkedIn</li>
                <li>Contact</li>
            </ul>
            <div className="footer-icons">
                <img src={ig} alt="" />
                <img src={fb} alt="" />
                <img src={x} alt="" />
                <img src={yt} alt="" />
                <img src={ln} alt="" />
            </div>
            <p style={{textAlign:"center"}}> &copy; {new Date().getFullYear()}PhoenixPath Wellness </p>
        </div>
    </div>
  )
}

export default Footer