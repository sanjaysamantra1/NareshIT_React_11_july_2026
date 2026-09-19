import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

export const myStore = configureStore({
  reducer: {
    counter: counterReducer,
  }
});
