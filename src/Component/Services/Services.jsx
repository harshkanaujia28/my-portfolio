import React from "react";
import "./Services.css";
import { serviceData } from "../../assets/assets";

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="services-container">
        <header className="headers">
          <h2 className="subheading">What I Offer</h2>
          <h1 className="main-heading">My Services</h1>
          <p className="description">
            I provide solutions that blend functionality with clean design,
            helping businesses and individuals build strong digital presence.
          </p>
        </header>

        <div className="cards">
          {serviceData.map(({ icon, title, description, link }, index) => (
            <article key={index} className="card">
              <div className="icon-container">
                <img src={icon} alt={`${title} icon`} />
              </div>
              <div className="card-content">
                <h3 className="card-title">{title}</h3>
                <p className="card-description">{description}</p>
                {link && (
                  <a href={link} className="read-more">
                    Learn more →
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
