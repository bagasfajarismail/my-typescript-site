import React from 'react';
import { Link } from 'react-scroll';
import { Github, Linkedin, Instagram, MessageCircle, ArrowUp } from 'lucide-react';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="footer-brand">
              <Link
                to="hero"
                className="footer-logo"
                smooth={true}
                duration={500}
                offset={-70}
              >
                Portfolio<span className="highlight">.</span>
              </Link>
              <p className="footer-description">
                Creating exceptional digital experiences through innovative web design and development.
              </p>
              <div className="footer-social">
                <a href="https://github.com/bagasfajarismail" target="_blank" rel="noopener noreferrer">
                  <Github size={18} />
                </a>
                <a href="https://www.linkedin.com/in/bagas-fajar-ismail-20933b2b0/" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={18} />
                </a>
                <a href="https://www.instagram.com/bagasfajar12/" target="_blank" rel="noopener noreferrer">
                  <Instagram size={18} />
                </a>
                <a href="https://wa.me/+6285770143454" target="_blank" rel="noopener noreferrer">
                  <MessageCircle size={18} />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-4">
            <div className="footer-links">
              <h3 className="footer-title">Navigation</h3>
              <ul>
                <li>
                  <Link
                    to="hero"
                    smooth={true}
                    duration={500}
                    offset={-70}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="about"
                    smooth={true}
                    duration={500}
                    offset={-70}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="services"
                    smooth={true}
                    duration={500}
                    offset={-70}
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="projects"
                    smooth={true}
                    duration={500}
                    offset={-70}
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    to="contact"
                    smooth={true}
                    duration={500}
                    offset={-70}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-4">
            <div className="footer-links">
              <h3 className="footer-title">Services</h3>
              <ul>
                <li><a href="#">Web Development</a></li>
                <li><a href="#">UI/UX Design</a></li>
                <li><a href="#">Mobile Development</a></li>
                <li><a href="#">SEO Optimization</a></li>
                <li><a href="#">Digital Marketing</a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-4">
            <div className="footer-newsletter">
              <h3 className="footer-title">Newsletter</h3>
              <p>Subscribe to get the latest updates and news.</p>
              <div className="newsletter-form">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="newsletter-input" 
                />
                <button className="newsletter-btn">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="copyright">
            <p>&copy; {new Date().getFullYear()} Portfolio. All Rights Reserved.</p>
          </div>
          <div className="scroll-to-top">
            <Link
              to="hero"
              smooth={true}
              duration={500}
              offset={-70}
              className="scroll-btn"
            >
              <ArrowUp size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;