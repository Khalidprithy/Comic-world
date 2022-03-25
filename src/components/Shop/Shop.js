import React, { useEffect, useState } from 'react';
import Books from '../Books/Books';
import Cart from '../Cart/Cart';
import './Shop.css'


const Shop = () => {
    const [books, setBooks] = useState([]);
    const [cart, setCart] = useState([]);
    const [random, setRandom] = useState([])
    // console.log(books);

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
        // window.scrollTo(0, 200);
    }

    const handleClearCart = () => {
        let emptyCart = [];
        setCart(emptyCart);
    }

    const pickRandom = (randoms) => {
        console.log(randoms.length)
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
                    <button onClick={pickRandom} className='btn'>Pick One</button>
                    <button onClick={handleClearCart} className='btn'>Clear Cart</button>
                </div>

            </div>
        </div>
    );
};

export default Shop;