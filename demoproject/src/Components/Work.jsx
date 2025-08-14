import React from 'react';
import './Work.css';

const Work = () => {
  return (
    <div className="work-page-container">
      <section className="work-hero">
        <h1>Our Work & Expertise</h1>
        <p>Discover the projects we've worked on and the diverse services we offer to clients worldwide.</p>
      </section>

      <section className="work-projects">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <img src="/images/ecom.png" alt="Project 1" />
            <h3>Next-Gen E-Commerce Website</h3>
            <p>A state-of-the-art platform built with modern frameworks, offering a seamless shopping experience.</p>
          </div>
          <div className="project-card">
            <img src="/images/social3.jpg" alt="Project 2" />
            <h3>Mobile App for Social Networking</h3>
            <p>A mobile-first solution providing users with a powerful social experience on both iOS and Android.</p>
          </div>
          <div className="project-card">
            <img src="/images/crm2.avif" alt="Project 3" />
            <h3>Custom CRM Solution</h3>
            <p>A tailored customer relationship management system to streamline operations and improve client interaction.</p>
          </div>
        </div>
      </section>

      <section className="work-services">
        <h2>Our Services</h2>
        <div className="services-list">
          <div className="service-card">
            <img src="/images/imag25.jpg" alt="Service 1" />
            <h3>Web Development</h3>
            <p>Build responsive, dynamic, and high-performance websites tailored to your business needs.</p>
          </div>
          <div className="service-card">
            <img src="/images/img22.jpg" alt="Service 2" />
            <h3>Mobile App Development</h3>
            <p>Design and develop mobile apps that provide users with an engaging and smooth experience.</p>
          </div>
          <div className="service-card">
            <img src="/images/img23.png" alt="Service 3" />
            <h3>UI/UX Design</h3>
            <p>Create visually appealing and user-friendly interfaces to enhance user engagement.</p>
          </div>
          <div className="service-card">
            <img src="/images/imag23.png" alt="Service 2" />
            <h3>Game App Development</h3>
            <p>Design and develop mobile apps that provide users with an engaging and smooth experience.</p>
          </div>
        </div>
      </section>

      <section className="work-cta">
        <h3>Ready to Collaborate?</h3>
        <p>Contact us now and let's bring your ideas to life with expert solutions.</p>
        <button>Contact Us</button>
      </section>
    </div>
  );
};

export default Work;
