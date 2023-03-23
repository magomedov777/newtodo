import { title } from "process";
import React, { FC, useState } from "react";

type PropsType = {
  title: string;
  tasks: TaskType[];
  removeTask: (ID: number) => void;
};
type TaskType = {
  id: number;
  title: string;
  isDone: boolean;
};

const Todolist = (props: PropsType) => {
  let [filter, setFilter] = useState("all");
  let filteredTask = (btnName: string) => {
    setFilter(btnName);
  };
  let filterTask = props.tasks;
  if (filter === "active") {
    filterTask = props.tasks.filter((t) => !t.isDone);
  }
  if (filter === "completed") {
    filterTask = props.tasks.filter((t) => t.isDone);
  }
  return (
    <div>
      <h1>{props.title}</h1>
      <ul>
        {filterTask.map((el) => {
          return (
            <li key={el.id}>
              <button onClick={(ID) => props.removeTask(el.id)}>x</button>
              <span>{el.title}</span>
              <input type="checkbox" checked={el.isDone} />
            </li>
          );
        })}
      </ul>
      <button onClick={() => filteredTask("all")}>all</button>
      <button onClick={() => filteredTask("active")}>active</button>
      <button onClick={() => filteredTask("completed")}>completed</button>
    </div>
  );
};

export default Todolist;
