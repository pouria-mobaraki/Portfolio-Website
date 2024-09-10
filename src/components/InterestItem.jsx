import React from 'react'

function InterestItem({icon,color,name}) {
  return (
    <div className='col-lg-3 col-md-4 mt-4'>
      <div className="icon-box">
        <i className={icon} style={{color:color}}></i>
        <h3>{name}</h3>
      </div>
    </div>
  )
}

export default InterestItem