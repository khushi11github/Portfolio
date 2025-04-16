import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaCode, FaArrowDown } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import './navhero.css';

const Hero = () => {
  const codingImages = [
    "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80",
    "https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  ];

  return (
    <section id="hero" className="hero-section">
      <div className="hero-gradient"></div>
      <div className="hero-particles"></div>
      
      <div className="hero-container">
        <div className="hero-content">
          <motion.div 
            className="text-content"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="intro-text"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <span className="greeting">Hello World, I'm</span>
            </motion.div>

            <motion.h1
              className="name"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8, type: 'spring' }}
            >
              <span className="name-gradient">Khushi</span> Kumari
            </motion.h1>

            <motion.div
              className="title-container"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <TypeAnimation
                sequence={[
                  'Full Stack Developer',
                  1500,
                  'MERN Specialist',
                  1500,
                  'Frontend Developer',
                  1500,
                  'Bringing Ideas to Life',
                  1500
                ]}
                wrapper="h2"
                cursor={true}
                repeat={Infinity}
                speed={30}
                className="title"
              />
            </motion.div>

            <motion.p
              className="description"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
             Full Stack Developer and CSE student at Lovely Professional University,
             building sleek and scalable web apps with the MERN Stack
            </motion.p>

            <div className="cta-group">
              <motion.a
                href="#projects"
                className="cta-button primary"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 5px 15px rgba(139, 92, 246, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <FaCode style={{ marginRight: 8 }} />
                View Projects
              </motion.a>
              <motion.a
                href="#contact"
                className="cta-button secondary"
                whileHover={{ y: -3 }}
              >
                Get In Touch
              </motion.a>
            </div>
          </motion.div>

          <motion.div 
            className="image-content"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="image-container">
              <img 
                src={codingImages[0]} 
                alt="Full Stack Development" 
                className="profile-image"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll Prompt */}
        <motion.div 
          className="scroll-prompt"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0, 1, 1, 0],
            y: [10, 0, 0, 10]
          }}
          transition={{ 
            delay: 1.5,
            duration: 2,
            repeat: Infinity,
            repeatDelay: 1
          }}
        >
          <FaArrowDown />
          <span>Explore More</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
