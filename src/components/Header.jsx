import React,{useState} from 'react'
import './header.css'
import NavListItem from './NavListItem'
import navListData from '../data/navListData'
import SocialLinksItem from './SocialLinksItem'


function Header({reference,sectionActive}) {

    const [navList,setNavList] = useState(navListData)
    const[header,setHeader] = useState(false)

    const handleNavOnClick = (id,target) => {
       if(target==='header'){
        setHeader(false)
       }else{
        setHeader(true)
       }

    const newNavList =  navList.map(nav => {
        nav.active=false
        if(nav._id === id){
           nav.active=true
        }
        return nav
    })
     setNavList(newNavList)
     sectionActive(target)
      
    }

  return (
    <header id='header' ref={reference} className={header ? 'header-top':null}>
      <div className="container">
        <h1>
            <a href="#">Pouria Mobaraki</a>
        </h1>
        <h2>
            I'm a <span>front-end developer</span> from Tehran
        </h2>
        <nav id="navbar" className='navbar'>
            <ul>
              {
                navList.map(item => (
                    <NavListItem  key={item._id} {...item} navOnClick={handleNavOnClick} />
                ))
              }
            </ul>
        </nav>
        <div className="social-links">
        <SocialLinksItem name="twitter-x"/>
        <SocialLinksItem name="facebook"/>
        <SocialLinksItem name="instagram"/>
        <SocialLinksItem name="linkedin"/>
        </div>
      </div>
    </header>
  )
}

export default Header