import { v1 } from "uuid";
import { TodolistsType } from "../App"
import { FilterValueType } from "../Todolist";


const initialState: TodolistsType[] = []

export const TodolistsReducer = (state = initialState, action: ActionsType): TodolistsType[] => {
    switch(action.type) {
        case 'REMOVE-TODOLIST': {
            return state.filter(el => el.id !== action.payload.todolistId)
        }
        case 'ADD-TODOLIST': {
         const newTodolistID = action.payload.todolistId;
         const newTodolist: TodolistsType = { id: newTodolistID, title: action.payload.newTodolistTitle, filter: 'all' };
            return [...state, newTodolist]
        }
        case 'CHANGE-TODOLIST-TITLE': {
            return state.map(el => el.id === action.payload.todolistId ? {...el, title: action.payload.newTodolistTitle} : el)
        }
        case 'CHANGE-TODOLIST-FILTER': {
            return state.map(el => el.id === action.payload.todolistId ? {...el, filter: action.payload.newFilter} : el)
        }
        default: return state
    }
};

export type ActionsType = removeTodolistACType 
| addTodolistACType 
| changeTodolistTitleACType 
| changeTodolistFilterACType

export type removeTodolistACType = ReturnType<typeof removeTodolistAC>

export const removeTodolistAC = (todolistId: string) => {
    return {
        type: 'REMOVE-TODOLIST',
        payload: {
            todolistId
        }
    }as const
};

export type addTodolistACType = ReturnType<typeof addTodolistAC>

export const addTodolistAC = (newTodolistTitle: string) => {
    return {
        type: 'ADD-TODOLIST',
        payload: {
            todolistId: v1(), 
            newTodolistTitle
        }
    }as const
};

export type changeTodolistTitleACType = ReturnType<typeof changeTodolistTitleAC>

export const changeTodolistTitleAC = (todolistId: string, newTodolistTitle: string) => {
    return {
        type: 'CHANGE-TODOLIST-TITLE',
        payload: {
            todolistId,
            newTodolistTitle
        }
    }as const
};

export type changeTodolistFilterACType = ReturnType<typeof changeTodolistFilterAC>

export const changeTodolistFilterAC = (todolistId: string, newFilter: FilterValueType) => {
    return {
        type: 'CHANGE-TODOLIST-FILTER',
        payload: {
            todolistId,
            newFilter
        }
    }as const
};