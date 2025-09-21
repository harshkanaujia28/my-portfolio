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
            <img src={assets.user_img} alt="Profile" className="profile-pic" />
          </div>
          <div className="content">
            <p>
              Hi, I’m Harsh. I started as a frontend developer, working with
              React and Next.js to build clean, user-friendly interfaces. Later,
              I expanded into backend development — for example, in my client
              projects like Zafrine e-commerce, where I handled the backend
              along with domain setup, VPS hosting, and Razorpay integration.
              I’ve also worked on a leather brand website and a CRM tool,
              gaining real-world experience in full-stack development. Each
              project has helped me grow, from crafting interfaces to
              integrating full systems. I enjoy solving problems through code
              and creating applications that feel simple, intuitive, and useful
              for people.
            </p>
            <div className="cards">
              <div className="card">
                <img src={assets.code_icon} alt="" />
                <h3>Languages</h3>
                <p>HTML, CSS, JavaScript, React Js, Next Js,Tailwind css</p>
              </div>
              <div className="card">
                <img src={assets.edu_icon} alt="" />
                <h3>Education</h3>
                <p>BCA in Computer Science</p>
              </div>
              <div className="card">
                <img src={assets.project_icon} alt="" />
                <h3>Projects</h3>
                <p>Built 4 real word projects</p>
              </div>
            </div>
            <div className="tools">
              <h3>Tools I use</h3>
              <div className="icons">
                <img src={assets.vscode} alt="" />
                <img src={assets.Nextjs} alt="" />
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
