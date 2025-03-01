import React from "react";
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>© 2025 Harsh Kanaujia. All rights reserved.</p>
        <div className="footer-links">
          <a href="https://github.com/harshkanaujia28"><i class="fa-brands fa-github"></i></a>
          <a href="https://www.linkedin.com/in/harsh-kanaujia-83178026a/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><i class="fa-brands fa-linkedin-in"></i></a>
          <a href="/contact">Connect with me</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
