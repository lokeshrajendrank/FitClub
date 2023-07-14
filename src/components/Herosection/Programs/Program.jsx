import React from 'react';
import './Programs.css';
import { programsData } from '../../../data/programsData';
import RightArrow from '../../../assets/rightArrow.png';

function Program() {
  return (
    <div className='programs'>
      <div className='programs-header'>
        <span className='stroke-text'>Explore our</span>
        <span>Program</span>
        <span className='stroke-text'>to shape you</span>
      </div>

      <div className='program-categories'>
        {programsData.map((programs) => (
          <div className='category'>
            {programs.image}
            <span>{programs.heading}</span>
            <span>{programs.details}</span>
            <div className='join-now'>
              <span>Join now</span>{' '}
              <img src={RightArrow} className='arrow' alt='' />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Program;
