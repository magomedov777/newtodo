import { v1 } from "uuid";
import { TasksStateType } from "../App";
import { addTodolistACType, removeTodolistACType } from "./todolists-reducer";

export type removeTaskActionType = ReturnType<typeof removeTaskAC>

export type addTaskActionType = ReturnType<typeof addTaskAC>

export type changeTaskStatusActionType = ReturnType<typeof changeTaskStatusAC>

export type changeTaskTitleActionType = ReturnType<typeof changeTaskTitleAC>

const initialState: TasksStateType = {}

export const TasksReducer = (state = initialState, action: ActionsType) => {
  switch (action.type) {
    case 'REMOVE-TASK':
      return {
        ...state,[action.todolistId]:state[action.todolistId].filter(el => el.id !== action.taskId)
      }

    case 'ADD-TASK':
        let newTask = { id: v1(), title: action.newTitle, isDone: false }
      return {...state,[action.todolistId]:[newTask, ...state[action.todolistId]]
    }
    case 'CHANGE-TASK-STATUS':
      return {
        ...state,[action.todolistId]:state[action.todolistId]
        .map(el => el.id === action.taskId ? {...el, isDone: action.isDone} : el)
      }

    case 'CHANGE-TASK-TITLE':
       return {
          ...state,[action.todolistId]:state[action.todolistId]
          .map(el => el.id === action.taskId ? {...el, title: action.newTtitle} : el)
        }
    
    case 'ADD-TODOLIST':
        return {
            ...state,[action.payload.todolistId]: []
        }
    
    case 'REMOVE-TODOLIST': {
        let copyState = {...state}
        delete copyState[action.payload.todolistId]
        return copyState
        }

    default:
      return state;
  }
};

type ActionsType = removeTaskActionType 
| addTaskActionType 
| changeTaskStatusActionType 
| changeTaskTitleActionType
| addTodolistACType
|removeTodolistACType


export const removeTaskAC = (taskId: string, todolistId: string) => {
  return {type: 'REMOVE-TASK', taskId, todolistId}as const
};

export const addTaskAC = (newTitle: string, todolistId: string) => {
  return {type: 'ADD-TASK', newTitle, todolistId} as const;
};

export const changeTaskStatusAC = (taskId: string, isDone: boolean, todolistId: string) => {
    return {type: 'CHANGE-TASK-STATUS', taskId, isDone, todolistId} as const
};

export const changeTaskTitleAC = (taskId: string, newTtitle: string, todolistId: string) => {
    return {type: 'CHANGE-TASK-TITLE', taskId, newTtitle, todolistId} as const
};
