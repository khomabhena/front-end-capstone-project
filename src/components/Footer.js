import React from 'react'

const Footer = () => {
  return (
    <footer id='footer'>
        <section>
            <img src='../assets/images/logo-vertical-green.png' />
        </section>
        <section>
            <h3>Doormat Navigation</h3>
            <ul>
                <li><a href=''>Home</a></li>
                <li><a href=''>About</a></li>
                <li><a href=''>Menu</a></li>
                <li><a href=''>Reservations</a></li>
                <li><a href=''>Order Online</a></li>
                <li><a href=''>Login</a></li>
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