// src/components/UserManagement.js
import React, { useState } from 'react';
import { createUser, loginUser } from '../services/userService';
import '../index.css';

const UserManagement = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = async () => {
        try {
            await createUser({ email, password });
            alert('User registered successfully');
        } catch (error) {
            alert('Error registering user');
        }
    };

    const handleLogin = async () => {
        try {
            await loginUser({ email, password });
            alert('User logged in successfully');
        } catch (error) {
            alert('Error logging in user');
        }
    };

    return (
        <div className="user-management">
            <h2>User Management</h2>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button className="action-btn" onClick={handleSignup}>Sign Up</button>
            <button className="action-btn" onClick={handleLogin}>Log In</button>
        </div>
    );
};

export default UserManagement;
