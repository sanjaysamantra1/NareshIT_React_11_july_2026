import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import todoReducer from "../features/todo/todoSlice";

export const myStore = configureStore({
  reducer: {
    counter: counterReducer,
    todoReducer: todoReducer,
  },
});
