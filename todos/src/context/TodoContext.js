import { createContext, useContext } from "react";

// Create a context for managing todos
// This context will provide the todos and functions to manipulate them
export const TodoContext = createContext({
    todos: [
        { 
            id: 1, 
            todo: "Learn React", 
            completed: false 
        },
    ],

    addTodo: (todo) => {},
    updateTodo: (id, updatedTodo) => {},
    deleteTodo: (id) => {},
    toggleTodo: (id) => {},
});

// Custom hook to use the TodoContext
export const useTodoContext = () => {
    return useContext(TodoContext);
}

// Export the TodoProvider to wrap around components that need access to the context
// This allows those components to consume the todos and functions provided by the context
export const TodoProvider = TodoContext.Provider;