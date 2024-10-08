import React from "react";
import './navListItem.css'

function NavListItem({name,_id,target,navOnClick,active}) {
  return (
    <>
      <li>
        <a href="#" className={`${active ? "active" : "nav-link"}`} onClick={() => navOnClick(_id,target)}>
          {name}
        </a>
      </li>
    </>
  );
}

export default NavListItem;
