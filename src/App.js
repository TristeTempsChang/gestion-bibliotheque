// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import BookList from './components/BookList';
import LoanBook from './components/LoanBook';
import ReserveBook from './components/ReserveBook';
import UserManagement from './components/UserManagement';
import './App.css';

const App = () => {
    return (
        <Router>
            <div>
                <h1>Library Management System</h1>
                <nav className="nav-bar">
                    <Link to="/books" className="nav-link">Books</Link>
                    <Link to="/loan" className="nav-link">Loan Book</Link>
                    <Link to="/reserve" className="nav-link">Reserve Book</Link>
                    <Link to="/users" className="nav-link">User Management</Link>
                </nav>
                <Routes>
                    <Route path="/books" element={<BookList />} />
                    <Route path="/loan" element={<LoanBook />} />
                    <Route path="/reserve" element={<ReserveBook />} />
                    <Route path="/users" element={<UserManagement />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
