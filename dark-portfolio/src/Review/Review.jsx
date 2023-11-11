import React from 'react';
import './Review.css';
import Image11 from '../images/img1.jpg';
import Image12 from '../images/img2.jpg';
import Image13 from '../images/men.jpg';

const Review = () => {
  return (
    <>
    
    <div className="review" id="review">
    <div className="hr-heading">
        <h1 className='heading'>Review</h1>
        <hr />
        </div>

    <div className="review-content">
        <div className="review-card">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, omnis? Id culpa tempora, libero est voluptas atque dolor, in quo voluptatibus architecto laborum sed obcaecati iure nemo natus, rerum ad.</p>

        </div>
        <div className="review-card">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, omnis? Id culpa tempora, libero est voluptas atque dolor, in quo voluptatibus architecto laborum sed obcaecati iure nemo natus, rerum ad.</p>

        </div>
        <div className="review-card">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, omnis? Id culpa tempora, libero est voluptas atque dolor, in quo voluptatibus architecto laborum sed obcaecati iure nemo natus, rerum ad.</p>

        </div>

       
    
        
        <div className="review-img">
            <img src={Image11} alt="" />
            <h3>MUJ</h3>
            <span>Chairman</span>
        </div>

        <div className="review-img">
            <img src={Image12} alt="" />
            <h3>Miss XYZ</h3>
            <span>Executive Director</span>
        </div>


        <div className="review-img">
            <img src={Image13} alt="" />
            <h3>Mark Jean</h3>
            <span>Managing Director</span>
        </div>
        

    </div>

    </div>
    
    
    
    </>
  )
}

export default Review