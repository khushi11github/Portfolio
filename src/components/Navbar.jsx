import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import './navhero.css';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 10 ? setScrolled(true) : setScrolled(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', to: 'hero' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    {name: 'certifications', to: 'certifications'},
    { name: 'Contact', to: 'contact' }
  ];

  return (
    <motion.nav 
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="nav-container">
        <motion.div 
          className="logo"
          whileHover={{ scale: 1.05 }}
        >
        
        </motion.div>

        <div className={`nav-items ${isOpen ? 'open' : ''}`}>
          <div className="nav-links">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.to}
                smooth={true}
                duration={500}
                offset={-80}
                className="nav-link"
                activeClass="active"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
                <motion.div 
                  className="link-underline"
                  layoutId="underline"
                />
              </Link>
            ))}
          </div>

          <div className="nav-social">
            <a href="https://github.com/khushi11github" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/khushikumari111" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="mailto:khushik110012@gmail.com">
              <FaEnvelope />
            </a>
          </div>
        </div>

        <motion.button 
          className="menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default Navbar;