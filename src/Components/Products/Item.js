import React from "react";

function Item() {
  return (
    <article className="mfp-content">
      {/* Lightbox */}

      <div id="project-1" className="lightbox-basic zoom-anim-dialog">
        <div className="row">
          <button
            title="Close (Esc)"
            type="button"
            className="mfp-close x-button"
          >
            ×
          </button>
          <div className="col-lg-8">
            <img
              className="img-fluid"
              src="images/project-1.jpg"
              alt="alternative"
            />
          </div>
          <div className="col-lg-4">
            <h3>Online Banking</h3>
            <hr className="line-heading" />
            <h6>Strategy Development</h6>
            <p>
              Need a solid foundation for your business growth plans? Aria will
              help you manage sales and meet your current needs
            </p>
            <p>
              By offering the best professional services and quality products in
              the market. Don't hesitate and get in touch with us.
            </p>
            <div className="testimonial-container">
              <p className="testimonial-text">
                Need a solid foundation for your business growth plans? Aria
                will help you manage sales and meet your current requirements.
              </p>
              <p className="testimonial-author">General Manager</p>
            </div>
            <a className="btn-solid-reg" href="#your-link">
              DETAILS
            </a>{" "}
            <a className="btn-outline-reg mfp-close as-button" href="#projects">
              BACK
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Item;
