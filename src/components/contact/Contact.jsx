import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./contact.css"
import {MdOutlineEmail} from "react-icons/md"
import {BsWhatsapp} from "react-icons/bs"

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bems06r', 'template_j4zdggs', form.current, '_piUGXLrjR8kbkNUw')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>lucianobarrabino@gmail.com</h5>
            <a href="mailto:lucianobarrabino@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          <article className="contact_option">
            <MdOutlineEmail className='contact_option-icon'/>
            <h4>Outlook</h4>
            <h5>lucianob.2000@hotmail.com</h5>
            <a href="mailto:lucianob.2000@hotmail.com" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className='contact_option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+54 9 3624026802</h5>
            <a href="https://api.whatsapp.com/send?phone=5493624026802" target="_blank" rel="noreferrer">Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT */}
        
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn bt-primary'>Send Message</button>
        </form>

      </div>
    </section>
  )
}

export default Contact