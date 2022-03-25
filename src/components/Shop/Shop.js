import React from 'react';
import Books from '../Books/Books';
import Cart from '../Cart/Cart';
import './Shop.css'


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