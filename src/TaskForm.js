import React from "react";

function NewTaskForm() {
  return (
    <form className="new-task-form">
      <label>
        New Task 
        <input type="text" name="text" />
      </label>
      
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;