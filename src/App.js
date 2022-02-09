import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Resume from './components/Resume';
import Hero from './components/Hero';
import Welcome from './components/Welcome';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Hero />
        {/* <Divide /> */}
        <Routes>
          <Route exact path="/reactportfol" element={<Welcome />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
