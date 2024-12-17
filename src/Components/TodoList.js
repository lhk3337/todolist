import React from "react";

import TodoItem from "./TodoItem";
const TodoList = ({ todos, setTodos }) => {
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
      // todos.map((item) => {
      //   if (item.id === id) {
      //     item.isComplete = !item.isComplete; //todos에 isComplete 객체 추가
      //   }
      //   return item;
      // })
      todos.map((item) => (item.id === id ? { ...item, isComplete: !item.isComplete } : item))
    );
  };

  const editBtn = (id) => {
    isEdit(id);
  };

  const onChangeUpdate = (event, id) => {
    setTodos(
      // todos.map((item) => {
      //   if (item.id === id) {
      //     item.data = event.target.value;
      //   }
      //   return item;
      // })

      todos.map((item) => (item.id === id ? { ...item, data: event.target.value } : item))
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
          <TodoItem
            {...item}
            delBtn={delBtn}
            completeBtn={completeBtn}
            editBtn={editBtn}
            onChangeUpdate={onChangeUpdate}
            pressEnterKey={pressEnterKey}
          />
        ))}
    </ul>
  );
};

export default TodoList;
