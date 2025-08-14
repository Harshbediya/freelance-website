import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';


const Navigation = () => {
  return (
    <div className="navsize">
      <nav className="container">
        <div className="logo">
          <img src="/images/freelancer-1.svg" alt="" />
          <h2>FREELANCE STUDENT</h2>
        </div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/work">Work</Link></li>
          <li><Link to="/services">services </Link></li>
         
          <li><button><Link to="/Login" style={{color:"white"}}>Login</Link></button></li>
           <li><button><Link to="/adminlogin" style={{color:"white"}}>AdminLogin</Link></button></li>
        </ul>
       
      </nav>

 

    </div>
  );
};

export default Navigation;
