import React from 'react'
import './contact.css'
import SectionTitle from '../components/SectionTitle'
import ContactForm from '../components/ContactForm'

function Contact({reference}) {
  return (
    <section id="contact" className="contact" ref={reference}>
        <div className="container">
          <SectionTitle title="Contact" subtitle="Contact Me"/>
          <div className="row mt-2">
            <div className="col-md-6 d-flex align-items-stretch">
              <div className="info-box">
                <i className="bx bx-map"></i>
                <h3>My Address</h3>
                <p>Heravi Square,Tehran, Iran</p>
              </div>
            </div>
            <div className="col-md-6 mt-4 mt-md-0 d-flex align-items-stretch">
              <div className="info-box">
                <i className="bx bx-share-alt"></i>
                <h3>Social Profiles</h3>
                <div className="social-links">
                  <a href="#" className="twitter-x">
                    <i className="bi bi-twitter-x"></i>
                  </a>
                  <a href="#" className="facebook">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="#" className="instagram">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="#" className="skype">
                    <i className="bi bi-skype"></i>
                  </a>
                  <a href="#" className="linkedin">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 mt-4 d-flex align-items-stretch">
              <div className="info-box">
                <i className="bx bx-envelope"></i>
                <h3>Email Me</h3>
                <p>ss_pooria69@yahoo.com</p>
              </div>
            </div>
            <div className="col-md-6 mt-4 d-flex align-items-stretch">
              <div className="info-box">
                <i className="bx bx-phone-call"></i>
                <h3>Call Me</h3>
                <p>+98-9121044339</p>
              </div>
            </div>
            

          </div>
          <ContactForm />
        </div>
    </section>
)
}

export default Contact