import axios from "axios";

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.1/',
  withCredentials: true,
  headers: {
    'API-KEY': '6a839c08-d4d3-4bf1-a317-273f31facc46'
  }
})

export const TodolistApi = {
  getTodolist() {
    return instance.get<Array<TodolistType>>('todo-lists')
  },
  createTodolist(title: string) {
    return instance.post<CommonResponseType<{item : TodolistType}>>('todo-lists',
      {title})
  },
  deleteTodolist(todolistId: string) {
    return instance.delete<CommonResponseType<{}>>(`todo-lists/${todolistId}`)
  },
  updateTodolistTitle(todolistId: string, title: string) {
    return instance.put<CommonResponseType<{}>>(`todo-lists/${todolistId}`, {title})

  }
}

type CommonResponseType<T> ={
  resultCode: number
  messages: Array<string>
  fieldsErrors: Array<string>
  data: T
}

type TodolistType = {
  id: string
  title: string
  addedDate: string
  order: number
}

