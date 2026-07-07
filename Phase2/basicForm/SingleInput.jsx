// Create a controled input for form
import { useState } from 'react'

const SingleInput = () => {

    const [name, setName] = useState('')

    const handleChange = (e) => {
        setName(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (name.trim() === '') return
        console.log(name)
        setName('')
    }

    return (
        <div>
            <h3>Basic Form Starting</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={name}
                    onChange={handleChange}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default SingleInput