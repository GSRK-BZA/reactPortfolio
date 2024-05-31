import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Header from "./components/Header";
import About from "./components/About";
import Experience from './components/Experience';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Nav />
      <div id="home"><Header /></div>
      <div id="about"><About /></div>
      <div id="experience"><Experience /></div>
      <div id="testimonial"><Testimonial /></div>
      <div id="contact"><Contact /></div>
      <Footer />
    </div>
  );
}

export default App;
