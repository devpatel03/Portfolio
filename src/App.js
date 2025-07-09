import React, { useState, useEffect } from 'react';
import NavItem from './NavItem.js';
import Home from './Home.js';
import Skills from './Skills.js';
import Projects from './Project.js'; 
import Contact from './Contact.js'; 
import { Home as HomeIcon, Code, Folder, Mail, Menu, X } from 'lucide-react';

// Main App component
const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Smooth scroll to section
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // Corrected: Removed trailing space from 'smooth'
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigationClick = (id) => { // Renamed from handlePageChange
    setIsMobileMenuOpen(false); // Close mobile menu after clicking a link

    setTimeout(() => {
      scrollToSection(id);
    }, 200);
  };

  // Handle scroll to update active section in navigation
  useEffect(() => {
    const sections = ['home', 'skills', 'projects', 'contact'];
    const handleScroll = () => {
      if (!isMobileMenuOpen) {
        let currentActive = 'home';
        for (const sectionId of sections) {
          const section = document.getElementById(sectionId);
          if (section) {
          const rect = section.getBoundingClientRect();
          // Check if the section is mostly in view
            if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
              currentActive = sectionId;
              break;
            }
          }
        }
      setActiveSection(currentActive);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 font-inter text-gray-800 pt-24 m-0 p-0">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-br from-gray-900 to-gray-800 shadow-lg py-4 px-6 md:px-12 lg:px-24 flex justify-between items-center rounded-b-xl">
        <div className="text-2xl font-bold text-blue-400">Dev</div>
        <div className="hidden md:flex space-x-8">
          <NavItem icon={<HomeIcon className="w-5 h-5" />} label="Home" id="home" active={activeSection === 'home'} onClick={scrollToSection} />
          <NavItem icon={<Code className="w-5 h-5" />} label="Skills" id="skills" active={activeSection === 'skills'} onClick={scrollToSection} />
          <NavItem icon={<Folder className="w-5 h-5" />} label="Projects" id="projects" active={activeSection === 'projects'} onClick={scrollToSection} />
          <NavItem icon={<Mail className="w-5 h-5" />} label="Contact" id="contact" active={activeSection === 'contact'} onClick={scrollToSection} />
        </div>
        {/* Mobile Navigation (Hamburger Menu - not implemented for brevity, but would go here) */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-md p-2 transition-colors duration-200"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-gray-800 z-40 flex flex-col items-center justify-center space-y-8 md:hidden animate-fade-in-fast">
          <NavItem icon={<HomeIcon className="w-6 h-6" />} label="Home" id="home" active={activeSection === 'home'} onClick={handleNavigationClick} />
          <NavItem icon={<Code className="w-6 h-6" />} label="Skills" id="skills" active={activeSection === 'skills'} onClick={handleNavigationClick} />
          <NavItem icon={<Folder className="w-6 h-6" />} label="Projects" id="projects" active={activeSection === 'projects'} onClick={handleNavigationClick} />
          <NavItem icon={<Mail className="w-6 h-6" />} label="Contact" id="contact" active={activeSection === 'contact'} onClick={handleNavigationClick} />
        </div>
      )}

      {/* Render individual sections */}
      <Home scrollToSection={handleNavigationClick}/> {/* Pass scrollToSection as prop */}
      <Skills />
      <Projects />
      <Contact />

      {/* Footer */}
      <footer className="py-8 text-center bg-gray-900 text-gray-400">
        <p>&copy; {new Date().getFullYear()} Dev Patel. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
