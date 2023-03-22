import { title } from "process";
import React from "react";

type PropsType = {
  title: string;
  tasks: TaskType[];
  removeTask: (ID: number) => void
  filterTask: (buttonName: string) => void
  
};
type TaskType = {
  id: number;
  title: string;
  isDone: boolean;
 
};

const Todolist = (props: PropsType) => {
  const taskMap = props.tasks.map((el) => {
    return (
      <li key={el.id}>
        <button onClick={(ID) => props.removeTask(el.id)}>x</button>
        <span>{el.title}</span>
        <input type="checkbox" checked={el.isDone} />
      </li>
    );
  });
  return (
    <div>
      <h1>{props.title}</h1>
      <ul>{taskMap}</ul>
      <button onClick={() => props.filterTask('all')}>all</button>
      <button onClick={() => props.filterTask('active')}>active</button>
      <button onClick={() => props.filterTask('completed')}>completed</button>

    </div>
  );
};

export default Todolist;
