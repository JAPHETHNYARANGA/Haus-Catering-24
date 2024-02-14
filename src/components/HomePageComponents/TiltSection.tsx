import './styles/TiltSection.scss';
import React from 'react'

export default function TiltSection() {
  return (
    <div className='container-tilt'>
        <div className="delivery">
            <i className="fas fa-2x fa-shipping-fast"></i>
            <p>Free Delivery</p>
        </div>

        <div className="line"></div>

        <div className="quality">
            <i className="fa-solid fa-medal fa-2x"></i>
            <p>Quality Catering</p>
        </div>

        <div className="line"></div>

        <div className="ontime-delivery">
            <i className="fa-solid fa-clock-rotate-left fa-2x"></i>
            <p>on-Time Delivery</p>
        </div>
    </div>
  )
}
