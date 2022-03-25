import React, { useEffect, useState } from 'react';
import Books from '../Books/Books';
import Cart from '../Cart/Cart';
import './Shop.css'


const Shop = () => {
    const [books, setBooks] = useState([]);
    const [cart, setCart] = useState([]);
    // console.log(books);

    useEffect(() => {
        fetch('comicData.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, []);

    const handleAddToCart = (books) => {
        let newCart = [...cart, books];
        setCart(newCart);
        // window.scrollTo(0, 200);
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
                    ></Cart>)
                }
                <div className='button-container'>
                    <button className='btn'>Pick One</button>
                    <button className='btn'>Clear Cart</button>
                </div>

            </div>
        </div>
    );
};

export default Shop;