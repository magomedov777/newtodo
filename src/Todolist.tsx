import React, { ChangeEvent, useState, KeyboardEvent } from "react";
import s from './todolist.module.css';

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
};

type TaskType = {
  id: string;
  title: string;
  isDone: boolean;
};

export type FilterValueType = 'all' | 'active' | 'completed'

const Todolist = (props: PropsType) => {

  const [title, setTitle] = useState('');

  const addInputTask = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.currentTarget.value)
  };

  const addNewTask = () => {
    if (title.trim() !== '') {
      props.addTask(props.todolistID, title)
      setTitle('')
    }
  };

  const removeTodoHandler = () => {
    props.removeTodo(props.todolistID)
  }

  return (
    <div className={s.list}>
      <button onClick={removeTodoHandler} className={s.removeTodoBtn}>X</button>
      <h1 className={s.mainTitle}>{props.title}</h1>
      <input
        className={s.inputAddTask}
        placeholder={'Hi! Add new skills! >>>'}
        onChange={addInputTask}
        value={title}
        onKeyPress={(event: KeyboardEvent<HTMLInputElement>) => {
          if (event.key === 'Enter') {
            addNewTask()
          }
        }} />

      <button className={s.btnPlus} onClick={addNewTask}>+</button>
      <ul>
        {props.tasks.map((t) => {
          const onChangeCheckboxHandler = (event: ChangeEvent<HTMLInputElement>) => {
            props.checkboxState(props.todolistID, t.id, event.currentTarget.checked)
          }
          return (
            <li key={t.id}>  {/*className={el.isDone ? s.isDone : ''} for opacity tasks*/}
              <button
                className={s.deleteBtn}
                onClick={() => props.deleteTasks(props.todolistID, t.id)}>x</button>
              <span className={s.taskClass}>{t.title}</span>
              <input
                type="checkbox"
                checked={t.isDone}
                onChange={onChangeCheckboxHandler}
              />
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
