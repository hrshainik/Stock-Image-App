import React from "react";
import "./image-card.style.css";
import { BiCloudDownload } from "react-icons/bi";

const ImageCard = ({ image }) => {
  const tags = image.tags.split(",");

  return (
    <div className={"card"}>
      <img src={image.webformatURL} alt="" />
      <h3>{image.user}</h3>
      <div className="tag-download">
        <div>
          {tags.map((tag, i) => (
            <span key={i}>#{tag}</span>
          ))}
        </div>
        <a
          href={image.webformatURL}
          target="_blank"
          rel="noopener noreferrer"
          download
        >
          <BiCloudDownload className="download" />
        </a>
      </div>
    </div>
  );
};

export default ImageCard;
