import React from 'react';
import Navbar from './Components/Navbar.jsx';
import Dock from './Components/ui/Dock.jsx';
import HeroSection from './Components/HeroSection.jsx';
import AboutSection from './Components/AboutSection.jsx';
import ProjectsSection from './Components/ProjectsSection.jsx';
import ProjectCard from './Components/ProjectCard.jsx';
import Footer from './Components/Footer.jsx';



export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main className="pt-16">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  );
}
