import React from 'react'
import './about.css'
import person from '../../images/person.svg'
import tick from '../../images/tick.svg'
import star from '../../images/star.svg'

function About() {
  return (
    <div className='about' id='about'>
      <div className='top'>We Are Here To Make Your Website Look More Elegant And Stylish!</div>
      <div className="bottom">
        <div className="left">
          <img src={person} alt="person" />
        </div>
        <div className="right">
          <div className="description">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar nec nec eget nulla. Facilisis nunc,  donec in massa iaculis.</p>
            <div className="points">
              <div className="point">
                <img src={tick} alt="tick" />
                <p>Quality services and support all time</p>
              </div>
              <div className="point">
                <img src={tick} alt="tick" />
                <p>Quality services and support all time</p>
              </div>
              <div className="point">
                <img src={tick} alt="tick" />
                <p>Quality services and support all time</p>
              </div>
            </div>
          </div>
          <div className="counts">
        <div className="projects">
          <p className="number">18</p>
          <p className="text">Happy Clients</p>
        </div>
        <div className="clients">
          <p className="number">18</p>
          <p className="text">Project Launched</p>
        </div>
        <div className="project">
          <p className="number">+1200</p>
          <p className="text">User comments</p>
          <div className="stars">
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
          </div>
        </div>
      </div>
        </div>
      </div>
    </div>
  )
}

export default About