
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from './Components/Navigation'
import Hero from './Components/Hero';
import './App.css'; // Import the global styles
import About from "./Components/About";
import Login from "./Components/Login"
import Work from "./Components/Work";
import Services from "./Components/Serviecs";
import AdminLogin from "./Components/Admin";
import Fetch from "./Components/fetch";
import Order from "./Components/Order";

function App() {
  return (
   <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/work" element={<Work/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/adminlogin" element={<AdminLogin/>} />
        <Route path="/fetch" element={<Fetch/>} />
        <Route path="/order" element={<Order/>} />
        
      </Routes>

   </>
  );
};

export default App;



