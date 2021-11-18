import React from 'react';
import Map from "./Map"
import Weather from "./Weather"
import TodoList from "./TodoList.js"

import './App.css';



function App() {
  return (
    <div className="App">
      <Map />
      <Weather />
      <TodoList />
    </div>
  );
}

export default App;
