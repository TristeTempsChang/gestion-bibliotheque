// src/components/LoanBook.js
import React, { useState } from 'react';
import { borrowBook, returnBook } from '../services/bookService';
import '../index.css';

const LoanBook = () => {
    const [bookId, setBookId] = useState('');
    const [userId, setUserId] = useState('');

    const handleBorrow = async () => {
        try {
            await borrowBook(bookId, userId);
            alert('Book borrowed successfully');
        } catch (error) {
            alert('Error borrowing book');
        }
    };

    const handleReturn = async () => {
        try {
            await returnBook(bookId, userId);
            alert('Book returned successfully');
        } catch (error) {
            alert('Error returning book');
        }
    };

    return (
        <div className="loan-book">
            <h2>Borrow or Return a Book</h2>
            <input
                type="text"
                placeholder="Book ID"
                value={bookId}
                onChange={(e) => setBookId(e.target.value)}
            />
            <input
                type="text"
                placeholder="User ID"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
            />
            <button className="action-btn" onClick={handleBorrow}>Borrow Book</button>
            <button className="action-btn" onClick={handleReturn}>Return Book</button>
        </div>
    );
};

export default LoanBook;
