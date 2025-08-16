/*
Window Width Tracker
Requirements:
Show current window width.
When the window is resized, update the value in real time.
Clean up the event listener when component unmounts.
*/

import React, { useEffect, useState } from 'react'

const WindowWidth = () => {

    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {

        const handleSize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleSize);

        // Cleanup event listener on unmount
        return () => {
            window.removeEventListener('resize', handleSize);
        };

    }, [])

    return (
        <div style={{ fontSize: '1.5rem', padding: '1rem' }}>
            Current window width: {width}px
        </div>
    )
}

export default WindowWidth