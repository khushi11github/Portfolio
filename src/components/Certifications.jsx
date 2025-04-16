import React from 'react';
import './Certifications.css';

const Certifications = () => {
  const certifications = [
    {
      title: "Java Basic Certificate",
      date: "August 2022",
      issuer: "HackerRank",
      link: "https://www.hackerrank.com/certificates/dc8907447610"
    },
    {
      title: "MERN Stack and Gen AI",
      date: "July 2024",
      issuer: "W3elites",
      link: "https://drive.google.com/file/d/1c5KSW5CFBmJ2-3adHzBs6m17Kd4aTQHU/view?usp=sharing"
    },
    {
      title: "Data Structure and Algorithm",
      date: "February 2024",
      issuer: "Udemy",
      link: "https://www.udemy.com/certificate/UC-0099bf5e-f149-41b9-9b05-38941b0840c5/"
    },
    {
      title: "Python Basic Certificate",
      date: "December 2024",
      issuer: "HackerRank",
      link: "https://www.udemy.com/certificate/UC-0099bf5e-f149-41b9-9b05-38941b0840c5/"
    }
  ];

  return (
    <section id="certifications" className="certifications-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">My <span className="highlight">Certifications</span></h2>
          <p className="section-subtitle">Professional credentials validating my technical skills</p>
        </div>

        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div key={index} className="certification-card">
              <div className="certification-content">
                <div className="certification-header">
                  <h3>{cert.title}</h3>
                  <span className="issuer-badge">{cert.issuer}</span>
                </div>
                <div className="certification-meta">
                  <span className="date">{cert.date}</span>
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="view-certificate"
                  >
                    View Certificate
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;