import React, { useState } from "react";
import "./App.css";
import Todolist from "./Todolist";

function App() {
  const title = "Todolist";
  // let tasks1 = [
  //   { id: 1, title: "HTML&CSS", isDone: true },
  //   { id: 2, title: "JS", isDone: true },
  //   { id: 3, title: "ReactJS", isDone: false },
  // ];
  const [tasks1, setTask] = useState([
    { id: 1, title: "HTML&CSS", isDone: true },
    { id: 2, title: "JS", isDone: true },
    { id: 3, title: "ReactJS", isDone: false },
  ]);

  let[filterValue, setFilterValue] = useState('all')

  const removeTask = (ID: number) => {
    setTask(tasks1.filter((el) => el.id !== ID));
  };

  // const filteredTask = tasks1.filter((el) => el.isDone)

  const filterTask = (filterValue: string) => {
    setFilterValue(filterValue)
  };
  let filteredTasks = tasks1;
  if (filterValue === "active") {
    filteredTasks = tasks1.filter((el) => !el.isDone);
  }
  if (filterValue === "completed") {
    filteredTasks = tasks1.filter((el) => el.isDone);
  }
  if (filterValue === "all") {
    filteredTasks = tasks1;
  }

  return (
    <div className="App">
      <Todolist
        title={"Todolist"}
        tasks={filteredTasks}
        removeTask={removeTask}
        filterTask={filterTask}
      />
    </div>
  );
}

export default App;
