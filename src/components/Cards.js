import React from 'react'
import Carditem from './Carditem'
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these EPIC Destinations!</h1>
            <div className="cards__container"></div>
            <div className="cards__wrapper"></div>
            <ul className="cards__items">
                <Carditem 
                src='images/img-9.jpg'
                text='Expolore the hidden waterfall deep inside the Amazon Jungle'
                label='Adveneture'
                path='services'
                />
            </ul>
        </div>
    )
}

export default Cards
