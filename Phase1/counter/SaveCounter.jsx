// Create a counter component that Persist Counter with localStorage

import { useEffect, useState } from "react"

const SaveCounter = () => {

    const [count, setCount] = useState(() => {
        const savedCount = localStorage.getItem('counter')
        return savedCount !== null ? Number(savedCount) : 0
    })

    useEffect(() => {
        localStorage.setItem('counter', count)
    }, [count])

    const handleIncrement = () => {
        setCount((prev) => prev + 1)
    }
    const handleDecrement = () => {
        setCount((prev) => Math.max(0, prev - 1))
    }
    const handleReset = () => {
        setCount(0)
    }

    return (
        <div>
            <h2>Counter with local storage</h2>
            <h3>
                {count}
            </h3>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}

export default SaveCounter