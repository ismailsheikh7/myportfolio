import React from 'react'
import './services.css'
import paper from '../../assets/paper.pdf';

const Services = () => {
  return (
    <section id='services'>
      <h5>Projects</h5>
    <h2>Recents</h2>

<div className="container services_container">
<article className='service'>
<div className='service_head'>
<h3> MY FINAL YEAR PROJECT</h3>
</div>

<h4 id='h4clr' >Wireless Sensor Networks (WSNs) are revolutionizing the globe with their sensing
technologies. This initiative aims to design and deploy a cattle health monitoring
system (CHMS) for the agriculture sector for the well-being of livestock and the
eradication of hunger. The production and consumption of all dairy and meat products
can only be conducted responsibly if the health of the source animal is protected. In
this regard, WSNs, a component of the Internet-of-things (IoT) system, can be utilized
for monitoring cow health due to their adaptability and portability, which enables them
to be applied to expansive domains such as cattle healthcare. The integration of IoT
and artificial intelligence enables the prediction of livestock illnesses. The primary
purpose of this proposed system is to forecast cattle diseases utilizing real-time data
from non-invasive body-area sensors and Artificial Neural Networks (ANN) and to
display the expected results to authorized personnel via a web application. Popular
authentication schemes are used in this system as it is susceptible to hacking and
requires robust network security to protect the confidentiality, integrity, and availability
of its resources. The working of this system is novel. The performance of the proposed
system was measured to be approximately 98 percent. CHMS will assist concerned
farmers in remotely monitoring the health of their livestock from a variety of locations
and in taking appropriate and timely measures to protect animal health. Technological
automation will lower prices and labor inputs while enhancing farm output.</h4>

<h2>Research Paper</h2> Under review
<a href={paper} download className='btn'> Download Paper</a>



</article>



</div>
    </section>
  )
}
export default Services