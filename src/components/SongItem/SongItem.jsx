import React, { useState } from "react";
import "./SongItem.css";

const SongItem = ({ title }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleClick = (e) => {
    setIsFavorite(!isFavorite);
  };

  const btnClass = isFavorite ? "active-btn" : "";

  return (
    <div className="movie-item">
      <span>{title}</span>
      <button className={btnClass} onClick={handleClick}>
        Favorite
      </button>
    </div>
  );
};

export default SongItem;
