import { title } from "process";
import React from "react";


type PropsType = {
  title: string
  checked: boolean
  tasks: TaskType[]
};

type TaskType = {
  id: number
   title: string
    isDone: boolean
};


const Todolist = (props: PropsType) => {
  const title = 'New Todolist'
  const newTM = props.tasks.map((el) => {
    return(
      <li>
      <span>{el.title}</span>
      <input type='checkbox' checked={el.isDone}/>
      </li>
    )
  })
  return (
    <div>
      <h1>{props.title}</h1>
      <input type="text" />
      <button>+</button>
      <ul>
        {newTM}
      
      </ul>
      <button>all</button>
      <button>active</button>
      <button>completed</button>
    </div>
  );
};

export default Todolist;
