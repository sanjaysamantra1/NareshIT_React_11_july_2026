import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import todoReducer from "../features/todo/todoSlice";
import employeeReducer from "../features/employee/employeeSlice";

export const myStore = configureStore({
  reducer: {
    counter: counterReducer,
    todoReducer: todoReducer,
    employeeReducer: employeeReducer,
  },
});
