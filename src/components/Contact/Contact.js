import React, {useRef} from 'react'
import Footer from '../Footer/Footer'
import './contact.css'
import emailjs from '@emailjs/browser';


function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
    'service_0mah16f', 
    'template_y9u1w4g', 
      form.current,
     'o3ZoQGVgsCU0Yr3HV'
       )
      .then((result) => {
          console.log(result.text);
          console.log("message sent");
      }, (error) => {
          console.log(error.text);
      });
        e.target.reset();
  };
  return (
    <div id='Contact' className='contact'>
      <form ref={form} onSubmit={sendEmail}>
          <div className="details">
            <input type="text" name='user_name' className='name' id='name' placeholder='Name' />
            <input type="email" name='user_email' className='email' id='email' placeholder='Email' />
          </div>
          <input type="text" name='subject' id='subject' placeholder='Subject' />
          <textarea name="message" id="message" placeholder='Message'></textarea>
          <input className='submit' type="submit" value="Send" />
      </form>
      <Footer />
    </div>
  )
}

export default Contact