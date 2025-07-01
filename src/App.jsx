// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/section/Home';
import LampHero from './components/section/Hero';
import Projects from './components/section/Project';
import Skills from './components/section/Skills';

import CertificationsPage from './components/section/TiltCard';

function App() { 
  return (
    <>
    <LampHero />
    <Home />
    <Skills />
    <Projects />
    <CertificationsPage />
    </>
    
  )
}

export default App
