import React, { useEffect, useState } from 'react';
import Books from '../Books/Books';
import Cart from '../Cart/Cart';
import './Shop.css'


const Shop = () => {
    const [books, setBooks] = useState([]);
    console.log(books);

    useEffect(() => {
        fetch('comicData.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])


    return (
        <div className='shop'>
            <div className='books'>
                {
                    books.map(book => <Books
                        key={book.id}
                        book={book}
                    ></Books>)
                }

            </div>
            <div className='cart'>
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Shop;