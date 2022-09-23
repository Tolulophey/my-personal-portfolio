import React from 'react'
import Navbar from './Navbar'
import logo from '../../images/logo.svg'
import brand from '../../images/brand-name.svg'
import './header.css'

function Header() {
  return (
    <header className="header">
        <div className="logo">
            <img src={logo} alt="logo" />
            <img src={brand} alt="brand" />
        </div>
        <Navbar />
    </header>
  )
}

export default Header