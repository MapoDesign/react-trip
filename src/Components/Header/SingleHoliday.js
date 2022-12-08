import React from "react";

const SingleHoliday = ({
  titolo,
  durata,
  descrizione,
  prezzo,
  img,
  next,
  prev,
}) => {
  return (
    <>
      <header
        id="header"
        className="header carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div
            className="carousel-item active"
            data-bs-interval="10000"
            style={{
              background: `url(${img}) center center no-repeat`,
              backgroundSize: "cover",
            }}
          >
            <div className="header-content">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="text-container">
                      <h1>
                        <span id="js-rotating">{titolo}</span>
                      </h1>
                      <p className="p-heading p-large">{descrizione}</p>
                      <p className="p-heading p-large">
                        <small>{durata}</small>
                      </p>
                      <a className="btn-solid-lg page-scroll" href="#intro">
                        {(prezzo / 100).toFixed(2)} €
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
          onClick={prev}
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
          onClick={next}
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </header>
    </>
  );
};

export default SingleHoliday;
