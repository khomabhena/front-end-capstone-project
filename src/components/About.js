import React from 'react'
import { Helmet } from 'react-helmet'

const About = () => {
  return (
    <section id='about'>
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
        <article>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>Nostrud sit in duis ad aute proident ut non aute et veniam. Sit occaecat ullamco adipisicing quis duis enim sunt minim non aliquip. Irure consequat et incididunt nulla qui est esse ullamco occaecat exercitation velit nisi. Nostrud in sint velit deserunt. Fugiat voluptate aute non quis ex Lorem magna officia aliquip excepteur culpa incididunt labore. Adipisicing culpa officia officia sint.

Duis ut consequat irure labore et officia dolor. Consequat sint consequat sint elit sint Lorem velit aliqua. Cillum sint labore adipisicing ex fugiat est consequat dolor. Ad dolore non non commodo. Eu pariatur exercitation velit sit non proident do id pariatur commodo eiusmod duis consectetur. Consectetur labore cupidatat ullamco laboris laborum amet fugiat ea nisi et. Irure non velit aliquip aute.</p>
        </article>
        <article>
            <img src='' width={180} height={220} alt='outdoor setting' />
            <img src='' width={180} height={220} alt='indoor setting' />
        </article>
    </section>
  )
}

export default About