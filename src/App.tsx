import React, { useState } from "react";
import { v1 } from "uuid";
import "./App.css";
import Todolist, { FilterValueType } from "./Todolist";

type TodolistsType = {
  id: string
  title: string
  filter: FilterValueType
}
const App: () => JSX.Element = () => {
  let todolistID1 = v1()
  let todolistID2 = v1()

  let [todolists, setTodolists] = useState<Array<TodolistsType>>([
    { id: todolistID1, title: 'Front-End', filter: 'all' },
    { id: todolistID2, title: 'Back-End', filter: 'all' },
  ])

  let [tasks, setTasks] = useState({
    [todolistID1]: [
      { id: v1(), title: 'HTML&CSS', isDone: true },
      { id: v1(), title: 'JS', isDone: true },
      { id: v1(), title: 'ReactJS', isDone: false },
      { id: v1(), title: 'Redux', isDone: true },
      { id: v1(), title: 'MaterialUI', isDone: false }
    ],

    [todolistID2]: [
      { id: v1(), title: 'Rest API', isDone: true },
      { id: v1(), title: 'Sql', isDone: true },
      { id: v1(), title: 'MongoDB', isDone: false },
      { id: v1(), title: 'NextJS', isDone: true }
    ]
  })

  const removeTodo = (todolistID: string) => {
    setTodolists(todolists.filter(tl => tl.id !== todolistID))
    delete tasks[todolistID]
  }

  const deleteTasks = (todolistID: string, tID: string) => {
    setTasks({ ...tasks, [todolistID]: tasks[todolistID].filter(tl => tl.id !== tID) })
  };

  const addTask = (todolistID: string, title: string) => {
    let newTask = { id: v1(), title: title, isDone: false }
    setTasks({ ...tasks, [todolistID]: [newTask, ...tasks[todolistID]] })
  };

  const checkboxState = (todolistID: string, newID: string, newIsDone: boolean) => {
    setTasks({ ...tasks, [todolistID]: tasks[todolistID].map(t => t.id === newID ? { ...t, isDone: newIsDone } : t) })
  };

  const changeFilter = (todolistID: string, value: FilterValueType) => {
    setTodolists(todolists.map(fl => fl.id === todolistID ? { ...fl, filter: value } : fl))
  };

  return (
    <div className="App">
      {todolists.map(tl => {
        let tasksForTodolist = tasks[tl.id]
        if (tl.filter === 'active') {
          tasksForTodolist = tasks[tl.id].filter((t) => !t.isDone)
        };
        if (tl.filter === 'completed') {
          tasksForTodolist = tasks[tl.id].filter((t) => t.isDone)
        };
        return (
          <Todolist
            key={tl.id}
            id={tl.id}
            title={tl.title}
            todolistID={tl.id}
            filter={tl.filter}
            changeFilter={changeFilter}
            tasks={tasksForTodolist}
            deleteTasks={deleteTasks}
            addTask={addTask}
            checkboxState={checkboxState}
            removeTodo={removeTodo}
          />
        )
      })}

    </div>
  );
};

export default App;
