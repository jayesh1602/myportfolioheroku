import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {MdContactPhone} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

export const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vlxelwj', 'template_nq8rkm5', form.current, '-bLi3fQatbu94nmnq');
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact us</h2>
      <div className="container container__contact">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icons'/>
            <h4>Email</h4>
            <h5>jayeshspatil1602@gmail.com</h5>
            <a href='mailto:jayeshspatil1602@gmail.com' target="_blank">Send a message</a>

          </article>
          
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icons'/>
            <h4>WhatsApp</h4>
            <h5>Mobile No. +91-9637585135</h5>
            <a href='https://api.whatsapp.com/send?phone+919637585135' target="_blank">Send a message</a>

          </article>
        </div>

        
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='your full name ' required ></input>
          <input type="email" name="email" placeholder='your email ' required ></input>
          <textarea name='message' rows="7"  placeholder='your message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>

        </form>
        
      </div>

    </section>
  )
}
