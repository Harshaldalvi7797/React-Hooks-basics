import React, { useState } from "react";

export default function HookCounterTwo() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);
  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount(prevCount => prevCount + 1);
      console.log(i);
    }
  };
  return (
    <div>
      count:{count}
      <button onClick={() => setCount(initialCount)}>Resets</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => incrementFive()}>Decrement{count}</button>
    </div>
  );
}
