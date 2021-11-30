import React from "react";

const TodoList = ({ todos, setTodos }) => {
  const delBtn = (id) => {
    setTodos(todos.filter((task) => task.id !== id));
  };
  const completeBtn = (id) => {
    setTodos(
      todos.map((item) => {
        if (item.id === id) {
          item.isComplete = !item.isComplete;
        }
        return item;
      })
    );
  };

  return (
    <ul>
      {todos
        .filter((itemfilter) => itemfilter !== "")
        .map((item) => (
          <div key={item.id} className="listContainer">
            <li className={`${item.isComplete ? "complete" : ""}`}>{item.data}</li>
            <div className="btnContainer">
              <button className="btn" onClick={() => completeBtn(item.id)}>
                ✔️
              </button>
              <button className="btn" onClick={() => delBtn(item.id)}>
                ✖︎
              </button>
              <button className="btn addBtn">➕</button>
            </div>
          </div>
        ))}
    </ul>
  );
};

export default TodoList;
