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
  let [filterValue, setFilterValue] = useState("all");

  let filterTask = (buttonName: string) => {
    setFilterValue(buttonName);
  };
  let filteredTask = props.tasks;
  if (filterValue === "active") {
    filteredTask = props.tasks.filter((el) => !el.isDone);
  }
  if (filterValue === "completed") {
    filteredTask = props.tasks.filter((el) => el.isDone);
  }

  return (
    <div>
      <h1>{props.title}</h1>
      <ul>
        {filteredTask.map((el) => {
          return (
            <li key={el.id}>
              <button onClick={(ID) => props.removeTask(el.id)}>x</button>
              <span>{el.title}</span>
              <input type="checkbox" checked={el.isDone} />
            </li>
          );
        })}
      </ul>
      <button onClick={() => filterTask("all")}>all</button>
      <button onClick={() => filterTask("active")}>active</button>
      <button onClick={() => filterTask("completed")}>completed</button>
    </div>
  );
};

export default Todolist;
