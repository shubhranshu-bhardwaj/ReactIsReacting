// Create a form that accept multiple inputs
import { useState } from 'react'

const MultipleInputs = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const { name, email, password } = formData
        if (!name || !email || !password) return
        console.log(formData)
        setFormData({
            name: '',
            email: '',
            password: ''
        })
    }

    return (
        <div>
            <h3>Multiple Inputs Form</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    placeholder='Enter your name'
                />
                <input
                    type="email"
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    placeholder='Enter email'
                />
                <input
                    type="password"
                    name='password'
                    value={formData.password}
                    onChange={handleChange}
                    placeholder='Enter password'
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default MultipleInputs