import React from 'react';
import './About.css';
import { FaPaintBrush, FaCode, FaSearch, FaFilm, FaArrowUp, FaGamepad, FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
function About() {
  return (
    <div className="about-page">

       <h1 style={{textAlign:"center",margin:"30px"}}>ABOUT</h1>
      {/* Top Section - Commitment */}
      <section className="commitment-section">
        <h2>Our commitment to freelancers</h2>
        <div className="cards">
          <div className="card">
            <h3>Opportunities</h3>
            <p>We believe in helping freelancers showcase their skills and land meaningful gigs.</p>
          </div>
          <div className="card">
            <h3>Growth</h3>
            <p>We’re committed to building a platform where you can grow, learn, and level up your freelance journey.</p>
          </div>
          <div className="card">
            <h3>Recognition</h3>
            <p>Get recognized for your work with ratings, badges, and featured listings.</p>
          </div>
        </div>
      </section>

       {/* <img src="/images/freelance-img.jpg" alt="" /> */}

      {/* Banner Image */}
      <div className="banner-image">
  <video 
    src="/images/video2.mp4" 
    autoPlay 
    muted 
    loop 
    playsInline 
    style={{ width: "100%", height: "auto" }}
  >
    
  </video>
</div>


      {/* Bottom Section - Difference */}
      <section className="difference-section">
        <h2>What makes us different</h2>
        <div className="cards yellow">
          <div className="card">
            <h3>Grow as a freelancer</h3>
            <p>Get instant exposure with your first project. Real-time feedback and visibility boost your journey.</p>
          </div>
          <div className="card">
            <h3>Build your career</h3>
            <p>List your services, showcase your work, and attract clients that match your skills.</p>
          </div>
          <div className="card">
            <h3>Track your performance</h3>
            <p>Get insights on views, clicks, and performance to improve and scale.</p>
          </div>
        </div>
      </section><hr />


      
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
    </div>
  );
}

export default About;
