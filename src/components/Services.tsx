import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  PenTool, 
  Smartphone, 
  BarChart, 
  Database, 
  Megaphone 
} from 'lucide-react';
import '../styles/Services.css';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Code size={32} />,
      title: 'Web Development',
      description: 'Creating responsive, fast and modern websites using the latest technologies and frameworks.'
    },
    {
      icon: <PenTool size={32} />,
      title: 'UI/UX Design',
      description: 'Designing beautiful, intuitive interfaces that provide exceptional user experiences.'
    },
    {
      icon: <Smartphone size={32} />,
      title: 'Mobile Development',
      description: 'Building cross-platform mobile applications that work seamlessly on iOS and Android.'
    },
    {
      icon: <BarChart size={32} />,
      title: 'SEO Optimization',
      description: "Improving your website's visibility in search engine results to drive more organic traffic."
    },
    {
      icon: <Database size={32} />,
      title: 'Database Design',
      description: 'Creating efficient, scalable database structures that support your application needs.'
    },
    {
      icon: <Megaphone size={32} />,
      title: 'Digital Marketing',
      description: 'Developing strategies to promote your brand and reach your target audience effectively.'
    }
  ];

  return (
    <section id="services" className="section services-section">
      <div className="container">
        <div className="section-header text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title mx-auto">My Services</h2>
            <p className="section-description">
              I offer a wide range of services to help businesses and individuals establish 
              a strong online presence and achieve their digital goals.
            </p>
          </motion.div>
        </div>

        <div className="row">
          {services.map((service, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <motion.div
                className="service-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10,
                  boxShadow: '0 15px 30px rgba(0, 0, 0, 0.2)'
                }}
              >
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </motion.div>
            </div>
          ))}
        </div>

        <div className="cta-container text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="cta-title">Need a custom service?</h3>
            <p className="cta-text">Let's discuss how I can help bring your vision to life.</p>
            <a href="#contact" className="btn btn-custom-primary">Get in Touch</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;