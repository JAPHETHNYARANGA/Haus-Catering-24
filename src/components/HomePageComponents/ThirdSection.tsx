import './styles/ThirdSection.scss';
// import React from 'react'

export default function ThirdSection() {
  return (
    <div className='third-section'>
     <p>OUR FEATURES</p> 
        <h3>Why Trust in Our Corporate<br/>
        Catering Service?</h3>

        <div className="bottom-items">
          <div className="on-time">
          <i className="fa-solid fa-2x fa-clock"></i>
            On time delivery
          </div>
          <div className="easy">
          <i className="fa-regular fa-thumbs-up fa-2x"></i>
            were easy
          </div>
          <div className="sustainable">
          <i className="fa-solid fa-arrows-spin fa-2x"></i>
            sustainable
          </div>
        </div>
    </div>
  )
}
