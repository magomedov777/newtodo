import React from "react";
import "./App.css";
import { FilterValueType, TaskType } from "./Todolist";
import { Header } from "./Header";
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
  let todolists = useSelector<AppRootStateType, Array<TodolistsType>>(state => state.todolists)

  const dispatch = useDispatch()

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
