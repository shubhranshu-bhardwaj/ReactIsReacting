// Create a todo with delete and completed function

import { useState } from "react"

const CompletedTodo = () => {

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
    const handleComplete = (id) => {
        setTodos((prev) =>
            prev.map((todo) => (
                todo.id === id ?
                    { ...todo, completed: !todo.completed }
                    : todo
            ))
        )
    }

    return (
        <div>
            <h2>Todos with completed</h2>
            <input
                type="text"
                value={item}
                onChange={(e) => setItem(e.target.value)}
                placeholder="Enter todo"
            />
            <button onClick={handleAdd}>Add</button>
            {
                todos.length === 0 ? (
                    <p>Please add todo</p>
                ) : (
                    <ul>
                        {
                            todos.map((todo) => (
                                <li key={todo.id}>
                                    <span style={{
                                        textDecoration: todo.completed
                                            ? "line-through"
                                            : "none",
                                    }}>
                                        {todo.text}
                                    </span>

                                    <button onClick={() => handleDelete(todo.id)}>Delete</button>
                                    <button onClick={() => handleComplete(todo.id)}>
                                        {
                                            todo.completed ? 'Mark Pending' : 'Mark Completed'
                                        }
                                    </button>
                                </li>
                            ))
                        }
                    </ul>
                )
            }
        </div>
    )
}

export default CompletedTodo