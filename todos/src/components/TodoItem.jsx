import React, { useState } from 'react'
import { useTodoContext } from '../context'

const TodoItem = ({ todo }) => {

    const [isTodoEditable, setIsTodoEditable] = useState(false);
    const [todoText, setTodoText] = useState(todo.todo);
    const { updateTodo, deleteTodo, toggleTodo } = useTodoContext();

    // Handle the edit button click to toggle the edit state
    const handleEditClick = () => {
        updateTodo(todo.id, { ...todo, todo: todoText });
        setIsTodoEditable(false);
    }

    //Toggle the completion status of the todo
    // This function will be called when the user clicks on the todo item
    const toggleCompletion = () => {
        toggleTodo(todo.id);
    }

    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"}`}>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={toggleCompletion}
                className='cursor-pointer'
            />

            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${isTodoEditable ? "border-black/10 px-2" : "border-transparent"}`}
                value={todoText}
                onChange={(e) => setTodoText(e.target.value)}
                readOnly={!isTodoEditable}
            />
            <button
            // Toggle between edit and view mode
            // If the todo is completed, disable the edit button
                onClick={() => {
                    if (todo.completed) return
                    if (isTodoEditable) {
                        handleEditClick()
                    } 
                    else setIsTodoEditable((prev) => !prev)
                }}
                disabled={todo.completed}
                className='inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50'
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>

            <button
                onClick={() => deleteTodo(todo.id)}
                className='inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0'
            >
                ❌
            </button>
        </div>
    )
}

export default TodoItem