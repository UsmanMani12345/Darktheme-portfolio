import React from 'react';
import './Contact.css';
import {FiMail, FiPhone } from 'react-icons/fi';
import { FaLocationArrow,  FaFacebook, FaGithub, FaInstagram, FaTwitter} from 'react-icons/fa';
const Contact = () => {
  return (
    <>
    
    <div className="contact" id="contact">
    <div className="hr-heading">
        <h1 className='heading'>Contact</h1>
        <hr />
        </div>
        <div className="contact-info">
            <div className="contact-form">
                <h2>Just Say Hello</h2>

                <input type="text"  placeholder='Your Name'/>
                <input type="text" placeholder='Your Father Name'/>
                <input type="email" placeholder='Your Email'/>
                <textarea name="Message" rows="13" cols="50" placeholder='YourMessage'></textarea>
                <a href="" className='submit'>Submit</a>
            </div>



            <div className="contact-container">
              <div className="contact-content">
                <h2>Contact Info</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus odio praesentium velit consectetur quas aliquid! Et perspiciatis ipsa natus nam.</p>
                </div>
                    
    <div className="contact-link">
      <div className="email-one">

      <div className="email-tag">
      <FiMail className='email'/>
      </div>
    <div className="email-contact">

      <h2>Email</h2>
      <p>maniusmanusman61@gmail.com</p>
      <span>info@support.com</span>
    </div>
    </div>


    <div className="email-one">

<div className="email-tag">
<FiPhone className='email'/>
</div>
<div className="email-contact">

<h2>Phone</h2>
<p>+923110054566</p>
<span>+9230099888</span>
</div>
</div>


<div className="email-one">

      <div className="email-tag">
      <FaLocationArrow className='email'/>
      </div>
    <div className="email-contact">

      <h2>Location</h2>
      <p>Scheme 3 Rawalpindi,Pakistan</p>
      <span>St No 6 Lane No 1</span>
    </div>
    </div>

    <div className="email-two">

      <div className="email-tag1">
      <h2>Visit My Profile and Get Connected</h2> 
      </div>
      

      <div className="profile-contact">
        <div className="profile-links">
        <div className="email-tag">
      <FaGithub className='email'/>
      </div>
      <div className="email-tag">
      <FaTwitter className='email'/>
      </div>
      <div className="email-tag">
      <FaInstagram className='email'/>
      </div>
        </div>
      </div>
    </div>
    </div>
              
            </div>

        </div>



    </div>
    
    
    
    </>
  )
}

export default Contact