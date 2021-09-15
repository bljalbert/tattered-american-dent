import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSectionService.css';

function HeroSectionService() {
  return (
    <div className='hero-container-service'>
      <h1>Services</h1>
      <div className='hero-btns'>
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

export default HeroSectionService;