/*
Counter with Adjustable Step
Requirements:

Show current count

Input to set step size (default 1)

Buttons to + and - count using step size

Button to Reset count

Hints:

count and step are separate state variables

Use Number() to ensure step is numeric
*/

import React, { useState } from 'react'

const Counter = () => {

    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);

    const handleStep = (e) => {
        setStep(Number(e.target.value));
    }

    const increment = () => {
        setCount(prevCount => prevCount + step);
    }

    const decrement = () => {
        setCount(prevCount => prevCount - step);
    }

    const reset = () => {
        setCount(0);
        setStep(1);
    }

    return (
        <>
            <h2>Count is: {count}</h2>
            <input
                type="number"
                value={step}
                min={1}
                onChange={handleStep}
                placeholder='Enter step'
            />

            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </>
    )
}

export default Counter