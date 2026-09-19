import { useDispatch, useSelector } from "react-redux";
import { increment,decrement, reset } from "../../features/counter/counterSlice";

export default function Counter() {
    const count = useSelector((state) => state.counter); // Selector
    const dispatch = useDispatch();
    return <div className="col-sm-4 offset-4 border border-3 rounded-3 p-3">
        <h2>Counter With Redux</h2>
        <h3>Count:{count}</h3>

        <button onClick={() => { dispatch(decrement()) }} >decrement</button>
        <button onClick={() => { dispatch(reset()) }} className="mx-2">Reset</button>
        <button onClick={() => { dispatch(increment()) }}>increment</button>
    </div>
}
