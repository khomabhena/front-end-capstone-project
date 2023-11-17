import React, { useState } from 'react'
import Header from './Header'
import { Helmet } from 'react-helmet'

const ReserveTable = () => {
  const [data, setData] = useState({
    date: 'Choose date',
    time: '17:00',
    guests: 1,
    occasion: 'Birthday'
  })
  
  return (
    <>
      <Helmet>
          <meta charSet="utf-8" />
          <title>Reserve a Table</title>
          <link rel="canonical" href="http://mysite.com/example" />
          <meta property="og:title" content="Our Menu" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="logo.png" />
          <meta property="og:url" content="https://littlelemon.com" />

          <meta property="og:description" content="Little Lemon is a family owned Restaurant........" />
          <meta property="og:locale" content=""en_US />
          <meta property="og:site_name" content="Little Lemon" />
        </Helmet>
      <Header />
      <section id='reserve-table'>
          <h1>Reserve a Table</h1>
          <form>          
            <label for="res-date">Choose date</label>
            <input type="date" value={data.date} id="res-date" required onChange={(e) => setData(prev => ({...prev, date: e.target.value}))} />
            <label for="res-time">Choose time</label>
            <select id="res-time" value={data.time} required onChange={(e) => setData(prev => ({...prev, time: e.target.value}))}>
                <option>17:00</option>
                <option>18:00</option>
                <option>19:00</option>
                <option>20:00</option>
                <option>21:00</option>
                <option>22:00</option>
            </select>
            <label for="guests">Number of guests</label>
            <input type="number" value={data.guests} placeholder="1" min="1" max="10" onChange={(e) => setData(prev => ({...prev, guests: e.target.value}))} required id="guests" />
            <label for="occasion">Occasion</label>
            <select id="occasion" required value={data.occasion} onChange={(e) => setData(prev => ({...prev, occasion: e.target.value}))}>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input type="submit" value="Make Your reservation" />
          </form>
      </section>
    </>
  )
}

export default ReserveTable