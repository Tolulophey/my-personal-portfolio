import React, {useRef, useState} from 'react'
import './contact.css'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Contact() {
  const [message, setMessage] = useState({
    name: "",
    mail: "",
    subject: "",
    message: ""
  })
  const form = useRef();
  const succcess = ()=> toast.success('🦄 Message Sent!', {
                              position: "top-right",
                              autoClose: 5000,
                              hideProgressBar: false,
                              closeOnClick: true,
                              pauseOnHover: true,
                              draggable: true,
                              progress: undefined,
                              theme: "colored",
                            });
  const failure = ()=> toast.error('🦄 Error, Try again!', {
                              position: "top-right",
                              autoClose: 5000,
                              hideProgressBar: false,
                              closeOnClick: true,
                              pauseOnHover: true,
                              draggable: true,
                              progress: undefined,
                              theme: "colored",
                            });
  
  const sendEmail = async (e) => {
    e.preventDefault();
    let empty = []
    let fields = Object.entries(message)
    console.log(fields)
    for (const [field, value] of fields){
      if(value === ""){
        console.log(field)
        empty.push(field)
        console.log(empty)
      }
    }
    if(empty.length !==0){
      let emptyFields = empty.join(", ")
      await toast.warning(`🦄 ${emptyFields} can't be empty!`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }
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
          setMessage({
            name: "",
            mail: "",
            subject: "",
            message: ""
          })
      }, (error) => {
          console.log(error.text);
          // setError(true)
          failure()
      });
    // e.target.reset();
  };
  return (
    <div id='Contact' className='contact'>
      <form ref={form} onSubmit={sendEmail}>
          <div className="details">
            <input 
            type="text" 
            name='user_name' 
            className='name' 
            id='name' 
            placeholder='Name' 
            value={message.name}
            onChange={(e)=>setMessage({...message, name: e.target.value})}
            />
            <input 
            type="email" 
            name='user_email' 
            className='email' 
            id='email' 
            placeholder='Email'
            value={message.mail}
            onChange={(e)=>setMessage({...message, mail: e.target.value})}
            />
          </div>
          <input 
          type="text" 
          name='subject' 
          id='subject' 
          placeholder='Subject'
          value={message.subject}
            onChange={(e)=>setMessage({...message, subject: e.target.value})}
          />
          <textarea 
          name="message" 
          id="message" 
          placeholder='Message'
          value={message.message}
          onChange={(e)=>setMessage({...message, message: e.target.value})}
          ></textarea>
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
    </div>
  )
}

export default Contact