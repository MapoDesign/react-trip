import React from "react";

function Modal() {
  return (
    <div className="modal fade" tabindex="-1" style={{ display: "block" }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Modal title</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
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
                    Need a solid foundation for your business growth plans? Aria
                    will help you manage sales and meet your current needs
                  </p>
                  <p>
                    By offering the best professional services and quality
                    products in the market. Don't hesitate and get in touch with
                    us.
                  </p>
                  <div className="testimonial-container">
                    <p className="testimonial-text">
                      Need a solid foundation for your business growth plans?
                      Aria will help you manage sales and meet your current
                      requirements.
                    </p>
                    <p className="testimonial-author">General Manager</p>
                  </div>
                  <a className="btn-solid-reg" href="#your-link">
                    DETAILS
                  </a>{" "}
                  <a
                    className="btn-outline-reg mfp-close as-button"
                    href="#projects"
                  >
                    BACK
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
