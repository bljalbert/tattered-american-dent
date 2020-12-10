import React from 'react';
import '../../App.css';
import '../BodyAbout.css';
import BodyAbout from '../BodyAbout';
import '../Footer.css';
import Footer from '../Footer';
import HeroSectionAbout from '../HeroSectionAbout';

function About() {
    return (
        <>
            <HeroSectionAbout />
            <BodyAbout />
            <Footer />
        </>
    )
} 

export default About;