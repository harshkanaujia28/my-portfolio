import React from "react";
import "./PortfolioSection.css";
import { projects } from "../../../public/assets";

const PortfolioSection = () => {


  return (
    <section id="work">
    <section className="portfolio-section">
      <h1>My latest work</h1>
      <p>
        Welcome to my web development portfolio! Explore a collection of
        projects showcasing my expertise in front-end development.
      </p>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.img} alt={project.title} className="project-img" />
            <div className="project-content">
              <h2>{project.title}</h2>
              <p>{project.type}</p>
              <button className="view-more">
                <span>→</span>
              </button>
            </div>
          </div>
        ))}
      </div>
      <button className="show-more">Show more →</button>
    </section>
    </section>
  );
};

export default PortfolioSection;
