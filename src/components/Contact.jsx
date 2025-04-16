import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaPaperPlane, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiPhone } from 'react-icons/hi';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = ({ id }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    // Initialize EmailJS with your user ID
    emailjs.init('c_2qjQxxVXiAyFTAH');
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await emailjs.send(
        'service_t6hrctl',
        'template_kqfkkbu',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message
        }
      );

      if (response.status === 200) {
        setSubmitStatus({ success: true, message: 'Message sent successfully!' });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus({ 
        success: false, 
        message: 'Failed to send message. Please try again or email me directly at khushik110012@gmail.com'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id={id} className="contact-section">
      <div className="contact-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="contact-header"
        >
          <h2 className="contact-title">Get In Touch</h2>
          <p className="contact-subtitle">
            Have a project in mind or want to connect? Feel free to reach out.
          </p>
        </motion.div>
        
        <div className="contact-grid">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="contact-info-card"
          >
            <h3 className="contact-info-title">Contact Information</h3>
            
            <div className="contact-info-items">
              <div className="contact-info-item">
                <div className="contact-icon-container">
                  <HiPhone className="contact-icon" />
                </div>
                <div className="contact-details">
                  <h4>Phone</h4>
                  <a href="tel:+918962530998">+91 89625 30998</a>
                </div>
              </div>
              
              <div className="contact-info-item">
                <div className="contact-icon-container">
                  <FaEnvelope className="contact-icon" />
                </div>
                <div className="contact-details">
                  <h4>Email</h4>
                  <a href="mailto:khushik110012@gmail.com">khushik110012@gmail.com</a>
                </div>
              </div>
              
              <div className="contact-info-item">
                <div className="contact-icon-container">
                  <FaLinkedin className="contact-icon" />
                </div>
                <div className="contact-details">
                  <h4>LinkedIn</h4>
                  <a 
                    href="https://www.linkedin.com/in/khushikumari111/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    linkedin.com/in/khushikumari111/
                  </a>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon-container">
                  <FaGithub className="contact-icon" />
                </div>
                <div className="contact-details">
                  <h4>GitHub</h4>
                  <a 
                    href="https://github.com/khushi11github/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    github.com/khushi11github
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="contact-form-card"
          >
            <h3 className="contact-form-title">Send Me a Message</h3>
            
            {submitStatus && (
              <div className={`status-message ${submitStatus.success ? 'status-success' : 'status-error'}`}>
                {submitStatus.message}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="Your name"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="form-textarea"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="submit-btn"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <span>Send Message</span>
                    <FaPaperPlane className="submit-icon" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;