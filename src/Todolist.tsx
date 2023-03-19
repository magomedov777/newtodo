import { title } from 'process'
import React from 'react'


  
const Todolist = (props: PropsType) => {
    const todoMapFunc = props.tasks.map((el) => {
        return (
        <li>
            <span>{el.title}</span>
            <input type='checkbox' checked={el.isDone}></input>
                           </li>)})
  return (
    <div>
        <h1>{props.title}</h1>
          <input type="text" />
           <button>+</button>
            <ul>
             {todoMapFunc}
            </ul>
           <button>all</button>
           <button>active</button>
           <button>completed</button>
    </div>
  )
};




export default Todolist;