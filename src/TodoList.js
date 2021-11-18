import React, { useEffect, useState } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

function TodoList() {
  const [tasksStateArray, setTasksStateArray] = useState([]);
  const urlTask = "http://localhost:3000/Task";

  useEffect(() => {
    fetch(urlTask)
      .then((res) => res.json())
      .then((data) => setTasksStateArray(data));
  }, []);

  //SHOWING OUR TASK LIST IS BOUND TO THIS ADD STATE.
  //NEED TO SEPERATE THIS INTO SEPERATE STATES
  // const [add, setADD] = useState(tasksStateArray);
  //CONNECTED SETTASKSSTATEARRAY AS THE SETTER FOR ADD TASK BELOW
  //INSTEAD OF SETADD

  function handleTaskDelete(text) {
    const newTaskArray = tasksStateArray.filter((task) => task.text !== text);
    setTasksStateArray(newTaskArray);
  }
  function handleAdd(newTask) {
    console.log("Submit button has been clicked!");
    const addTask = [...tasksStateArray, newTask];
    setTasksStateArray(addTask);
  }

  return (
    <div className="todo">
      <h2>To-do List</h2>
      <TaskForm urlTask={urlTask} handleAdd={handleAdd} />
      <TaskList tasks={tasksStateArray} onDeleteTask={handleTaskDelete} />
    </div>
  );
}

export default TodoList;
