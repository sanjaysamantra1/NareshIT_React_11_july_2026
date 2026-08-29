import React, { useState } from 'react'

export default function FormDemo1() { // Controlled input
  const [name,setName] = useState('virat');
  const handleChange = (event)=>{
    setName(event.target.value);
    console.log(event)
  }
  return <>
    <input value={name} onChange={handleChange} />
    <p>Hello, {name}</p>
  </>
}
