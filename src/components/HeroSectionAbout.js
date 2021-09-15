import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSectionAbout.css';

function HeroSectionAbout() {
  return (
    <div className='hero-container-about'>
      <img src='../img/bg1.jpg' />
      <h1>About US</h1>
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

export default HeroSectionAbout;