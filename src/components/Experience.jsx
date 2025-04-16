import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: "FLAMES24 Summer Training Program",
      company: "W3elites",
      period: "June 2024 - July 2024",
      description: [
        "Completed a six-week intensive training in MERN Stack and Generative AI",
        "Developed SparkV Roadmaps, an AI-driven learning platform",
        "Implemented a chatbot for tailored learning suggestions based on user inputs",
        "Deployed on Render & Netlify, ensuring 99.9% uptime and accessibility across devices"
      ],
      tech: "HTML, CSS, JavaScript, Bootstrap, MERN Stack, Gemini API"
    }
  ];

  return (
    <section className="experience-section" id="experience">
      <div className="container">
        <h2 className="section-title">
          <span className="title-text">Experience</span>
          <span className="title-underline"></span>
        </h2>
        
        <div className="experiences-container">
          {experiences.map((exp, index) => (
            <div 
              className="experience-card scale-in" 
              key={index}
              style={{ '--delay': `${index * 0.2}s` }}
            >
              <div className="experience-header">
                <h3 className="experience-title">{exp.title}</h3>
                <div className="experience-company-period">
                  <span className="experience-company">{exp.company}</span>
                  <span className="experience-period">{exp.period}</span>
                </div>
              </div>
              
              <ul className="experience-description">
                {exp.description.map((item, i) => (
                  <li key={i} className="description-item">
                    <span className="bullet"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="experience-tech">
                <span className="tech-label">Tech Stack:</span>
                <div className="tech-tags">
                  {exp.tech.split(', ').map((tech, i) => (
                    <span className="tech-tag" key={i}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;