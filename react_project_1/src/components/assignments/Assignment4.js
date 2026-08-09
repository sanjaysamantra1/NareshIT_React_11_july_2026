import MyReact, { useState } from 'react'

export default function Assignment4() {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const reset = () => setCount(0);
    return <>
        <h1>Counter Example</h1>
        <p>Count: {count}</p>

        <button className='btn btn-primary' onClick={decrement}>Decrement</button>
        <button className='btn btn-primary mx-2' onClick={reset}>Reset</button>
        <button className='btn btn-primary' onClick={increment}>Increment</button>
    </>
}
