import React, { FC, useState } from "react";
import { JsxElement } from "typescript";
import { v1 } from "uuid";
import "./App.css";
import Todolist from "./Todolist";


const App: () => JSX.Element = () => {
  const title = "Todolist";
  const [tasks1, setTask] = useState([
    { id: v1(), title: "HTML&CSS", isDone: true },
    { id: v1(), title: "JS", isDone: true },
    { id: v1(), title: "ReactJS", isDone: false },
  ]);
  
  

  const deleteTasks = (tID: string) => {
    setTask(tasks1.filter((el) => el.id !== tID))
  };

  const addTask = (title: string) => {
    let task = {id: v1(), title: title, isDone: false}
    const newTask = [task, ...tasks1]
    setTask(newTask)
    
  };



  return (
    <div className="App">
      <Todolist
        title={"Todolist"}
        tasks={tasks1}
        deleteTasks={deleteTasks}
        addTask={addTask}
         />
    </div>
  );
};

export default App;
