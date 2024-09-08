import React from 'react'
import './about.css'

function About({reference}) {
  return (
   <section id="about" className='about' ref={reference}>
    <h1>About</h1>
   </section>
  )
}

export default About