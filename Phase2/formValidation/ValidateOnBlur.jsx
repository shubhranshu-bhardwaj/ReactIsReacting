// Create a form that will validate on Blur
import { useState } from 'react'

const initialData = {
    name: '',
    email: '',
    password: ''
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// const PASSWORD_REGEX = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/; // For future

const ValidateOnBlur = () => {
    const [formData, setFormData] = useState(initialData)
    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }
    const validate = (fieldName) => {
        const newErrors = {};

        if (!fieldName || fieldName === "name") {
            if (!formData.name.trim()) {
                newErrors.name = "Name is required";
            }
        }

        if (!fieldName || fieldName === "email") {
            if (!formData.email.trim()) {
                newErrors.email = "Email is required";
            } else if (!EMAIL_REGEX.test(formData.email)) {
                newErrors.email = "Invalid email";
            }
        }

        if (!fieldName || fieldName === "password") {
            if (!formData.password.trim()) {
                newErrors.password = "Password is required";
            } else if (formData.password.length < 8) {
                newErrors.password = "Password must be at least 8 characters";
            } else if (!/[A-Z]/.test(formData.password)) {
                newErrors.password = "Password must contain an uppercase letter";
            } else if (!/[0-9]/.test(formData.password)) {
                newErrors.password = "Password must contain a number";
            } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(formData.password)) {
                newErrors.password = "Password must contain a special character";
            }
        }

        return newErrors;
    };
    const handleBlur = (e) => {
        const { name } = e.target;

        setErrors(prev => {
            const newErrors = { ...prev };
            delete newErrors[name];

            return {
                ...newErrors,
                ...validate(name),
            };
        });
    };
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
            <h3>Validate on blur</h3>
            <form onSubmit={handleSubmit} noValidate>
                <div>
                    <label>Name</label>
                    <br />
                    <input
                        type="text"
                        name='name'
                        value={formData.name}
                        onBlur={handleBlur}
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
                        onBlur={handleBlur}
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
                        onBlur={handleBlur}
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
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default ValidateOnBlur