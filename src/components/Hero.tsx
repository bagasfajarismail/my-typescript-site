import React from 'react';
import { Link } from 'react-scroll';
import { ArrowDown, Github, Linkedin, Instagram, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import '../styles/Hero.css';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 hero-content">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="greeting">Hello, I'm</p>
              <h1 className="name">Bagas</h1>
              <h2 className="profession"><span className="highlight">Creative</span> Developer</h2>
              <p className="description">
                I build exceptional and accessible digital experiences 
                for the web. Focused on creating products that are user-friendly, 
                purposeful, and delightful.
              </p>
              <div className="hero-buttons">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="btn btn-custom-primary me-3"
                >
                  Hire Me
                </Link>
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="btn btn-outline"
                >
                  See My Work
                </Link>
              </div>
              <div className="social-links">
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                  <Github size={20} />
                </a>
                <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={20} />
                </a>
                <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
                  <Instagram size={20} />
                </a>
                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                  <MessageCircle size={20} />
                </a>
              </div>
            </motion.div>
          </div>
          <div className="col-lg-6 d-flex justify-content-center align-items-center">
            <motion.div
              className="hero-image-container"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="hero-image">
                <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Professional portrait" />
              </div>
              <div className="experience-badge">
                <span className="years">1+</span>
                <span className="text">Years of Experience</span>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="scroll-indicator">
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ArrowDown size={24} />
            </motion.div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;