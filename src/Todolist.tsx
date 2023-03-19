import { title } from 'process'
import React from 'react'


  
const Todolist = () => {
    return (
    <div>
        <h1>New todo</h1>
          <input type="text" />
           <button>+</button>
            <ul>
             <li>HTML</li>
             <li>JS</li>
             <li>ReactJS</li>
            </ul>
           <button>all</button>
           <button>active</button>
           <button>completed</button>
    </div>
  )
};




export default Todolist;