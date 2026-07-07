// Create a Modal that will close on clik of outside of Modal

import { useState } from "react"

const OutsideClose = () => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div>
            <h2>Close Modal on outside click</h2>
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
                            <h2>CLick outside to close</h2>
                            <h4>Else click on close button to close</h4>
                            <button onClick={() => setIsOpen(false)}>CLose</button>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default OutsideClose