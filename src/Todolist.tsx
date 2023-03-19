import { title } from 'process'
import React from 'react'

type PropsType = {
  title: string
  checked: boolean
  tasks: TaskType[]
}

type TaskType={
  id: number 
  title: string
  isDone: boolean
}
  
const Todolist = (props: PropsType) => {
  const title = 'New TODOLIST';
    return (
    <div>
        <h1>{props.title}</h1>
          <input type="text" />
           <button>+</button>
            <ul>
             {/* <li><span>{props.tasks[0].title}</span><input type="checkbox" checked={props.tasks[0].isDone}/></li>
             <li><span>{props.tasks[1].title}</span><input type="checkbox" checked={props.tasks[1].isDone}/></li>
             <li><span>{props.tasks[2].title}</span><input type="checkbox" checked={props.tasks[2].isDone}/></li> */}
            </ul>
           <button>all</button>
           <button>active</button>
           <button>completed</button>
    </div>
  )
};




export default Todolist;