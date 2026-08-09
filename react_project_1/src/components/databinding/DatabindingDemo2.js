import React, { useState } from 'react'

// when a local variable value is changed, component will not re-render
// Need of State Variable
export default function DatabindingDemo2() {
    let name = 'virat kohli';  // Local Variable , Not a state variable
    let count = 0;

    // State Variable
    let [role,setRole] = useState('Cricketer');


    let updateName = (event) => {
        name = event.target.value;
        console.log(`New Name: `, name)
    }
    let updateRole = (event) => {
       setRole(event.target.value)
    }
    let increment = () => {
       count++;
       console.log(`count: `, count)
    }

    return <>
        <h2>Need of state variables</h2>
        <div>
            <div>Name is: {name}</div>
            <input value={name} onChange={updateName} />

            <div>Role is: {role}</div>
            <input value={role} onChange={updateRole} />

            <div>Count: {count}</div>
            <button className='btn btn-primary' onClick={increment}>Increment</button>
        </div>
    </>
}
