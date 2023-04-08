import React, { ChangeEvent, useState, KeyboardEvent } from "react";
import s from './todolist.module.css';

type PropsType = {
  title: string;
  tasks: TaskType[];
  deleteTasks: (tID: string) => void
  addTask: (title: string) => void
};

type TaskType = {
  id: string;
  title: string;
  isDone: boolean;
};

const Todolist = (props: PropsType) => {
  const [tasksFilter, setTasksFilter] = useState('all')

  let filterTasksAll = (buttonName: string) => {
    setTasksFilter(buttonName)
  };

  let filteredTasks = props.tasks;
  if (tasksFilter === 'active') {
    filteredTasks = props.tasks.filter((t) => !t.isDone)
  };
  if (tasksFilter === 'completed') {
    filteredTasks = props.tasks.filter((t) => t.isDone)
  };

  const [title, setTitle] = useState('');

  const addInputTask = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.currentTarget.value)
  };

  const addNewTask = () => {
    props.addTask(title)
      setTitle('')
    };

  return (
    <div className={s.list}>
      <h1 className={s.mainTitle}>{props.title}</h1>
      <input
        className={s.inputAddTask}
        placeholder={'Create new tasks!'}
        onChange={addInputTask}
        value={title}
        onKeyPress={(event: KeyboardEvent<HTMLInputElement>) => {
          if (event.key === 'Enter') {
            addNewTask()
          }
        }}/>

      <button className={s.btnPlus} onClick={addNewTask}>+</button>
      <ul>
        {filteredTasks.map((el) => {
         //debugger
          return (
            <li key={el.id}>  {/*className={el.isDone ? s.isDone : ''} for opacity tasks*/}
              <button
                className={s.deleteBtn}
                onClick={() => props.deleteTasks(el.id)}>x</button>
              <span className={s.taskClass}>{el.title}</span>
              <input
                type="checkbox"
                checked={el.isDone}
              />
            </li>
          );
        })}
      </ul>
      <button className={s.btnTask} onClick={() => filterTasksAll('all')}>all</button>
      <button className={s.btnTask} onClick={() => filterTasksAll('active')}>active</button>
      <button className={s.btnTask} onClick={() => filterTasksAll('completed')}>completed</button>
    </div>
  );
};

export default Todolist;
