import React, { useState, useEffect } from "react";
// import MapView from "./MapView";
import Weather from "./Weather";
import CurrencyRow from "./CurrencyRow";
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
        <ExchangeRateConverter />
        <Weather />
      </div>
      <TodoList />
    </div>
  );
}

export default App;
