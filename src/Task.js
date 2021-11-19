import React from "react";

function Task({ tasks, text, handleTaskDelete }) {
  function handleDeleteClick() {
    console.log("///Delete Button has been clicked!///");
    fetch(`http://localhost:3000/Task/${tasks.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => handleTaskDelete(tasks));
  }
  return (
    <div className="task">
      <div className="text">{text}</div>
      <button className="delete" onClick={handleDeleteClick}>
        X
      </button>
      <br></br>
    </div>
  );
}

export default Task;
