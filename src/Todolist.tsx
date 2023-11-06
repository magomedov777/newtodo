import React, { ChangeEvent, useState, KeyboardEvent, FC, memo } from "react";
import s from './todolist.module.css';
import { AddItemForm } from "./AddItemForm";
import { EditableSpan } from "./EditableSpan";
import { SuperCheckbox } from "./SuperCheckbox";

type Props = {
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

const Todolist: FC<Props> = memo(({ id, title, tasks, filter, deleteTasks, addTask, checkboxState,
  changeFilter, removeTodo, updateTask, updateTodolistTitle }) => {
  const removeTodoHandler = () => {
    removeTodo(id)
  };

  const addTaskHandler = (newTitle: string) => {
    addTask(id, newTitle)
  };

  const updateTodolistTitleHandler = (updateTitle: string) => {
    updateTodolistTitle(id, updateTitle)
  };

  const updateTaskHandler = (tID: string, updateTitle: string) => {
    updateTask(id, tID, updateTitle)
  };

  const onChangeCheckboxHandler = (tID: string, newIsDone: boolean) => {
    checkboxState(id, tID, newIsDone)
  };

  return (

    <div className={s.list}>
      <button onClick={removeTodoHandler} className={s.removeTodoBtn}>X</button>
      <h1 className={s.mainTitle}>
        <EditableSpan callBack={updateTodolistTitleHandler} oldTitle={title} />
      </h1>
      <AddItemForm callBack={addTaskHandler} />
      <ul>
        {tasks.map((t) => {
          return (
            <li key={t.id}>  {/*className={el.isDone ? s.isDone : ''} for opacity tasks*/}
              <button
                className={s.deleteBtn}
                onClick={() => deleteTasks(id, t.id)}>x</button>
              <span className={s.taskClass}>
                <EditableSpan callBack={(updateTitle) => updateTaskHandler(t.id, updateTitle)} oldTitle={t.title} />
              </span>
              <SuperCheckbox callBack={(newIsDone) => onChangeCheckboxHandler(t.id, newIsDone)} isDone={t.isDone} />
            </li>
          );
        })}
      </ul>
      <button className={s.btnTask} onClick={() => changeFilter(id, 'all')}>all</button>
      <button className={s.btnTask} onClick={() => changeFilter(id, 'active')}>active</button>
      <button className={s.btnTask} onClick={() => changeFilter(id, 'completed')}>completed</button>
    </div>
  );
})

export default Todolist;
