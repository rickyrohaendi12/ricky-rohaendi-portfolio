/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './components/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import SkillsGrid from './components/SkillsGrid';
import Sandbox from './components/Sandbox';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  // INTERSECTION OBSERVER FOR ACTIVE NAV TRACKING
  useEffect(() => {
    const sections = ['hero', 'projects', 'skills', 'sandbox', 'contact'];
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -40% 0px', // Center-weighted viewport detection
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // SCROLL ANCHOR DISPATCHER
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80; // Compensates for the sticky header height
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <ThemeProvider>
      <div className="bg-[#0A0A0B] text-white min-h-screen text-sans select-text scroll-smooth antialiased transition-colors duration-300 relative overflow-hidden">
        
        {/* Decorative Background Glows from Vibrant Palette */}
        <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[120px] pointer-events-none -z-10"></div>
        <div className="absolute bottom-[-100px] right-[-100px] w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[150px] pointer-events-none -z-10"></div>

        {/* EXTRA AMBIENT PULSING ACCENT */}
        <div className="absolute top-[40%] right-[10%] w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none -z-10 animate-pulse"></div>

        {/* GLOBAL HEADER BAR */}
        <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

        {/* PAGE BODY BUILDUP */}
        <main className="relative z-10">
          {/* LANDING SECTION */}
          <Hero onNavigate={handleNavigate} />

          {/* FEATURED CASE STUDIES */}
          <Projects />

          {/* DUAL CORE DESIGN-TO-CODE PLAYGROUND */}
          <Sandbox />

          {/* EXPERTISE SPECS GRID */}
          <SkillsGrid />

          {/* CO-WORKING COLLABORATION SECTION */}
          <Contact />
        </main>

        {/* SYSTEM FOOTER */}
        <Footer />

      </div>
    </ThemeProvider>
  );
}

