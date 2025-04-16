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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 12
      }
    },
    hover: {
      y: -10,
      boxShadow: "0 15px 30px rgba(139, 92, 246, 0.3)"
    }
  };

  const headingVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
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
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={headingVariants}
            className="education-title-container"
          >
            <span className="education-section-subtitle">My Academic</span>
            <h2 className="education-section-title">
              <span className="education-title-line">Journey</span>
              <span className="education-title-highlight">.</span>
            </h2>
            <div className="education-title-divider"></div>
            <p className="education-section-description">
              From classrooms to codebases, my path of continuous learning
            </p>
          </motion.div>
        </div>

        <motion.div
          className="education-cards"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              className="education-card"
              variants={itemVariants}
              whileHover="hover"
              whileTap={{ scale: 0.98 }}
            >
              <div className="education-card-decoration"></div>
              <div className="education-card-icon">{item.icon}</div>
              
              <div className="education-card-content">
                <div className="education-card-header">
                  <h3>{item.institution}</h3>
                  <span className="education-year-badge">{item.year}</span>
                </div>
                
                <p className="education-degree">{item.degree}</p>
                <p className="education-grade">{item.grade}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;