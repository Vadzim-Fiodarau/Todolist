
import { FilterValuesType, TodolistType } from "../App";
import {v1} from "uuid";


export type TsarType = removeTodolistACType | addTodolistACType | changeTodolistTitleACType | changeTodolistFilterACType



export const todolistReducer = (state: TodolistType[], action: TsarType): TodolistType[] => {
    switch (action.type) {
        case 'REMOVE-TODOLIST': {
            return state.filter(tdl => tdl.id!== action.id)
        }
        case 'ADD-TODOLIST': {
            const newTDL: TodolistType = {id: action.todolistId, title: action.title, filter: "all"}
            return [...state, newTDL]
        }
        case 'CHANGE-TODOLIST-TITLE': {
            return state.map(tdl => tdl.id === action.id ? {...tdl, title: action.title} : tdl)
        }
        case 'CHANGE-TODOLIST-FILTER': {
            return state.map(tdl => tdl.id === action.id ? {...tdl, filter: action.filter} : tdl)
        }
        default:
            return state
    }
}

export type removeTodolistACType = ReturnType<typeof removeTodolistAC>
export const removeTodolistAC = (id: string) => ({
    type: 'REMOVE-TODOLIST',
    id
}) as const

export type addTodolistACType = ReturnType<typeof addTodolistAC>
export const addTodolistAC = (newTodolistTitle: string) => ({
    type: 'ADD-TODOLIST',
    title: newTodolistTitle,
    todolistId: v1()
}) as const

type changeTodolistTitleACType = ReturnType<typeof changeTodolistTitleAC>
export const changeTodolistTitleAC = ( id: string,  title: string) => ({
    type: 'CHANGE-TODOLIST-TITLE',  id,  title
} ) as const

type changeTodolistFilterACType = ReturnType<typeof changeTodolistFilterAC>
export const changeTodolistFilterAC = ( id: string,  filter: FilterValuesType) => ({
    type: 'CHANGE-TODOLIST-FILTER',  id,  filter
}) as const