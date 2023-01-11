import React, {useRef} from 'react'
import './contact.css'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Contact() {
  const form = useRef();
  const succcess = toast.success('🦄 Wow so easy!', {
                              position: "top-right",
                              autoClose: 5000,
                              hideProgressBar: false,
                              closeOnClick: true,
                              pauseOnHover: true,
                              draggable: true,
                              progress: undefined,
                              theme: "colored",
                            });
  const failure = toast.error('🦄 Wow so easy!', {
                              position: "top-right",
                              autoClose: 5000,
                              hideProgressBar: false,
                              closeOnClick: true,
                              pauseOnHover: true,
                              draggable: true,
                              progress: undefined,
                              theme: "colored",
                            });
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
          succcess()
      }, (error) => {
          console.log(error.text);
          failure()
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
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      {/* <Footer /> */}
    </div>
  )
}

export default Contact