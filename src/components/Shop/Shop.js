import React, { useEffect, useState } from 'react';
import Books from '../Books/Books';
import Cart from '../Cart/Cart';
import './Shop.css'


const Shop = () => {
    const [books, setBooks] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('comicData.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, []);

    const handleAddToCart = (books) => {
        const limit = (cart.length <= 3);
        const exist = cart.find(item => item.id === books.id);
        if (exist) {
            alert('Already Selected')
            return;
        }
        else if (!limit) {
            alert('Can not select more')
            return;
        }
        else {
            let newCart = [...cart, books];
            setCart(newCart);
        }
    }

    const handleClearCart = () => {
        let emptyCart = [];
        setCart(emptyCart);
    }

    const pickRandom = (cart) => {
        if (cart.length < 1) {
            alert('No item on the cart')
            return;
        }
        else {

            let newCart = []
            const random = (Math.floor(Math.random() * cart.length));
            const randomItem = (cart[random]);
            newCart.push(randomItem)
            setCart(newCart)
        }
    }

    const removeItem = (items) => {
        setCart(cart.filter(item => item !== items))
    }

    return (
        <div className='shop'>
            <div className='books'>
                {
                    books.map(book => <Books
                        key={book.id}
                        book={book}
                        handleAddToCart={handleAddToCart}
                    ></Books>)
                }

            </div>
            <div className='cart'>
                <h1>Selected Book: {cart.length}</h1>
                {
                    cart.map(item => <Cart
                        key={item.id}
                        item={item}
                        removeItem={removeItem}
                    ></Cart>)
                }
                <div className='button-container'>
                    <button onClick={() => pickRandom(cart)} className='btn'>Pick One</button>
                    <button onClick={handleClearCart} className='btn'>Clear Cart</button>
                </div>

            </div>
        </div>
    );
};

export default Shop;