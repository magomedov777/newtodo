import React, { FC, useState } from "react";
import { JsxElement } from "typescript";
import "./App.css";
import Todolist from "./Todolist";

const App: () => JSX.Element = () => {
  const title = "Todolist";
  const [tasks1, setTask] = useState([
    { id: 1, title: "HTML&CSS", isDone: true },
    { id: 2, title: "JS", isDone: true },
    { id: 3, title: "ReactJS", isDone: false },
  ]);

  const removeTask = (ID: number) => {
    setTask(tasks1.filter((el) => el.id !== ID));
  };

  return (
    <div className="App">
      <Todolist title={"Todolist"} tasks={tasks1} removeTask={removeTask} />
    </div>
  );
};

export default App;
