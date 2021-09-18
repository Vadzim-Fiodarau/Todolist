import React, {useEffect, useState} from 'react'
import { TasksApi } from '../api/tasks-api';




export default {
  title: 'Tasks-API'
}

export const GetTask = () => {
  const [state, setState] = useState<any>(null)
  useEffect(() => {
    const todolistId = '1bd2b1a4-64e0-45bd-8dc2-93263396c8fa'
    TasksApi.getTask(todolistId)
      .then((res) => {
        setState(res.data);
      })

  }, [])

  return <div> {JSON.stringify(state)}</div>
}

export const CreateTask = () => {
  const [state, setState] = useState<any>(null)
  useEffect(() => {
    const title = 'newTask>>>>>>>>>>>>>>>>>>>>>>'
    const todolistId = '78075d68-27d6-4df7-821d-4cff7457f9af'
    TasksApi.createTasks(todolistId, title)
      .then((res) => {
      setState(res.data);
    })

  }, [])

  return <div> {JSON.stringify(state)}</div>
}

export const DeleteTask = () => {
  const [state, setState] = useState<any>(null)
  useEffect(() => {
    const todolistId = '1bd2b1a4-64e0-45bd-8dc2-93263396c8fa'
    const taskId = 'dbd30bea-e905-432e-b281-a020d5da33c0'
    TasksApi.deleteTasks(todolistId, taskId).then((res) => {
      setState(res.data);
    })

  }, [])

  return <div> {JSON.stringify(state)}</div>
}

export const UpdateTaskTitle = () => {
  const [state, setState] = useState<any>(null)
  useEffect(() => {
    const todolistId = '1bd2b1a4-64e0-45bd-8dc2-93263396c8fa'
    const taskId = '8122d3c8-dba1-4579-9243-003f5290df2d'
    const title = 'Hi Yo'
    TasksApi.updateTask(todolistId, taskId,title).then((res) => {
      setState(res.data)
    })

  }, [])

  return <div> {JSON.stringify(state)}</div>
}