import React from 'react';
import './testimonials.scss';


interface testimonialsCard{
    image?:string;
    text:string;
}
export default function TestimonialsCard({image, text}: testimonialsCard) {
  return (
    <div className='testimonials'>
        <div className="stars">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
        </div>
        <img src={image} alt="" />
        <p dangerouslySetInnerHTML={{ __html: text }}></p>
        
    </div>
  )
}
