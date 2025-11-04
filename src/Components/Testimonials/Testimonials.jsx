import React from 'react'
import './Testimonials.css'
import quote from '../../assets/fe_quote-left.png'
import image from '../../assets/Image.png'
import image2 from '../../assets/Image (1).png'
import image3 from '../../assets/Image (2).png'

const Testimonials = () => {
  return (
    <div className='Testimonials' id='reviews-section'>
        <p style={{fontFamily:"Caveat"}}>Reviews</p>
        <h1 style={{fontFamily:"Bricolage Grotesque", color:"#00373E"}}>What our Clients say...</h1>
        <div className="Testimonial-cards">
            <div className="Testimonial-card">
                <div className="Testimonial-card-text">
                    <img src={quote} alt="Quote icon" />
                    <p>The team is incredibly warm and welcoming. I never felt judged, only supported. Couples therapy here helped us communicate in ways we never thought possible.</p>
                </div>
                <div className="Testimonial-card-footer">
                    <div className="client-info">
                        <h3>Emily R</h3>
                    </div>
                </div>
            </div>
            <div className="Testimonial-card">
                <div className="Testimonial-card-text">
                    <img src={quote} alt="Quote icon" />
                    <p>I was unsure about telepsychiatry, but my sessions are transformative. It feels like I'm with someone who truly understands me, and the flexibility keeps me consistent with appointments.</p>
                </div>
                <div className="Testimonial-card-footer">
                    <div className="client-info">
                        <h3>Daniel M.</h3>
                    </div>
                </div>
            </div>
            <div className="Testimonial-card">
                <div className="Testimonial-card-text">
                    <img src={quote} alt="Quote icon" />
                    <p>I arrived feeling overwhelmed and disconnected. Gradually, through therapy and medication, I began sleeping better, thinking more clearly, and feeling hopeful. I truly feel like myself again.</p>
                </div>
                <div className="Testimonial-card-footer">
                    <div className="client-info">
                        <h3>Maria J.</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonials