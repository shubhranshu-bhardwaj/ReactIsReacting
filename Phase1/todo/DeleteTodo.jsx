// Craete a Todo with delete function

import { useState } from "react"


const DeleteTodo = () => {

    const [todos, setTodos] = useState([])
    const [item, setItem] = useState('')

    const handleAdd = () => {
        const trimmedItem = item.trim()
        if (!trimmedItem) return
        setTodos((prev) => [
            ...prev, {
                id: Date.now(),
                text: trimmedItem,
                completed: false
            }
        ])
        setItem('')
    }
    const handleDelete = (id) => {
        const updatedTodos = todos.filter((item) => item.id !== id)
        setTodos(updatedTodos)
    }

    return (
        <div>
            <h2>
                Todo with Delete
            </h2>
            <input
                type="text"
                value={item}
                onChange={(e) => setItem(e.target.value)}
                placeholder="Enter todo.."
            />
            <button onClick={handleAdd}>Add</button>
            {
                todos.length === 0 ? (
                    <p>Add todo</p>
                ) : (
                    <ul>
                        {
                            todos.map((todo) => (
                                <li key={todo.id}>
                                    {todo.text}
                                    <button onClick={() => handleDelete(todo.id)}>Delete</button>
                                </li>
                            ))
                        }
                    </ul>
                )
            }
        </div>
    )
}

export default DeleteTodo