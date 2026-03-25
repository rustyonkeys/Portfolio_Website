// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HeroSection from './components/section/Hero';
import Certifications from './components/section/Certification';
import TechStack from './components/section/Techstack';
import Experience from './components/section/Experience';
import Contact from './components/section/Contact';
import BentoProjects from './components/section/BentoProjects';
import GithubContributions from './components/section/GithubContributions';



function App() {
  return (
    <>
      <HeroSection />
      <BentoProjects />
      <GithubContributions />
      <TechStack />
      <Certifications />
      <Experience />
      <Contact />
    </>

  )
}

export default App
