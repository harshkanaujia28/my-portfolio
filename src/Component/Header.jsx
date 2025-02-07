import React, { useState, useEffect } from "react";
import "./Header.css";
import menuIcon from "../assets/menu-black.png";
import closeIcon from "../assets/close-black.png";
import { assets } from "../assets/assets";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Check if mobile

  useEffect(() => {
    // Update isMobile state on window resize
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavClick = (e, targetId) => {
    e.preventDefault(); // Prevent default jump behavior
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false); // Close the menu on mobile
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-theme");
  };

  return (
    <header className="header">
      <div className="logo">ℋ𝒜ℛ𝒮ℋ<span>.</span></div>

      {/* Navbar - Moon Icon Removed from Here for Mobile */}
      <nav className={menuOpen ? "nav open" : "nav"}>
        <a href="#home" onClick={(e) => handleNavClick(e, "home")}>Home</a>
        <a href="#about" onClick={(e) => handleNavClick(e, "about")}>About Me</a>
        <a href="#services" onClick={(e) => handleNavClick(e, "services")}>Services</a>
        <a href="#work" onClick={(e) => handleNavClick(e, "work")}>My Work</a>
        <a href="#contact" className="contact-link">Contact Me</a> {/* Changed to a Link */}
        <img
            src={darkMode ? assets.sun_icon : assets.moon_icon}
            className="moon"
            alt="Dark mode toggle"
            onClick={toggleDarkMode}
          />
      </nav>

      {/* Menu Icon & Moon Icon (Shown Only on Mobile) */}
      <div className="menu-container">
        {isMobile && (
          <img
            src={darkMode ? assets.sun_icon : assets.moon_icon}
            className="moon"
            alt="Dark mode toggle"
            onClick={toggleDarkMode}
          />
        )}
        <div className="menu-icon" onClick={toggleMenu} aria-label="Toggle menu">
          <img src={menuOpen ? (darkMode ? assets.close_white : closeIcon) : (darkMode ? assets.menu_white : menuIcon)} alt="Menu Icon" className="menu" />
        </div>
      </div>
    </header>
  );
};

export default Header;
