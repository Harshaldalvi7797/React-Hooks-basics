import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HookCounterOne from "./components/useEffects/HookCounterOne";
import ClassCounter from "./components/useState/ClassCounter";
import ClassMouse from "./components/useEffects/ClassMouse";
import HookMouse from "./components/useEffects/HookMouse";
import MouseContainer from "./components/useEffects/MouseContainer";
import IntervalHookCounter from "./components/useEffects/IntervalHookCounter";
import DataFetch from "./components/Fetch-Data/DataFetch";

function App() {
  return (
    <div>
      <DataFetch />
      {/* <ClassMouse /> */}
      {/* <HookMouse /> */}
      {/* <MouseContainer /> */}
      {/* <HookCounterOne /> */}
      {/* <ClassCounter /> */}
      {/* <IntervalHookCounter /> */}
    </div>
  );
}

export default App;
