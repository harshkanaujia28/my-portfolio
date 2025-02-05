import React, { useState } from "react";
import Header from "./Component/Header";
import HeroSection from "./Component/HeroSection";
import About from "./Component/Aboutme/About";
import "./index.css";
import Services from "./Component/Services/Services";
import PortfolioSection from "./Component/PortfolioSection/PortfolioSection";
import ContactForm from "./Component/ContactForm/ContactForm";
import Footer from "./Component/Footer/Footer";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <>
    <div className={darkMode ? "dark-mode" : ""}>
      <Header />
      <HeroSection />
      <About/>
      <Services/>
      <PortfolioSection/>
      <ContactForm/>
      <Footer/>
      </div>
    </>
  );
};

export default App;
