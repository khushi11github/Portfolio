import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';
import './Certifications.css';
import javaCert from '../assets/java-cert.png';
import mernCert from '../assets/mern-cert.png';
import dsaCert from '../assets/dsa-cert.png';
import pythonCert from '../assets/python-cert.png';


const Certifications = () => {
  const certifications = [
    {
      title: "Java Basic Certificate",
      date: "August 2022",
      issuer: "HackerRank",
      link: "https://www.hackerrank.com/certificates/dc8907447610",
      image: javaCert
    },
    {
      title: "MERN Stack and Gen AI",
      date: "July 2024",
      issuer: "W3elites",
      link: "https://drive.google.com/file/d/1c5KSW5CFBmJ2-3adHzBs6m17Kd4aTQHU/view?usp=sharing",
      image: mernCert
    },
    {
      title: "Data Structure and Algorithm",
      date: "February 2024",
      issuer: "Udemy",
      link: "https://www.udemy.com/certificate/UC-0099bf5e-f149-41b9-9b05-38941b0840c5/",
      image: dsaCert
    },
    {
      title: "Python Basic Certificate",
      date: "December 2024",
      issuer: "HackerRank",
      link: "https://www.udemy.com/certificate/UC-0099bf5e-f149-41b9-9b05-38941b0840c5/",
      image: pythonCert
    }
  ];
  
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    },
    hover: {
      y: -10,
      boxShadow: "0 15px 30px rgba(139, 92, 246, 0.4)"
    }
  };

  return (
    <section id="certifications" className="certifications-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              My{" "}
            </motion.span>
            <motion.span 
              className="highlight"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              Certifications
            </motion.span>
          </h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Verified credentials showcasing my technical expertise
          </motion.p>
        </motion.div>

        <motion.div 
          className="certifications-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {certifications.map((cert, index) => (
            <motion.div 
              key={index} 
              className="certification-card"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="certificate-image-container">
                <motion.img 
                  src={cert.image} 
                  alt={cert.title}
                  className="certificate-image"
                  loading="lazy"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="image-overlay"></div>
                <div className="issuer-badge">{cert.issuer}</div>
              </div>
              
              <div className="certification-content">
                <h3>{cert.title}</h3>
                <div className="certification-meta">
                  <span className="date">{cert.date}</span>
                  <motion.a
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="view-certificate"
                    whileHover={{ 
                      color: '#8b5cf6',
                      x: 5
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    View <FiExternalLink className="link-icon" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;