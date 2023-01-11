import React from 'react'
import './footer.css'
import {FaLinkedin} from 'react-icons/fa';
import {AiOutlineGithub} from 'react-icons/ai';
import {AiOutlineMail} from 'react-icons/ai';
import {AiFillPhone} from 'react-icons/ai';
import {BsTwitter} from 'react-icons/bs';


function Footer() {
  const date = new Date()
  let year = date.getFullYear()
  return (
    <footer className='footer'>
      <div className="media">
        <div className="follow">
          <p>Follow me:</p>
          <a href="https://www.linkedin.com/in/amole-tolulope-bukunmi/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin color='#00a0dc' size="40px"/>
          </a>
          <a href="https://github.com/Tolulophey" target="_blank" rel="noopener noreferrer">
            <AiOutlineGithub size="40px"/>
          </a>
          <a href="https://twitter.com/Tolulophey" target="_blank" rel="noopener noreferrer">
            <BsTwitter color='#1DA1F2' size="40px"/>
          </a>
          {/* <a href="http://" target="_blank" rel="noopener noreferrer"><img src={Instagram} alt="instagram" /></a> */}
          {/* <a href="http://" target="_blank" rel="noopener noreferrer"><img src={Instagram} alt="instagram" /></a> */}
        </div>
        <div className="phone">
          <AiFillPhone color="#fff" size="40px"/>
          <a href="tel:+2348063673201">(+234) 806 36732 01</a>
        </div>
        <div className="mail">
          <AiOutlineMail color='#fff' size="40px"/>
          <a href="mailto:amoletolulope@gmail.com">amoletolulope@gmail.com</a>
        </div>
      </div>
    <div className="copyright">
        <p>Copyright {year}     |  All right reserved.</p>
      </div>
    </footer>
  )
}

export default Footer