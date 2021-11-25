import React from "react";

const TodoList = ({ todos }) => {
  return (
    <>
      <ul>
        {todos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
