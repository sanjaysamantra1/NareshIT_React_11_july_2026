import { useEffect, useState } from "react";
export default function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    console.log("Component is initialized, plz add logic");
    const timerId = setInterval(() => {
      console.log("I am set interval");
      setTime(new Date());
    }, 1000);
    return () => {
      console.log("Component is about to be destroyed, plz clean everything");
      clearInterval(timerId);
    };
  }, []);

  return <h2>{time.toLocaleTimeString()}</h2>;
}
