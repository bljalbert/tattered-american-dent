import React from 'react'
import './BodyAbout.css';
import { Button } from './Button';

function BodyAbout() {
    return (
        <div className="about">
            <div className="about__container">
                <h1>Our Story</h1>
                <img src="/images/mattdent.jpg" className="about__container__img" alt="Matt working dent" />
                <h3>Matthew Jalbert (founder)</h3> 
                <p className="about__container__description">
                    started his Paintless Dent Repair (PDR) career in 2010. His eye for detail helped him quickly rise in the ranks amongst his peer in 
                    both quality and performance while working with Shops and Dealerships in the area. His professional attitude and strong work ethic helped him maintain 
                    and land accounts that are still active today. <br/><br/> He has created a loyal customer base through dependable and high quality work.  His goal is to help change 
                    the PDR industry’s perspective and  respect in the local area.
                </p>
                <p className="about__container__description">
                    Tattered American Dent Removal is a family owned and operated company servicing the Tallahassee and surrounding areas.  We try to treat every customer as if they are 
                    part of the family.  There are other PDR companies in the area with similar services, but our service and professionalism are second to none. Our personalities and desire to please the 
                    customer is one of the first things you will notice.  Come be a part of the family!
                </p>
                <br/><br/>
            </div>
            
        </div>
    );
}

export default BodyAbout;
