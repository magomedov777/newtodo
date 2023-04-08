import React, { useState } from "react";
import { v1 } from "uuid";
import "./App.css";
import Todolist from "./Todolist";


const App: () => JSX.Element = () => {
  const [tasks1, setTask] = useState([
    { id: v1(), title: "HTML&CSS", isDone: true },
    { id: v1(), title: "JS", isDone: false },
    { id: v1(), title: "ReactJS", isDone: true },
    { id: v1(), title: "Redux Toolkit", isDone: false }
  ]);

  const deleteTasks = (tID: string) => {
    setTask(tasks1.filter((el) => el.id !== tID))
  };

  const addTask = (title: string) => {
    const newTask = { id: v1(), title: title, isDone: false }
    setTask([newTask, ...tasks1])
  };

  const checkboxState = (newID: string, newIsDone: boolean) => {
      setTask(tasks1.map(el => el.id === newID ? {...el, isDone: newIsDone} : el))
  }

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
