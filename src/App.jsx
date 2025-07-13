// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/section/HOme';   // if any error just change it to Home
import LampHero from './components/section/Hero';
import Projects from './components/section/Project';
import Certifications from './components/section/Certification';
import TechStack from './components/section/Techstack';



function App() { 
  return (
    <>
    <LampHero />
    <Home />
    <Projects />
    <TechStack />
    <Certifications />
    </>
    
  )
}

export default App
