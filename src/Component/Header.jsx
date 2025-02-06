import React, { useState } from "react";
import "./Header.css";
import moonIcon from "../assets/moon_icon.png";
import menuIcon from "../assets/menu-black.png";
import closeIcon from "../assets/close-black.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

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
      <nav className={menuOpen ? "nav open" : "nav"}>
        <a href="#home" onClick={(e) => handleNavClick(e, "home")}>Home</a>
        <a href="#about" onClick={(e) => handleNavClick(e, "about")}>About Me</a>
        <a href="#services" onClick={(e) => handleNavClick(e, "services")}>Services</a>
        <a href="#work" onClick={(e) => handleNavClick(e, "work")}>My Work</a>
        <img src={moonIcon} className="moon" alt="Dark mode toggle" onClick={toggleDarkMode} />
       <a href="#contact"> <button className="btn">Contact Me</button></a>
      </nav>
      <div className="menu-icon" onClick={toggleMenu} aria-label="Toggle menu">
        <img src={moonIcon} className="moon" alt="Dark mode toggle" onClick={toggleDarkMode} />
        <img
          src={menuOpen ? closeIcon : menuIcon}
          alt="Menu Icon"
          className="menu"
        />
      </div>
    </header>
  );
};

export default Header;
