import React from 'react';
import './Cart.css'
import { MdDeleteForever } from 'react-icons/md';
import { GiSpiderMask } from 'react-icons/gi';



const Cart = ({ item }) => {
    console.log(item);
    const { name, price } = item;
    return (
        <div className='cart-info'>
            <div className='item'>
                <GiSpiderMask></GiSpiderMask>
                <h4>{name}</h4>
                <p> ${price}</p>
                <MdDeleteForever></MdDeleteForever>
            </div>
        </div>
    );
};

export default Cart;