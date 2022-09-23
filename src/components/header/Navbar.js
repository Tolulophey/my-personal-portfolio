import React, {useState} from 'react'
import menu from '../../images/hamburger_menu.svg'
import close from '../../images/close.png'


function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const showSideBar = ()=>{setShowMenu(!showMenu)};
  return (
    <nav className={showMenu ? 'navbar active' : 'navbar'}>
      <div className="menu">
        <img className='hamburger' src={menu} alt="menu"  onClick={showSideBar}/>
        <img className='close' src={close} alt="close" onClick={()=>setShowMenu(false)}/>
      </div>
      <div className="nav-menu">
        <ul>
          <a href='#Home'><li onClick={()=>setShowMenu(false)}>Home</li></a>
          <a href='#About'><li onClick={()=>setShowMenu(false)}>About</li></a>
          <a href='#Testimonials'><li onClick={()=>setShowMenu(false)}>Testimonials</li></a>
          <a href='#Services'><li onClick={()=>setShowMenu(false)}>Services</li></a>
          <a href='#Portfolio'><li onClick={()=>setShowMenu(false)}>Portfolio</li></a>
          <a href='#Contact'><li onClick={()=>setShowMenu(false)}>Contact</li></a>
      </ul>
      <button onClick={()=>setShowMenu(false)}>Hire Now</button>
      </div>
    </nav>
  )
}

export default Navbar