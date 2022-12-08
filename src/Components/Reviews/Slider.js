import React, { useState } from "react";
import "./Slider.css";
import data from "../api/data";
import Review from "./Review";

const Slider = () => {
  const [recensioni] = useState(data);
  const [active, setActive] = useState(0);

  // Passa alla prossima recensone
  const nextReview = () => {
    setActive((prevValue) => {
      if (prevValue + 1 > recensioni.length - 1) {
        return 0;
      } else {
        return prevValue + 1;
      }
    });
  };

  // Passa alla recensione precedente
  const prevReview = () => {
    setActive((prevValue) => {
      if (prevValue - 1 < 0) {
        return recensioni.length - 1;
      } else {
        return prevValue - 1;
      }
    });
  };

  return (
    <>
      <div className="slidercontainer sliderreviews">
        {recensioni.map((recensione, index) => {
          //Cambio classe in base alla posizione rispetto all'elemento attivo
          let positionClass = "";
          if (index === active) {
            positionClass = "activeReview";
          } else if (
            active === index + 1 ||
            (active === 0 && index === recensioni.length - 1)
          ) {
            positionClass = "prevReview";
          } else {
            positionClass = "nextReview";
          }
          return (
            <Review
              key={recensione.id}
              {...recensione}
              classes={positionClass}
            />
          );
        })}
        <div className="btn-group slider-btn-group">
          <button className="btn btn-slider prev-slide" onClick={prevReview}>
            prev
          </button>
          <button className="btn btn-slider next-slide" onClick={nextReview}>
            next
          </button>
        </div>
      </div>
    </>
  );
};

export default Slider;
