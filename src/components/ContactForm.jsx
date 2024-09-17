import React,{useState} from "react";
import "./contactForm.css";


function ContactForm() {

  const initialState = {
    fullname: '',
    email: '',
    subject: '',
    message: '',
    result: '',
  };

  const [text,setText] = useState(initialState)

  const changeText = e=> {
    console.log(e.target);
    
  const {name,value}=e.target;
  setText({...text,[name]:value,result:''})
  }

  const handleSubmitMessage = e =>{
    e.preventDefault()
    if(text.fullname===''||text.email===''||text.message===''){
      setText({...text,result:'incomplete'})
    }
  }
  return (
    <form className="contact-form mt-4" onSubmit={handleSubmitMessage}>
      <div className="row">
        <div className="col-md-6 form-group ">
          <input
            type="text"
            name="fullname"
            className="form-control"
            id="name"
            placeholder="Your Name"
            value={text.fullname}
            onChange={changeText}
          />
        </div>
        <div className="col-md-6 form-group mt-md-0 mt-3">
          <input
            type="email"
            name="email"
            className="form-control"
            id="email"
            placeholder="Your Email"
            value={text.email}
            onChange={changeText}
          />
        </div>
      </div>
      <div className="form-group mt-3">
        <input
          type="text"
          name="subject"
          className="form-control"
          id="subject"
          placeholder="Subject"
          value={text.subject}
            onChange={changeText}
        />
      </div>
      <div className="form-group mt-3">
        <textarea
          name="message"
          id="message"
          rows="6"
          className="form-control"
          placeholder="Message"
          value={text.message}
            onChange={changeText}
        ></textarea>
      </div>
      {text.result==='incomplete'&& (
        <div className="error-message">Please fill in all above details</div>
      )}
      <div className="text-center">
        <button type="submit">Send Message</button>
      </div>
    </form>
  );
}

export default ContactForm;
