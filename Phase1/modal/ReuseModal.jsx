// Reusable Modal

import { useEffect } from "react"

const ReuseModal = ({ isOpen, onClose, children }) => {

    useEffect(() => {
        if (!isOpen) return
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                onClose()
            }
        }
        window.addEventListener('keydown', handleKeyDown)

        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [isOpen, onClose])

    if (!isOpen) return null

    return (
        <div
            onClick={onClose}
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
                {children}
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    )
}

export default ReuseModal