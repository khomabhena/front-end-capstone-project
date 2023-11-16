import React from 'react'
import Header from './Header'

const ReserveTable = () => {
  return (
    <>
      <Header />
      <section id='reserve-table'>
          <h1>Reserve a Table</h1>
          <form>          <label for="res-date">Choose date</label>
            <input type="date" id="res-date" />
            <label for="res-time">Choose time</label>
            <select id="res-time ">
                <option>17:00</option>
                <option>18:00</option>
                <option>19:00</option>
                <option>20:00</option>
                <option>21:00</option>
                <option>22:00</option>
            </select>
            <label for="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" />
            <label for="occasion">Occasion</label>
            <select id="occasion">
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