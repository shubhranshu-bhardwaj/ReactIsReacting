// Create a todo with Add, Edit, Delete, Completed, Search and Filter and store in local

import { useEffect, useState } from "react"

const StoreTodo = () => {

    const [todos, setTodos] = useState(() => {
        const savedTodos = localStorage.getItem('todos')
        return savedTodos ? JSON.parse(savedTodos) : []
    })
    const [item, setItem] = useState('')
    const [editId, setEditId] = useState(null)
    const [search, setSearch] = useState('')
    const [filter, setFilter] = useState('all')

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
        setTodos((prev) => prev.filter((todo) => todo.id !== id))
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
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])
    const filteredTodos = todos.filter((todo) => {
        const matchesSearch = todo.text.toLowerCase().includes(search.toLowerCase())

        const matchesFilter = filter === 'all' || (filter === 'completed' && todo.completed)
            || (filter === 'pending' && !todo.completed)

        return matchesSearch && matchesFilter
    })

    return (
        <div>
            <h2>Todo with local</h2>
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
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search..."
            />
            <button onClick={() => setFilter('all')}>All</button>
            <button onClick={() => setFilter('completed')}>Completed</button>
            <button onClick={() => setFilter('pending')}>Pending</button>
            {
                filteredTodos.length === 0 ? (
                    <p>Add todo</p>
                ) : (
                    <ul>
                        {
                            filteredTodos.map((todo) => (
                                <li key={todo.id}>
                                    <span
                                        style={{
                                            textDecoration: todo.completed ? 'line-through' : 'none'
                                        }}
                                    >
                                        {todo.text}
                                    </span>
                                    <button onClick={() => handleComplete(todo.id)} disabled={todo.id === editId}>
                                        {
                                            todo.completed ? 'Mark Pending' : 'Mark Completed'
                                        }
                                    </button>
                                    <button onClick={() => handleEdit(todo.id)} disabled={todo.id === editId}>Edit</button>
                                    <button onClick={() => handleDelete(todo.id)} disabled={todo.id === editId}>Delete</button>
                                </li>
                            ))
                        }
                    </ul>
                )
            }
        </div>
    )
}

export default StoreTodo