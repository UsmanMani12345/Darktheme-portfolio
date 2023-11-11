import React from 'react';
import './Footer.css';
import {FaArrowAltCircleUp } from 'react-icons/fa';
const Footer = () => {
  return (
    <>
    <div className="footer">
        <div className="footer-heading">
            <h2>All Reserved Rights Is Here!</h2>
        </div>
    <div className="footer-links">
        <a href="#header">
        <FaArrowAltCircleUp className='circle'/>
        </a>
    </div>
    </div>
    
    
    
    </>
  )
}

export default Footer