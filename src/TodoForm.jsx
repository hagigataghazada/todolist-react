import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim() !== "") {
      addTodo(newTodo);
      setNewTodo("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex mt-5">
      <input
        type="text"
        className="flex-grow p-2 rounded-l-lg border-t mr-0 border-b border-l text-gray-800 bg-white"
        placeholder="Add a new task ..."
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button
        type="submit"
        className="px-6 bg-blue-500 text-white rounded-r-lg"
      >
        Add
      </button>
    </form>
  );
};

export default TodoForm;
