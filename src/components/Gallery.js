import React from 'react'
import Galleryitem from './Galleryitem'
import './Gallery.css';

function Gallery() {
    return (
        <div className='gallery'>
            <h1>Here is a gallery of some of our work</h1>
            <div className="gallery__container"></div>
            <div className="gallery__wrapper"></div>
            <ul className="gallery__items">
                <Galleryitem src='images/before1.jpg' text='Before' label='Work completed' />
                <Galleryitem src='images/after1.jpg' text='After' label='Work completed' />
                <Galleryitem src='images/before2.jpg' text='Before' label='Work completed' />
                <Galleryitem src='images/after2.jpg' text='After' label='Work completed' />
            </ul>
            <ul className="gallery__items">
                <Galleryitem src='images/before3.jpg' text='Before' label='Work completed' />
                <Galleryitem src='images/after3.jpg' text='After' label='Work completed' />
                <Galleryitem src='images/before4.jpg' text='Before' label='Work completed' />
                <Galleryitem src='images/after4.jpg' text='After' label='Work completed' />
            </ul>
            <ul className="gallery__items">
                <Galleryitem src='images/before5.jpg' text='Before' label='Work completed' />
                <Galleryitem src='images/after5.jpg' text='After' label='Work completed' />
                <Galleryitem src='images/before6.jpg' text='Before' label='Work completed' />
                <Galleryitem src='images/after6.jpg' text='After' label='Work completed' />
            </ul>
        </div>
    )
}

export default Gallery;
