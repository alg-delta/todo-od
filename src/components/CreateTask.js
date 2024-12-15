import React, { useState } from "react";

export default function CreateTask(props) {
  const [task, setTask] = useState("");
  const handliSubmit = (event) => {
    event.preventDefault();
    if (task.trim() === "") {
      alert("Поле не може бути порожне");
      return;
    }
    if (task.length > 15) {
      alert("Не можна більше 15");
      return;
    }
    if (task.length < 6) {
      alert("Не можна менше 6");
      return;
    }

    console.log(task);
    props.addTask(task);
  };
  return (
    <div>
      <form onSubmit={handliSubmit}>
        <input
          onChange={(event) => setTask(event.target.value)}
          value={task}
          type="text"
          placeholder="КОД"
        />
        <button type="submit" className="btn">
          Перевірити
        </button>
      </form>
    </div>
  );
}
