import React from "react";
import "./PortfolioSection.css";

const PortfolioSection = () => {
  const projects = [
    {
      title: "Frontend Project",
      type: "web design",
      img: "src/assets/public/work-1.png", // Replace with actual image paths
    },
    {
      title: "Geo Based App",
      type: "mobile app",
      img: "src/assets/public/work-2.png",
    },
    {
      title: "Photography Site",
      type: "web design",
      img: "src/assets/public/work-3.png",
    },
    {
      title: "UI/UX Designing",
      type: "ui/ux design",
      img: "src/assets/public/work-4.png",
    },
  ];

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
