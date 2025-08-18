/*
Reusable Card Component
Requirement
Create a Card component
Should wrap any content we pass using props.children
*/

import React from 'react'

const Card = ({ children }) => {
    return (
        <div style={{
            border: "1px solid #ccc",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "2px 2px 6px rgba(0,0,0,0.1)",
            margin: "10px"
        }}>
            {children}
        </div>
    )
}

export default Card