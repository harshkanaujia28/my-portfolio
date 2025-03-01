import React from "react";
import "./Services.css";
import { serviceData } from "../../assets/assets";


export default function Services() {
  return (
    <section id="services">
    <div className="services">
    <div className="services-container">
      <div className="headers">
        <h2 className="subheading">What I offers</h2>
        <h1 className="main-heading">My services</h1>
        <p className="description">
          I am a frontend developer from California, USA with 10 years of
          experience in multiple companies like Microsoft, Tesla and Apple.
        </p>
      </div>
      <div className="cards">
        {serviceData.map(({icon, title, description,link},index) => (
          <div key={index} className="card">
            <div className="icon-container"><img src={icon} alt="" /></div>
            <div className="card-content">
              <h3 className="card-title">{title}</h3>
              <p className="card-description">{description}</p>
              {/* <a href={link} className="read-more">
                Read more <img src="src/assets/right-arrow.png" alt="" />
              </a> */}
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
    </section>
  );
}
