import React, { useState } from "react";
import "./ContactForm.css";
import { assets } from "../../assets/assets";

const ContactForm = ({ darkMode }) => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "072812dd-aba7-471c-b67d-1add0959e2a5");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section id="contact">
      <div id="contact">
        <div className={`contact-container ${darkMode ? "dark" : ""}`}>
          <div className="contact-header">
            <h2>Connect with me</h2>
            <h1>Get in touch</h1>
            <p>
              I'd love to hear from you! If you have any questions, comments, or
              feedback, please use the form below.
            </p>
          </div>
          <form onSubmit={onSubmit} className="contact-form">
            <div className="form-row">
              <input type="text" placeholder="Enter your name" name="name" required />
              <input type="email" placeholder="Enter your email" name="email" required />
            </div>
            <textarea placeholder="Enter your message" name="message" required></textarea>
            <button type="submit">Submit now →</button>
            <p>{result}</p>
          </form>
          <footer className="contact-footer">
            <h2>ℋ𝒜ℛ𝒮ℋ.</h2>
            <p>
              <img src={darkMode ? assets.mail_icon_dark : assets.mail_icon} alt="" /> harshfrontenddev@gmail.com
            </p>
          </footer>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
