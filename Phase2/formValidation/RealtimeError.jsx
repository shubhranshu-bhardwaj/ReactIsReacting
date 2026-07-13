// Create a form with real time validation
import { useState } from 'react'

const initialData = {
    name: '',
    email: '',
    password: ''
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const RealtimeError = () => {

    const [formData, setFormData] = useState(initialData)
    const [errors, setErrors] = useState({})

    const validate = (data, fieldName = null) => {
        const newErrors = {}

        if (!fieldName || fieldName === "name") {
            if (!data.name.trim()) {
                newErrors.name = "Name is required";
            }
        }

        if (!fieldName || fieldName === "email") {
            if (!data.email.trim()) {
                newErrors.email = "Email is required";
            } else if (!EMAIL_REGEX.test(data.email)) {
                newErrors.email = "Invalid email";
            }
        }

        if (!fieldName || fieldName === "password") {
            if (!data.password.trim()) {
                newErrors.password = "Password is required";
            } else if (data.password.length < 8) {
                newErrors.password = "Password must be at least 8 characters";
            } else if (!/[A-Z]/.test(data.password)) {
                newErrors.password = "Password must contain an uppercase letter";
            } else if (!/[0-9]/.test(data.password)) {
                newErrors.password = "Password must contain a number";
            } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(data.password)) {
                newErrors.password = "Password must contain a special character";
            }
        }

        return newErrors;
    }
    const handleChange = (e) => {
        const { name, value } = e.target
        const updatedFormData = {
            ...formData,
            [name]: value
        }
        setFormData(updatedFormData)
        setErrors((prev) => {
            const newErrors = { ...prev };

            delete newErrors[name];

            return {
                ...newErrors,
                ...validate(updatedFormData, name),
            };
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors = validate(formData);

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setErrors({});
        setFormData(initialData);
    };

    return (
        <div>
            <h3>Real time validation</h3>
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
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default RealtimeError