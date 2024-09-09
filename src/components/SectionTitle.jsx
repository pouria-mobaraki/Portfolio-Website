import React from 'react'
import './sectionTitle.css'

function SectionTitle({title,subtitle}) {
  return (
    <div className='section-title'>
        <h2>{title}</h2>
        <p>{subtitle}</p>
    </div>
  )
}

export default SectionTitle