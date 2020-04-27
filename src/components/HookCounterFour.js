import React, { useState } from "react";

export default function HookCounterFour() {
  const [items, setItems] = useState([]);
  const addItem = () => {
    setItems([...items, { id: items.length, value: 25 + 1 }]);
  };
  return (
    <div>
      <button onClick={addItem}>Add Number</button>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </div>
  );
}
