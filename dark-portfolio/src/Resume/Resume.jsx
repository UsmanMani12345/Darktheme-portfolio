import React from 'react';
import './Resume.css';
import { FaGraduationCap } from 'react-icons/fa';
const Resume = () => {
  return (
    <>
    <div className="resume" id="resume">
    <div className="hr-heading">
        <h1 className='heading'>Resume</h1>
        <hr />
        </div>
        <div className="resume-container">
            <div className="resume-left">
                <div className="resume-heading">
                <FaGraduationCap size={52} color="white" className='res-icon' />
                    <h2>Education</h2>
                </div>

                <div className="line-dot">
                    <hr/>

                    <div className="dot"></div>
                    <div className="dot1"></div>
                   
                </div>

                <div className="resume-detail">
                <div className="resume-edu">
                    <h2>Intermediate</h2>
                    <span>2020-2021</span>
                </div>

                <div className="resume-uni">
                    <h3>College of XYZ</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      <br />  Enim impedit amet id modi ut delectus ducimus porro.</p>
                </div>

                <div className="resume-edu">
                    <h2>Matric</h2>
                    <span>2019</span>
                </div>

                <div className="resume-uni">
                    <h3>School of XYZ</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.  <br /> Enim impedit amet id modi ut delectus ducimus porro.</p>
                </div>
                </div>
              


            </div>
            <div className="resume-right">
                <div className="resume-heading-right">
                <FaGraduationCap size={52} color="white" className='res-icon' />
                    <h2>Experience</h2>
                </div>

                <div className="line-dot-right">
                    <hr/>

                    <div className="dot-right"></div>
                    <div className="dot1-right"></div>
                   
                </div>

                <div className="resume-detail-right">
                <div className="resume-edu-right">
                    <h2>UI/UX Designer</h2>
                    <span>Jan2022-Present</span>
                </div>

                <div className="resume-uni-right">
                <h3>Navittacc, Islamabad</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim impedit amet id modi ut delectus ducimus porro.</p>
                </div>

                <div className="resume-edu-right">
                    <h2>Baclend Developer</h2>
                    <span>Jan2022-Present</span>
                </div>

                <div className="resume-uni-right">
                <h3>Navittacc, Islamabad</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim impedit amet id modi ut delectus ducimus porro.</p>
                </div>
                </div>
              


            </div>
        </div>




    </div>
    
    
    </>
  )
}

export default Resume