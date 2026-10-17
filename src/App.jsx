import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './sections/HeroSection';
import ProjectsSection from './sections/ProjectsSection';
import ServicesSection from './sections/ServicesSection';
import AboutSection from './sections/AboutSection';
import ProcessSection from './sections/ProcessSection';
import ContactSection from './sections/ContactSection';
import Footer from './sections/Footer';

// Styles
import './styles/global.css';
import './styles/navbar.css';
import './styles/hero.css';
import './styles/projects.css';
import './styles/modal.css';
import './styles/services.css';
import './styles/about.css';
import './styles/process.css';
import './styles/contact.css';
import './styles/footer.css';

export default function App() {
  return (
    <div className="site-wrapper">
      <Navbar />
      <main>
        <HeroSection />
        <ProjectsSection />
        <ServicesSection />
        <AboutSection />
        <ProcessSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
