import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import '../styles/Projects.css';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: 'Modern E-commerce Platform',
      category: 'web',
      image: 'https://images.pexels.com/photos/6069552/pexels-photo-6069552.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      tags: ['React', 'Node.js', 'MongoDB'],
      demoLink: '#',
      codeLink: '#'
    },
    {
      id: 2,
      title: 'Finance Management App',
      category: 'app',
      image: 'https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      tags: ['React Native', 'Firebase'],
      demoLink: '#',
      codeLink: '#'
    },
    {
      id: 3,
      title: 'Corporate Brand Identity',
      category: 'design',
      image: 'https://images.pexels.com/photos/6224/hands-working-macbook-computer.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      tags: ['Branding', 'Logo Design'],
      demoLink: '#',
      codeLink: '#'
    },
    {
      id: 4,
      title: 'News Portal Website',
      category: 'web',
      image: 'https://images.pexels.com/photos/6804083/pexels-photo-6804083.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      tags: ['WordPress', 'Custom Theme'],
      demoLink: '#',
      codeLink: '#'
    },
    {
      id: 5,
      title: 'Task Management Dashboard',
      category: 'web',
      image: 'https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      tags: ['Vue.js', 'Express', 'PostgreSQL'],
      demoLink: '#',
      codeLink: '#'
    },
    {
      id: 6,
      title: 'Fitness Tracking App',
      category: 'app',
      image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      tags: ['Flutter', 'Firebase'],
      demoLink: '#',
      codeLink: '#'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-header text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title mx-auto">My Projects</h2>
            <p className="section-description">
              Explore my recent work and projects that showcase my skills and expertise.
            </p>
          </motion.div>
        </div>

        <div className="filters-container">
          <motion.div
            className="filters"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <button 
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All
            </button>
            <button 
              className={`filter-btn ${filter === 'web' ? 'active' : ''}`}
              onClick={() => setFilter('web')}
            >
              Web
            </button>
            <button 
              className={`filter-btn ${filter === 'app' ? 'active' : ''}`}
              onClick={() => setFilter('app')}
            >
              App
            </button>
            <button 
              className={`filter-btn ${filter === 'design' ? 'active' : ''}`}
              onClick={() => setFilter('design')}
            >
              Design
            </button>
          </motion.div>
        </div>

        <div className="row">
          {filteredProjects.map((project, index) => (
            <div className="col-lg-4 col-md-6" key={project.id}>
              <motion.div
                className="project-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <div className="project-links">
                      <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="project-link">
                        <ExternalLink size={20} />
                        <span>Live Demo</span>
                      </a>
                      <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="project-link">
                        <ExternalLink size={20} />
                        <span>View Code</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="project-info">
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-tags">
                    {project.tags.map((tag, i) => (
                      <span className="project-tag" key={i}>{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <motion.a
            href="#"
            className="btn btn-outline"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            View All Projects
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Projects;