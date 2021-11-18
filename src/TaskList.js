import React from "react";
import Task from "./Task";

function TaskList({tasks , onDeleteTask}) {

  const tasksArray = tasks.map((task, index) => {
    return <Task 
    key = {index} 
    text={task.text} 
    handleTaskDelete={onDeleteTask}/>
  })

  return (
    <div className="tasks">
    {tasksArray}
    </div>
  );
}

export default TaskList;