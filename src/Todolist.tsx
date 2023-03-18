import { title } from 'process'
import React from 'react'




type PropsType = {
    checked: boolean
    title: string
    tasks: TasksType[]
    }

type TasksType = {
    id: number
    title: string
    isDone: boolean
}
  
const Todolist = (props: PropsType) => {
  return (
    <div>
          <h1>{props.title}</h1>
          <input type="text" />
       <button>+</button>
        <ul>
            {props.tasks.map((el) => {
            return (
            <li>
                <span>{el.title}</span>
                <input type='checkbox' checked={el.isDone}></input>
                               </li>
                               )})}
         {/* <li><span>{props.tasks[0].title}</span>
          <input type='checkbox' checked={props.tasks[0].isDone}></input>
          </li>
           <li><span>{props.tasks[1].title}</span>
           <input type='checkbox' checked={props.tasks[1].isDone}></input>
           </li>
            <li><span>{props.tasks[2].title}</span>
             <input type='checkbox' checked={props.tasks[2].isDone}></input>
             </li> */}
          </ul>
        <button>all</button>
        <button>active</button>
        <button>completed</button>
    </div>
  )
}




export default Todolist;