import { title } from "process";
import React, { FC, useState } from "react";

type PropsType = {
  title: string;
  tasks: TaskType[];
  deleteTasks: (tID: number) => void
};
type TaskType = {
  id: number;
  title: string;
  isDone: boolean;
};

const Todolist = (props: PropsType) => {
  let[filter, setFilter] = useState('all')
  let filterTask = (btnName: string) => {
    setFilter(btnName)
  }
  let filteredTasksAll = props.tasks
  if(filter === 'active'){
    filteredTasksAll = props.tasks.filter((t) => !t.isDone)
  }
  if(filter === 'completed'){
    filteredTasksAll = props.tasks.filter((t) => t.isDone)
  }
  
  return (
    <div>
      <h1>{props.title}</h1>
      <ul>
        {filteredTasksAll.map((el) => {
          return (
            <li key={el.id}>
              <button onClick={() => props.deleteTasks(el.id)}>x</button>
              <span>{el.title}</span>
              <input type="checkbox" checked={el.isDone} />
            </li>
          );
        })}
      </ul>
      <button onClick={() => filterTask('all')}>all</button>
      <button onClick={() =>  filterTask('active')}>active</button>
      <button onClick={() =>  filterTask('completed')}>completed</button>
    </div>
  );
};

export default Todolist;
