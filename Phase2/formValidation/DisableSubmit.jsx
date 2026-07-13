// Create a form where submit disabled untill valid form
import { useState } from 'react'

const initialData = {
    name: '',
    email: '',
    password: ''
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PASSWORD_REGEX = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;

const DisableSubmit = () => {

    const [formData, setFormData] = useState(initialData)
    const [errors, setErrors] = useState({})

    const validate = (data, fieldName = null) => {
        const newErrors = {}

        if (!fieldName || fieldName === 'name') {
            if (!data.name.trim()) {
                newErrors.name = 'Name is required'
            }
        }
        if (!fieldName || fieldName === 'email') {
            if (!data.email.trim()) {
                newErrors.email = 'Email is required'
            }
            else if (!EMAIL_REGEX.test(data.email)) {
                newErrors.email = 'Invalid email'
            }
        }
        if (!fieldName || fieldName === 'password') {
            if (!data.password.trim()) {
                newErrors.password = "Password is required";
            } else if (!PASSWORD_REGEX.test(data.password)) {
                newErrors.password =
                    "Password must be 8+ characters and include an uppercase letter, number, and special character.";
            }
        }
        return newErrors
    }
    const handleChange = (e) => {
        const { name, value } = e.target

        const updatedFormData = {
            ...formData,
            [name]: value
        }
        setFormData(updatedFormData)

        setErrors((prev) => {
            const newErrors = { ...prev }
            delete newErrors[name]
            return {
                ...newErrors,
                ...validate(updatedFormData, name)
            }
        })
    }
    const isValid = () => {
        return Object.keys(validate(formData)).length === 0
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setErrors({})
        setFormData(initialData)
    }

    return (
        <div>
            <h3>Disable Submit</h3>
            <form onSubmit={handleSubmit} noValidate>
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
                            <p style={{ color: 'red' }}>
                                {errors.name}
                            </p>
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
                            <p style={{ color: 'red' }}>
                                {errors.email}
                            </p>
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
                            <p style={{ color: 'red' }}>
                                {errors.password}
                            </p>
                        )
                    }
                </div>
                <button
                    type="submit"
                    disabled={!isValid()}
                    style={{
                        cursor: isValid() ? 'pointer' : 'not-allowed'
                    }}
                >
                    Submit
                </button>
            </form>
        </div>
    )
}

export default DisableSubmit