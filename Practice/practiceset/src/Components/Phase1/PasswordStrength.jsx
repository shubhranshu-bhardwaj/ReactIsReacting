/*
Password Strength Checker
Requirements:
Input for password.
Show:
“Weak” if length < 6
“Medium” if length 6–10
“Strong” if length > 10
Text color:
Weak → red
Medium → orange
Strong → green
*/

import React, { useState } from 'react'

const PasswordStrength = () => {

    const [password, setPassword] = useState('')

    const getStrength = () => {
        if (password.length === 0) {
            return {
                label: '',
                color: ''
            }
        }
        if (password.length < 6) {
            return {
                label: 'weak',
                color: 'red'
            }
        }
        if (password.length <= 10) {
            return {
                label: 'medium',
                color: 'orange'
            }
        }

        return {
            label: 'strong',
            color: 'green'
        }

    }

    const strength = getStrength();

    return (
        <div style={{ fontFamily: 'Arial', padding: '20px' }}>
            <h2>Password Strength Checker</h2>
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Enter password'
            />
            <div style={{ marginTop: '10px', color: strength.color, fontWeight: 'bold' }}>
                {strength.label}
            </div>
        </div>
    )
}

export default PasswordStrength