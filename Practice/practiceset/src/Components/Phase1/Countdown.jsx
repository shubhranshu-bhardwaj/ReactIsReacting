/*
Countdown Timer
Requirements:
Input field to set starting seconds.
When user clicks "Start", countdown begins.
Stop when it reaches 0.
Clean up interval on unmount.
Hints:
Use a state for time left.
Decrease value every second until 0.
*/

import React, { useState, useEffect } from 'react';

const Countdown = () => {
    const [inputSeconds, setInputSeconds] = useState('');
    const [timeLeft, setTimeLeft] = useState(0);
    const [timerId, setTimerId] = useState(null);

    const handleStart = () => {
        const seconds = parseInt(inputSeconds, 10);
        if (isNaN(seconds) || seconds <= 0) return;

        setTimeLeft(seconds);

        // Clear any existing interval before starting new one
        if (timerId) {
            clearInterval(timerId);
        }

        const timer = setInterval(() => {
            setTimeLeft(prevTime => {
                if (prevTime <= 1) {
                    clearInterval(timer);
                    setTimerId(null); // clear the state
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);

        setTimerId(timer);
    };

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            if (timerId) {
                clearInterval(timerId);
            }
        };
    }, [timerId]);

    return (
        <div>
            <h2>Countdown Timer</h2>
            <input
                type="number"
                value={inputSeconds}
                onChange={(e) => setInputSeconds(e.target.value)}
                placeholder="Enter seconds"
            />
            <button onClick={handleStart}>Start</button>
            <div>
                <h3>Time Left: {timeLeft}s</h3>
            </div>
        </div>
    );
};

export default Countdown;
