import React from "react";

const ComicCard = ({ thumb, title }) => {
  return (
    <div className="colComic">
      <div className="cardComic">
        <img src={thumb} alt={title} />
      </div>
      <h4>{title}</h4>
    </div>
  );
};

export default ComicCard;