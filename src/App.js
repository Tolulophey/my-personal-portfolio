import React from 'react';
import Hero from './components/hero/Hero';
import About from './components/About/About';
import './index';
import ServiceList from './components/Services/ServiceList';
import TestimonialList from './components/Testimonials/TestimonialList';
import Contact from './components/Contact/Contact';
import Portfolio from './components/Portfolio/Portfolio';

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <ServiceList />
      <Portfolio />
      <TestimonialList />
      <Contact />
    </div>
  );
}

export default App;
