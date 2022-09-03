import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
    <h5>Get in touch</h5>
    <h2>Contact Me</h2>

<div className="container contact_container">
<div className="contact_options">
  <article className="contact_option">
<  MdOutlineEmail/>
<h4>Email</h4> 
<h5>ismailsheikh797@gmail.com</h5>
<a href="mailto:ismailsheikh797@gmail.com" target="_blank">Send an email</a>
  </article>
  <article className="contact_option">
<BsWhatsapp/>
<h4>Whatsapp</h4>
<h5>03215239523</h5>
<a href="https://api.whatsapp.com/send?phone=9203215234523" target="_blank">Send a text</a>
  </article>
</div>

<form action="">
<input type="text" name='name' placeholder='Your Full Name' required/>
<input type="email" name='email' placeholder='Your Email' required/>
<textarea type="message" rows="7" placeholder='Your Message' required></textarea>
<button type='submit' className='btn btn-primary'>Send a Message</button>
</form>
</div>
    </section>
  )
}

export default Contact