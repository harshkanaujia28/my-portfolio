import React from "react";
import "./PortfolioSection.css";
import { assets, workData } from "../../assets/assets"; // ✅ Ensure correct import

const PortfolioSection = () => {
  return (
    <section id="work">
      <section className="portfolio-section">
        <h1>My Latest Work</h1>
        <p>
          Welcome to my web development portfolio! Explore a collection of
          projects showcasing my expertise in front-end development.
        </p>
        <div className="projects-grid">
          {workData.map((project, index) => (
            <div key={index} className="project-card">
              <img src={project.bgImage} alt={project.title} className="project-img" />
              <div className="project-content">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="view-more">
                  <span>
                    <img src={assets.send_icon} alt="View Project" />
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default PortfolioSection;
