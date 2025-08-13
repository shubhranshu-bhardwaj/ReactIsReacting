/*
Product Stock Status
Requirements:

Display a list of products (name + stock count).

If stock > 0 → show "🟢 In Stock".

If stock === 0 → show "🔴 Out of Stock".
*/

import React from 'react'

const ProductStock = () => {

    const products = [
        {
            id: 1,
            name: "Wireless Mouse",
            stock: 25
        },
        {
            id: 2,
            name: "Mechanical Keyboard",
            stock: 0
        },
        {
            id: 3,
            name: "HD Monitor",
            stock: 8
        },
        {
            id: 4,
            name: "USB-C Cable",
            stock: 40
        },
        {
            id: 5,
            name: "Laptop Stand",
            stock: 0
        },
        {
            id: 6,
            name: "Bluetooth Speaker",
            stock: 7
        },
        {
            id: 7,
            name: "Webcam",
            stock: 18
        },
        {
            id: 8,
            name: "External Hard Drive",
            stock: 10
        },
        {
            id: 9,
            name: "Smartphone Charger",
            stock: 0
        },
        {
            id: 10,
            name: "Gaming Headset",
            stock: 5
        }
    ];


    return (
        <>
            <h2>Product List</h2>
            <ul>
                {
                    products.map((product) => (
                        <li key={product.id}>{product.name} - {product.stock > 0 ? "🟢 In Stock" : "🔴 Out of Stock"}</li>
                    ))
                }
            </ul>
        </>
    )
}

export default ProductStock