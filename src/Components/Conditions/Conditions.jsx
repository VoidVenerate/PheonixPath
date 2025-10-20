import React from 'react'
import './Conditions.css'
import Man from '../../assets/Frame 21.png'
import Check from '../../assets/check.png'

const Conditions = () => {
  return (
    <div className='conditions'>
        <div className="conditions-content">
            <div className="conditions-left">
                <h1>Conditions we treat ?</h1>
                <div className="condition-cards">
                    <div className="condition-card">
                        <p>Emotional Disorders</p>
                        <ul>
                            <li><img src={Check} alt="Check icon" />Depression</li>
                            <li><img src={Check} alt="Check icon" />Bipolar Disorder</li>
                            <li><img src={Check} alt="Check icon" />Grief & Adjustment Disorders</li>
                        </ul>
                    </div>
                    <div className="condition-card">
                        <p>Lifestyle Disorders</p>
                        <ul>
                            <li><img src={Check} alt="Check icon" />Insomnia</li>
                            <li><img src={Check} alt="Check icon" />Sleep Problems</li>
                            <li><img src={Check} alt="Check icon" />Stress-Related Fatigue</li>
                        </ul>
                    </div>
                    <div className="condition-card">
                        <p>Behavioral Disorders</p>
                        <ul>
                            <li><img src={Check} alt="Check icon" />Obsessive-Compulsive Disorder (OCD)</li>
                            <li><img src={Check} alt="Check icon" />Attention-Deficit/Hyperactivity Disorder (ADHD)</li>
                            <li><img src={Check} alt="Check icon" />Adjustment Difficulties</li>
                        </ul>
                    </div>
                    <div className="condition-card">
                        <p>Stress-Related Disorders</p>
                        <ul>
                            <li><img src={Check} alt="Check icon" />Generalized Anxiety Disorder (GAD)</li>
                            <li><img src={Check} alt="Check icon" />Panic Disorder and Recurrent Attacks</li>
                            <li><img src={Check} alt="Check icon" />Post-Traumatic Stress Disorder</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="conditions-right">
                <img src={Man} alt="Man illustration" />
            </div>
        </div>
        <button>Start Your Consultation</button>
    </div>
  )
}

export default Conditions