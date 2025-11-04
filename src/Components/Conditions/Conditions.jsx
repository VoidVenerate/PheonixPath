import './Conditions.css'
import check from '../../assets/check.png'
import { useState } from 'react'
import { CirclePlus, CircleMinus } from 'lucide-react'

const conditionsData = [
  {
    title: "Attention-Deficit/Hyperactivity Disorder (ADHD)",
    info: "ADHD affects focus, impulse control, and activity levels. Treatment often combines therapy, lifestyle adjustments, and sometimes medication."
  },
  {
    title: "Depression",
    info: "A mood disorder causing persistent sadness, loss of interest, and fatigue. Therapy and self-care routines play key roles in recovery."
  },
  {
    title: "Bipolar Disorder",
    info: "Characterized by mood swings between highs (mania) and lows (depression). Consistent treatment helps manage these emotional shifts."
  },
  {
    title: "Grief & Adjustment Disorders",
    info: "Emotional responses to major life changes or losses. Therapy supports healthy coping and resilience through transitions."
  },
  {
    title: "Obsessive-Compulsive Disorder (OCD)",
    info: "Involves unwanted repetitive thoughts and behaviors. Treatment focuses on exposure therapy and mindfulness strategies."
  },
  {
    title: "Sleep Disorder",
    info: "Disturbances in sleep patterns that affect energy, mood, and concentration. Behavioral therapy and routine adjustments often help."
  },
  {
    title: "Generalized Anxiety Disorder (GAD)",
    info: "Chronic worry and tension about everyday events. Treatment focuses on relaxation, therapy, and balanced routines."
  },
  {
    title: "Panic Disorder and Recurrent Attacks",
    info: "Sudden intense fear or discomfort, often accompanied by physical symptoms. Learning grounding techniques can be life-changing."
  },
  {
    title: "Post-Traumatic Stress Disorder",
    info: "Develops after trauma, leading to flashbacks and hypervigilance. Therapy helps rebuild safety and control."
  }
];

const Conditions = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleInfo = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='conditions' id='conditions-section'>
      <div className="conditions-content">
        <h1 style={{ fontFamily: "Bricolage Grotesque", textAlign:"center" }}>Conditions we treat ?</h1>
        <p style={{textAlign:"center"}}>
          We treat a variety of mental health concerns, helping you handle stress, improve focus,
          manage emotions, and find stability through life’s changes.
        </p>

        <div className="condition-cards">
          <ul>
            {conditionsData.map((condition, index) => (
              <li key={index}>
                <div className="condition-header">
                  <div className="condition-title">
                    <img src={check} alt="check" />
                    <span style={{fontWeight:"600"}}>{condition.title}</span>
                  </div>

                  <button className="info-btn" onClick={() => toggleInfo(index)}>
                    {openIndex === index ? (
                      <CircleMinus size={22} />
                    ) : (
                      <CirclePlus size={22} />
                    )}
                  </button>
                </div>

                {openIndex === index && (
                  <div className="info-text">
                    <p>{condition.info}</p>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        <button className='consultation-btn'>
          <a
            href="https://care.headway.co/providers/oluwakemi-okunlola?utm_source=pem&utm_medium=direct_link&utm_campaign=168640"
            target="_blank"
            rel="noopener noreferrer"
          >
            Start Your Consultation
          </a>
        </button>
      </div>
    </div>
  );
};

export default Conditions;
