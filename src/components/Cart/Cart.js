import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { item } = props;
    console.log(item);

    return (
        <div className='cart'>
            <h1>name:{item.name}</h1>
        </div>
    );
};

export default Cart;