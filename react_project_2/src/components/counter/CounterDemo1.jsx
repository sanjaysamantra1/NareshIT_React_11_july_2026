import React, { useState } from 'react'

export default function CounterDemo1() {
    const [count, setCount] = useState(0);
    return <div className='col-sm-4 offset-4 border border-3 rounded-3 p-3'>
        <h3>Counter Example</h3>

        <button className="btn btn-danger" onClick={() => setCount(count - 1)}>Decrement</button>
        <h2 className='mx-2'>{count}</h2>
        <button className="btn btn-primary" onClick={() => setCount(count + 1)}>Increment</button>
    </div>
}
