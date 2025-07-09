// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/section/Home';
import LampHero from './components/section/Hero';
import Projects from './components/section/Project';
import Skills from './components/section/Skills';
import Certifications from './components/section/Certification';


function App() { 
  return (
    <>
    <LampHero />
    <Home />
    <Skills />
    <Projects />
    <Certifications />
    </>
    
  )
}

export default App
