import React from 'react'
import Testimonial from './Testimonial'
import data from './TestimonialData'
import arrowBack from '../../images/arrowBack.svg'
import arrowFront from '../../images/arrowFront.svg'
import './testimonial.css'

function TestimonialList() {
    const testimony = data.map(testimony =>{
        return <Testimonial 
            name={testimony.name}
            testifier={testimony.image}
            company={testimony.company}
            text={testimony.text}
        />
    })
  return (
    <div id='Testimonials' className='testimonial'>
        <h2>What's Our Client Say About Us</h2>
        <div className="testimonies">
            {testimony}
        </div>
        <div className="change">
            <div className="back">
                <div className="back-color">
                    <img src={arrowBack} alt="back" />
                </div>
            </div>
            <div className="front">
                <div className="front-color">
                    <img src={arrowFront} alt="front" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default TestimonialList