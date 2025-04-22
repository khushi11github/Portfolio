import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'

import Projects from './components/Projects'

import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { motion, useScroll, useSpring } from 'framer-motion'
import Certifications from './components/Certifications'
import CompetitiveProgramming from './components/CompetitiveProgramming'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'education', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen">
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-blue-600 z-50 origin-left" 
        style={{ scaleX }} 
      />
      <Navbar activeSection={activeSection} />
      <Hero id="home" />
      <About id="about" />
      
      <Projects id="projects" />
     
      <Education id="education" />
      <Certifications id="certifications" />

      <CompetitiveProgramming/>
      <Contact id="contact" />
      <Footer />
    </div>
  )
}

export default App