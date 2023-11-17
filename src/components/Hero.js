import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

const Hero = () => {
  return (
    <section id='hero'>
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
        <section id='hero-section'>
          <article>
              <h1>Little Lemon</h1>
              <h2>Chicago</h2>
              <p>Voluptate fugiat ex veniam do proident nostrud nulla ex proident sint non eiusmod. In amet ipsum mollit Lorem est nostrud tempor. Incididunt</p>
              <Link to='/reserve-table'>
                <Button>RESERVE A TABLE</Button>
              </Link>
          </article>
          <img src={require('../images/restauranfood.jpg')} width={200} height={350} alt='' />
        </section>
    </section>
  )
}

export default Hero