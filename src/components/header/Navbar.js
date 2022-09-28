import React, {useState, useContext} from 'react'
import menu from '../../images/hamburger_menu.svg'
import close from '../../images/close.png'
import {ScrollContext} from '../../App'


function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const scroll = useContext(ScrollContext);
  const showSideBar = ()=>{
    scroll.setStopScrolling(true);
    setShowMenu(true)
  };
  const hideSideBar = ()=>{
    scroll.setStopScrolling(false);
    setShowMenu(false)
  };
  return (
    <nav className={showMenu ? 'navbar active' : 'navbar'}>
      <div className="menu"  onClick={()=>setShowMenu(!showMenu)}>
        <img className='hamburger' src={menu} alt="menu"  onClick={showSideBar}/>
        <img className='close' src={close} alt="close" onClick={hideSideBar}/>
      </div>
      <div className="nav-menu">
        <ul>
          <a href='#Home'><li onClick={hideSideBar}>Home</li></a>
          <a href='#About'><li onClick={hideSideBar}>About</li></a>
          <a href='#Services'><li onClick={hideSideBar}>Services</li></a>
          <a href='#Portfolio'><li onClick={hideSideBar}>Portfolio</li></a>
          <a href='#Testimonials'><li onClick={hideSideBar}>Testimonials</li></a>
          <a href='#Contact'><li onClick={hideSideBar}>Contact</li></a>
      </ul>
      <button onClick={()=>setShowMenu(false)}>Hire Now</button>
      </div>
    </nav>
  )
}

export default Navbar