import React from "react";


function TaskForm({ handleAdd, urlTask }) {

  const handleSubmit = (e) => {
    e.preventDefault()
    const input = e.target.children.text.value;
    const inputStored = { text: input };
    fetch(urlTask, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputStored),
    })
      .then(res => res.json())
      .then(addedTask => handleAdd(addedTask))
  }




  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <label>
        New Task
      </label>
      <input type="text" name="text" />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;