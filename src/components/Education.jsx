import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import './Education.css';

const Education = () => {
  const ref = useRef();
  const sectionRef = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Scroll animation setup
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const educationData = [
    {
      institution: "Lovely Professional University",
      degree: "B.Tech in Computer Science",
      year: "2022 - Present",
      grade: "CGPA: 8.10",
      icon: "🎓"
    },
    {
      institution: "Kendriya Vidyalaya AFS Bhatinda",
      degree: "12th Science (PCM)",
      year: "2021 - 2022",
      grade: "93.6%",
      icon: "📚"
    },
    {
      institution: "Kendriya Vidyalaya AFS gwalior",
      degree: "10th CBSE",
      year: "2019 - 2020",
      grade: "87%",
      icon: "🏫"
    }
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const icon = {
    hidden: { scale: 0 },
    show: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10
      }
    }
  };

  return (
    <section id="education" className="education-section" ref={sectionRef}>
      {/* Animated background element */}
      <motion.div 
        className="education-bg"
        style={{ y: yBg }}
      />
      
      <div className="education-container">
        <div className="education-header-wrapper">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="education-title-container"
          >
            <span className="education-section-subtitle">My Academic</span>
            <h2 className="education-section-title">
              <motion.span 
                className="education-title-line"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Journey
              </motion.span>
              <motion.span 
                className="education-title-highlight"
                animate={{ 
                  opacity: [1, 0.7, 1],
                  transition: { duration: 2, repeat: Infinity } 
                }}
              >
                .
              </motion.span>
            </h2>
            <motion.div 
              className="education-title-divider"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            />
            <motion.p
              className="education-section-description"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              From classrooms to codebases, my path of continuous learning
            </motion.p>
          </motion.div>
        </div>

        <motion.div
          className="education-cards"
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              className="education-card"
              variants={item}
              whileHover={{ y: -5 }}
            >
              <motion.div 
                className="education-card-decoration"
                variants={icon}
              />
              <motion.div 
                className="education-card-icon"
                variants={icon}
                whileHover={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                {item.icon}
              </motion.div>
              
              <div className="education-card-content">
                <div className="education-card-header">
                  <h3>{item.institution}</h3>
                  <motion.span 
                    className="education-year-badge"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    {item.year}
                  </motion.span>
                </div>
                
                <motion.p 
                  className="education-degree"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  {item.degree}
                </motion.p>
                <motion.p 
                  className="education-grade"
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  {item.grade}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;