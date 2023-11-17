import React from 'react'
import Hero from './Hero'
import Specials from './Specials'
import { Helmet } from 'react-helmet'

const Main = () => {
  return (
    <main>
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
        <Hero />
        <Specials />
        {/* <Testimonials /> */}
        {/* <About /> */}
    </main>
  )
}

export default Main