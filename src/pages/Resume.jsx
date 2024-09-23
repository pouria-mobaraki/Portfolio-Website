import React from 'react'
import './resume.css'
import SectionTitle from '../components/SectionTitle'

function Resume({reference}) {
  return (
  <section id="resume" className='resume' ref={reference}>
    <div className="container">
      <SectionTitle  title={"Resume"} subtitle={"Check My Resume"}/>
      <div className="row">
        <div className="col-lg-6">
          <h3 className="resume-title">
            Sumary
          </h3>
          <div className="resume-item pb-0">
            <h4>Pouria Mobaraki</h4>
            <p>
              <em>
                I am a front-end developer with about a year of training and learning experience.
                I have developed various projects with javascript and react library.
              </em>
            </p>
            <ul>
              <li>Heravi Square, Tehran ,Iran</li>
              <li>(0098)9121044339</li>
              <li>ss_pooria69@yahoo.com</li>
            </ul>
          </div>

          <h3 className="resume-title">Education</h3>
          <div className="resume-item">
            <h4>Bachelor of Industrial Engineering</h4>
            <h5>2013-2018</h5>
            <p>
              <em>Qazvin Islamic Azad University (Barajin)</em> 
            </p>
            <p>
             In this university, I learned various courses related to the field
             of industrial engineering . In addition ,during those years , I had experience in programming with C++ 
             language and doing practice projects.
            </p>
          </div>

          <div className="resume-item">
            <h4>Deploma in mathematics and physics</h4>
            <h5>2012</h5>
            <p>Sobhan High school</p>
            <p>
              I spent 4 years in sobhan high school.
            </p>
          </div>
        </div>

        <div className="col-lg-6">
          <h3 className="resume-title">Professional Experience</h3>
          <div className="resume-item">
            <h4>Junior Web Development</h4>
            <h5>2023-present</h5>
            <p>
              <em>
                Projects
              </em>
            </p>
            <ul>
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                 Dolor nemo laborum repudiandae perferendis obcaecati nisi fugiat nobis.
                  </li>
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                 Dolor nemo laborum repudiandae perferendis obcaecati nisi fugiat nobis.
                  </li>
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                 Dolor nemo laborum repudiandae perferendis obcaecati nisi fugiat nobis.
                  </li>
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                 Dolor nemo laborum repudiandae perferendis obcaecati nisi fugiat nobis.
                  </li>
            </ul>
          </div>
          <div className="resume-item">
            <h4>Front-end Developer Specialist</h4>
            <h5>2023-2024</h5>
            <p>
              <em>
                Example company,City,Nation
              </em>
            </p>
            <ul>
              <li>develope every things that you are think , trust me</li>
              <li>develope every things that you are think , trust me</li>
              <li>develope every things that you are think , trust me</li>
              <li>develope every things that you are think , trust me</li>
            </ul>
          </div>
        </div>


      </div>
    </div>
  </section>
  )
}

export default Resume