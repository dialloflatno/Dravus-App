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
      </div>

      <div className="EXC">
        <Weather />
        <ExchangeRateConverter />
      </div>
      <TodoList />
    </div>
  );
}

export default App;
