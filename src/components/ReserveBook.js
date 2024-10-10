import React, { useState } from 'react';
import { reserveBook } from '../services/bookService';
import '../index.css';

const ReserveBook = () => {
    const [bookId, setBookId] = useState('');
    const [userId, setUserId] = useState('');

    const handleReserve = async () => {
        try {
            await reserveBook(bookId, userId);
            alert('Book reserved successfully');
        } catch (error) {
            alert('Error reserving book');
        }
    };

    return (
        <div>
            <h2>Reserve a Book</h2>
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
            <button onClick={handleReserve}>Reserve Book</button>
        </div>
    );
};

export default ReserveBook;
