// Create a simple counter with +, - and reset

import { useState } from 'react'

const SimpleCount = () => {

    const [count, setCount] = useState(0)
    const handleIncrement = () => {
        setCount((prev) => prev + 1)
    }
    const handleDecrement = () => {
        setCount((prev) => prev - 1)
    }
    const handleReset = () => {
        setCount(0)
    }

  return (
    <div>
        <h1>Simple Count</h1>
        <h2>
            {count}
        </h2>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement} disabled = {count === 0}>-</button>
        <button onClick={handleReset} disabled = {count === 0}>Reset</button>
    </div>
  )
}

export default SimpleCount