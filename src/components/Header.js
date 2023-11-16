import React from 'react'
import Nav from './Nav'
import logo from '../images/logo-header-yellow.png'

function Header({children}) {
  return (
    <header>
        <img src={logo} width='auto' height={55} alt='company logo' />
        <Nav />
    </header>
  )
}

export default Header