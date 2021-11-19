import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDeleteTask }) {
  const tasksArray = tasks.map((task) => {
    return (
      <Task
        key={task.id}
        tasks={task}
        text={task.text}
        handleTaskDelete={onDeleteTask}
      />

    );
  });

  return <div className="tasks">
      {tasksArray}
  </div>;

}

export default TaskList;
