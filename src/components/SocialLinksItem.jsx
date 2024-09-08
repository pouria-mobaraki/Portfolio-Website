import React from 'react'
import'./socialLinksItem.css'

function SocialLinksItem({name}) {
  return (
   <a href="#">
    <i className={`bi bi-${name}`}></i>
   </a>
  )
}

export default SocialLinksItem