// Craete a todo with Edit, Delete and Completed

import { useState } from "react"


const EditTodo = () => {

    const [todos, setTodos] = useState([])
    const [item, setItem] = useState('')
    const [editId, setEditId] = useState(null)

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
        setTodos((prev) => prev.filter(item => item.id !== id))
    }
    const handleComplete = (id) => {
        setTodos((prev) =>
            prev.map((todo) => (
                todo.id === id ? {
                    ...todo, completed: !todo.completed
                } : todo
            )))
    }
    const handleEdit = (id) => {
        const todo = todos.find((todo) => todo.id === id)
        setItem(todo.text)
        setEditId(id)
    }
    const handleUpdate = () => {
        const trimmedItem = item.trim()
        if (!trimmedItem) return
        setTodos((prev) =>
            prev.map((todo) => (
                todo.id === editId ? {
                    ...todo, text: trimmedItem
                } : todo
            )))
        setItem('')
        setEditId(null)
    }
    const handleCancel = () => {
        setItem('')
        setEditId(null)
    }

    return (
        <div>
            <h2>Todo with Edit, Delete and Completed</h2>
            <input
                type="text"
                value={item}
                onChange={(e) => setItem(e.target.value)}
                placeholder="Enter todo"
            />
            {
                editId ? (
                    <>
                        <button onClick={handleCancel}>Cancel</button>
                        <button onClick={handleUpdate}>Update</button>
                    </>
                ) : (
                    <button onClick={handleAdd}>Add</button>
                )
            }

            {
                todos.length === 0 ? (
                    <p>Add todo</p>
                ) : (
                    <ul>
                        {
                            todos.map((todo) => (
                                <li key={todo.id}>
                                    <span
                                        style={{
                                            textDecoration: todo.completed ? 'line-through' : 'none'
                                        }}
                                    >
                                        {todo.text}
                                    </span>
                                    <button onClick={() => handleComplete(todo.id)}>
                                        {
                                            todo.completed ? 'Mark Pending' : 'Mark Completed'
                                        }
                                    </button>
                                    <button onClick={() => handleEdit(todo.id)}>Edit</button>
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

export default EditTodo