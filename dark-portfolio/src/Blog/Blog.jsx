import React from 'react';
import './Blog.css';
import Image from '../images/card.jpg';
import Image1 from '../images/card1.jpg';
import Image2 from '../images/card2.jpg';


const Blog = () => {
  return (
    <>
    <div className="blog" id="blog">

    <div className="hr-heading">
        <h1 className='heading'>Blog</h1>
        <hr />
        </div>


        <div className="blog-content">
            <div className="blog-card">
                <div className="blog-img">
                    <img src={Image} alt="" />
                </div>
                <div className="blog-heading">
                    <h4>By:Admin</h4>
                    <span>|</span>
                    <h5>07-05-2023</h5>
                </div>
                <div className="blog-para">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione culpa a nam possimus eligendi nobis?</p>
                </div>
            </div>

            <div className="blog-card">
                <div className="blog-img">
                    <img src={Image1} alt="" />
                </div>
                <div className="blog-heading">
                    <h4>By:Admin</h4>
                    <span>|</span>
                    <h5>08-05-2023</h5>
                </div>
                <div className="blog-para">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione culpa a nam possimus eligendi nobis?</p>
                </div>
            </div>

            <div className="blog-card">
                <div className="blog-img">
                <img src={Image2} alt="" />
                </div>
                <div className="blog-heading">
                    <h4>By:Admin</h4>
                    <span>|</span>
                    <h5>10-05-2023</h5>
                </div>
                <div className="blog-para">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione culpa a nam possimus eligendi nobis?</p>
                </div>
            </div>
        </div>

    </div>
    
    </>
  )
}

export default Blog