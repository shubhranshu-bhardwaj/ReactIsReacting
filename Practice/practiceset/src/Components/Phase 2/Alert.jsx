/*
Alert Component with Children
Requirement
Show an alert box with props.children as message.
Accept a type prop → "success", "error", "warning" for different styles.
*/

import React from 'react'

const Alert = ({ type, children }) => {

    const styles = {
        success: { background: "#d4edda", color: "#155724", border: "1px solid #c3e6cb" },
        error: { background: "#f8d7da", color: "#721c24", border: "1px solid #f5c6cb" },
        warning: { background: "#fff3cd", color: "#856404", border: "1px solid #ffeeba" }
    };


    return (
        <div style={{
            padding: "10px",
            margin: "10px 0",
            borderRadius: "5px",
            ...styles[type]
        }}>
            {children}
        </div>
    )
}

export default Alert