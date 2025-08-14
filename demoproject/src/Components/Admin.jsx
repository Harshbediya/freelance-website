import React, { useState } from 'react';
import '../Admin.css';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const predefinedEmail = "admin@gmail.com";
    const predefinedPassword = "admin123";

    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (email.trim() === predefinedEmail && password === predefinedPassword) {
            setMessage("Login Successful! Welcome, Admin.");
            navigate('/fetch');
        } else {
            setMessage("Invalid credentials. Please try again.");
        }
    };

    return (
        <div className="login-container22">
            <form className="login-form22" onSubmit={handleLogin}>
                <h2>Admin Login</h2>
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                />
                <button type="submit" className="login-btn22">Login</button>
                {message && <div className="login-message22">{message}</div>}
            </form>
        </div>
    );
};

export default AdminLogin;
