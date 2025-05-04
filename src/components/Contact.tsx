import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import { useForm, ValidationError } from '@formspree/react';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [state, handleSubmit] = useForm("xyzwevea"); // Ganti dengan Formspree ID kamu

  useEffect(() => {
    if (state.succeeded) {
      toast.success('Thank you for your message! I will get back to you soon.', {
        position: 'top-right',
        autoClose: 3000,
        theme: 'dark'
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }
  }, [state.succeeded]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <ToastContainer />

        <div className="section-header text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title mx-auto">Get In Touch</h2>
            <p className="section-description">
              Have a question or want to work together? Feel free to contact me.
            </p>
          </motion.div>
        </div>

        <div className="row">
          <div className="col-lg-5">
            <motion.div
              className="contact-info"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="contact-title">Contact Information</h3>
              <p className="contact-description">
                Feel free to reach out to me through any of the following channels. 
                I'm always open to discussing new projects, creative ideas, or opportunities.
              </p>

              <div className="contact-item">
                <div className="contact-icon">
                  <Mail size={20} />
                </div>
                <div className="contact-details">
                  <h4>Email</h4>
                  <a href="mailto:bagasfajarismail@gmail.com">bagasfajarismail@gmail.com</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <Phone size={20} />
                </div>
                <div className="contact-details">
                  <h4>Phone</h4>
                  <a href="tel:+6285770143454">+62 857-7014-3454</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <MapPin size={20} />
                </div>
                <div className="contact-details">
                  <h4>Location</h4>
                  <p>Bekasi, BKS, Indonesia</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="col-lg-7">
            <motion.div
              className="contact-form-container"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <form
                className="contact-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSubmit(e);
                }}
              >
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="form-control"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-control"
                        required
                      />
                      <ValidationError prefix="Email" field="email" errors={state.errors} />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-control"
                    rows={5}
                    required
                  ></textarea>
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>
                <button type="submit" className="btn btn-custom-primary" disabled={state.submitting}>
                  <Send size={16} className="me-2" />
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
