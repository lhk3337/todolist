import React, { useRef } from "react";
import CheckBoxSharpIcon from "@mui/icons-material/CheckBoxSharp";
import RateReviewIcon from "@mui/icons-material/RateReview";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
const TodoList = ({ todos, setTodos }) => {
  const editInputRef = useRef(null);

  const isEdit = (id) => {
    setTodos(
      todos.map((item) => {
        if (item.id === id) {
          item.isEdit = !item.isEdit;
        }
        return item;
      })
    );
    // if (todos.map((items) => items.data !== "")) {
    //   setTodos(todos.filter((task) => task.id !== id));
    // }
  };

  const delBtn = (id) => {
    setTodos(todos.filter((task) => task.id !== id));
  };

  const completeBtn = (id) => {
    setTodos(
      todos.map((item) => {
        if (item.id === id) {
          item.isComplete = !item.isComplete; //todos에 isComplete 객체 추가
        }
        return item;
      })
    );
  };

  const editBtn = (id) => {
    isEdit(id);
  };

  const onChange = (event, id) => {
    setTodos(
      todos.map((item) => {
        if (item.id === id) {
          item.data = event.target.value;
        }
        return item;
      })
    );
  };

  const pressEnterKey = (event, id) => {
    if (event.charCode === 13) {
      isEdit(id);
    }
  };

  return (
    <ul>
      {todos
        .filter((itemfilter) => itemfilter !== "")
        .map((item) => (
          <div key={item.id} className="listContainer">
            <li>
              {item.isEdit ? (
                <input
                  className={`listInput ${item.isComplete ? "complete" : ""}`}
                  type="text"
                  defaultValue={item.data}
                  onKeyPress={(event) => pressEnterKey(event, item.id)}
                  ref={editInputRef}
                  autoFocus="autofocus"
                  onChange={(event) => onChange(event, item.id)}
                />
              ) : (
                <div className={`listText ${item.isComplete ? "complete" : ""}`}>{item.data}</div>
              )}
            </li>

            <div className="btnContainer">
              <button className="btn" onClick={() => completeBtn(item.id)}>
                <CheckBoxSharpIcon />
              </button>
              <button className="btn" onClick={() => delBtn(item.id)}>
                <DeleteForeverIcon />
              </button>
              <button className="btn addBtn" onClick={() => editBtn(item.id)}>
                <RateReviewIcon />
              </button>
            </div>
          </div>
        ))}
    </ul>
  );
};

export default TodoList;
