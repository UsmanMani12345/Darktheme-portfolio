import React from 'react';
import './About.css';
import Image1 from '../images/men.jpg';
const About = () => {
  return (
    <>
    <div className="about" id="about">
        <div className="hr-heading">
        <h1 className='heading'>About Me</h1>
        <hr />
        </div>
        <div className="about-container">
            <div className="about-left">
            <div className="about-content">
                <h1>Hi There! I'M Muhammad Usman Jamil</h1>
                <h3>Visual Designer</h3>
                </div>
                <div className="about-para">
                    <p>I'M visual designer with strong focus on digital branding. Visual design seek to attract, inspire, create desire and otivate people to respond messages, with a view to making a favorable impact</p>
                </div>
        <div className="about-info">
            <div className="info-content">
                <p>Birthday</p>
                <span>:</span>
                <h4>Jan 24,2002</h4>
            </div>

            <div className="info-content">
                <p>Phone</p>
                <span>:</span>
                <h4>03110054566</h4>
            </div>

            <div className="info-content">
                <p>Email</p>
                <span>:</span>
                <h4>maniusmanusman61@gmail.com</h4>
            </div>

            <div className="info-content">
                <p>From</p>
                <span>:</span>
                <h4>Rawalpindi, Pakistan</h4>
            </div>

            <div className="info-content">
                <p>Language</p>
                <span>:</span>
                <h4>English, Urdu, Arabic</h4>
            </div>


            <div className="info-content">
                <p>Freelance</p>
                <span>:</span>
                <h4>Available</h4>
            </div>
                <a href="" className='down-cv'>Download CV</a>
        </div>
        
            </div>
            <div className="about-right">
                <img src={Image1} alt="" />
            </div>
        
        </div>
    </div>
       
    </>
  )
}

export default About