import React from "react";
import Weather from "./Weather";
import Map from "./Map";
import TodoList from "./TodoList.js";
import "./App.css";
import ExchangeRateConverter from "./ExchangeRateConverter";

function App() {
  return (
    <div className="App">
      <div classname="map">
        <Map />
        <Weather />
        <ExchangeRateConverter />
      </div>
      <div className="EXC">
      </div>
      <TodoList />
    </div>
  );
}

export default App;
