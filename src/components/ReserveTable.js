import React from 'react'
import Header from './Header'

const ReserveTable = () => {
  return (
    <>
      <Header />
      <section id='reserve-table'>
          <h1>Reserve a Table</h1>
          <form>
              <label htmlFor='fullname'>Full Name</label>
              <input id='fullname' type='text' name='fullname' />
              <label htmlFor='date'>Date</label>
              <input id='date' type='date' name='date' />
              <label htmlFor='time'>Time</label>
              <input id='time' type='time' name='time' />
              <label htmlFor='email'>Email</label>
              <input id='email' type='email' name='email' />
              <input type='button' value='Submit' name='Submit' />
          </form>
      </section>
    </>
  )
}

export default ReserveTable