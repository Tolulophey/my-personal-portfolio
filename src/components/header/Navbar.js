import React, {useState, useEffect} from 'react'
// import menu from '../../images/hamburger_menu.svg'
import close from '../../images/close.png'
import {GiHamburgerMenu} from 'react-icons/gi';
// import {AiOutlineClose} from 'react-icons/ai';


function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const showSideBar = ()=>{
    setShowMenu(true)
  };
  const hideSideBar = ()=>{
    setShowMenu(false)
  };
    useEffect(()=>{
    if(showMenu){
      document.querySelector("body").style.overflow = "hidden"
    }
    return ()=> {
      document.querySelector("body").style.overflow = "auto"
    }
  }, [showMenu])
  return (
    <nav className={showMenu ? 'navbar active' : 'navbar'}>
      <div className="menu">
        {/* <img className='hamburger' src={menu} alt="menu"  onClick={showSideBar}/> */}
        <GiHamburgerMenu color="fff"  className="hamburger" onClick={showSideBar}/>
        <img className='close' src={close} alt="close" onClick={hideSideBar}/>
      </div>
      <div className="nav-menu">
        <ul  onClick={hideSideBar}>
          <a href='#Home'><li>Home</li></a>
          <a href='#About'><li>About</li></a>
          <a href='#Services'><li>Services</li></a>
          <a href='#Portfolio'><li>Portfolio</li></a>
          <a href='#Testimonials'><li>Testimonials</li></a>
          <a href='#Contact'><li>Contact</li></a>
      </ul>
      <button onClick={()=>setShowMenu(false)}>Hire Now</button>
      </div>
    </nav>
  )
}

export default Navbar