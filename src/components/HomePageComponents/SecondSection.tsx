import FoodCard from '../Global/FoodCard/FoodCard'
import './styles/SecondSection.scss'
import React from 'react'

export default function SecondSection() {
  return (
    <div className='second-section'>
        <div className="second-top">
            <p className='second-p'>OUR DELICIOUS MENU</p>
            <h4 className='second-h4'>What are You Ordering at Your<br/>Next Catered Event?</h4>
        </div>
        <div className="cards-top">
            <FoodCard title="Title 1" text="Text 1" image="https://i.pinimg.com/236x/ab/ff/05/abff05b04d6a86a55c52f5fa10ce01fb.jpg" />
            <FoodCard title="Title 2" text="Text 2" image="https://i.pinimg.com/236x/ab/ff/05/abff05b04d6a86a55c52f5fa10ce01fb.jpg" />
            <FoodCard title="Title 3" text="Text 3" image="https://i.pinimg.com/236x/ab/ff/05/abff05b04d6a86a55c52f5fa10ce01fb.jpg" />
            <FoodCard title="Title 4" text="Text 4" image="https://i.pinimg.com/236x/ab/ff/05/abff05b04d6a86a55c52f5fa10ce01fb.jpg" />
        </div>
        <div className="cards-bottom">
            <FoodCard title="Title 5" text="Text 5" image="https://i.pinimg.com/236x/ab/ff/05/abff05b04d6a86a55c52f5fa10ce01fb.jpg" />
            <FoodCard title="Title 6" text="Text 6" image="https://i.pinimg.com/236x/ab/ff/05/abff05b04d6a86a55c52f5fa10ce01fb.jpg" />
            <FoodCard title="Title 7" text="Text 7" image="https://i.pinimg.com/236x/ab/ff/05/abff05b04d6a86a55c52f5fa10ce01fb.jpg" />
            <FoodCard title="Title 8" text="Text 8" image="https://i.pinimg.com/236x/ab/ff/05/abff05b04d6a86a55c52f5fa10ce01fb.jpg" />
        </div>
        
    </div>
  )
}
