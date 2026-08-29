import MyReact, { useState } from 'react'

export default function CounterDemo1() {
    const [count, setCount] = useState(0);
    const increment = (event) => {
        console.log(event.type)
        console.log(event.target)
        console.log(event.currentTarget)
        setCount(count + 1)
    }
    return <>
        <h1>Counter Example</h1>
        <p>Count: {count}</p>
        <div>Count: {count}</div>
        <button onClick={increment}><span>Increment</span></button>

        <div className="border border-3 rounded-3 m-3 p-3">
            <h4>React version:: {MyReact.version}</h4>
        </div>
    </>
}

/* 
   h1 - HTML Tag
   CounterDemo1 : user created Component 
   input type="date"  : component (created by HTML people)
*/