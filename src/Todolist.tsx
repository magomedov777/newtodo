import React, { ChangeEvent, useState, KeyboardEvent } from "react";
import s from './todolist.module.css';
import { AddItemForm } from "./AddItemForm";
import { EditableSpan } from "./EditableSpan";
import { SuperCheckbox } from "./SuperCheckbox";

type PropsType = {
  id: string
  title: string;
  tasks: TaskType[];
  todolistID: string
  filter: FilterValueType
  deleteTasks: (todolistID: string, tID: string) => void
  addTask: (todolistID: string, title: string) => void
  checkboxState: (todolistID: string, newID: string, newIsDone: boolean) => void
  changeFilter: (todolistID: string, value: FilterValueType) => void
  removeTodo: (todolistID: string) => void
  updateTask: (todolistID: string, tID: string, updateTitle: string) => void
  updateTodolistTitle: (todolistID: string, updateTitle: string) => void
};

export type TaskType = {
  id: string;
  title: string;
  isDone: boolean;
};

export type FilterValueType = 'all' | 'active' | 'completed'

const Todolist = (props: PropsType) => {
  const removeTodoHandler = () => {
    props.removeTodo(props.todolistID)
  };

  const addTaskHandler = (newTitle: string) => {
    props.addTask(props.id, newTitle)
  };

  const updateTodolistTitleHandler = (updateTitle: string) => {
    props.updateTodolistTitle(props.todolistID, updateTitle)
  };

  const updateTaskHandler = (tID: string, updateTitle: string) => {
    props.updateTask(props.id, tID, updateTitle)
  };

  const onChangeCheckboxHandler = (tID: string, newIsDone: boolean) => {
    props.checkboxState(props.id, tID, newIsDone)
  };

  return (

    <div className={s.list}>
      <button onClick={removeTodoHandler} className={s.removeTodoBtn}>X</button>
      <h1 className={s.mainTitle}>
        <EditableSpan callBack={updateTodolistTitleHandler} oldTitle={props.title} />
      </h1>
      <AddItemForm callBack={addTaskHandler} />
      <ul>
        {props.tasks.map((t) => {
          return (
            <li key={t.id}>  {/*className={el.isDone ? s.isDone : ''} for opacity tasks*/}
              <button
                className={s.deleteBtn}
                onClick={() => props.deleteTasks(props.todolistID, t.id)}>x</button>
              <span className={s.taskClass}>
                <EditableSpan callBack={(updateTitle) => updateTaskHandler(t.id, updateTitle)} oldTitle={t.title} />
              </span>
              <SuperCheckbox callBack={(newIsDone) => onChangeCheckboxHandler(t.id, newIsDone)} isDone={t.isDone} />
            </li>
          );
        })}
      </ul>
      <button className={s.btnTask} onClick={() => props.changeFilter(props.todolistID, 'all')}>all</button>
      <button className={s.btnTask} onClick={() => props.changeFilter(props.todolistID, 'active')}>active</button>
      <button className={s.btnTask} onClick={() => props.changeFilter(props.todolistID, 'completed')}>completed</button>
    </div>
  );
};

export default Todolist;
