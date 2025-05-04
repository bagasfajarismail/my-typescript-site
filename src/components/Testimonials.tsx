import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import '../styles/Testimonials.css';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      content: "Working with Bagas was an absolute pleasure. His technical expertise and creative approach produced results that exceeded our expectations.",
      name: "Sarah Johnson",
      position: "CEO, TechCorp",
      image: "https://images.pexels.com/photos/762080/pexels-photo-762080.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      id: 2,
      content: "Bagas delivered our website redesign on time and on budget. His attention to detail and focus on user experience transformed our online presence.",
      name: "Michael Brown",
      position: "Marketing Director, Innovate Inc.",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      id: 3,
      content: "We hired Bagas to build our mobile app, and the results were outstanding. His technical skills combined with design sensibility created a product our users love.",
      name: "Emily Davis",
      position: "Product Manager, AppWorks",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
  ];

  return (
    <section id="testimonials" className="section testimonials-section">
      <div className="container">
        <div className="section-header text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title mx-auto">Client Testimonials</h2>
            <p className="section-description">
              Here's what some of my clients have to say about working with me.
            </p>
          </motion.div>
        </div>

        <div className="row">
          {testimonials.map((testimonial, index) => (
            <div className="col-lg-4" key={testimonial.id}>
              <motion.div
                className="testimonial-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="quote-icon">
                  <Quote size={32} />
                </div>
                <p className="testimonial-content">{testimonial.content}</p>
                <div className="testimonial-author">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="author-image" 
                  />
                  <div className="author-info">
                    <h4 className="author-name">{testimonial.name}</h4>
                    <p className="author-position">{testimonial.position}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;