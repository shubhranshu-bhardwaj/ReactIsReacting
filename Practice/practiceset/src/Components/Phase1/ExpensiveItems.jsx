/*
Highlight Expensive Items
Requirements:

Display a list of products with prices.

Highlight products with price > 1000 in bold + red.

Otherwise, show them in normal black text.
*/

import React from 'react'

const ExpensiveItems = () => {

    const items = [
        { id: 1, name: "Wireless Headphones", price: 1200 },
        { id: 2, name: "Smartwatch", price: 1300 },
        { id: 3, name: "Mechanical Keyboard", price: 900 },
        { id: 4, name: "4K Monitor", price: 1800 },
        { id: 5, name: "USB-C Hub", price: 800 }
    ]

    return (
        <>
        <ul>
            {
                items.map((item) =>(
                    <li key={item.id}
                    style={{
                        color: item.price > 1000 ? "red" : "black",
                        fontWeight: item.price > 1000 ? "bold" : "normal"
                    }}
                    >
                        {item.name} - ₹{item.price}
                    </li>
                ))
            }
        </ul>
        </>
    )
}

export default ExpensiveItems