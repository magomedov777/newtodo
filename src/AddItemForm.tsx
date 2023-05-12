import React, { ChangeEvent, KeyboardEvent, useState } from 'react';
import s from './todolist.module.css';

type PropsType = {
    callBack: (title: string) => void
}

export const AddItemForm = (props: PropsType) => {
    const [title, setTitle] = useState('');

    const addInputTask = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    };

    const addNewTask = () => {
        if (title.trim() !== '') {
            props.callBack(title)
            setTitle('')
        }
    };

    return (
        <div>
            <input
                className={s.inputAddTask}
                placeholder={'Tap to create new skill!'}
                onChange={addInputTask}
                value={title}
                onKeyPress={(event: KeyboardEvent<HTMLInputElement>) => {
                    if (event.key === 'Enter') {
                        addNewTask()
                    }
                }} />


            <button className={s.btnPlus} onClick={addNewTask}>+</button>
        </div>
    )
}
