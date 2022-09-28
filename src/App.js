import React, { useState } from 'react';
import Hero from './components/hero/Hero';
import About from './components/About/About';
import './index';
import ServiceList from './components/Services/ServiceList';
import TestimonialList from './components/Testimonials/TestimonialList';
import Contact from './components/Contact/Contact';
import Portfolio from './components/Portfolio/Portfolio';

export const ScrollContext = React.createContext()

function App() {
  const [stopScrolling, setStopScrolling] = useState(false)
  
  return (
    <div className={stopScrolling ? "App overflow_hidden" : "App"}>
      <ScrollContext.Provider value={{stopScrolling: stopScrolling, setStopScrolling:setStopScrolling}}>
        <Hero />
      </ScrollContext.Provider>
      <About />
      <ServiceList />
      <Portfolio />
      <TestimonialList />
      <Contact />
    </div>
  );
}

export default App;
