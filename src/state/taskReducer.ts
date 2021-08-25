import {FilterValuesType, TasksStateType, TodolistType} from "../App";
import {v1} from "uuid";
import {addTodolistACType, removeTodolistACType} from "./todolistReducer";


export type ActionTypes =
  removeTaskACType
  | addTaskACType
  | changeTaskStatusACType
  | changeTaskTitleACType
  | addTodolistACType
  | removeTodolistACType

let initialState: TasksStateType = {}
export const tasksReducer = (state: TasksStateType = initialState, action: ActionTypes): TasksStateType => {
  switch (action.type) {
    case 'REMOVE-TASK':
      let copyState = {...state}
      copyState[action.todolistId] = copyState[action.todolistId]
        .filter(task => task.id !== action.taskId)
      return copyState
    case 'ADD-TASK': {
      let copyState = {...state}
      let newTask = {id: v1(), title: action.title, isDone: false}
      let todolistTasks = copyState[action.todolistId]
      copyState[action.todolistId] = [newTask, ...todolistTasks]
      // {
      // ...state,
      // [action.todolistId]: [newTask, ...state[action.todoListId]
      // }
      return copyState
    }
    case 'CHANGE-TASK-STATUS': {
      let copyState = {...state}
      let todolistTasks = copyState[action.todolistId]
      let task = todolistTasks.find(task => task.id === action.taskId)
      if (task) {
        task.isDone = action.isDone
      }
      return copyState
    }
    case'CHANGE-TASK-TITLE': {
      let copyState = {...state}
      let todolistTasks = copyState[action.todolistId]
      let task = todolistTasks.find(task => task.id === action.taskId)
      if (task) {
        task.title = action.newTaskTitle
      }
      return copyState
    }
    case'ADD-TODOLIST':
      return {
        ...state,
        [action.todolistId]: []
      }
    case'REMOVE-TODOLIST': {
      let copyState = {...state}
      delete copyState[action.id]
      return copyState
    }
    default:
      return state
  }
}

type removeTaskACType = ReturnType<typeof removeTaskAC>
export const removeTaskAC = (taskId: string, todolistId: string) => ({
  type: 'REMOVE-TASK',
  todolistId,
  taskId
}) as const

type addTaskACType = ReturnType<typeof addTaskAC>
export const addTaskAC = (newTodolistTitle: string, todolistId: string) => ({
  type: 'ADD-TASK',
  title: newTodolistTitle,
  todolistId
}) as const

type changeTaskStatusACType = ReturnType<typeof changeTaskStatusAC>
export const changeTaskStatusAC = (taskId: string, isDone: boolean, todolistId: string) => ({
  type: 'CHANGE-TASK-STATUS',
  taskId,
  isDone,
  todolistId
}) as const

type changeTaskTitleACType = ReturnType<typeof changeTaskTitleAC>
export const changeTaskTitleAC = (taskId: string, newTaskTitle: string, todolistId: string) => ({
  type: 'CHANGE-TASK-TITLE',
  taskId,
  newTaskTitle,
  todolistId
}) as const

