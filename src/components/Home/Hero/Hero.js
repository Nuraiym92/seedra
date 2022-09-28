import React from 'react'
import './hero.scss'


function Hero() {
  return (
    <div className='hero'>
      <div className="hero-main">
         <div className="hero-info">
         <div className="intro">
        <h1>SEEDRA Basil Seeds for Indoor and Outdoor Planting</h1>
        <p>Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our 
          seeds were tested and have the best germination ratings. Your easy growing experience is our guarantee</p>
      </div>
      <div className="hot-price">
        <img src='./images/fire.svg' alt="" />
        <span className='price-after'>$12.56</span>
        <span className='price-before'>$15.56</span>
      </div>
      <div className="hero-buttons">
        <button className='cart-btn'>Add to card</button>
        <button className='discover-btn'>Discover</button>
      </div>
    
      </div>
        {/* <div className="hero-img">
        <img className="hero-image" src={heroImg} alt="hero-img" />
        <img className='leaves-1' src={rightCornerImg} alt="rightcorner-img" />
      </div> */}
      </div>
      
     </div>
  )
}

export default Hero