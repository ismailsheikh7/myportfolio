import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaBehance, FaGithub} from 'react-icons/fa'


const HeaderSocials = () => {
  return (
    <div className='Header_socials' >
<a href="https://www.linkedin.com/in/sheikh-ismail-541b30180/" target="_blank" ><BsLinkedin/> </a>
<a href="https://github.com/ismailsheikh7" target="_blank" ><FaGithub/> </a>
<a href="https://www.behance.net/ismailsheikh2" target="_blank" ><FaBehance/> </a>
    </div>
  )
}

export default HeaderSocials