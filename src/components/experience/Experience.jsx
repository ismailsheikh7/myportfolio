import React from 'react'
import { BsPatchCheckFill } from 'react-icons/bs'
import './experience.css'

const Experience = () => {
  return (
    <section id='experience'>
    <h5>What Skills I Have</h5>
    <h2>My Skills</h2>

  <div className="container experience_container">
  <div className="experience_frontend">
  <h3>Softwares</h3>
  <div className="experience_content">
    <article className='experience_details'>
    <BsPatchCheckFill/>
    <div>
    <h4>Autocad</h4>
    <small className='text_light'>Experienced</small>
    </div>
    </article>  
    <article className='experience_details'>
    <BsPatchCheckFill/>
    <div>
    <h4>Matlab</h4>
    <small className='text_light'>Experienced</small>
    </div>
    </article>  
    <article className='experience_details'>
    <BsPatchCheckFill/>
    <div>
    <h4>Cisco Packet Tracer</h4>
    <small className='text_light'>Experienced</small>
    </div>
    </article>  
    <article className='experience_details'>
    <BsPatchCheckFill/>
    <div>
    <h4>Kiel</h4>
    <small className='text_light'>Experienced</small>
    </div>
    </article>  
    <article className='experience_details'>
    <BsPatchCheckFill/>
    <div>
    <h4>WireShark</h4>
    <small className='text_light'>Experienced</small>
    </div>
    </article>

    <article className='experience_details'>
    <BsPatchCheckFill/>
    <div>
    <h4>Nmap</h4>
    <small className='text_light'>Experienced</small>
    </div>
    </article> 
    </div>
    </div>
    <div className="experience_backend">
    <h3>Languages</h3>
    <div className="experience_content">
    <article className='experience_details'>
    <BsPatchCheckFill/>
    <div>
    <h4>C</h4>
    <small className='text_light'>Experienced</small>
    </div>
    </article>  
    <article className='experience_details'>
    <BsPatchCheckFill/>
    <div>
    <h4>Python</h4>
    <small className='text_light'>Basic</small>
    </div>
    </article>  
    <article className='experience_details'>
    <BsPatchCheckFill/>
    <div>
    <h4>Java</h4>
    <small className='text_light'>Intermediate</small>
    </div>
    </article>  
    <article className='experience_details'>
    <BsPatchCheckFill/>
    <div>
    <h4>Mysql</h4>
    <small className='text_light'>Experienced</small>
    </div>
    </article>  
    <article className='experience_details'>
    <BsPatchCheckFill/>
    <div>
    <h4>Javascript</h4>
    <small className='text_light'>Experienced</small>
    </div>
    </article>  
    
    <article className='experience_details'>
    <BsPatchCheckFill/>
    <div>
    <h4>HTML</h4>
    <small className='text_light'>Experienced</small>
    </div>
    </article>  
    <article className='experience_details'>
    <BsPatchCheckFill/>
    <div>
    <h4>CSS3</h4>
    <small className='text_light'>Experienced</small>
    </div>
    </article>  
    </div>
    </div>
    </div>
    </section>
  )
}

export default Experience