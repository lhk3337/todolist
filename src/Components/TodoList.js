import React from "react";

const TodoList = ({ todos }) => {
  console.log(todos);
  const delBtn = () => {
    console.log("Delete now");
  };
  return (
    <>
      <ul>
        {todos
          .filter((itemfilter) => itemfilter !== "")
          .map((item, index) => (
            <div className="listContainer">
              <li key={index}>{item}</li>
              <span>
                <button className="delBtn" onClick={delBtn}>
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
