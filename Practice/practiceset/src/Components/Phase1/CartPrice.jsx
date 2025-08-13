/*
Cart with Conditional Total
Requirements:

Render a list of cart items (name + price).

Show total price only if the cart is not empty.

If cart is empty → Show "Your cart is empty 🛒".

Bonus: Format total as $xx.xx.
*/

import React from 'react'

const CartPrice = () => {

     const cartItems = [
    { name: 'Apple', price: 1.5 },
    { name: 'Banana', price: 0.99 },
    { name: 'Orange', price: 1.25 },
  ];

  const total = cartItems.reduce((sum, item) => sum + item.price,0).toFixed(2)

  return (
    <>
    <h2>Shopping Cart</h2>
    {
        cartItems.length === 0 ? (
             <p>Your cart is empty 🛒</p>
        ) :
        (
            <>
            <ul>
                {
                    cartItems.map((item, index) =>(
                        <li key={index}>{item.name} - ${item.price.toFixed(2)}</li>
                    ))
                }
            </ul>
            <h3>Total: ${total}</h3>
            </>
        )
        
    }
    </>
  )
}

export default CartPrice