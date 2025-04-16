import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const projects = [
    {
      title: "SparkV Roadmaps",
      description: "AI-driven learning platform offering step-by-step roadmaps for programming languages. Integrated MongoDB with Node.js and Express for scalable backend operations.",
      tags: ["React.js", "MongoDB", "Node.js", "Express", "Gemini API"],
      github: "https://github.com/khushi11github/SparkV_Roadmap",
      live: "https://sparkv-roadmaps.netlify.app/",
      accentColor: "#8b5cf6",
      image: "/image1.png",
      date: "June 2024"
    },
    {
      title: "Online Restaurant",
      description: "Web platform for ordering food with optimized 30% faster processing. Developed with Angular.js for dynamic UI and MongoDB for efficient data storage.",
      tags: ["Angular", "Node.js", "MongoDB"],
      github: "https://github.com/khushi11github/project",
      live: "#",
      accentColor: "#6366f1",
      image: "/image2.png",
      date: "March 2024"
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

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8
      }
    }
  };

  const cardVariants = {
    hover: {
      y: -15,
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      transition: { 
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <motion.div
          className="projects-header"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">
            My <span className="highlight">Projects</span>
          </h2>
          <p className="section-subtitle">
            Projects crafted with passion and precision
          </p>
        </motion.div>

        <motion.div
          className="projects-showcase"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              variants={itemVariants}
              whileHover="hover"
              style={{ 
                '--accent-color': project.accentColor,
                borderLeft: `3px solid ${project.accentColor}`
              }}
            >
              <div className="project-image-container">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="project-image"
                />
                <div 
                  className="image-overlay" 
                  style={{ backgroundColor: `${project.accentColor}20` }}
                />
              </div>
              
              <motion.div 
                className="project-content" 
                variants={cardVariants}
              >
                <div className="project-header">
                  <div>
                    <h3 className="project-title">
                      <span className="title-accent">#</span>{project.title}
                    </h3>
                    <p className="project-date" style={{ color: project.accentColor }}>
                      {project.date}
                    </p>
                  </div>
                  <div className="project-links">
                    <motion.a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                      whileHover={{ 
                        scale: 1.1,
                        backgroundColor: project.accentColor,
                        boxShadow: `0 0 20px ${project.accentColor}40`
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaGithub />
                    </motion.a>
                    {project.live !== "#" && (
                      <motion.a 
                        href={project.live} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link"
                        whileHover={{ 
                          scale: 1.1,
                          backgroundColor: project.accentColor,
                          boxShadow: `0 0 20px ${project.accentColor}40`
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaExternalLinkAlt />
                      </motion.a>
                    )}
                  </div>
                </div>
                
                <p className="project-description">{project.description}</p>
                
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <motion.span 
                      key={i} 
                      className="project-tag"
                      whileHover={{ 
                        scale: 1.05,
                        backgroundColor: project.accentColor,
                        color: "white"
                      }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;