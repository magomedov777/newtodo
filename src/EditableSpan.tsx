import React, { ChangeEvent, useState } from 'react';

type PropsType = {
    oldTitle: string
    callBack: (updateTitle: string) => void
}

export const EditableSpan = (props: PropsType) => {
    const [updateTitle, setUpdateTitle] = useState(props.oldTitle)
    const [edit, setEdit] = useState(false)
    const onDoubleClickHandler = () => {
        setEdit(!edit)
        if(edit){addTask()}};

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setUpdateTitle(event.currentTarget.value)};

    const addTask = () => {props.callBack(updateTitle)};

  return (
    edit 
    ? <input onBlur={onDoubleClickHandler} onChange={onChangeHandler} value={updateTitle} type='text' autoFocus/>
    : <span onDoubleClick={onDoubleClickHandler}>{props.oldTitle}</span>
  )
};
