import React from 'react'
import './Info.css' 
import profilepic from '../../assets/profile-pic.jpg'
import Maskgroupgreen from '../../assets/Maskgroupgreen.png'
import star from '../../assets/Star 1.png'
import Maskgroup from '../../assets/Maskgroup.png'

const Info = () => {
  return (
    <div className='info-main' id='info-section'>
        <div className="info-left">
            <p style={{fontFamily:"Caveat"}}>Who we are</p>
            <h1>Transforming Lives Through Care</h1>
            <p>At PhoenixPath, we believe healing is a journey. Our compassionate team helps individuals rediscover balance and resilience through personalized evidence-based mental health care.</p>
            <div className="img-text">
                <img src={profilepic} alt="Profile" />
                <div className="text-section">
                    <h3>About Our Lead Clinician</h3>
                    <p>Oluwakemi Okunlola has nearly 20 years of clinical experience caring for children, adolescents, adults, and older adults with various psychiatric conditions. She uses cultural humility, trauma-informed principles, and a person-centered approach that emphasizes trust and recovery.</p>
                    <p><b>Oluwakemi Okunlola, APRN, PMHNP-BC.</b></p>
                    <p>CEO, PhoenixPath</p>
                </div>
            </div>
        </div>
        <div className="info-right">
            <div className="vision-statement">
                <div className="vision-header">
                    <h2>Vision Statement</h2>
                    <img src={Maskgroupgreen} alt="" />
                </div>
                <p>To ensure equitable access to compassionate, evidence-based mental health care that empowers every individual to function at their highest potential and live fulfilling lives.</p>
            </div>
            <div className="our-mission">
                <div className="our-mission-header">
                    <h2>Our Mission</h2>
                    <img src={Maskgroup} alt="" />
                </div>
                <div className="mission-1">
                    <div className="mission-1-header">
                        <img src={star} alt="" />
                        <h2>Promoting Mental Wellness</h2>
                    </div>
                    <p>Our goal is to enhance mental health access through timely, client-focused telepsychiatry that fosters equality, resilience, and optimal functioning. Each appointment provides a safe, judgment-free environment to support your overall well-being.</p>
                </div>
                <div className="mission-2">
                    <div className="mission-2-header">
                        <img src={star} alt="" />
                        <h2>Empowering Individuals</h2>
                    </div>
                    <p>We go beyond diagnosis and medication. We provide tools, education, and support for daily life, helping individuals manage challenges and grow. We assist everyone in realizing their potential and navigating their wellness journey.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Info