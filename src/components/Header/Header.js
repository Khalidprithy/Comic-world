import React from 'react';
import './Header.css'
import { GiAngularSpider } from 'react-icons/gi';

const Header = () => {
    return (
        <div className='header'>
            <div className='header-info'>
                <h1>Comic World</h1>
                <GiAngularSpider></GiAngularSpider>
            </div>
            <p>Your Favourite website for Comic book</p>
        </div>

    );
};

export default Header;