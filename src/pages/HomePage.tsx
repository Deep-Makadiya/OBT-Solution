import React, { useEffect } from 'react';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import About from '../components/home/About';
import CaseStudies from '../components/home/CaseStudies';
import Testimonials from '../components/home/Testimonials';
import Contact from '../components/home/Contact';

const HomePage = () => {
  useEffect(() => {
    document.title = 'OBT Solutions - Innovative IT Solutions';
  }, []);
  
  return (
    <>
      <Hero />
      <Services />
      <About />
      <CaseStudies />
      <Testimonials />
      <Contact />
    </>
  );
};

export default HomePage;