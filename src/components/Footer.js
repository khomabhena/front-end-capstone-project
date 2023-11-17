import React from 'react'

const Footer = () => {
  return (
    <footer id='footer'>
        <section>
            <img src='../assets/images/logo-vertical-green.png' alt='footer' />
        </section>
        <section>
            <h3>Doormat Navigation</h3>
            <ul>
                <li><a href='#home'>Home</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#menu'>Menu</a></li>
                <li><a href='#reservation'>Reservations</a></li>
                <li><a href='#order-online'>Order Online</a></li>
                <li><a href='#login'>Login</a></li>
            </ul>
        </section>
        <section>
            <h3>Contact</h3>
            <ul>
                <li>Address</li>
                <li>Phone Number</li>
                <li>Email</li>
            </ul>
        </section>
        <section>
            <h3>Social Media Links</h3>
            <ul>
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Instagram</li>
            </ul>
        </section>
    </footer>
  )
}

export default Footer