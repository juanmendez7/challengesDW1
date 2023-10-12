import React, { useState } from 'react';

// Custom hook to manage todos
const useTodo = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (description) => {
    const newTodo = {
      id: new Date().getTime(),
      description,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const toggleComplete = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const countTodos = todos.length;
  const countPendingTodos = todos.filter((todo) => !todo.completed).length;

  return {
    todos,
    addTodo,
    deleteTodo,
    toggleComplete,
    countTodos,
    countPendingTodos,
  };
};

export default useTodo;
