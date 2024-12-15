import React, { useState, useEffect } from "react";
import CreateTask from "./CreateTask";
import TaskList from "./TaskList";

export default function Main() {
  const [list, setList] = useState(() => {
    return JSON.parse(localStorage.getItem("savedList")) ?? [];
  });
  const addTask = (task) => {
    // console.log("1");
    const newTask = {
      id: Math.floor(Math.random() * 9000) + 1000,
      text: task,
      isComplete: false,
    };
    setList([...list, newTask]);
  };
  // console.log(list);
  const deleteTask = (id) => {
    console.log("видилення", id);
    const newList = list.filter((task) => task.id !== id);
    setList(newList);
  };
  const completeTask = (id) => {
    console.log("Викононо", id);
    const newList = list.map((task) => {
      if (task.id === id) {
        return { ...task, isComplete: !task.isComplete };
      } else {
        return task;
      }
    });
    setList(newList);
  };
  useEffect(() => {
    localStorage.setItem("savedList", JSON.stringify(list));
  }, [list]);

  return (
    <div className="main">
      <h2 className="title">Ваш</h2>
      <h2 className="title1">код</h2>
      <CreateTask addTask={addTask} />
      <TaskList
        list={list}
        deleteTask={deleteTask}
        completeTask={completeTask}
      />
    </div>
  );
}
