// Create a form with reset option
import { useState } from 'react'

const initialData = {
    name: '',
    email: '',
    password: '',
    age: '',
    gender: '',
    country: '',
    bio: '',
    isStudent: false
}

const ResetForm = () => {

    const [formData, setFormData] = useState(initialData)

    const handleChange = (e) => {
        const { name, type, checked, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const {
            name,
            age,
            email,
            password,
            gender,
            country,
            bio,
        } = formData;

        if (!name || !age || !email || !password || !gender || !country || !bio) {
            return;
        }

        console.log(formData);
        setFormData(initialData)
    }
    const handleReset = () => {
        setFormData(initialData)
    }

    return (
        <div>
            <h3>Different Inputs Form</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    placeholder='Enter name'
                />
                <br /><br />
                <input
                    type="email"
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    placeholder='Enter email'
                />
                <br /><br />
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder='Enter password'
                />
                <br /><br />
                <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    placeholder='Enter age'
                />
                <br /><br />
                <p>Gender</p>
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="Male"
                        checked={formData.gender === 'Male'}
                        onChange={handleChange}
                    />
                    Male
                </label>
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="Female"
                        checked={formData.gender === 'Female'}
                        onChange={handleChange}
                    />
                    Female
                </label>
                <br /><br />
                <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                >
                    <option value="">Select Country</option>
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                    <option value="Canada">Canada</option>
                </select>
                <br /><br />
                <textarea
                    name="bio"
                    value={formData.bio}
                    onChange={handleChange}
                    placeholder='Tell something about you'
                    rows='4'
                    cols='30'
                />
                <br /><br />
                <label>
                    <input
                        type="checkbox"
                        name="isStudent"
                        checked={formData.isStudent}
                        onChange={handleChange}
                    />
                    I am student
                </label>
                <br /><br />
                <button type="submit">Submit</button>
            </form>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}

export default ResetForm