import React from "react";

function ServicesItem({ icon, name, brief }) {
  return (
    <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
      <div className="icon-box">
        <div className="icon">
          <i className={icon}></i>
        </div>
        <h4>
          <a href="#">{name}</a>
        </h4>
        <p>{brief}</p>
      </div>
    </div>
  );
}

export default ServicesItem;
