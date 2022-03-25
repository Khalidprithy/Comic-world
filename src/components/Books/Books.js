import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import './Book.css'

const Books = ({ book }) => {
    const { image, name, price } = book;


    return (
        <div className='book'>
            <img src={image} alt="" />
            <div className='book-info'>
                <h4>{name}</h4>
                <p>Price: ${price}</p>
            </div>
            <div className='btn-cart-icon'>
                <button className='cart-btn'>Add to Cart
                    <FaShoppingCart className='icon'></FaShoppingCart>
                </button>
            </div>
        </div>
    );
};

export default Books;