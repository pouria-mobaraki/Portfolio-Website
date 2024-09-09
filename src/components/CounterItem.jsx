import React from 'react'
import Countup from 'react-countup';

function CounterItem({item}) {
  return (
    
        <div className="col-lg-3 col-md-6">
            <div className="count-box">
                <i className={item.icon}></i>
                <Countup end={item.end} duration={item.duration}/>
                <p>{item.name}</p>
            </div>
        </div>
    
  )
}

export default CounterItem