// hooks/useDateAndTodos.js
import { useMemo } from "react";
import { WEEKDAY, MONTH } from "../utils/date";

export const useDateAndTodos = (todos) => {
  const { week, days, month } = useMemo(() => {
    const day = new Date();
    return {
      week: WEEKDAY[day.getDay()],
      days: day.getDate(),
      month: MONTH[day.getMonth()],
    };
  }, []);

  const { completeCount, todoCount } = useMemo(() => {
    const incompleteTodos = todos.filter((item) => !item.isComplete);
    return {
      completeCount: incompleteTodos.length,
      todoCount: todos.length,
    };
  }, [todos]);

  return { week, days, month, completeCount, todoCount };
};
