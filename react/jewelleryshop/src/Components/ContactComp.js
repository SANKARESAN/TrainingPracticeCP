import React from 'react'
import '../Layouts/external.css';




const ContactComp = () => {
    return (
        <div className="contact-us-container">
        <h1>Contact Us</h1>
  
        <p><strong>
          We are here to help you with all your jewellery needs. Reach out to us
          for inquiries, custom designs, or feedback. Your satisfaction is our
          priority.</strong>
        </p>
  
        <div className="contact-details" >
          <h2>Our Contact Details</h2>
          <p><strong>Address:</strong> Sankaresh's Jewellery</p>
          <p><strong>Phone:</strong> +91 6380181124</p>
          <p><strong>Email:</strong> sankaresh@gmail.com</p>
          <p><strong>Opening Hours:</strong> 08.30 am to 05.30 pm. (Monday to Saturday)</p>
        </div>
  
        <div className="contact-form">
          <form>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" name="name" placeholder="Enter your name" required />
            </div>
  
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" name="email" placeholder="Enter your email" required />
            </div>
  
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea id="message" name="message" rows="5" placeholder="Type your message here" required></textarea>
            </div>
  
            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>
      </div>
    )
}

export default ContactComp


