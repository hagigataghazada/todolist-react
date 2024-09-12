import { useState } from "react";
import TodoList from "./TodoList";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-200 p-5">
      <TodoList />
    </div>
  );
};

export default App;
