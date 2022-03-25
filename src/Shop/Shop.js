import React from 'react';
import './Shop.css'
import Books from '../Books/Books';
import Cart from '../Cart/Cart';

const Shop = () => {
    return (
        <div className='shop'>
            <div className='books'>
                <Books></Books>
            </div>
            <div className='cart'>
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Shop;