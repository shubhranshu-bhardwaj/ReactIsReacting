/*
Favorite Color Picker
Requirements:

Dropdown list of colors (red, green, blue, yellow)

Show a box whose background is the selected color

Label changes dynamically: "Your favorite color is <color>"
*/

import React, { useState } from 'react'

const ColorPicker = () => {

    const [color, setColor] = useState('red');

    const handleChange = (e) => {
        setColor(e.target.value);
    }

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial' }}>
            <h2>Favorite Color Picker</h2>

            <select value={color} onChange={handleChange}>
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="yellow">Yellow</option>
            </select>

            <div
                style={{
                    marginTop: '20px',
                    width: '150px',
                    height: '150px',
                    backgroundColor: color,
                    border: '2px solid #000'
                }}
            ></div>

            <p style={{ marginTop: '10px' }}>
                Your favorite color is <strong>{color}</strong>
            </p>
        </div>
    )
}

export default ColorPicker