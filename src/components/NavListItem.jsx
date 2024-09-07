import React from "react";
import './navListItem.css'

function NavListItem({name}) {
  return (
    <>
      <li>
        <a href="" className="nav-link">
          {name}
        </a>
      </li>
    </>
  );
}

export default NavListItem;
