import React from "react";
import "./image-card.style.css";

const ImageCard = ({ image }) => {
  const tags = image.tags.split(",");

  return (
    <div className="card">
      <img src={image.webformatURL} alt="" />
      <h3>{image.user}</h3>
      {tags.map((tag, i) => (
        <span key={i}>#{tag}</span>
      ))}
    </div>
  );
};

export default ImageCard;
