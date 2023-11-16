import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section id='hero'>
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