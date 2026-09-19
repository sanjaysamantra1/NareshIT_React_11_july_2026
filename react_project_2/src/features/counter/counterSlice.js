// Slice = Actions + Reducers
import { createSlice } from "@reduxjs/toolkit";

const count = 0;
const counterSlice = createSlice({
    name: "counter",
    initialState: count,
    reducers: {
        increment: (state) => {
            return state + 1;
        },
        decrement: (state) => {
            return state - 1;
        },
        reset: () => {
            return 0;
        }
    }
});
export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;