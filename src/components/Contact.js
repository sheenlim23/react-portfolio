import React from 'react';
import emailjs from 'emailjs-com';
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Contact = () => {
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_10ngh98', 'template_pdpaf6s', e.target, 'user_Jj70R43ceZ3dTphzIX6yg')
          .then((result) => {
              alert('Succesfully sent!');
              e.target.reset();
              console.log(result.text);
          }, (error) => {
                alert('Succesfully sent!');
              console.log(error.text);
          });
      }
    return (
        <div className="contact" id="contact">
            <div className="title">
                <h1>Contact Me</h1>
                <small>Contact Details</small>
            </div>
            <div className="contact-container">
                <div className="contact-details">
                    <div className="col">
                        <div className="icon">
                            <FontAwesomeIcon icon='phone' />
                        </div>
                        <div className="detail">
                            <h4>Mobile Number</h4>
                            <p>(+63) 997 4477 793</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="icon">
                            <FontAwesomeIcon icon='at' />
                        </div>
                        <div className="detail">
                            <h4>Email</h4>
                            <p>sheenlim23@gmail.com</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="icon">
                            <FontAwesomeIcon icon='map-marker' />
                        </div>
                        <div className="detail">
                            <h4>Address</h4>
                            <p>J.Panis St., Kasambagan, Cebu City.</p>
                        </div>
                    </div>
                </div>
                <div className="message-me">
                    <form id="form" onSubmit={sendEmail}>
                        <div className="input-name">
                            <input type="text"  name="name" id="" placeholder="Name" />
                        </div>
                        <input type="text" name="user_email" id=""  placeholder="Email"/>
                        <textarea name="message" id="" cols="30" rows="10">Message</textarea>
                        <input type="submit" className="btn message-btn" value="Send Message"/>
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default Contact;