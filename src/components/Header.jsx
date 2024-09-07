import React,{useState} from 'react'
import './header.css'
import NavListItem from './NavListItem'
import navListData from '../data/navListData'

function Header() {

    const [navList,setNavList] = useState(navListData)
    const handleNavOnClick = (id) => {
      console.log(id);
  
      
    }

  return (
    <header id='header'>
      <div className="container">
        <h1>
            <a href="">Pouria Mobaraki</a>
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
      </div>
    </header>
  )
}

export default Header