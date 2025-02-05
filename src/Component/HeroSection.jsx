import React from "react";
import "./HeroSection.css";
import { assets } from "../assets/assets"; 

const HeroSection = () => {
  return (
  <div id="Hero">
    <section className="hero">
      <img src={assets.profile_img} alt="William Mark" />
      <h1>Hi! I'm Harsh Kanaujia 👋</h1>
      <h2>frontend web developer based in India.</h2>
      <p>
        I am a frontend developer from Kanpur, Uttar Pradesh
      </p>
      <div>
        <button className="btn">Contact with me →</button>
        <button className="resume">my resume ⬇</button>
      </div>
    </section>
    </div>
  );
};

export default HeroSection;
