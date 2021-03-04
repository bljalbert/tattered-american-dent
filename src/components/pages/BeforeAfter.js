import React from 'react';
import '../../App.css';
import Gallery from '../Gallery';
import Footer from '../Footer';
import HeroSectionGallery from '../HeroSectionGallery';

export default function BeforeAfter() {
    return (
        <>
            <HeroSectionGallery />
            <Gallery />
            <Footer />
        </>
    );
}