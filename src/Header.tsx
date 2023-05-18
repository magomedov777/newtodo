import React from 'react';
import s from './header.module.css';
import { AddItemForm } from './AddItemForm';

type PropsType = {
    callBack: (newTitle: string) => void
}

export const Header = (props: PropsType) => {
    return (
        <header className={s.mainHeader}>

            <div className={s.headerMenu}>
                <img className={s.logo} src='https://pixlok.com/wp-content/uploads/2021/12/Technology-Icon-0oikef.png' alt='technology'></img>
                <span className={s.logoTitle}>smart-list.com</span>
                <div className={s.createTodo}>
                    <AddItemForm callBack={props.callBack} />
                </div>
                <div className={s.item}><a className={s.link} href="#">account</a></div>
                <div className={s.item}><a className={s.link} href="#">settings</a></div>
                <div className={s.item}><a className={s.link} href="#">mode</a></div>
                <div className={s.item}><a className={s.link} href="#">market</a></div>
                <div className={s.item}><a className={s.link} href="#">api</a></div>
            </div>

        </header>
    )
}
