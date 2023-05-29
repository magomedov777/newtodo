import React, { ChangeEvent } from 'react'

type SuperCheckboxType = {
    callBack: (newIsDone: boolean) => void
    isDone: boolean
}

export const SuperCheckbox = (props: SuperCheckboxType) => {
    const onChangeCheckboxHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.callBack(event.currentTarget.checked)
    };
    return (
        <input
            type="checkbox"
            checked={props.isDone}
            onChange={onChangeCheckboxHandler}
        />
    )
}
