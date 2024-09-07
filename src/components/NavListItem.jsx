import React from "react";
import './navListItem.css'

function NavListItem({name,_id,navOnClick}) {
  return (
    <>
      <li>
        <a href="" className="nav-link" onClick={() => navOnClick(_id)}>
          {name}
        </a>
      </li>
    </>
  );
}

export default NavListItem;
