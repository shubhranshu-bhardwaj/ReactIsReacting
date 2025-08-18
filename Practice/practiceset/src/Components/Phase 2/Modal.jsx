/*
Modal Component
Create a Modal component that takes title, children, and a close button.
Show some content inside the modal.
*/

import React from 'react'


const modalOverlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 999,
};

const modalStyle = {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    minWidth: '300px',
    maxWidth: '500px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
};

const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
};

const closeButtonStyle = {
    background: 'transparent',
    border: 'none',
    fontSize: '24px',
    cursor: 'pointer',
};

const contentStyle = {
    marginTop: '10px',
};

const Modal = ({ title, children, onClose }) => {

    return (
        <div style={modalOverlayStyle}>
            <div style={modalStyle}>
                <div style={headerStyle}>
                    <h2>{title}</h2>
                    <button onClick={onClose} style={closeButtonStyle}>Close Modal</button>
                </div>
                <div style={contentStyle}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Modal