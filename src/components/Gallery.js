import React from 'react'
import Galleryitem from './Galleryitem'
import './Gallery.css';

function Gallery() {
    return (
        <div className='Gallery'>
            <h1>Check out some of our before and after pictures!</h1>
            <div className="gallery__container"></div>
            <div className="gallery__wrapper"></div>
            <ul className="gallery__items">
                <Galleryitem src='images/before1.jpg' text='Before' label='Work completed' path='/' />
                <Galleryitem src='images/after1.jpg' text='After' label='Work completed' path='/' />
            </ul>
        </div>
    )
}

export default Gallery;
