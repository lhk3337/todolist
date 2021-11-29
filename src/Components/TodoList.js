import React from "react";

const TodoList = ({ todos, setTodos }) => {
  const delBtn = (id) => {
    setTodos(todos.filter((task) => task.id !== id));
  };
  return (
    <>
      <ul>
        {todos
          .filter((itemfilter) => itemfilter !== "")
          .map((item) => (
            <div className="listContainer">
              <li key={item.id}>{item.data}</li>
              <span>
                <button className="delBtn" onClick={() => delBtn(item.id)}>
                  ✖︎
                </button>
              </span>
            </div>
          ))}
      </ul>
    </>
  );
};

export default TodoList;
