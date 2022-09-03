import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG2 from '../../assets/portfolio2.png'
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Projects I have completed </h2>
<div className="container portfolio_container">
<article className='portfolio_item'>
  <div className="portfolio_item-image">
    
    <img src={IMG1} alt="" />
  </div>
<h3>My Final Year Project</h3>
<h5>Cattle Care website</h5>
<a href="https://github.com/ismailsheikh7/CattleCare" className='btn' target='_blank'>Github</a>
<a href="https://dribble.com" className='btn btn-primary' target='_blank'>Live Demo</a>
</article>

<article className='portfolio_item'>
  <div className="portfolio_item-image">
    
    <img src={IMG2} alt="" />
  </div>
<h3>Ecommerce Shopping Crud App</h3>
<h5>Note: Please open on laptop in 80% resolution.</h5>
<a href="https://github.com/ismailsheikh7/stitchclick" className='btn' target='_blank'>Github</a>
<a href="https://stitchclick1.herokuapp.com/" className='btn btn-primary' target='_blank'>Live Demo</a>
</article>

<article className='portfolio_item'>
  <div className="portfolio_item-image">
    
    <img src={IMG3} alt="" />
  </div>
<h3>Figma Designs</h3>
<a href="https://www.behance.net/ismailsheikh2" className='btn' target='_blank'>Behance</a>

</article>


</div>
    </section>
  )
}

export default Portfolio 