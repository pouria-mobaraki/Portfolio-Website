import React from "react";

function PortfolioItem({ item }) {
  return (
    <div className="col-lg-4 col-md-6 portfolio-item filter-app">
      <div className="portfolio-wrap">
        <img src={item.img} alt={item.title} className="img-fluid" />
        <div className="portfolio-info">
          <h4>{item.title}</h4>
          <p>{item.brief}</p>
          <div className="portfolio-links">
            <a href="#">
              <i className="bx bx-plus"></i>
            </a>
            <a href="#">
              <i className="bx bx-link"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioItem;
