import React, { useState } from 'react'
import Modal from './Modal'

const ModalProp = () => {

    const [showModal, setShowModal] = useState(false)


    return (
        <div style={{ padding: '20px' }}>
            <h2>Modal Component</h2>
            <button onClick={() => setShowModal(true)}>Open Modal</button>

            {
                showModal && (
                    <Modal
                        title='Welcome'
                        onClose={() => setShowModal(false)}
                    >
                        <p>This is a modal with inline styles only.</p>
                        <p>You can put anything you want here.</p>

                    </Modal>
                )
            }
        </div>
    )
}

export default ModalProp