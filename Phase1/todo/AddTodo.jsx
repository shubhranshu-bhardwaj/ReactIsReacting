import { useState } from "react"

const AddTodo = () => {

    const [todos, setTodos] = useState([])
    const [item, setItem] = useState('')

    const handleAdd = () => {
        if (item.trim() === '') return
        setTodos((prev) => [...prev, item])
        setItem('')
    }

    return (
        <div>
            <h2>Add Todo</h2>
            <input
                type="text"
                value={item}
                onChange={(e) => setItem(e.target.value)}
                placeholder="Enter todo"
            />
            <button onClick={handleAdd} disabled = {item.trim() === ''}>Add</button>
            {
                todos.length === 0 ? (
                    <p>Please add todo</p>
                ) : (
                    <ul>
                        {
                            todos.map((todo, index) => (
                                <li key={index}>
                                    {todo}
                                </li>
                            ))
                        }
                    </ul>
                )
            }
        </div>
    )
}

export default AddTodo