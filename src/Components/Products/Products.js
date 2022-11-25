import React, { useState } from "react";

function Products() {
  return (
    <>
      <div id="projects" className="filter">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">Projects</div>
              <h2>Projects That We're Proud Of</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              {/* Filter */}
              <div className="button-group filters-button-group">
                <a className="button is-checked" data-filter="*">
                  <span>SHOW ALL</span>
                </a>
                <a className="button" data-filter=".design">
                  <span>DESIGN</span>
                </a>
                <a className="button" data-filter=".development">
                  <span>DEVELOPMENT</span>
                </a>
                <a className="button" data-filter=".marketing">
                  <span>MARKETING</span>
                </a>
                <a className="button" data-filter=".seo">
                  <span>SEO</span>
                </a>
              </div>
              <div className="grid">
                <div className="element-item development">
                  <a className="popup-with-move-anim" href="#project-1">
                    <div className="element-item-overlay">
                      <span>Online Banking</span>
                    </div>
                    <img src="images/project-1.jpg" alt="alternative" />
                  </a>
                </div>
                <div className="element-item development">
                  <a className="popup-with-move-anim" href="#project-2">
                    <div className="element-item-overlay">
                      <span>Classic Industry</span>
                    </div>
                    <img src="images/project-2.jpg" alt="alternative" />
                  </a>
                </div>
                <div className="element-item design development marketing">
                  <a className="popup-with-move-anim" href="#project-3">
                    <div className="element-item-overlay">
                      <span>BoomBap Audio</span>
                    </div>
                    <img src="images/project-3.jpg" alt="alternative" />
                  </a>
                </div>
                <div className="element-item design development marketing">
                  <a className="popup-with-move-anim" href="#project-4">
                    <div className="element-item-overlay">
                      <span>Van Moose</span>
                    </div>
                    <img src="images/project-4.jpg" alt="alternative" />
                  </a>
                </div>
                <div className="element-item design development marketing seo">
                  <a className="popup-with-move-anim" href="#project-5">
                    <div className="element-item-overlay">
                      <span>Joy Moments</span>
                    </div>
                    <img src="images/project-5.jpg" alt="alternative" />
                  </a>
                </div>
                <div className="element-item design marketing seo">
                  <a className="popup-with-move-anim" href="#project-6">
                    <div className="element-item-overlay">
                      <span>Spark Events</span>
                    </div>
                    <img src="images/project-6.jpg" alt="alternative" />
                  </a>
                </div>
                <div className="element-item design marketing">
                  <a className="popup-with-move-anim" href="#project-7">
                    <div className="element-item-overlay">
                      <span>Casual Wear</span>
                    </div>
                    <img src="images/project-7.jpg" alt="alternative" />
                  </a>
                </div>
                <div className="element-item design marketing">
                  <a className="popup-with-move-anim" href="#project-8">
                    <div className="element-item-overlay">
                      <span>Zazoo Apps</span>
                    </div>
                    <img src="images/project-8.jpg" alt="alternative" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
