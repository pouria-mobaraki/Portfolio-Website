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
  fetch('./api/portfolioData.json')
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

const handleFilterData = (name)=>{
  console.log(name);
setFilters(
  filters.map(filter => {
    filter.active=false
    if(filter.name===name){
    filter.active=true
    }
    return filter
  })
)

if(name==="All"){
setData(portfolio)
return
}
 const filtersElem = portfolio.filter(item => item.category === name)
 setData(filtersElem)
 
}

  return (
    <section id="portfolio" className="portfolio" ref={reference}>
        <div className="container">
          <SectionTitle title="Portfolio" subtitle="My Works"/>
          <div className="row">
            <div className="col-lg-12 d-flex justify-content-center">
              <ul id="portfolio-filters">
               {
                filters.map(filter =>(
                  <li key={filter._id} className={filter.active ? 'filter-active' : null}
                  onClick={() => handleFilterData(filter.name)} >{filter.name}</li>
                ) )
               }
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