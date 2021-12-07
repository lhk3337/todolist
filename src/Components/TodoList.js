import React, { useRef } from "react";

import Checkbox from "@mui/material/Checkbox";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

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
              <Checkbox
                style={{
                  color: "#f71d83",
                }}
                icon={<CircleOutlinedIcon sx={{ fontSize: 25 }} />}
                checkedIcon={<CheckCircleIcon sx={{ fontSize: 25 }} />}
                onClick={() => completeBtn(item.id)}
              />
              {item.isEdit ? (
                <input
                  className={`listInput ${item.isComplete ? "" : "complete"}`}
                  type="text"
                  defaultValue={item.data}
                  onKeyPress={(event) => pressEnterKey(event, item.id)}
                  ref={editInputRef}
                  autoFocus="autofocus"
                  onChange={(event) => onChange(event, item.id)}
                />
              ) : (
                <div className={`listText ${item.isComplete ? "" : "complete"}`}>{item.data}</div>
              )}
            </li>
            <div className="btnContainer">
              {item.isComplete ? (
                <button className="listBtn addBtn" onClick={() => editBtn(item.id)}>
                  <RateReviewIcon sx={{ fontSize: 25 }} />
                </button>
              ) : null}
              <button className={`listBtn ${item.isComplete ? "" : "moveBtn"}`} onClick={() => delBtn(item.id)}>
                <DeleteForeverIcon sx={{ fontSize: 30 }} />
              </button>
            </div>
          </div>
        ))}
    </ul>
  );
};

export default TodoList;
