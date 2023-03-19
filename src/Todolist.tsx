import { title } from 'process'
import React from 'react'


  
const Todolist = () => {
  const title = 'New TODOLIST';
    return (
    <div>
        <h1>{title}</h1>
          <input type="text" />
           <button>+</button>
            <ul>
             <li><span>HTML</span><input type="checkbox" /></li>
             <li><span>JS</span><input type="checkbox" /></li>
             <li><span>ReactJS</span><input type="checkbox" /></li>
            </ul>
           <button>all</button>
           <button>active</button>
           <button>completed</button>
    </div>
  )
};




export default Todolist;