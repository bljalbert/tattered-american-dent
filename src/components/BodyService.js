import React from 'react'
import './BodyService.css';
import { Button } from './Button';

function BodyService() {
    return (
        <div className='body'>
            <div className="body__container">   
            <h1>Paintless Dent Repair</h1>  
                <div className="body__container__description">
                                       
                    <p>We repair small dents, door dings, and hail damage without needing to repaint your car, maintaining the value. 
                        Our process is FASTER and LESS EXPENSIVE. We go behind the metal and massage the dent out. Most door dings can 
                        be repaired for a fraction of the cost of a conventional repair in as little as 45 minutes. 
                    </p>
                <img className='body__img md-6' src='/images/shelby.jpg' />
                <br />
                <br />
                </div>  
                <h1>Hail Damage Repair</h1>
                <div className="body__container__description">
                <img className='body__img md-6' src='/images/HailDent.jpg' />
                    <p>Hail damage can cause major damage in a short period of time, leaving your prized possession looking horrible.  Living in 
                        Florida hail damage does not happen very often, but when it does you need a place to call that can help you get your ride back to 
                        looking perfect.  We specialize in hail damage repair and can work with all major insurance companies so you don't have to deal with the hassle.   
                    </p>
                
                <br />
                <br />
                </div> 
                <h1>Insurance claim Repair</h1>
                <div className="body__container__description">
                    <p>We work with all major insurance companies to help you get your vehicle back to prime condition.  In fact insurance companies 
                        prefer Paintless Dent Repairs over body shop repairs, due to the quick and easy process and the fact that it restores your 
                        vehicle back to a factory finish without the added cost of parts or paint.
                    </p>
                    <img className='body__img md-6' src='/images/insurance_company.jpg' />
                <br />
                <br />
                </div>
                <h1>Luxury Car Paintless Dent Repair</h1>
                <div className="body__container__description">
                <img className='body__img md-6' src='/images/lambo.jpg' />
                    <p>We specialize in high end exotic and luxury car paintless dent repairs. The original finish on sports cars 
                        and luxury cars is invaluable and many repair services lack the expertise to maintain them. We combine 
                        remarkable new techniques with extensive experience and detailed care to make dents in your prized vehicle disappear without 
                        compromising the original finish. The smooth exterior contours and specially-designed frames are one of the chief hallmarks of high-end cars and give each car its immediate 
                        striking impression. A dent in your refinished American classic or new exotic takes away from its stunning appearance and notably reduces 
                        its value. Matching the color and finish of your rare classic or foreign car can be nearly impossible or exceptionally costly, but our 
                        paintless dent repair removes damage while maintaining the original paint of your vehicle.
                    </p>
                
                <br />
                <br />
                </div> 
            </div>
        </div>
    )
}

export default BodyService;
