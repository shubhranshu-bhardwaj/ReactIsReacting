import { useState } from 'react'

const BasicModal = () => {

    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <div>
            <h2>Basic Modal</h2>
            <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
            {
                isModalOpen && (
                    <div
                        style={{
                            position: 'fixed',
                            inset: '0',
                            backgroundColor: 'black',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <div
                            style={{
                                backgroundColor: 'white',
                                padding: '20px',
                                borderRadius: '8px',
                                width: '300px'
                            }}
                        >
                            <h3>Modal</h3>
                            <h4>Basic Modal</h4>
                            <button onClick={() => setIsModalOpen(false)}>Close</button>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default BasicModal