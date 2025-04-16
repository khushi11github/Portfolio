import { motion } from 'framer-motion';
import './About.css';
import { FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiNextdotjs, SiRedux, SiMysql, SiMongodb, SiTypescript, SiJavascript, SiHtml5, SiCss3, SiGit, SiFigma } from 'react-icons/si';

const About = () => {
  // Skills data with proper icons
  const scrollingSkills = [
    { name: "React", icon: <FaReact /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "Redux", icon: <SiRedux /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "Express.js", icon: <FaDatabase /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "HTML5", icon: <SiHtml5 /> },
    { name: "CSS3", icon: <SiCss3 /> },
    { name: "Git", icon: <SiGit /> },
    { name: "Responsive Design", icon: <SiCss3 /> },
    { name: "UI/UX", icon: <SiFigma /> },
    { name: "REST APIs", icon: <FaDatabase /> },
    { name: "Problem Solving", icon: <SiTypescript /> },
    { name: "Data Structures", icon: <SiTypescript /> },
    {name: "C++", icon: <SiTypescript /> },
    {name: "C", icon: <SiTypescript /> },
    {name: "Python", icon: <SiTypescript /> },
    {name:"time management", icon: <SiTypescript /> }

  ];

  // Duplicate for seamless looping
  const duplicatedSkills = [...scrollingSkills, ...scrollingSkills];

  return (
    <section id="skills" className="about-section">
      <div className="about-container">
        <motion.div 
          className="about-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Skills</h2>
        </motion.div>

        {/* Auto-scrolling skills with adjusted speed */}
        <div className="skills-scroll-container">
          <motion.div 
            className="skills-scroll-track"
            animate={{
              x: ['0%', '-100%']
            }}
            transition={{
              duration: 40, // Slower scroll (was 20)
              ease: 'linear',
              repeat: Infinity
            }}
          >
            {duplicatedSkills.map((skill, index) => (
              <motion.div
                key={index}
                className="skill-badge"
                whileHover={{ 
                  scale: 1.1,
                  backgroundColor: 'rgba(139, 92, 246, 0.1)'
                }}
                transition={{ 
                  type: 'spring', 
                  stiffness: 300,
                  damping: 10 
                }}
              >
                <motion.div 
                  className="skill-icon"
                  whileHover={{ rotate: 10 }}
                >
                  {skill.icon}
                </motion.div>
                <span>{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;