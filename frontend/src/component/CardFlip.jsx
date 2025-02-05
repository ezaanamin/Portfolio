import React from "react";
import "../styles/style.css";

function CardFlip({ title, description, link }) {
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-content">
          <h4 className="card-title">{title}</h4>
          <p className="card-body">{description}</p>
          <a
            href={link}
            className="button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open Github
          </a>
        </div>
      </div>
      {/* Add more <CardFlip /> components here if needed */}
    </div>
  );
}

export default CardFlip;
