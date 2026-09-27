import React, { useState } from "react";
import "./VideoComponent.css";

const VideoComponent = ({ videoSrc, title, description, coverImage }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="video-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="card-media-wrapper">
        <img
          src={coverImage}
          alt={title}
          className={`card-cover-image ${isHovered ? "fade-out" : "fade-in"}`}
        />

        {isHovered && (
          <video
            src={videoSrc}
            autoPlay
            muted
            loop
            playsInline
            className="card-video fade-in"
          />
        )}
      </div>

      <div className="card-info">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default VideoComponent;