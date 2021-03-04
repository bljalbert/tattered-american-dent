import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Footer.css';


function Footer() {
    return (
        <div className='footer-container'>
            <section className="footer-appt">
            <div>
                <h1>Call for an Appointment <br />
                    850-778-6799
                </h1>
            </div>
            {/* <div className='body-btns'>
                <Button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                CLICK HERE TO SCHEDULE AN APPOINTMENT
                </Button>
            </div> */}
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to='/Home'>Home</Link>
                        <Link to='/About'>About Us</Link>
                        <Link to='/Services'>Services / Rates</Link>
                        <Link to='/BeforeAfter'>Before / After</Link>
                        {/* <Link to='/Login'>Login</Link> */}
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Social Media</h2>
                        <a href="http://instagram.com/tatteredamerican/?hl=en/" title="facebook">Instagram</a>
                        <a href="https://www.facebook.com/TatteredAmericanDentRemoval/" title="facebook">Facebook</a>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Contact Us</h2>
                        <p>850-778-6799</p>
                        <p>matt@tatteredamerican.com</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
