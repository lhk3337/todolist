import React, { useState } from "react";
import "./App.css";
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";
function App() {
  const [todos, setTodos] = useState([]);
  return (
    <div className="app">
      <h1>오늘은 무엇을 할까?</h1>
      <TodoForm todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
