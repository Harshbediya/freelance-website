import './Serviecs.css';
import { FaCheckCircle } from 'react-icons/fa';
import axios from "axios"

import { FaPaintBrush, FaCode, FaSearch, FaFilm, FaArrowUp, FaGamepad, FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { useState } from 'react';

const services = [
    { id: 1, name: "Web Development", price: "$499", features: ["Responsive Design", "SEO Optimized", "Fast Loading"] },
    { id: 2, name: "App Development", price: "$999", features: ["iOS & Android", "High Performance", "User Friendly"] },
    { id: 3, name: "Digital Marketing", price: "$299", features: ["SEO & SEM", "Social Media", "Email Marketing"] },
];

// let[data,setdata]=useState(services)

 const Services = () => {

    function senddata(service){
        axios.post('http://localhost:3000/user',{
            name:service.name,
            price:service.price,
            feture:service.feature

        })
        .then(res=>alert("success"))

    }
   

  return (
    <>
   <div className="container22">
            {services.map(service => (
                <div key={service.id} className="card22">
                    <h2>{service.name}</h2>
                    <p className="price">{service.price}</p>
                    <ul className="features22">
                        {service.features.map((feature, index) => (
                            <li key={index} className="feature-item22">
                                <FaCheckCircle className="icon22" /> {feature}
                            </li>
                        ))}
                    </ul>
                    <button className="buy-btn" onClick={()=>senddata(service)}>Buy Now</button>
                </div>
            ))}
      
     </div>
     <footer className="footer">
                      <div className="footer-container">
                        <div className="footer-section">
                          <h2 className="footer-title">Your Brand</h2>
                          <p className="footer-text">Helping businesses and creators build their digital presence with stunning designs and scalable solutions.</p>
                          <a href="#" className="footer-read-more">Read more →</a>
                        </div>
                        <div className="footer-section">
                          <h3 className="footer-subtitle">Services</h3>
                          <ul className="footer-links">
                            <li><a href="#" className="footer-link">Web Design</a></li>
                            <li><a href="#" className="footer-link">Web Development</a></li>
                            <li><a href="#" className="footer-link">SEO Optimization</a></li>
                            <li><a href="#" className="footer-link">Consulting</a></li>
                          </ul>
                        </div>
                        <div className="footer-section">
                          <h3 className="footer-subtitle">Technologies</h3>
                          <div className="footer-tags">
                            <a href="#" className="footer-tag">React</a>
                            <a href="#" className="footer-tag">Node.js</a>
                            <a href="#" className="footer-tag">Next.js</a>
                            <a href="#" className="footer-tag">Tailwind</a>
                            <a href="#" className="footer-tag">JavaScript</a>
                            <a href="#" className="footer-tag">CSS</a>
                            <a href="#" className="footer-tag">HTML</a>
                            <a href="#" className="footer-tag">WordPress</a>
                          </div>
                        </div>
                        <div className="footer-section">
                          <h3 className="footer-subtitle">Contact Me</h3>
                          <form className="footer-subscribe">
                            <input type="email" placeholder="Enter your email" className="footer-input" />
                            <button type="submit" className="footer-button">→</button>
                          </form>
                        </div>
                        <div className="footer-section">
                          <h3 className="footer-subtitle" style={{marginLeft:"110px"}}>Follow Me</h3>
                          <div className="footer-socials">
                            <a href="#" className="footer-icon"><FaTwitter /></a>
                            <a href="#" className="footer-icon"><FaFacebook /></a>
                            <a href="#" className="footer-icon"><FaInstagram /></a>
                            <a href="#" className="footer-icon"><FaLinkedin /></a>
                          </div>
                        </div>
                      </div>
                      <div className="footer-bottom">
                        <p>© {new Date().getFullYear()} Your Brand. All rights reserved.</p>
                        <ul className="footer-bottom-links">
                          <li><a href="#">Terms</a></li>
                          <li><a href="#">Privacy</a></li>
                          <li><a href="#">Compliances</a></li>
                        </ul>
                      </div>
                    </footer>

                    </>
  );
};

export default Services;
