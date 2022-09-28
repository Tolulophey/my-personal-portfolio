import React, {useState} from 'react'
import Testimonial from './Testimonial'
// import data from './TestimonialData'
import people from './TestimonialData'
import arrowBack from '../../images/arrowBack.svg'
import arrowFront from '../../images/arrowFront.svg'
import './testimonial.css'

function TestimonialList() {
    const [index1, setIndex1] = useState(0)
    const [index2, setIndex2] = useState(1)
    const testimonyOne = people[index1];
    const testimonyTwo = people[index2];

    const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  }
  const nextPerson = () => {
    setIndex1(checkNumber(index1+1))
    setIndex2(checkNumber(index2+1))
  }
  const prevPerson = () => {
      setIndex1(checkNumber(index1-1))
      setIndex2(checkNumber(index2-1))
  }
   
  return (
    <div id='Testimonials' className='testimonial'>
        <h2>What's Our Client Say About Us</h2>
        <div className="testimonies">
            <Testimonial
                className = "testimony_one"
                name={testimonyOne.testifier}
                image={testimonyOne.image}
                company={testimonyOne.company}
                text={testimonyOne.text}
            />
            <Testimonial
                className="testimony_two"
                name={testimonyTwo.testifier}
                image={testimonyTwo.image}
                company={testimonyTwo.company}
                text={testimonyTwo.text}
            />
        </div>
        <div className="change">
            <div onClick={prevPerson} className="back">
                <div className="back-color">
                    <img src={arrowBack} alt="back" />
                </div>
            </div>
            <div onClick={nextPerson} className="front">
                <div className="front-color">
                    <img src={arrowFront} alt="front" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default TestimonialList