// src/components/Footer.js
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>Copyright © 2099 I am Siva Rama Krishna | Design: <a href="https://www.apple.in" target='_blank '>apple is superior</a></p>
      <div className="social-icons">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
        <a href="https://x.com/PixelPaneer" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
        <a href="https://www.dribbble.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-dribbble"></i></a>
        <a href="https://www.linkedin.com/in/siva-rama-krishna-gogineni-2a688a281/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
      </div>
      
    </footer>
  );
};

export default Footer;
