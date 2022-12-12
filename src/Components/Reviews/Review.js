import React from "react";

const Review = ({ autore, recensione, voto, classes }) => {
  return (
    <>
      {/*   Slide */}

      <div className={`card review ${classes}`}>
        <div className="card-body review">
          <h4>{autore}</h4>
          <p>{recensione}</p>
          {/*<div className="star-container">{voto}</div>*/}
        </div>
      </div>
    </>
  );
};

export default Review;
