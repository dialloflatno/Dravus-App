import React, { useState } from "react";

function TaskForm({ handleAdd, urlTask }) {
  //STATE FOR POST SUBMIT ON TASK FORM
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    //NICK'S POST CODE
    fetch(urlTask, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: text,
      }),
    })
      .then((r) => r.json())
      .then((data) => handleAdd(data));
  };

  //IBRAHIMA'S POST CODE
  //   const input = e.target.children.text.value;
  //   const inputStored = { text: input };
  //   fetch(urlTask, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(inputStored),
  //   })
  //     .then((res) => res.json())
  //     .then((addedTask) => handleAdd(addedTask));
  // };

  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <label className ="formHeading" >Plans</label>
      <input
        onChange={(e) => setText(e.target.value)}
        value={text}
        type="text"
        name="text"
        className ="inputWidth"
        placeholder="How are we Living"
      />
      <button className = "submit" type="submit">+</button>
    </form>
  );
}

export default TaskForm;
