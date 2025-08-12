/*
Live Form Preview
Requirements:

Form with: Name, Email, Message

Live preview box shows exactly what user has typed

Reset button clears both form and preview
*/

import React, { useState } from 'react'

const LivePreview = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    const handleReset = () => {
        setFormData({
            name: "",
            email: "",
            message: "",
        })
    }

    return (
        <>
            <input
                type="text"
                name='name'
                placeholder='Enter name'
                value={formData.name}
                onChange={handleChange}
            />
            <br />
            <input
                type="email"
                name="email"
                placeholder='Enter email'
                value={formData.email}
                onChange={handleChange}
            />
            <br />
            <textarea
                name="message"
                placeholder='Enetr message'
                value={formData.message}
                onChange={handleChange}
            >
            </textarea>
            <br />
            <button onClick={handleReset}>Reset</button>
            <br />
            <h3>Preview:</h3>
            <p><strong>Name:</strong> {formData.name}</p>
            <p><strong>Email:</strong> {formData.email}</p>
            <p><strong>Message:</strong> {formData.message}</p>
        </>
    )
}

export default LivePreview