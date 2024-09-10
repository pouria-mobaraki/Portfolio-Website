import React,{useState} from 'react'
import './interest.css'
import interestsData from '../data/interestsData'
import InterestItem from './InterestItem'

function Interests() {
  const [interests,setInterests]= useState(interestsData)

  return (
    <div className='container interests'>
       <div className="section-title">
        <h2>Interests</h2>
       </div>
       
       <div className="row">
        {
         interests.map(interest => (
            <InterestItem  key={interest._id} {...interest} />
         ))
        }
       </div>
    </div>
  )
}

export default Interests