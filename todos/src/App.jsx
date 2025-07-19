import { useState, useEffect } from 'react';
import { TodoProvider } from './context';
import { TodoForm, TodoItem } from './components'

function App() {

  const [todos, setTodos] = useState([])

  //Add a new todo
  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev])
  }

  //Update a todo by id
  const updateTodo = (id, updatedTodo) => {
    setTodos((prev) => prev.map(todo => todo.id === id ? { ...todo, ...updatedTodo } : todo));
  }

  //Delete a todo by id
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter(todo => todo.id !== id));
  }

  //Toggle the completion status of a todo by id
  const toggleTodo = (id) => {
    setTodos((prev) => prev.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  }

  // Load todos from localStorage when the component mounts
  // This ensures that todos persist across page reloads
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos && storedTodos.length > 0) {
      setTodos(storedTodos);
    }
  }, [])

  // Save todos to localStorage whenever the todos state changes
  // This ensures that any changes made to the todos are saved and can be retrieved later
  useEffect(() => {
    // Save todos to localStorage whenever the todos state changes
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])

  return (
    // Wrap the application with TodoProvider to provide context to all components
    // This allows components to access and manipulate the todo list
    // The TodoProvider will manage the state of todos and provide functions to add, update,
    // delete, and toggle todos
    // Components inside TodoProvider can use the useTodoContext hook to access the todos and functions
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleTodo }}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">My Todos</h1>
                    <div className="mb-4">
                        {/* Render the TodoForm component to allow users to add new todos */}
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                          <div key={todo.id}
                          className='w-full'
                          >
                            {/* Render each TodoItem component for every todo in the todos array */}
                            <TodoItem todo={todo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>

    </TodoProvider>
  )
}

export default App
