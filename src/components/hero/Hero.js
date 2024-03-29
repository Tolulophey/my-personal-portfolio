import React from 'react'
import './hero.css'
// import vector1 from '../../images/vector1.svg'
import Header from '../header/Header'
import profile from '../../images/profile-picture.webp'
import arrow from '../../images/arrow.svg'

function Hero() {
  return (
    <div className='hero' id='Home' >
      <Header />
      <div className="container">
        <div className="left">
          <h1>Hi!</h1>
          <h1>I'm Tolulope Amole</h1>
          <p>I'm a Full Stack Developer with more than a year of experience who is very proficient in using HTML, CSS, JavaScript, ReactJS, Python and NodeJS in developing a very friendly and responsive user interface powered on any Database Management System.</p>
          <p></p>
        </div>
        <div className="right">
          {/* <img src={ellipse} alt="ring" /> */}
          <img src={profile} alt="profile" />
        </div>
      </div>
      <div className='down'>
        <div className="img-container">
          <img src={arrow} alt="arrow"/>
        </div>
      </div>
    </div>
  )
}

export default Hero