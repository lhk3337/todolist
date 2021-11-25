import React, { useState } from "react";
const Todo = ({ setTodos, todos }) => {
  const [input, setInput] = useState("");
  const onChange = (e) => {
    const { value } = e.target;
    setInput(value);
  };
  const onClickBtn = () => {
    setTodos([...todos, input]);
  };
  return (
    <div>
      <input value={input} onChange={onChange} />
      <button onClick={onClickBtn}>할일 추가</button>
    </div>
  );
};

export default Todo;
