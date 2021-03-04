import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSectionMain.css';

function HeroSectionMain() {
  return (
    <div className='hero-container-main'>
      <video src='/videos/Tattered_flag.mp4' autoPlay loop muted />
      <h1 className='md 4'>Tattered American Dent Removal</h1>
      <div className='hero-container-main-subheader'>
          {/* <div className='hero-btns'>
            <Button
              className='btns'
              buttonStyle='btn--outline'
              buttonSize='btn--large'
            >
              CLICK HERE TO SCHEDULE AN APPOINTMENT
            </Button>
        </div>  */}
      </div>
    </div>
  );
}

export default HeroSectionMain;