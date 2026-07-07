// Create a counter with redo and undo

import { useState } from "react"

const RedoCounter = () => {

    const [count, setCount] = useState(0)
    const [undo, setUndo] = useState([])
    const [redo, setRedo] = useState([])

    const handleIncrement = () => {
        setUndo((prev) => [...prev, count])
        setRedo([])
        setCount((prev) => prev + 1)
    }
    const handleDecrement = () => {
        setUndo((prev) => [...prev, count])
        setRedo([])
        setCount((prev) => prev - 1)
    }
    const handleUndo = () => {
        if (undo.length === 0) return
        const previousVal = undo[undo.length - 1]
        setRedo((prev) => [...prev, count])
        setCount(previousVal)
        setUndo((prev) => prev.slice(0, -1))
    }
    const handleRedo = () => {
        if (redo.length === 0) return
        const previousVal = redo[redo.length - 1]
        setUndo((prev) => [...prev, count]);
        setCount(previousVal)
        setRedo((prev) => prev.slice(0, -1))
    }

    return (
        <div>
            <h2>Counter with Undo & Redo</h2>
            <h3>
                {count}
            </h3>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement} disabled={count === 0}>-</button>
            <button onClick={handleUndo} disabled={undo.length === 0}>Undo</button>
            <button onClick={handleRedo} disabled={redo.length === 0}>Redo</button>
        </div>
    )
}

export default RedoCounter