import React from 'react'
import Button from './Button'

const Specials = () => {
    const arr = [1, 2, 3]
  return (
    <section id='specials'>
        <section>
            <h2>Specials</h2>
            <Button>ONLINE MENU</Button>
        </section>
        <article>
            {
                arr.map(item => (
                    <section>
                        <img src={require('../images/restauranfood.jpg')} width={250} height={200} alt='menu item' />
                        <section>
                            <h3>Greek Salad</h3>
                            <h3>$12.99</h3>
                        </section>
                        <p>Et do ad irure cupidatat culpa magna in adipisicing consectetur aute. Excepteur ea do nulla laboris duis consectetur laborum ea aliqua.</p>
                        <section>
                            <h4>Order a delivery</h4>
                            <img src={require('../images/delivery-icon-removebg-preview.png')} width={'auto'} height={25} alt='delivery icon' />
                        </section>
                    </section>
                ))
            }
        </article>
    </section>
  )
}

export default Specials