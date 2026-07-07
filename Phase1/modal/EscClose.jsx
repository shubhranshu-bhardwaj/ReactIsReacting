// Create a Modal that will close on outside click, close button and Esc key

import { useEffect, useState } from "react"

const EscClose = () => {

    const [isOpen, setIsOpen] = useState(false)
    useEffect(() => {
        if (!isOpen) return
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                setIsOpen(false)
            }
        }
        window.addEventListener('keydown', handleKeyDown)

        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [isOpen])

    return (
        <div>
            <h2>Modal with Esc close</h2>
            <button onClick={() => setIsOpen(true)}>Open Modal</button>
            {
                isOpen && (
                    <div
                        onClick={() => setIsOpen(false)}
                        style={{
                            position: 'fixed',
                            inset: '0',
                            backgroundColor: 'rgba(0,0,0,0.5)',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <div
                            onClick={(e) => e.stopPropagation()}
                            style={{
                                backgroundColor: 'white',
                                padding: '20px',
                                borderRadius: '8px',
                                width: '300px'
                            }}
                        >
                            <h2>Click Esc to close Modal</h2>
                            <h4>Else click close button to close Modal</h4>
                            <button onClick={() => setIsOpen(false)}>Close</button>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default EscClose