import React from "react";
import "./Card.css";
function Card({ title, src, description, price }) {
  return (
    <div className="card">
      <img src={src} alt={title} />
      <div className="card__content">
        <h5>{title}</h5>
        <p>{description}</p>
        <b>{price}</b>
      </div>
    </div>
  );
}

export default Card;
