import { motion } from 'framer-motion';
import './About.css';
import { 
  FaReact, FaNodeJs, FaPython 
} from 'react-icons/fa';
import { 
  SiNextdotjs, SiRedux, SiMysql, SiMongodb, 
  SiTypescript, SiJavascript, SiHtml5, SiCss3,
  SiGit, SiFigma, SiCplusplus, SiC
} from 'react-icons/si';
import { GiClockwork } from 'react-icons/gi';

const About= () => {
  const skillsData = [
    { name: "React", icon: <FaReact />, color: "#61DAFB" },
    { name: "Next.js", icon: <SiNextdotjs />, color: "#000000" },
    { name: "Java", icon: <SiJavascript />, color: "#007396" },
    {name:"problem solving", icon: <GiClockwork />, color:"#8b5cf6"},
    { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
    { name: "Redux", icon: <SiRedux />, color: "#764ABC" },
    { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
    { name: "Node.js", icon: <FaNodeJs />, color: "#68A063" },
    { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
    { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
    { name: "HTML5", icon: <SiHtml5 />, color: "#E34F26" },
    { name: "CSS3", icon: <SiCss3 />, color: "#1572B6" },
    { name: "Git", icon: <SiGit />, color: "#F05032" },
  
    { name: "C++", icon: <SiCplusplus />, color: "#00599C" },
    { name: "C", icon: <SiC />, color: "#A8B9CC" },
    { name: "Python", icon: <FaPython />, color: "#3776AB" },
    { name: "Time Management", icon: <GiClockwork />, color: "#8b5cf6" }
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
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
      scale: 1.1,
      transition: { duration: 0.2 }
    }
  };

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">My <span className="highlight">Skills</span></h2>
          <p className="section-subtitle">Technologies I work with</p>
        </motion.div>

        <motion.div 
          className="skills-grid"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              className="skill-card"
              variants={item}
              whileHover="hover"
              style={{ color: skill.color }}
            >
              <div className="skill-icon-container">
                <motion.div 
                  className="skill-icon"
                  animate={{
                    rotate: [0, 10, -10, 0],
                    y: [0, -5, 5, 0]
                  }}
                  transition={{
                    duration: 4 + Math.random() * 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: Math.random() * 2
                  }}
                >
                  {skill.icon}
                </motion.div>
                <motion.div 
                  className="skill-glow"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{
                    scale: [0.8, 1.2, 0.8],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  style={{ backgroundColor: skill.color }}
                />
              </div>
              <span className="skill-name">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;