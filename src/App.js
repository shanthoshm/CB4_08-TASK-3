import './App.css';
import React from 'react';
import TopNavBar from './components/TopNavBar';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <div className="App">
      <TopNavBar />
      <HomeSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
     
    </div>
  );
}

export default App;
