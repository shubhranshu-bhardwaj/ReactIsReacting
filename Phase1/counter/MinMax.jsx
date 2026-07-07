// Create a counter component with min and max value

import { useState } from "react"

const MinMax = () => {

    const [count, setCount] = useState(0)
    const [step, setStep] = useState(1)

    const MIN = 0
    const MAX = 20

    const handleStepChange = (e) => {

        const value = Number(e.target.value)
        if (value < 0) return
        setStep(value)
    }
    const handleIncrement = () => {
        setCount((prev) => Math.min(MAX, prev + step))
    }
    const handleDecrement = () => {
        setCount((prev) => Math.max(MIN, prev - step))
    }
    const handleReset = () => {
        setCount(0)
    }


    return (
        <div>
            <h1>Counter with min max value</h1>
            <h2>
                {count}
            </h2>

            <input
                type="number"
                value={step}
                min='1'
                max='20'
                onChange={handleStepChange}
            />

            <button onClick={handleIncrement} disabled={count === MAX}>+</button>
            <button onClick={handleDecrement} disabled={count === MIN}>-</button>
            <button onClick={handleReset} disabled={count === MIN}>Reset</button>
        </div>
    )
}

export default MinMax