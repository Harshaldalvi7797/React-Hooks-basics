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
import ComponentA from "./components/context/ComponentA";
import ComponentB from "./components/context/ComponentB";
import ComponentC from "./components/context/ComponentC";
import CounterR from "./components/Reducer/CounterR";
import Counter1 from "./components/Reducer/Counter1";
import Fetching from "./components/Reducer/Fetching";
import DataFetching from "./components/Reducer/DataFetching";

export const userContext = React.createContext();
export const channelContext = React.createContext();

function App() {
  return (
    <div>
      <DataFetching />
      {/* <Fetching /> */}
      {/* <CounterR /> */}
      {/* <Counter1 /> */}
      {/* <userContext.Provider value="Harshal">
        <channelContext.Provider value="Dalvi">
          <ComponentA />
        </channelContext.Provider>
      </userContext.Provider>
      <ComponentB /> */}

      {/* <DataFetch /> */}
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
