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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Corrupti dolorem fuga eum. Temporibus mollitia 
                illo rerum incidunt odit fugit deleniti corporis
                 eius quidem eaque quae id, excepturi pariatur provident fugiat?
              </em>
            </p>
            <ul>
              <li>Street Name,City Name ,State, 0000</li>
              <li>(00)12345678</li>
              <li>ss_pooria69@yahoo.com</li>
            </ul>
          </div>

          <h3 className="resume-title">Education</h3>
          <div className="resume-item">
            <h4>Master of Industrial Engineer</h4>
            <h5>2013-2018</h5>
            <p>
              <em>Example Institute of Technology</em>
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
               Commodi doloribus inventore maxime facilis
                consectetur fugiat sequi,
                corporis explicabo,
               ea voluptatum velit quisquam,
                id sapiente mollitia deserunt optio eligendi! Quam, possimus.
            </p>
          </div>

          <div className="resume-item">
            <h4>Bachelor of IndustrialEngineer</h4>
            <h5>2013-2018</h5>
            <p>qazvin university</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Beatae veniam perferendis sit id consectetur aut animi veritatis qui possimus!
               Saepe libero beatae ipsam assumenda illo aliquam velit voluptatem odio ipsum.
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
                Company Name ,City Nation
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