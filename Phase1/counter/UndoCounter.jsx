// Create a Counter component with undo method

import { useState } from "react"

const UndoCounter = () => {

    const [count, setCount] = useState(0)
    const [undo, setUndo] = useState([])

    const handleIncrement = () => {
        setUndo((prev) => [...prev, count])
        setCount((prev) => prev + 1)
    }

    const handleDecrement = () => {
        setUndo((prev) => [...prev, count])
        setCount((prev) => prev - 1)
    }

    const handleUndo = () => {
        if (undo.length === 0) return
        const previousVal = undo[undo.length - 1]
        setCount(previousVal)
        setUndo((prev) => prev.slice(0, -1))
    }

    return (
        <div>
            <h2>Counter with Undo</h2>
            <h3>
                {count}
            </h3>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement} disabled={count === 0}>-</button>
            <button onClick={handleUndo} disabled={undo.length === 0}>Undo</button>
        </div>
    )
}

export default UndoCounter