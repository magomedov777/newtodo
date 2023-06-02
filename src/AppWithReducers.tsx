import React, { useReducer, useState } from "react";
import { v1 } from "uuid";
import "./App.css";
import Todolist, { FilterValueType, TaskType } from "./Todolist";
import { AddItemForm } from "./AddItemForm";
import { Header } from "./Header";
import { TasksReducer, addTaskAC, changeTaskStatusAC, changeTaskTitleAC, removeTaskAC } from "./state/tasks-reducer";
import { TodolistsReducer } from "./state/todolists-reducer";
import { changeTodolistTitleAC } from "./state/todolists-reducer";
import { changeTodolistFilterAC } from "./state/todolists-reducer";
import { removeTodolistAC } from "./state/todolists-reducer";
import { addTodolistAC } from "./state/todolists-reducer";


export type TodolistsType = {
  id: string
  title: string
  filter: FilterValueType
}

export type TasksStateType = {
  [key: string]: Array<TaskType>
}

const AppWithReducers: () => JSX.Element = () => {
  let todolistID1 = v1()
  let todolistID2 = v1()

  let [todolists, dispatchToTodolists] = useReducer(TodolistsReducer, [
    { id: todolistID1, title: 'Front-End', filter: 'all' },
    { id: todolistID2, title: 'Back-End', filter: 'all' },
  ])

  let [tasks, dispatchToTasks] = useReducer(TasksReducer, {
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
    ],
  })

  

  const updateTodolistTitle = (todolistID: string, updateTitle: string) => {
    dispatchToTodolists(changeTodolistTitleAC(todolistID, updateTitle))
  };

  const deleteTasks = (todolistID: string, tID: string) => {
    dispatchToTasks(removeTaskAC(tID, todolistID))
  };

  const addTask = (todolistID: string, title: string) => {
    dispatchToTasks(addTaskAC(title, todolistID))
  };

  const checkboxState = (todolistID: string, newID: string, newIsDone: boolean) => {
    dispatchToTasks(changeTaskStatusAC(newID, newIsDone, todolistID))
  };

  const changeFilter = (todolistID: string, value: FilterValueType) => {
    dispatchToTodolists(changeTodolistFilterAC(todolistID, value))
  };

  const removeTodo = (todolistID: string) => {
    const action = removeTodolistAC(todolistID)
    dispatchToTasks(action)
    dispatchToTodolists(action)
  };

  const addTodolist = (newTitle: string) => {
    const action = addTodolistAC(newTitle)
    dispatchToTasks(action)
    dispatchToTodolists(action)
  }

  return (
    <div className="App">
      <Header callBack={addTodolist} />
      {
        todolists.map(tl => {
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
              updateTask={updateTask}
              updateTodolistTitle={updateTodolistTitle}
            />
          )
        })
      }
    </div >
  );
};

export default AppWithReducers;
