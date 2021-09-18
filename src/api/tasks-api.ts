import axios from "axios";

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.1/',
  withCredentials: true,
  headers: {
    'API-KEY': '6a839c08-d4d3-4bf1-a317-273f31facc46'
  }
})

export const TasksApi = {
  getTask(todolistId: string,) {
    return instance.get<Array<TaskType>>(`todo-lists/${todolistId}/tasks`)
  },
  createTasks(todolistId: string, title: string) {
    return instance.post<CommonResponseType<{ item: TaskType }>>(`todo-lists/${todolistId}/tasks`,
      {todolistId, title})
  },
  deleteTasks(todolistId: string, taskId: string) {
    return instance.delete<CommonResponseType<{}>>(`todo-lists/${todolistId}/tasks/${taskId}`)
  },
  updateTask(todolistId: string, taskId: string, title: string) {
    return instance.put<CommonResponseType<{}>>(`todo-lists/${todolistId}/tasks/${taskId}`, {title})
  }
}

type CommonResponseType<T> = {
  resultCode: number
  messages: Array<string>
  fieldsErrors: Array<string>
  data: T
}

type TaskType = {
  description: string
  title: string
  completed: boolean
  status: number
  priority: number
  startDate: string
  deadline: string
  id: string
  todoListId: string
  order: number
  addedDate: string
}

