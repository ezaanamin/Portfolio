import React from "react";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const containerStyle = {
    backgroundColor: "#333",
    color: "#fff",
    padding: "30px",
    textAlign: "center",
    borderRadius: "8px",
    width: "100%",  // Full width
    maxWidth: "100%", // Max width 100%
    margin: "0 auto",  // Centering horizontally
    fontFamily: "Arial, sans-serif",
  };

  const headerStyle = {
    fontSize: "1.8em",
    marginBottom: "10px",
  };

  const paragraphStyle = {
    marginBottom: "20px",
    color: "#ccc",
  };

  const contactInfoStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginBottom: "20px",
    alignItems: "center", // Ensures the content is centered
  };

  const contactItemStyle = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    color: "#87c5fc",
  };

  const linkStyle = {
    color: "#87c5fc",
    textDecoration: "none",
  };

  const whatsappButtonStyle = {
    backgroundColor: "#25d366",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "5px",
    textDecoration: "none",
    fontWeight: "bold",
    display: "inline-block",
    marginTop: "20px", // Spacing above the button
  };

  return (
    <div style={containerStyle}>
      <h2 style={headerStyle}>Contact Me</h2>
      <p style={paragraphStyle}>You can reach out to me via email or WhatsApp:</p>
      <div style={contactInfoStyle}>
        <div style={contactItemStyle}>
          <FaEnvelope size={24} /> {/* React Icon for email */}
          <a href="mailto:ezaan.amin@gmail.com" style={linkStyle}>
            ezaan.amin@gmail.com
          </a>
        </div>
        <div style={contactItemStyle}>
          <FaWhatsapp size={24} />
          <a
            href="https://wa.me/923414626529"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
          >
            WhatsApp: +92 341 4626529
          </a>
        </div>
      </div>
      <a
        href="https://wa.me/923414626529"
        target="_blank"
        rel="noopener noreferrer"
        style={whatsappButtonStyle}
      >
        Message on WhatsApp
      </a>
    </div>
  );
};

export default Contact;
