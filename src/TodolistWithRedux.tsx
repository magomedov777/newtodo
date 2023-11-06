import React, { ChangeEvent, useState, KeyboardEvent, memo, useCallback } from "react";
import s from './todolist.module.css';
import { AddItemForm } from "./AddItemForm";
import { EditableSpan } from "./EditableSpan";
import { SuperCheckbox } from "./SuperCheckbox";
import { TodolistsType } from "./AppWithRedux";
import { useSelector } from "react-redux";
import { AppRootStateType } from "./state/store";
import { useDispatch } from "react-redux";
import { addTaskAC, changeTaskStatusAC, changeTaskTitleAC, removeTaskAC } from "./state/tasks-reducer";
import { changeTodolistFilterAC, changeTodolistTitleAC, removeTodolistAC } from "./state/todolists-reducer";

type PropsType = {
  todolist: TodolistsType
};

export type TaskType = {
  id: string;
  title: string;
  isDone: boolean;
};

export type FilterValueType = 'all' | 'active' | 'completed'

const TodolistWithRedux = ({ todolist }: PropsType) => {
  const { id, filter, title } = todolist

  let tasks = useSelector<AppRootStateType, Array<TaskType>>(state => state.tasks[id])

  const dispatch = useDispatch()

  const removeTodoHandler = () => {
    dispatch(removeTodolistAC(id))
  };

  const addTaskHandler = (newTitle: string) => {
    dispatch(addTaskAC(newTitle, id))
  };

  const updateTodolistTitleHandler = (updateTitle: string) => {
    dispatch(changeTodolistTitleAC(id, updateTitle))
  };

  const updateTaskHandler = (tID: string, updateTitle: string) => {
    dispatch(changeTaskTitleAC(tID, updateTitle, id))
  };

  const onChangeCheckboxHandler = (tID: string, newIsDone: boolean) => {
    dispatch(changeTaskStatusAC(tID, newIsDone, id))
  };

  const onAllClickHandler = () => dispatch(changeTodolistFilterAC(id, 'all'))
  const onActiveClickHandler = () => dispatch(changeTodolistFilterAC(id, 'active'))
  const onCompletedClickHandler = () => dispatch(changeTodolistFilterAC(id, 'completed'))


  if (filter === 'active') {
    tasks = tasks.filter((t) => !t.isDone)
  };
  if (filter === 'completed') {
    tasks = tasks.filter((t) => t.isDone)
  };

  return (

    <div className={s.list}>
      <button onClick={removeTodoHandler} className={s.removeTodoBtn}>X</button>
      <h1 className={s.mainTitle}>
        <EditableSpan callBack={updateTodolistTitleHandler} oldTitle={title} />
      </h1>
      <AddItemForm callBack={addTaskHandler} />
      <ul>
        {
          tasks.map((t) => {
            const onClickHandler = () => dispatch(removeTaskAC(t.id, id))
            return (
              <li key={t.id}>  {/*className={el.isDone ? s.isDone : ''} for opacity tasks*/}
                <button
                  className={s.deleteBtn}
                  onClick={onClickHandler}>x</button>
                <span className={s.taskClass}>
                  <EditableSpan callBack={(updateTitle) => updateTaskHandler(t.id, updateTitle)} oldTitle={t.title} />
                </span>
                <SuperCheckbox callBack={(newIsDone) => onChangeCheckboxHandler(t.id, newIsDone)} isDone={t.isDone} />
              </li>
            );
          })}
      </ul>
      <button className={s.btnTask} onClick={onAllClickHandler}>all</button>
      <button className={s.btnTask} onClick={onActiveClickHandler}>active</button>
      <button className={s.btnTask} onClick={onCompletedClickHandler}>completed</button>
    </div>
  );
};

export default TodolistWithRedux;
