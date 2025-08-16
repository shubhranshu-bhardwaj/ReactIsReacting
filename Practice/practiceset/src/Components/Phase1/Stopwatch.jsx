/*
Auto Counter with Cleanup
Requirements:
Show a counter that increases by 1 every second automatically.
Add a "Stop" button to stop the counter.
Clear the interval on unmount.
Hints:
Use setInterval inside useEffect.
Store interval id and clear it when needed
*/

import React, { useEffect, useState } from 'react'

const Stopwatch = () => {

    const [count, setCount] = useState(0)

    const [intervalId, setIntervalId] = useState(null);

    useEffect(() => {
        const id = setInterval(() => {
            setCount(prev => prev + 1);
        }, 1000);
        setIntervalId(id);
        return () => clearInterval(id);
    }, []);

    const handleStop = () => {
        clearInterval(intervalId);
    };

    return (
        <>
            <h2>Counter: {count}</h2>
            <button onClick={handleStop}>Stop</button>
        </>
    )
}

export default Stopwatch