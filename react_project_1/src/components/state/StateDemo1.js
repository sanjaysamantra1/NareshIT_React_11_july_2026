import React, { useState } from 'react'

export default function StateDemo1() {
    const [count, setCount] = useState(10);

    return <>
        <h1>Counter Example</h1>
        <p>Count: {count}</p>

        <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
}


/* 
    useState is a function
    it takes 1 arguement, default value
    it returns an array with 2 items
    first Item in array - state variable
    second item in array - a function using which we can update state variable 
*/