import React from 'react';
import '../../App.css';
import BodyService from '../BodyService';
import Footer from '../Footer';
import HeroSectionService from '../HeroSectionService';


function Service() {
    return (
        <>
            <HeroSectionService />
            <BodyService />
            <Footer />
        </>
    )
} 

export default Service;