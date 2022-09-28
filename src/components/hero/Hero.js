import React, {useContext, useEffect} from 'react'
import './hero.css'
// import vector1 from '../../images/vector1.svg'
import Header from '../header/Header'
import ellipse from '../../images/ellipse.svg'
import arrow from '../../images/arrow.svg'
import {ScrollContext} from '../../App'


function Hero() {
  const scroll = useContext(ScrollContext);
  useEffect(() => {
    if(scroll.stopScrolling){
      document.body.style.overflowY = "hidden"
    }else if(!scroll.stopScrolling){
      document.body.style.overflowY = 'visible';
    }
    
  }, [scroll.stopScrolling])
  
  return (
    <div className='hero' id='Home' >
      <Header />
      <div className="container">
        <div className="left">
          <h1>Hi!</h1>
          <h1>I'm Tolulope Amole</h1>
          <p>I'm a Full Stack Developer with more than a year of experience who is very proficient in using HTML, CSS, JavaScript, React, and Python in developing a very friendly and responsive user interface powered on any Database Management System.</p>
        </div>
        <div className="right">
          <img src={ellipse} alt="ring" />
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