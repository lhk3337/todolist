import React, { useState, useRef, useEffect } from "react";
const Todo = ({ setTodos, todos }) => {
  const [input, setInput] = useState("");
  const inputRef = useRef(null);

  const onChange = (e) => {
    const { value } = e.target;
    setInput(value);
  };
  const onClickBtn = () => {
    setTodos([...todos, input]);

    setInput("");
    inputRef.current.focus();
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={input} onChange={onChange} ref={inputRef} />
        <button type="submit" className="todoBtn" onClick={onClickBtn}>
          할일 추가
        </button>
      </form>
    </div>
  );
};

export default Todo;
