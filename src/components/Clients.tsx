import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Clients.css';

const Clients: React.FC = () => {
  const clients = [
    {
      id: 1,
      name: 'Company One',
      logo: 'https://via.placeholder.com/150/FFFFFF/808080?text=Client+1',
      link: '#'
    },
    {
      id: 2,
      name: 'Company Two',
      logo: 'https://via.placeholder.com/150/FFFFFF/808080?text=Client+2',
      link: '#'
    },
    {
      id: 3,
      name: 'Company Three',
      logo: 'https://via.placeholder.com/150/FFFFFF/808080?text=Client+3',
      link: '#'
    },
    {
      id: 4,
      name: 'Company Four',
      logo: 'https://via.placeholder.com/150/FFFFFF/808080?text=Client+4',
      link: '#'
    },
    {
      id: 5,
      name: 'Company Five',
      logo: 'https://via.placeholder.com/150/FFFFFF/808080?text=Client+5',
      link: '#'
    },
    {
      id: 6,
      name: 'Company Six',
      logo: 'https://via.placeholder.com/150/FFFFFF/808080?text=Client+6',
      link: '#'
    }
  ];

  return (
    <section id="clients" className="section clients-section">
      <div className="container">
        <div className="section-header text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title mx-auto">Trusted Clients</h2>
            <p className="section-description">
              I've had the pleasure of working with these amazing companies and brands.
            </p>
          </motion.div>
        </div>

        <div className="clients-container">
          <div className="clients-grid">
            {clients.map((client, index) => (
              <motion.a
                href={client.link}
                className="client-item"
                target="_blank"
                rel="noopener noreferrer"
                key={client.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -5,
                  scale: 1.05,
                  boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)'
                }}
              >
                <img src={client.logo} alt={client.name} className="client-logo" />
              </motion.a>
            ))}
          </div>
        </div>

        <motion.div
          className="collaboration-container text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="collaboration-title">Want to work together?</h3>
          <p className="collaboration-text">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
          </p>
          <a href="#contact" className="btn btn-custom-primary">Start a Conversation</a>
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;