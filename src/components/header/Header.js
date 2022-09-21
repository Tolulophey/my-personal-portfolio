import React from 'react'
import Navbar from './Navbar'
import logo from '../../images/logo.svg'
import brand from '../../images/brand-name.svg'
import menu from '../../images/hamburger_menu.svg'
import './header.css'

function Header() {
  return (
    <header className="header">
        <div className="logo">
            <img src={logo} alt="logo" />
            <img src={brand} alt="brand" />
        </div>
        <Navbar />
      <img className='menu' src={menu} alt="menu" />
    </header>
  )
}

export default Header