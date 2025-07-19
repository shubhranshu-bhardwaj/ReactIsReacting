import React, { useState } from 'react'
import { useTodoContext } from '../context'

const TodoForm = () => {

    const [todo, setTodo] = useState('')

    // Use the addTodo function from the TodoContext to add a new todo
    // This function will be provided by the TodoProvider in App.jsx
    const {addTodo} = useTodoContext()

    // Handle form submission to add a new todo
    // Prevent the default form submission behavior
    const handleSubmit = (e) => {
        e.preventDefault()
        if(!todo) return
        addTodo({ todo, completed: false })
        setTodo('') // Clear the input field after adding the todo
    }

  return (
    <form onSubmit={handleSubmit} className='flex'>
        <input 
            type="text" 
            value={todo} 
            onChange={(e) => setTodo(e.target.value)} 
            placeholder="Add a new todo" 
            className='w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5'
        />
        <button 
        type="submit"
        className='rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0'
        >Add Todo
        </button>
    </form>
  )
}

export default TodoForm