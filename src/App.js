import React, { useState, useEffect } from "react";
import "./style/App.css";
import TodoForm from "./Components/TodoForm";
import TodoHeader from "./Components/TodoHeader";
import TodoList from "./Components/TodoList";
function App() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="app">
      <TodoHeader todos={todos} />
      <TodoForm todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
