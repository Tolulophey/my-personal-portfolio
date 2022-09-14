import React from 'react'
import './hero.css'
import vector1 from '../../images/vector1.svg'
import Header from '../header/Header'
import ellipse from '../../images/ellipse.svg'
import arrow from '../../images/arrow.svg'

function Hero() {
  return (
    <div className='hero'>
      <Header />
      <div className="container">
        <div className="left">
          <h1>Hi! There</h1>
          <h1>I'm a Full-Stack Web Developer</h1>
          <img src={vector1} alt="vector" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Tempor volutpat nunc, egestas pulvinar turpis.</p>
        </div>
        <div className="right">
          <img src={ellipse} alt="ring" />
        </div>
      </div>
      <div className='down'>
        <div className="img-container">
          <img src={arrow} alt="arrow" />
        </div>
      </div>
    </div>
  )
}

export default Hero