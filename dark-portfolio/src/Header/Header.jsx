import React, { useState } from 'react';
import './Header.css';
import { FiPhone } from 'react-icons/fi';
import { FaBars, FaTimes , FaFacebook, FaGithub, FaInstagram} from 'react-icons/fa';
import Image from '../images/men.jpg'

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleMobileMenuWithAnchorIcon = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <div className='header ' id='header'>
        <div className={`navbar ${mobileMenuOpen ? 'mobile-menu-open' : ''}`}>
          <div className="logo-header">
            <h1><span>MUJ</span> Production</h1>
          </div>

          <button className={`mobile-menu-button`} onClick={toggleMobileMenu}>
            {mobileMenuOpen ? <FaTimes className='icon-time' /> : <FaBars className='icon-bar'/>}
          </button>
            
          <div className={`navbar-anchor ${mobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenuWithAnchorIcon}>
            <ul>
              <li>
                <a href="#home"><span> Home</span></a>
                <a href="#about">About</a>
                <a href="#services">Services</a>
                <a href="#resume">Resume</a>
                <a href="#blog">Blog</a>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="empty">|</div>
          <div className={`navbar-icon ${mobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenuWithAnchorIcon}>
            <FiPhone className='icon-phone' />
            <span>+923110054566</span>
          </div>
        </div>



{/* Header-content */}

    <div className="header-content">

        <div className="content-img">
       <img src={Image} alt="" />
        </div>
        <div className="content-heading">
            <h1>Hi I'M Muhammad <span> Usman Jamil </span></h1>
        </div>
        <div className="content-para">
            <p>I'M Frontend Developer. I can Provide Clean Code and Pixels Perfect Design. <br/>
            I also Make website more and more interactive with web animation 
            </p>
        </div>

        <div className="content-icons">
            <FaFacebook className='link-content'/>
            <FaGithub className='link-content'/>
            <FaInstagram className='link-content'/>            
        </div>
    </div>



      </div>
    </>
  );
};

export default Header;
