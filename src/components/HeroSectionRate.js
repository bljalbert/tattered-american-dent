import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSectionRate.css';

function HeroSectionRate() {
  return (
    <div className='hero-image'>
      <div className='hero-text'>
        <h1>Rates</h1>
        {/* <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          CLICK HERE TO SCHEDULE AN APPOINTMENT
        </Button> */}
      </div>
    </div>
  );
}

export default HeroSectionRate;