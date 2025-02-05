import React from "react";
import "./About.css";
import { assets } from "../../assets/assets";
// import { FaHtml5, FaCss3Alt, FaReact, FaJsSquare } from "react-icons/fa";
// import { SiNextdotjs, SiVisualstudiocode, SiFigma, SiGit } from "react-icons/si";

const App = () => {
  return (
    <section id="about">
    <div className="app-container">
        <h2>Introduction</h2>
        <h1>About me</h1>
      <section className="about-me">
        <div className="profile-image">
          <img
            src={assets.user_img}
            alt="Profile"
            className="profile-pic"
          />
        </div>
        <div className="content">
        
          <p>
            I am an experienced Frontend Developer with over a decade of
            professional expertise in the field. Throughout my career, I have
            had the privilege of collaborating with prestigious organizations,
            contributing to their success and growth.
          </p>
          <div className="cards">
            <div className="card">
              <img src={assets.code_icon} alt="" />
              <h3>Languages</h3>
              <p>HTML, CSS, JavaScript, React Js</p>
            </div>
            <div className="card">
              <img src= {assets.edu_icon} alt="" />
              <h3>Education</h3>
              <p>BCA in Computer Science</p>
            </div>
            <div className="card">
              <img src={assets.project_icon} alt="" />
              <h3>Projects</h3>
              <p>Built 4 projects</p>
            </div>
          </div>
          <div className="tools">
            <h3>Tools I use</h3>
            <div className="icons">
            <img src={assets.vscode} alt="" />
            <img src={assets.firebase} alt="" />
            <img src={assets.figma} alt="" />
            <img src={assets.git} alt="" />
            <img src={assets.mongodb} alt="" />
           
            </div>
          </div>
        </div>
      </section>
    </div>
    </section>
  );
};

export default App;
