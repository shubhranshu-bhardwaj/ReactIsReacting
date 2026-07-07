// Create a todo with Add, Edit, Delete, Completed, Search and Filter and add a clear completed button
// Add undo delete button

import { useState } from "react"

const UndoTodo = () => {

    const [todos, setTodos] = useState([])
    const [item, setItem] = useState('')
    const [editId, setEditId] = useState(null)
    const [search, setSearch] = useState('')
    const [filter, setFilter] = useState('all')
    const [deletedTodos, setDeletedTodos] = useState([])

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
        const deletedTodo = todos.find((todo) => todo.id === id)
        if (!deletedTodo) return
        setDeletedTodos((prev) => [...prev, deletedTodo])
        setTodos((prev) => prev.filter((todo) => todo.id !== id))
    }
    const handleUndo = () => {
        if (deletedTodos.length === 0) return
        const lastDeleted = deletedTodos[deletedTodos.length - 1]
        setTodos((prev) => [...prev, lastDeleted])
        setDeletedTodos((prev) => prev.slice(0, -1))
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
    const handleClearComplete = () => {
        setTodos((prev) => prev.filter((item) => !item.completed))
    }
    const hasCompletedTodo = todos.some((todo) => todo.completed)
    const filteredTodos = todos.filter((todo) => {
        const matchesSearch = todo.text.toLowerCase().includes(search.toLowerCase())
        const matchesFilter = filter === 'all' || (filter === 'completed' && todo.completed)
            || (filter === 'pending' && !todo.completed)

        return matchesSearch && matchesFilter
    })
    const totalCount = todos.length
    const totalCompleted = todos.filter((todo) => todo.completed).length
    const totalPending = totalCount - totalCompleted

    return (
        <div>
            <h2>Complete Todo with Undo Delte</h2>
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
            <button onClick={handleClearComplete} disabled={!hasCompletedTodo}>Clear Completed</button>
            <button onClick={handleUndo} disabled={deletedTodos.length === 0}>Undo Delete</button>
            <h4>Total Count: {totalCount}</h4>
            <h4>Total Completed: {totalCompleted}</h4>
            <h4>Total Pending: {totalPending}</h4>
            {
                filteredTodos.length === 0 ? (
                    <p>Add to do</p>
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
                                    <button
                                        onClick={() => handleComplete(todo.id)}
                                        disabled={todo.id === editId}
                                    >
                                        {
                                            todo.completed ? 'Mark Pending' : 'Mark Completed'
                                        }
                                    </button>
                                    <button
                                        onClick={() => handleEdit(todo.id)}
                                        disabled={todo.id === editId}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(todo.id)}
                                        disabled={todo.id === editId}
                                    >
                                        Delete
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

export default UndoTodo