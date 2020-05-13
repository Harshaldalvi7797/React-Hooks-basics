import React, { useState, useEffect } from "react";

export default function HookMouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const logMousePosition = e => {
    console.log("Mouse Event");
    setX(e.clientX);
    setY(e.clientY);
  };
  useEffect(() => {
    console.log("useEffects Called");
    window.addEventListener("mousemove", logMousePosition);
    return () => window.removeEventListener("mousemove", logMousePosition);
  }, []);
  return (
    <div>
      X-{x}
      <br />
      Y-{y}
    </div>
  );
}
