import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ClassCounter from "./components/ClassCounter";
import HookCounter from "./components/HookCounter";
import HookCounterTwo from "./components/HookCounterTwo";

function App() {
  return (
    <div>
      <ClassCounter />
      <HookCounter />
      <br />
      <HookCounterTwo />
    </div>
  );
}

export default App;
