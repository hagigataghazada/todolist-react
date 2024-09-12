import React from "react";

const TodoItem = ({ todo, completeTodo, undoTodo, deleteTodo }) => {
  return (
    <div className="flex justify-between items-center bg-white shadow-md rounded-lg p-4 mb-3">
      <span
        className={`text-lg ${
          todo.isCompleted ? "line-through text-gray-500" : ""
        }`}
      >
        {todo.text}
      </span>
      <div>
        {todo.isCompleted ? (
          <>
            <button
              className="bg-yellow-400 text-white px-4 py-2 mr-2 rounded hover:bg-yellow-500"
              onClick={() => undoTodo(todo.id)}
            >
              Undo
            </button>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
              onClick={() => deleteTodo(todo.id)}
            >
              Delete
            </button>
          </>
        ) : (
          <>
            <button
              className="bg-green-500 text-white px-4 py-2 mr-2 rounded hover:bg-red-700"
              onClick={() => completeTodo(todo.id)}
            >
              Complete
            </button>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
              onClick={() => deleteTodo(todo.id)}
            >
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default TodoItem;
