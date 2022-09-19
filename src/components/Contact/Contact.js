import React from 'react'
import './contact.css'
import whatsapp from '../../images/whatsapp_filled.png'
import mail from '../../images/mail.png'
// import { faTwitter} from '@fortawesome/free-solid-svg-icons'


function Contact() {
  return (
    <div className='contact'>
      <div className="left">
        <div className="app">
          <div className="logo">
            <img src={whatsapp} alt="whatsapp" />
            {/* <FontAwesomeIcon icon={faTwitter} /> */}
          </div>
          <div className="details">
            <h3>WhatsApp</h3>
            <a href="tel:+2348063673201"><p className='number'>+2348063673201</p></a>
          </div>
        </div>
        <div className="app">
          <div className="logo">
            <img src={mail} alt="email_logo" />
          </div>
          <div className="details">
            <h3>Email</h3>
            <a href="mailto:amoletolulope@gmail.com"><p className='number'>amoletolulope@gmail</p></a>
          </div>
        </div>
      </div>
      <form action="">
          <div className="details">
            <input type="text" name='name' id='name' placeholder='Name' />
            <input type="text" name='name' id='name' placeholder='Email' />
          </div>
          <input type="text" name='subject' id='subject' placeholder='Subject' />
          <textarea name="text" id="message" placeholder='Message'></textarea>
          <input type="button" value="Send" />
      </form>
    </div>
  )
}

export default Contact