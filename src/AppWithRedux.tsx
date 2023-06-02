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
import { useSelector } from "react-redux";
import { AppRootStateType } from "./state/store";
import { useDispatch } from "react-redux";
import TodolistWithRedux from "./TodolistWithRedux";


export type TodolistsType = {
  id: string
  title: string
  filter: FilterValueType
}

export type TasksStateType = {
  [key: string]: Array<TaskType>
}

const AppWithRedux: () => JSX.Element = () => {
  let todolistID1 = v1()
  let todolistID2 = v1()

  let todolists = useSelector<AppRootStateType, Array<TodolistsType>>(state => state.todolists)

  const dispatch = useDispatch()

  const updateTask = (todolistID: string, tID: string, updateTitle: string) => {
    dispatch(changeTaskTitleAC(tID, updateTitle, todolistID))
  };

  const updateTodolistTitle = (todolistID: string, updateTitle: string) => {
    dispatch(changeTodolistTitleAC(todolistID, updateTitle))
  };

  const deleteTasks = (todolistID: string, tID: string) => {
    dispatch(removeTaskAC(tID, todolistID))
  };

  const addTask = (todolistID: string, title: string) => {
    dispatch(addTaskAC(title, todolistID))
  };

  const checkboxState = (todolistID: string, newID: string, newIsDone: boolean) => {
    dispatch(changeTaskStatusAC(newID, newIsDone, todolistID))
  };

  const changeFilter = (todolistID: string, value: FilterValueType) => {
    dispatch(changeTodolistFilterAC(todolistID, value))
  };

  const removeTodo = (todolistID: string) => {
    const action = removeTodolistAC(todolistID)
    dispatch(action)
  };

  const addTodolist = (newTitle: string) => {
    const action = addTodolistAC(newTitle)
    dispatch(action)
  }

  return (
    <div className="App">
      <Header callBack={addTodolist} />
      {
        todolists.map(tl => {
          return (
            <TodolistWithRedux todolist={tl} />
          )
        })
      }
    </div >
  );
};

export default AppWithRedux;
