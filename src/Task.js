import React from "react";

function Task({ text , handleTaskDelete }) {

  function handleClick() {
    handleTaskDelete(text)
  }
  return (
    <div className="task">
      <div className="text">{text}</div>
      <button className="delete" onClick = {handleClick}>X</button>
    </div>
  );
}

export default Task;