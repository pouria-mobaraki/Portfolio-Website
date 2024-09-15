import React,{useState,useEffect} from 'react'
import './portfolio.css'
import SectionTitle from '../components/SectionTitle'
import filterListData from '../data/filterListData'
import PortfolioItem from '../components/PortfolioItem'

//  http://localhost:3000/api/portfolioData.json 

function Portfolio({reference}) {

const [portfolio,setPortfolio]=useState([])
const [data,setData]=useState([])
const [filters,setFilters]=useState(filterListData)

const fetchData =()=> {
  fetch('http://localhost:3000/api/portfolioData.json')
  .then(res => res.json())
  .then(data => {
    setPortfolio(data)
    console.log(data);
    
  }
  ).catch( e => console.log(e.message)
  )
}

useEffect(()=> {
  fetchData()
},[])

useEffect(()=> {
  setData(portfolio)
},[portfolio])

  return (
    <section id="portfolio" className="portfolio" ref={reference}>
        <div className="container">
          <SectionTitle title="Portfolio" subtitle="My Works"/>
          <div className="row">
            <div className="col-lg-12 d-flex justify-content-center">
              <ul id="portfolio-filters">

              </ul>
            </div>
          </div>
          <div className="row portfolio-container">
          {
            data && data.length > 0 &&
            data.map((item)=>(
              <PortfolioItem key={item._id} item={item}/>
            ))
          }
          </div>

        </div>
    </section>
  )
}

export default Portfolio