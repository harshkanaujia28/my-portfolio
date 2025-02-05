import React from "react";
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>© 2025 Harsh Kanaujia. All rights reserved.</p>
        <div className="footer-links">
          <a href="/terms-of-services"><i class="fa-brands fa-github"></i></a>
          <a href="/privacy-policy"><i class="fa-brands fa-linkedin-in"></i></a>
          <a href="/contact">Connect with me</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
