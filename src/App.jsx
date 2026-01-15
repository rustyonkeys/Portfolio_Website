// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HeroSection from './components/section/Hero';
import Projects from './components/section/Project';
import Certifications from './components/section/Certification';
import TechStack from './components/section/Techstack';
import Experience from './components/section/Experience';
import Contact from './components/section/Contact';



function App() { 
  return (
    <>
    <HeroSection />
    <Projects />
    <TechStack />
    <Certifications />
    <Contact />
    </>
    
  )
}

export default App
