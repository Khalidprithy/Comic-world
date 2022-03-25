import React from 'react';
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
        </div>
    );
};

export default Books;