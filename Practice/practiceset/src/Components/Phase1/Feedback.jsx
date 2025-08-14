/*
Simple Feedback Form
Requirements:
Form with:
Name input
Feedback textarea
Submit button
On submit:
Show an alert with “Thank you, [name], for your feedback!”
Clear the form.
Validation: If name or feedback is empty, show error message in red.
*/

import React, { useState } from 'react'

const Feedback = () => {

    const [name, setName] = useState('')
    const [text, setText] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name.trim() || !text.trim()) {
            setError('Both fields are required');
            return;
        }
        setError('');
        alert(`Thank you, {name} for your feedback`)
        setName('');
        setText('');
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder='Enter your name'
                />
                <br />
                <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder='Enter your feedback'
                ></textarea>
                <br />
                <button type='submit'>Submit</button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </form>
        </>
    )
}

export default Feedback