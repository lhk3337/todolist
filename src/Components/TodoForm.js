import React, { useState, useRef, useEffect } from "react";

import IconButton from "@mui/material/IconButton";
import AddCircleIcon from "@mui/icons-material/AddCircle";

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
    setTodos([...todos, { id, data: input, isComplete: true }]);
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
    <div className="FormContainer">
      <form onSubmit={onSubmit}>
        <input className="todoinput" value={input} onChange={onChange} ref={inputRef} placeholder="Add Todo" />
        <IconButton type="submit" size="small" onClick={onClickBtn}>
          <AddCircleIcon
            style={{
              color: "#f71d83",
            }}
            sx={{ fontSize: 50 }}
          />
        </IconButton>
      </form>
    </div>
  );
};

export default Todo;
