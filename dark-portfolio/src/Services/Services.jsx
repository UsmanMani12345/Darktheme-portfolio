import React from 'react';
import './Services.css';
import Image from'../images/html.svg';
import Image1 from'../images/css.png';
import Image2 from'../images/react.png';
import Image3 from'../images/jquery.png';
import Image4 from'../images/bootstrap.svg';
import Image5 from'../images/php.png';


const Services = () => {
  return (
    <>
    
    <div className="services" id="services">
    <div className="hr-heading">
        <h1 className='heading'>Services</h1>
        <hr />
        </div>

        <div className="services-card">
            <div className="card-one">
                <div className="card-img">
                    <img src={Image} alt="" />
                </div>

                <div className="card-heading">
                    <h2>HTML5</h2>
                    </div>
                    <div className="card-para">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur eos distinctio architecto culpa vitae ullam.</p>
                    
                        </div>

                
            </div>



            <div className="card-one">
                <div className="card-img">
                    <img src={Image1} alt="" />
                </div>

                <div className="card-heading">
                    <h2>CSS3</h2>
                    </div>
                    <div className="card-para">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur eos distinctio architecto culpa vitae ullam.</p>
                    
                        </div>

                
            </div>


            {/* Second card row */}


            <div className="card-one">
                <div className="card-img">
                    <img src={Image2} alt="" />
                </div>

                <div className="card-heading">
                    <h2>REACTJS</h2>
                    </div>
                    <div className="card-para">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur eos distinctio architecto culpa vitae ullam.</p>
                    
                        </div>

                
            </div>


            <div className="card-one">
                <div className="card-img">
                    <img src={Image3} alt="" />
                </div>

                <div className="card-heading">
                    <h2>JQUERY</h2>
                    </div>
                    <div className="card-para">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur eos distinctio architecto culpa vitae ullam.</p>
                    
                        </div>

                
            </div>


            <div className="card-one">
                <div className="card-img">
                    <img src={Image4} alt="" />
                </div>

                <div className="card-heading">
                    <h2>Bootstrap5</h2>
                    </div>
                    <div className="card-para">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur eos distinctio architecto culpa vitae ullam.</p>
                    
                        </div>

                
            </div>
            <div className="card-one">
                <div className="card-img">
                    <img src={Image5} alt="" />
                </div>

                <div className="card-heading">
                    <h2>PHP</h2>
                    </div>
                    <div className="card-para">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur eos distinctio architecto culpa vitae ullam.</p>
                    
                        </div>

                
            </div>
        </div>




    </div>
    
    
    
    
    
    
    
    </>
  )
}

export default Services