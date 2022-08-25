import React from 'react';
import './Cart.css'
import { MdDeleteForever } from 'react-icons/md';
import { GiSpiderMask } from 'react-icons/gi';

const Cart = ({ item, removeItem }) => {
    const { name, price } = item;
    return (
        <div className='cart-info'>
            <div className='item'>
                <GiSpiderMask></GiSpiderMask>
                <h4 className='comic-name'>{name}</h4>
                <p> ${price}</p>
                <MdDeleteForever onClick={() => removeItem(item)}></MdDeleteForever>
            </div>
        </div>
    );
};

export default Cart;