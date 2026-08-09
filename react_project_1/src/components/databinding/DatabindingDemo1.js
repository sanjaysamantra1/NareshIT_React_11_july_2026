import React, { useState } from 'react'

export default function DatabindingDemo1() {
    const [name, setName] = useState('Virat Kohli');
    const [role, setRole] = useState('Cricketer');

    return (
        <>
            <div>DatabindingDemo1</div>
            <p>Name is: {name} ,  and Role is: {role}</p> {/* 1 way */}
            1 way: <input value={name} readOnly />  {/* 1 way */}
            2 way: <input value={name} onChange={(event) => setName(event.target.value)} />  {/* 2 way */}
        </>
    )
}
