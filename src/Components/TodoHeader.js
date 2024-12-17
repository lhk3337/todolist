import React from "react";
import { useDateAndTodos } from "../hooks/useDateAndTodos";

const TodoHeader = ({ todos }) => {
  const { week, days, month, completeCount, todoCount } = useDateAndTodos(todos);

  return (
    <div className="header">
      <div className="dateContainer">
        <h1>
          {week}, {days}
        </h1>
        <p>{month}</p>
      </div>
      <div className="todoCount">
        <span>{todoCount} Tasks</span>
        <span>{completeCount} Done</span>
      </div>
    </div>
  );
};

export default TodoHeader;
