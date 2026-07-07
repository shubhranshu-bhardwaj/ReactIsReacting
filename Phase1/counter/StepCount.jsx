// Craete a counter with user step value

import { useState } from "react"


const StepCount = () => {

    const [step, setStep] = useState(1)
    const [count, setCount] = useState(0)

    const handleStepChange = (e) => {
        const value = Number(e.target.value);
        if(value < 0) return
        setStep(value)
    }

    const handleIncrement = () => {
        setCount((prev) => prev + step)
    }

    const handleDecrement = () => {
        setCount((prev) => Math.max(0, prev - step))
    }

    const handleReset = () => {
        setCount(0)
    }

    return (
        <div>
            <h1>Step Counter</h1>
            <h2>
                {count}
            </h2>

            <input
                type="number"
                min='0'
                value={step}
                onChange={handleStepChange}
            />
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement} disabled = {count === 0}>-</button>
            <button onClick={handleReset} disabled = {count === 0}>Reset</button>
        </div>
    )
}

export default StepCount