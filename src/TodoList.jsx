import React, { useEffect } from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import { useState } from "react";

const TodoList = () => {
  const getInitialTodos = () => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  };

  const [todos, setTodos] = useState(getInitialTodos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    const todo = {
      id: Date.now(),
      text,
      isCompleted: false,
    };
    setTodos([...todos, todo]);
  };

  const completeTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: true } : todo
    );
    setTodos(updatedTodos);
  };

  const undoTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: false } : todo
    );
    setTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-5 bg-gray-100 rounded-lg shadow-lg ">
      <h1 className="text-2xl font-bold text-center mb-5">My Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <div className="mt-5">
        {todos.length === 0 ? (
          <p className="text-center text-gray-500">No tasks yet.</p>
        ) : (
          todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              completeTodo={completeTodo}
              undoTodo={undoTodo}
              deleteTodo={deleteTodo}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default TodoList;
