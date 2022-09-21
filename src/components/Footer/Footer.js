import React from 'react'
import './footer.css'
import Twitter from '../../images/twitter.svg'
import mail from '../../images/mail.svg'
import GitHub from '../../images/github.png'
import phone from '../../images/phone.png'
import LinkedIn from '../../images/linkedin.png'

function Footer() {
  return (
    <footer className='footer'>
      <div className="media">
        <div className="follow">
          <p>Follow me:</p>
          <a href="https://www.linkedin.com/in/amole-tolulope-bukunmi/" target="_blank" rel="noopener noreferrer"><img src={LinkedIn} alt="instagram" /></a>
          <a href="https://github.com/Tolulophey" target="_blank" rel="noopener noreferrer"><img src={GitHub} alt="instagram" /></a>
          <a href="https://twitter.com/Tolulophey" target="_blank" rel="noopener noreferrer"><img src={Twitter} alt="twitter" /></a>
          {/* <a href="http://" target="_blank" rel="noopener noreferrer"><img src={Instagram} alt="instagram" /></a> */}
          {/* <a href="http://" target="_blank" rel="noopener noreferrer"><img src={Instagram} alt="instagram" /></a> */}
        </div>
        <div className="phone">
          <img src={phone} alt="phone" />
          <a href="tel:+2348063673201">(+234) 806 36732 01</a>
        </div>
        <div className="mail">
          <img src={mail} alt="email" />
          <a href="mailto:amoletolulope@gmail.com">amoletolulope@gmail.com</a>
        </div>
      </div>
    <div className="copyright">
        <p>Copyright 2022      |  All right reserved.</p>
      </div>
    </footer>
  )
}

export default Footer