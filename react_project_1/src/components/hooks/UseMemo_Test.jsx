import React, { useMemo, useState } from "react";

function expensiveCalculation(count) {
  for (let i = 1; i <= 10000; i++) {
    console.log("Expensive calculation happens");
  }
  return count;
}
export default function UseMemo_Test() {
  const [count, setCount] = useState(0);
  //   const calculation = expensiveCalculation(count);
  const calculation = useMemo(() => expensiveCalculation(count), []);

  return (
    <>
      <h1>UseMemo_Test Example</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>increment</button>
    </>
  );
}
