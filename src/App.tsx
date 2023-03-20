import React, { useState } from "react";
import "./App.css";
import Todolist from "./Todolist";

function App() {
  // let tasks1 = [
  //   { id: 1, title: "HTML&CSS", isDone: true },
  //   { id: 2, title: "JS", isDone: true },
  //   { id: 3, title: "ReactJS", isDone: false },
  // ];

  let[tasks1, setTask] = useState([
    { id: 1, title: "HTML&CSS", isDone: true },
    { id: 2, title: "JS", isDone: true },
    { id: 3, title: "ReactJS", isDone: false },
  ])

  const removeTasks = (taskID: number) => {
    setTask(tasks1.filter((el) => el.id !== taskID))
  }

  return (
    <div className="App">
      <Todolist title={"New Todo"} checked={true} tasks={tasks1} removeTasks={removeTasks}/>
    </div>
  );
}

export default App;
