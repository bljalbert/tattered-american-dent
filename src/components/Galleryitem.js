import React from 'react';
import { Link } from 'react-router-dom';

function Galleryitem(props) {
    return (
        <div>
            <li className='gallery__item'>
                <Link className='gallery__item__link' to={props.path}>
                    <div className='gallery__item__pic-wrap'>
                        <img src={props.src} alt='Before/After' className='gallery__item__img'/>
                    </div>
                    
                </Link>
                <h5 className='gallery__item__text'>{props.text}</h5>
            </li>
        </div>
    )
}

export default Galleryitem;
