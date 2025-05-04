import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layers, BarChart, Award } from 'lucide-react';
import '../styles/About.css';

const About: React.FC = () => {
  const skills = [
    { name: 'HTML', level: 95 },
    { name: 'CSS', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'React', level: 80 },
    { name: 'TypeScript', level: 75 },
    { name: 'UI/UX Design', level: 70 },
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-6">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title">About Me</h2>
              <p className="about-text">
                I'm a passionate web developer with over 1 years of experience creating modern, 
                responsive websites and web applications. I specialize in front-end development 
                with React and have a strong background in UI/UX design principles.
              </p>
              <p className="about-text">
                My approach combines technical expertise with creativity to deliver high-quality, 
                user-centered digital experiences. I'm constantly learning and adapting to new 
                technologies and methodologies to stay at the forefront of web development.
              </p>

              <div className="about-info">
                <div className="row">
                  <div className="col-md-6">
                    <ul className="info-list">
                      <li><span>Name:</span> Bagas Fajar Ismail</li>
                      <li><span>Email:</span> bagasfajarismail@gmail.com</li>
                      <li><span>Age:</span> 22 Years</li>
                      <li><span>From:</span> Bekasi, IDN</li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul className="info-list">
                      <li><span>Freelance:</span> Available</li>
                      <li><span>Languages:</span> Indonesia, English</li>
                      <li><span>Experience:</span> 1+ Years</li>
                      <li><span>Remote:</span> Available</li>
                    </ul>
                  </div>
                </div>
              </div>

              <a
                href="/src/public/Bagas-Fajar-Ismail-CV.pdf"
                  download
                  className="btn-download"
                >
                  Download CV
              </a>

            </motion.div>
          </div>
          <div className="col-lg-6">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="skills-container"
            >
              <h3 className="skills-title">My Skills</h3>
              <div className="skills-list">
                {skills.map((skill, index) => (
                  <div className="skill-item" key={index}>
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div 
                        className="skill-progress"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        <div className="row stats-row">
          <div className="col-md-3 col-sm-6">
            <motion.div 
              className="stat-box"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="stat-icon">
                <Code size={32} />
              </div>
              <h3 className="stat-count">120+</h3>
              <p className="stat-title">Projects Completed</p>
            </motion.div>
          </div>
          <div className="col-md-3 col-sm-6">
            <motion.div 
              className="stat-box"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="stat-icon">
                <Layers size={32} />
              </div>
              <h3 className="stat-count">15+</h3>
              <p className="stat-title">Technologies Mastered</p>
            </motion.div>
          </div>
          <div className="col-md-3 col-sm-6">
            <motion.div 
              className="stat-box"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="stat-icon">
                <BarChart size={32} />
              </div>
              <h3 className="stat-count">95%</h3>
              <p className="stat-title">Client Satisfaction</p>
            </motion.div>
          </div>
          <div className="col-md-3 col-sm-6">
            <motion.div 
              className="stat-box"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="stat-icon">
                <Award size={32} />
              </div>
              <h3 className="stat-count">8</h3>
              <p className="stat-title">Awards Won</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;