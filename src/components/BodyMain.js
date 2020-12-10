import React from 'react'
import './BodyMain.css';
import { Button } from './Button';

function BodyMain() {
    return (
        <div className='body'>
            <div className="body__container">
            <h1 className="md-6">Why Paintless Dent Removal!</h1>    
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
            <div className="body__container__description">
            <h1>Why Choose Tattered American Dent Removal?</h1>
                <p>
                    At Tattered American Dent, we take care to provide our customers with high quality services personalized to their unique needs.  Our staff members are professional, 
                    courteous, and efficient.
                   
                    <ul className="body__ul">
                        <li className="body__li">For 10 years Tattered American Dent has been providing quality Paintless Dent Repair service to Tallahassee area dealerships, body shops and retail clients 
                            with excellent and dependable service. 
                        </li>
                        <li className="body__li">
                            On-site services to several major auto dealerships and Body Shops.
                        </li>
                        <li className="body__li">
                            We are a 100% remote/travel company and will come to you for your needs.
                        </li>
                        <li className="body__li">
                            Convenient retail location in Tallahassee allows us to service customers, insurance claims and warranty repairs. 
                        </li>
                        <li className="body__li">
                            We repair all makes and models, domestic and foreign, with 100% customer satisfaction being our primary goal. 
                        </li>
                        <li className="body__li">
                            We work with State Farm, Progressive, AllState, USAA, Geico, County Mutual and other Insurance Companies to take care of your Hail Damaged Vehicles.
                        </li>
                    </ul>
                </p>  
            </div>
        </div>
    )
}

export default BodyMain
