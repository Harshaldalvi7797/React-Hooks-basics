import React, { useState, useEffect } from "react";
import { throwStatement } from "@babel/types";

function HookCounterOne() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  useEffect(() => {
    document.title = `Your Clicked ${count} Times`;
    console.log("hi");
  }, [count]);
  return (
    <div>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <button onClick={() => setCount(count + 1)}>Count{count}</button>
    </div>
  );
}
export default HookCounterOne;
