import React from "react";
import starCreator from "../utils/starCreator";

const Review = ({ autore, recensione, voto, classes }) => {
  return (
    <>
      {/*   Slide */}

      <div className={`card review ${classes}`}>
        <div className="card-body review">
          <h4>{autore}</h4>
          <p>{recensione}</p>
          <div className="star-container">{starCreator(voto)}</div>
        </div>
      </div>
    </>
  );
};

export default Review;
