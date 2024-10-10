// src/components/BookList.js
import React, { useEffect, useState } from 'react';
import { getBooks } from '../services/bookService';
import '../index.css';

const BookList = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetchBooks();
    }, []);

    const fetchBooks = async () => {
        try {
            const booksData = await getBooks();
            setBooks(booksData);
        } catch (error) {
            console.error('Error fetching books:', error);
        }
    };

    return (
        <div className="book-list">
            <h2>Books Available</h2>
            <ul>
                {books.map(book => (
                    <li key={book.id} className="book-item">
                        <span>{book.title}</span>
                        <span className={book.status ? 'available' : 'not-available'}>
                            {book.status ? 'Available' : 'Not Available'}
                        </span>
                        <button className="action-btn">Borrow</button>
                        <button className="action-btn">Reserve</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BookList;
