import React, { useEffect, useState } from "react";
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

  useEffect(() => {
    const timer = setTimeout(() => {
      nextReview();
    }, 5000);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  return (
    <>
      <div className="slider">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>Read Our Customer Testimonials</h2>
              <p className="p-heading">
                Our clients are our partners and we can not imagine a better
                future for our company without helping them reach their
                objectives
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              {/*   Card Slider */}
              <div className="slider-container">
                <div className="swiper-container card-slider">
                  <div className="swiper-wrapper">
                    {/*   Slide */}
                    <div className="slidercontainer sliderreviews swiper-slide">
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
                      {/*  Add Arrows */}
                      <div
                        className="swiper-button-next"
                        onClick={nextReview}
                      ></div>
                      <div
                        className="swiper-button-prev"
                        onClick={prevReview}
                      ></div>
                      {/*   end of add arrows */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
