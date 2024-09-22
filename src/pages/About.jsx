import React from 'react'
import './about.css'
import SectionTitle from '../components/SectionTitle'
import profileImg from '../images/prozoom.png'
import Counter from '../components/Counter'
import Skills from '../components/Skills'
import Interests from '../components/Interests'

function About({reference,aboutActive}) {
  return (
   <section id="about" className='about' ref={reference}>
   <div className="container about-me">
     <SectionTitle title="About" subtitle="Learn more about me"/>
     <div className="row">
      <div className="col-lg-4">
        <img src={profileImg} alt="Me" className='img-fluid'/>
      </div>
      <div className="col-lg-8 pt-4 pt-lg-0 content">
        <h3>FRONT-END || REACT Developer</h3>
        <p className="fst-italic">
          My desire to learn and work in the field of technology 
          and front-end made me start and continue in
          this direction.According to the spirit of teamwork I have ,
           I can play an effective role in the direction of the team's goals.
        </p>
        <div className="row">
          <div className="col-lg-6">
            <ul>
              <li>
                <i className='bi bi-chevron-right'></i>{' '}
                <strong>Birthday:</strong> <span>27 sep 1992</span>
              </li>
              <li>
                <i className='bi bi-chevron-right'></i>{' '}
                <strong>From:</strong> <span>Iran</span>
              </li>
              <li>
                <i className='bi bi-chevron-right'></i>{' '}
                <strong>Phone:</strong> <span>+98-9121044339</span>
              </li>
              <li>
                <i className='bi bi-chevron-right'></i>{' '}
                <strong>City:</strong> <span>Tehran</span>
              </li>
            </ul>
          </div>
          <div className="col-lg-6">
            <ul>
              <li>
              <i className='bi bi-chevron-right'></i>{' '}
              <strong>Age:</strong> <span>32</span>
              </li>
              <li>
              <i className='bi bi-chevron-right'></i>{' '}
              <strong>Degree:</strong> <span>Bachelor</span>
              </li>
              <li>
              <i className='bi bi-chevron-right'></i>{' '}
              <strong>Email:</strong> <span>ss_pooria69@yahoo.com</span>
              </li>
              <li>
              <i className='bi bi-chevron-right'></i>{' '}
              <strong>Freelance:</strong> <span>Available</span>
              </li>
            </ul>
          </div>
        </div>
        <p>
         
        </p>
      </div>
     </div>
   </div>
   <Counter active={aboutActive}/>
   <Skills active={aboutActive}/>
   <Interests />
   </section>
  )
}

export default About