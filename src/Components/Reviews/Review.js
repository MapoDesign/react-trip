import React from "react";

const Review = ({ autore, recensione, voto, classes }) => {
  return (
    <div className={`review ${classes}`}>
      <div className="review">
        <h4>{autore}</h4>
        <p>{recensione}</p>
        <div className="star-container">{voto}</div>
      </div>
    </div>
  );
};

export default Review;
