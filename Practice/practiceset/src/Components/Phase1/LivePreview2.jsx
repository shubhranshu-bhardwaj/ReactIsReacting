/*
Live Form Preview
Requirements:

Form with: Name, Email, Message

Live preview box shows exactly what user has typed

Reset button clears both form and preview
*/

import React, { useState } from 'react'

const LivePreview2 = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleReset = () => {
        setName('');
        setEmail('');
        setMessage('')
    }

    return (
        <>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='Enter name'
            />
            <br />
            <input type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Enter email'
            />
            <br />
            <textarea name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder='Enter message'
            ></textarea>
            <br />
            <button onClick={handleReset}>Reset</button>
            <h3>Preview:</h3>
            <p><strong>Name:</strong> {name}</p>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Message:</strong> {message}</p>
        </>
    )
}

export default LivePreview2