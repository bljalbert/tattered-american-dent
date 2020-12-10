import React from 'react'
import './BodyService.css';
import { Button } from './Button';

function BodyService() {
    return (
        <div className='body'>
            <div className="body__container">
            <h1 className="md-6">What Services We Provide</h1>    
                <div className="body__container__description">
                    <p>Tattered American Dent Removal specializes in Paintless Dent Repair (PDR) to eliminate small dents, door dings, hail damage and more on your vehicle. 
                    No dent is too small or too big.  Our technicians skillfully restore damaged panels to their original condition without compromising your 
                    vehicle’s factory finishes. We work with your insurance company, minimize your down time, and save you money. And, unlike conventional body 
                    shop repair work, our dent repair and removal techniques do not diminish your car’s value.  Our process is FAST and LESS EXPENSIVE than a body shop.  
                    </p>
                <img className='body__img md-6' src='/images/ferrari.jpg' />
                <br />
                <br />
                <br />
                </div>  
            </div>
        </div>
    )
}

export default BodyService;
