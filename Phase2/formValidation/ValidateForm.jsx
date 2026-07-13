// Create a form with validation
import { useState } from 'react'

const initialData = {
    name: '',
    email: '',
    password: ''
}

const ValidateForm = () => {

    const [formData, setFormData] = useState(initialData)
    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }
    const validate = () => {
        const newErrors = {}

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required'
        }
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required'
        }
        if (!formData.password.trim()) {
            newErrors.password = 'Password is required'
        }

        return newErrors
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const validationError = validate()
        if (Object.keys(validationError).length > 0) {
            setErrors(validationError)
            return
        }
        setErrors({})
        setFormData(initialData)
    }

    return (
        <div>
            <h3>Validate Form</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <br />
                    <input
                        type="text"
                        name='name'
                        value={formData.name}
                        onChange={handleChange}
                        placeholder='Enter name'
                    />
                    {
                        errors.name && (
                            <p style={{ color: 'red' }}>Name is required</p>
                        )
                    }
                </div>
                <div>
                    <label>Email</label>
                    <br />
                    <input
                        type="email"
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                        placeholder='Enter email'
                    />
                    {
                        errors.email && (
                            <p style={{ color: 'red' }}>Email is required</p>
                        )
                    }
                </div>
                <div>
                    <label>Password</label>
                    <br />
                    <input
                        type="password"
                        name='password'
                        value={formData.password}
                        onChange={handleChange}
                        placeholder='Enter password'
                    />
                    {
                        errors.password && (
                            <p style={{ color: 'red' }}>Password is required</p>
                        )
                    }
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default ValidateForm