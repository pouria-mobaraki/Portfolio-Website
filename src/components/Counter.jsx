import React,{useState} from 'react'
import './counter.css'
import counterData from '../data/counterData'
import CounterItem from './CounterItem'

function Counter({active}) {
const [counters,setCounters]= useState(counterData);

  return (
    <div className='container counts'>
        <div className="row">
         {active && counters.map(counter => (
            <CounterItem  key={counter._id} item={counter}/>
         ))
         }
        </div>
    </div>
  )
}

export default Counter;