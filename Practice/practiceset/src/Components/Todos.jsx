/* Editable Todo List
Requirements:

Input to add new todos

Show list of todos

Each todo has Edit & Delete buttons

Clicking Edit changes the text (in place) */

import React, { useState } from 'react'

const Todos = () => {

    const [todos, setTodos] = useState([])
    const [newTodo, setNewTodo] = useState([])

    const addTodo = () => {
        if (newTodo.trim() === "") return;

        const newItem = {
            id: Date.now(),
            text: newTodo,
            isEditing: false,
        };

        setTodos([...todos, newItem]);
        setNewTodo("");
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const editToggle = (id) => {
        setTodos(todos.map((todo) =>
            todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
        ));
    };

    const handleEdit = (id, newText) => {
        setTodos(todos.map((todo) =>
            todo.id === id ? { ...todo, text: newText } : todo
        ));
    };

    return (
        <>
            <h2>Todo List</h2>
            <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder='Enter todo'
            />
            <button onClick={addTodo}>Add Todo</button>


            <ul>
                {todos.map(todo => (
                    <li key={todo.id} style={{ marginBottom: '10px' }}>
                        {todo.isEditing ? (
                            <input
                                value={todo.text}
                                onChange={(e) => handleEdit(todo.id, e.target.value)}
                            />
                        ) : (
                            <span>{todo.text}</span>
                        )}

                        <button onClick={() => editToggle(todo.id)}>
                            {todo.isEditing ? 'Save' : 'Edit'}
                        </button>

                        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Todos