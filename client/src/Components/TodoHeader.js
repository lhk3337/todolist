import React from "react";

let day = new Date();
const WEEKDAY = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const MONTH = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let week = WEEKDAY[day.getDay()];
let days = day.getDate();
let month = MONTH[day.getMonth()];

const TodoHeader = ({ todos }) => {
  const completeCount = todos.filter((item) => item.isComplete === false);
  const todoCount = todos.length - completeCount.length;
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
        <span>{completeCount.length} Done</span>
      </div>
    </div>
  );
};

export default TodoHeader;
