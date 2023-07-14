import React from 'react';
import './Hero.css';
import Header from './Header/Header';
import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';

import Heart from '../../assets/heart.png';

import Calories from '../../assets/calories.png';

function Hero() {
  return (
    <div className='hero'>
      <div className='left-h'>
        <Header />
        {/* the best add */}
        <div className='the-best-ad'>
          <div></div>
          <span>The best fitness club in the town</span>
        </div>
        {/* hero heading */}
        <div className='herotext'>
          <div>
            <span className='stroke-text'>Shape</span>
            <span className='herotext-two'>Your</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div className='middle-text'>
            <span>
              In here we will help you to shape and build your body and live up
              your life to fullest
            </span>
          </div>
        </div>
        {/* figures */}
        <div className='figures'>
          <div>
            <span>+140</span>
            <span>Expert coaches</span>
          </div>
          <div>
            <span>+978</span>
            <span>Members joined</span>
          </div>
          <div>
            <span>+50</span>
            <span>Fitness program</span>
          </div>
        </div>
        {/* hero buttons */}
        <div className='hero-buttons'>
          <button className='btn'>Get started</button>
          <button className='btn'>Learn more</button>
        </div>
      </div>
      <div className='right-h'>
        <button className='btn'>Join now</button>
        <div className='heart-rate'>
          <img src={Heart} alt='heart' />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </div>

        {/* hero image */}

        <img src={hero_image} className='hero-image' alt='' />
        <img src={hero_image_back} className='hero-image-back' alt='' />

        {/* calories */}
        <div className='calories'>
          <img src={Calories} alt='' />
          <div>
            {' '}
            <span>Calories burned</span>
            <span>220 kcal</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
