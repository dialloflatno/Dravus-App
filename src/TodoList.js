import React, { useState } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import { TASKS } from "./TaskData";

function TodoList() {
  
  const [tasksStateArray , setTasksStateArray] = useState(TASKS)
  
  function handleTaskDelete(text) {
    const newTaskArray = tasksStateArray.filter((task) => task.text !== text);
    setTasksStateArray(newTaskArray);
  }

  return (
    <div className="App">
      <h2>To-do List</h2>
      <TaskForm />
      <TaskList 
      tasks = {tasksStateArray}
      onDeleteTask = {handleTaskDelete}
      />
    </div>
  );
}

export default TodoList;
