import React from 'react'
import Footer from '../Footer/Footer'
import './contact.css'
// import { faTwitter} from '@fortawesome/free-solid-svg-icons'


function Contact() {
  return (
    <div id='Contact' className='contact'>
      <form action="">
          <div className="details">
            <input type="text" name='name' className='name' id='name' placeholder='Name' />
            <input type="email" name='name' className='email' id='email' placeholder='Email' />
          </div>
          <input type="text" name='subject' id='subject' placeholder='Subject' />
          <textarea name="text" id="message" placeholder='Message'></textarea>
          <input className='submit' type="submit" value="Send" />
      </form>
      <Footer />
    </div>
  )
}

export default Contact