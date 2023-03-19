import { title } from "process";
import React from "react";

type PropsType = {
  title: string
  checked: boolean
}



const Todolist = (props: PropsType) => {
 const newTitle = 'Todolist';
  return (
    <div>
      <h1>{newTitle}</h1>
      <input type="text" />
      <button>+</button>
      <ul>
        <li><span>HTML</span><input type="checkbox" checked={true}/></li>
        <li><span>JS</span><input type="checkbox" checked={false}/></li>
        <li><span>ReactJS</span><input type="checkbox" checked={true}/></li>

       
        </ul>
      <button>all</button>
      <button>active</button>
      <button>completed</button>
    </div>
  );
};

export default Todolist;
