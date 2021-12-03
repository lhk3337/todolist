import React, { useState, useRef, useEffect } from "react";
const Todo = ({ setTodos, todos }) => {
  const [input, setInput] = useState("");
  const inputRef = useRef(null);

  const inputRefFocus = () => {
    inputRef.current.focus();
  };

  const onChange = (e) => {
    const { value } = e.target;
    setInput(value);
  };

  const onClickBtn = () => {
    if (!input) {
      inputRefFocus();
      return;
    }
    const id = Math.floor(Math.random() * 10000) + 1;
    setTodos([...todos, { id, data: input }]);
    setInput("");
    inputRefFocus();
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    inputRefFocus();
  }, []);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          className="todoinput"
          value={input}
          onChange={onChange}
          ref={inputRef}
          placeholder="할 일을 입력해 주세요..."
        />
        <button type="submit" className="todoBtn" onClick={onClickBtn}>
          할일 추가
        </button>
      </form>
    </div>
  );
};

export default Todo;
