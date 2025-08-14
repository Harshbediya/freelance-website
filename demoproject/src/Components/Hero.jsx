import './Hero.css';
import { FaPaintBrush, FaCode, FaSearch, FaFilm, FaArrowUp, FaGamepad, FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  const categories = [
    { icon: <FaPaintBrush />, title: 'Design & Arts' },
    { icon: <FaCode />, title: 'Web Development' },
    { icon: <FaSearch />, title: 'SEO Marketing' },
  
  ];

  return (
    <>
      <main className="hero container">
        <div className="hero-content">
          <h1>We build systems with trust</h1>
          <p>
            We blend creative thinking with top-tier tech skills to build websites, apps, 
            and digital campaigns that are as smart as they are stunning.
          </p>
          <div className="hero-btn">
            <button>About Us</button>
            <button className="secondary-btn">Start Now</button>
          </div>
        </div>
        <div className="hero-image">
          <img src="/images/newimg.png" alt="hero-image" style={{height:"650px",width:"600px"}} />
        </div>
      </main>

      <section className="category-section">
        <h2 className="category-title">CATEGORY</h2>
        <div className="category-container">
          {categories.map((category, index) => (
            <div key={index} className="category-item">
              <div className="category-icon">{category.icon}</div>
              <p className="category-text">{category.title}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="freelancer-section-two">
        <div className="section-content">
          <div className="image-container">
            <img src="/images/experience-img.jpg" alt="Freelancer Working" />
          </div>
          <div className="text-container">
            <h2>BEST EXPERIENCED FREELANCER HERE</h2>
            <p>With years of experience and a passion for delivering quality work, I offer professional freelance
               services tailored to your needs. From concept to completion, I ensure timely delivery, clear communication, 
               and results that exceed expectations. Whether you're a startup,
               business, or individual, I’m here to bring your vision to life with expertise you can trust.</p>
            <div className="button-group">
              <button className="btn read-more">Read More</button>
              <button className="btn hire">Hire</button>
            </div>
          </div>
        </div>
      </section>

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
            <h3 className="footer-subtitle" style={{marginLeft:"50px"}}>Contact Me</h3>
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

export default Hero;
