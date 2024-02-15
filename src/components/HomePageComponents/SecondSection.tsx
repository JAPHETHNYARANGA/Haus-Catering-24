import FoodCard from '../Global/FoodCard/FoodCard'
import './styles/SecondSection.scss'
// import React from 'react'

export default function SecondSection() {
  return (
    <div className='second-section'>
        <div className="second-top">
            <p className='second-p'>OUR DELICIOUS MENU</p>
            <h4 className='second-h4'>What are You Ordering at Your<br/>Next Catered Event?</h4>
        </div>
        <div className="cards-top">
            <FoodCard  text="Individual Boxed Catering" image="https://i.pinimg.com/236x/c8/03/9b/c8039b1d62ac7e4b24ccd4c8c2a37c24.jpg" />
            <FoodCard  text="BreakFast Catering" image="https://i.pinimg.com/236x/18/6e/12/186e12c6d438e47f2397fa798150e100.jpg" />
            <FoodCard  text="Sandwich Catering" image="https://i.pinimg.com/236x/ab/ff/05/abff05b04d6a86a55c52f5fa10ce01fb.jpg" />
            <FoodCard  text="AM $ PM Tea catering" image="https://i.pinimg.com/236x/73/9c/92/739c921282be2cfd5e1854a4471f2932.jpg" />
        </div>
        <div className="cards-bottom">
            <FoodCard  text="Salad Catering" image="https://i.pinimg.com/236x/45/c5/78/45c578390af9b4fd69d98bd14957acb6.jpg" />
            <FoodCard  text="Grazing Platters" image="https://i.pinimg.com/236x/e8/d0/bf/e8d0bfb78033c21f11fafeb3b5de12d9.jpg" />
            <FoodCard  text="Cheese & Fruit Catring" image="https://i.pinimg.com/236x/81/75/dd/8175dd3a85068112128d11f06c216772.jpg" />
            <FoodCard  text="Fingerfood Catering" image="https://i.pinimg.com/236x/56/be/68/56be68908b0124d09e48e6bb2812fa0d.jpg" />
        </div>
        
    </div>
  )
}
