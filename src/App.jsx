// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/section/HOme';   // if any error just change it to Home
import LampHero from './components/section/Hero';
import Projects from './components/section/Project';
import Certifications from './components/section/Certification';
import TechStack from './components/section/Techstack';
import Experience from './components/section/Experience';



function App() { 
  return (
    <>
    <LampHero />
    <Projects />
    <TechStack />
    <Certifications />
    <Experience />
    </>
    
  )
}

export default App
