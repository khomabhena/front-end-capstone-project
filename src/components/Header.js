import React from 'react'
import Nav from './Nav'
import logo from '../images/logo-header-yellow.png'
import { Helmet } from 'react-helmet'

function Header({children}) {
  return (
    <header>
        <Helmet>
          <meta charSet="utf-8" />
          <title>My Title</title>
          <link rel="canonical" href="http://mysite.com/example" />
          <meta property="og:title" content="Our Menu" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="logo.png" />
          <meta property="og:url" content="https://littlelemon.com" />

          <meta property="og:description" content="Little Lemon is a family owned Restaurant........" />
          <meta property="og:locale" content=""en_US />
          <meta property="og:site_name" content="Little Lemon" />
        </Helmet>
        <img src={logo} width='auto' height={55} alt='company logo' />
        <Nav />
    </header>
  )
}

export default Header