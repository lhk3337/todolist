import React, { useState } from "react";
import "./style/App.css";
import TodoForm from "./Components/TodoForm";
import TodoHeader from "./Components/TodoHeader";
import TodoList from "./Components/TodoList";
function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div className="app">
      <TodoHeader todos={todos} />
      <TodoForm todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
