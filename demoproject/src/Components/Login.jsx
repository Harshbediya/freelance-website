import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Contact() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateEmail = (email) => /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
    }

    if (!isLogin && password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    if (isLogin) {
      // LOGIN FLOW
      const storedUser = JSON.parse(localStorage.getItem('user'));
      if (storedUser && storedUser.email === email && storedUser.password === password) {
        alert('Login successful!');
        navigate('/');
      } else {
        alert('Invalid credentials or user not registered!');
      }
    } else {
      // SIGNUP FLOW
      const user = { email, password };
      localStorage.setItem('user', JSON.stringify(user));
      alert('Signup successful! Please log in.');
      setIsLogin(true); // Redirect to login form
    }

    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setErrors({});
  };

  return (
    <div className="container2">
      <div className='form-container'>
        <div className='form-toggle'>
          <button className={isLogin ? 'active' : ''} onClick={() => setIsLogin(true)}>Login</button>
          <button className={!isLogin ? 'active' : ''} onClick={() => setIsLogin(false)}>SignUp</button>
        </div>
        <form onSubmit={handleSubmit} className='form'>
          <h2>{isLogin ? 'Login Form' : 'Signup Form'}</h2>
          <input
            type="email"
            placeholder='Enter your email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <span className='error'>{errors.email}</span>}
          <input
            type="password"
            placeholder='Enter a password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <span className='error'>{errors.password}</span>}
          {!isLogin && (
            <>
              <input
                type="password"
                placeholder='Confirm password'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {errors.confirmPassword && <span className='error'>{errors.confirmPassword}</span>}
            </>
          )}
          <button type='submit'>{isLogin ? 'Login' : 'Signup'}</button>
          {isLogin && (
            <p>Not a member? <a href="#" onClick={(e) => { e.preventDefault(); setIsLogin(false); }}>Signup now</a></p>
          )}
        </form>
      </div>
    </div>
  );
}

export default Contact;
