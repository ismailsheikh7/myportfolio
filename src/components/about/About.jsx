import React from 'react'
import './about.css'
import ME from '../../assets/aboutme.jpg'
import {FaUniversity} from 'react-icons/fa'


const About = () => {
  return (
    <section id='about'>
<h5>Get to know</h5>
<h2>About my Education</h2>

<div className="container about_container">
<div className="about_me">
<div className='about_me-image'>
<img src={ME} alt="" />
</div>
</div>

<div className="about_content">
<div className="about_cards">
<article className='about_card'>
<FaUniversity className='about_icon'/>  
<h5>University</h5>
<small> Comsats University Islamabad, Lahore Campus </small>
</article>

<article className="about_card">
<FaUniversity className='about_icon' />
<h5>College</h5>
<small>Forman Christian College</small>
</article>

<article className='about_card'>
  <FaUniversity className='about_icon' />
  <h5>School</h5>
  <small>The Crescent School, Shadman</small>
</article>
</div>

<p>
My name is Mohammad Ismail Sheikh and I recently did my bachelors in Computer Engineering from Comsats university Islamabad, lahore campus
 <br />
 I am self-motivated and enthusiastic about new opportunities. I'm interested in web development, the internet of things (IOT), and cyber security. I learned the value of teamwork, work ethics, and communication skills at university, and I would like to contribute these skills to demonstrate how enthusiastic I am about the field. I also enjoy photography and videography.
</p>

<a href="#contact" className='btn btn-primary'> Let's Talk</a>




</div>
</div>
    </section>
  )
}

export default About