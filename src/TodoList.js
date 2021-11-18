import React, { useEffect, useState } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

function TodoList() {
  const [tasksStateArray, setTasksStateArray] = useState([]);
  const urlTask = "http://localhost:3000/Task";

  useEffect(() => {
    fetch(urlTask)
      .then(res => res.json())
      .then(taskData => 
        setTasksStateArray(taskData),
        setTasksStateArray(""))
  }, [])

  const [add, setADD] = useState(tasksStateArray)

  function handleTaskDelete(text) {
    const newTaskArray = tasksStateArray.filter((task) => task.text !== text);
    setTasksStateArray(newTaskArray);
  }
  function handleAdd(addedTask) {
    const addTask = [...tasksStateArray, addedTask]
    setADD(addTask)
  }


  return (
    <div className="todo">
      <h2>To-do List</h2>
      <TaskForm urlTask={urlTask} handleAdd={handleAdd} />
      <TaskList tasks={add} onDeleteTask={handleTaskDelete} />
    </div>
  );
}

export default TodoList;
