import { useRef, useState } from "react"

export default function Addition() { 
  const [num1 ,setNum1] = useState(null);
  const [num2 ,setNum2] = useState(null);
  return <>
    <h3>Add 2 numbers using state variables</h3>
    <p>Number-1: <input type="number" value={num1} onChange={(e)=>setNum1(e.target.value)} /></p>
    <p>Number-2: <input type="number" value={num2} onChange={(e)=>setNum2(e.target.value)} /></p>
    <p>Addition of {num1} and {num2} is {+num1 + +num2}</p>
  </>

  /* const inputbox1 = useRef(null);
  const inputbox2 = useRef(null);
  const hanldeAdd =()=>{
    const value1 = Number(inputbox1.current.value);
    const value2 = +inputbox2.current.value;
    console.log(`Addition of ${value1} & ${value2} is: ${value1+value2}`)
  }
  return <>
    <h3>Add 2 numbers without using state variables</h3>
    <p>Number-1: <input type="number" ref={inputbox1} /></p>
    <p>Number-2: <input type="number" ref={inputbox2} /></p>
    <button onClick={hanldeAdd}>Add</button>
  </> */
}
