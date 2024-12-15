import React from "react";

export default function TaskList(props) {
  return (
    <ul className="list">
      {props.list.map((task) => (
        <li className="task" key={task.id}>
          <p className={task.isComplete ? "complete" : "text"}>{task.text}</p>
          <div>
            <button
              onClick={() => props.completeTask(task.id)}
              className="btn1"
              type="button"
            >
              викоростан
            </button>
            <button
              onClick={() => props.deleteTask(task.id)}
              className="btn1"
              type="button"
            >
              Видалити
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
