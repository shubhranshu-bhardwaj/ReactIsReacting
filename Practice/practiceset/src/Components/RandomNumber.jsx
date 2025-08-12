/*
Random Number Generator
Requirements:

Input for minimum and maximum

Button: Generate

Show random number between min & max (inclusive)
*/

import React, { useState } from 'react'

const RandomNumber = () => {
    const [minimum, setMinimum] = useState('')
    const [maximum, setMaximum] = useState('')
    const [result, setResult] = useState(null)

    const generateRandom = () => {
        const minNum = Number(minimum);
        const maxNum = Number(maximum);

        if (isNaN(minNum) || isNaN(maxNum) || minNum > maxNum) {
            alert('Please enter valid numbers (min ≤ max)');
            return;
        }

        const random = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
        setResult(random);
    };

    const handleReset = () => {
        setMinimum('')
        setMaximum('')
        setResult(null)
    }


    return (
        <div style={{ padding: '20px', fontFamily: 'Arial' }}>
            <h2>Random Number Generator</h2>
            <input
                type="number"
                value={minimum}
                onChange={(e) => setMinimum(e.target.value)}
                min={1}
                placeholder='Enter minimum number'
            />
            <input
                type="number"
                value={maximum}
                onChange={(e) => setMaximum(e.target.value)}
                min={1}
                placeholder='Enter maximum value'
            />
            <button onClick={generateRandom}>Generate</button>
            <button onClick={handleReset}>Reset</button>
            {result !== null && (
                <p style={{ marginTop: '15px' }}>
                    🎲 Random number: <strong>{result}</strong>
                </p>
            )}
        </div>
    )
}

export default RandomNumber