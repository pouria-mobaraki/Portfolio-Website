import React from "react";

function SkillBar({ name, percentage ,active}) {
  return (
    <div className="progress">
      <span className="skill">
        {name} <i className="val">{percentage}</i>
      </span>
      <div
        className="progress-bar"
        role="progressbar"
        aria-valuenow="100"
        aria-valuemin="0"
        aria-valuemax="100"
        style={active ? { width: percentage } : { width: "1px" }}
      ></div>
    </div>
  );
}

export default SkillBar;
