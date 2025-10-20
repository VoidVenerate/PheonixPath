import React from 'react'
import './Contact.css'
import phone from '../../assets/phone.png'
import chat from '../../assets/chat.png'

const Contact = () => {
    const email = "info@phoenixpathwellness.com";
    const phoneNumber = "+44 254-421-0420";
  return (
    <div className='contact' id='contact-section'>
        <p style={{fontFamily:"Caveat"}}>Get in Touch</p>
        <h1 style={{fontFamily:"Bricolage Grotesque"}}>You Don’t Have to Go Through This Alone</h1>
        <p>Our friendly team would love to hear from you.</p>
        <div className="contact-cards">
            <div className="contact-card">
                <div className="contact-wrapper">
                    <img src={chat} alt="chat icon" className="contact-img" />
                </div>
                <div className="contact-card-text">
                    <p>Chat to support</p>
                    <p>We’re here to help.</p>
                    <a
                        href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn email-btn"
                    >{email}</a>
                </div>
            </div>
            <div className="contact-card">
                <div className="contact-wrapper">
                    <img src={phone} alt="phone icon" className="contact-img" />
                </div>
                <div className="contact-card-text">
                    <p>Call us</p>
                    <p>Mon-Fri from 8am to 5pm.</p>
                    <a href={`tel:${phoneNumber}`} className="btn phone-btn">{phoneNumber}</a>
                </div>
            </div>
        </div>
        <button><a href="https://care.headway.co/providers/oluwakemi-okunlola?utm_source=pem&utm_medium=direct_link&utm_campaign=168640" target="_blank" rel="noopener noreferrer">Book Your Telehealth Session</a></button>
    </div>
  )
}

export default Contact