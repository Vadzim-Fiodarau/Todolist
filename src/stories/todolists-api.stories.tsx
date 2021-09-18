import React, {useEffect, useState} from 'react'
import {TodolistApi} from "../api/todolist-api";


export default {
  title: 'Todolist-API'
}

export const GetTodolists = () => {
  const [state, setState] = useState<any>(null)
  useEffect(() => {
    TodolistApi.getTodolist()
      .then((res) => {
        setState(res.data);
      })

  }, [])

  return <div> {JSON.stringify(state)}</div>
}

export const CreateTodolist = () => {
  const [state, setState] = useState<any>(null)
  useEffect(() => {
    const title = 'newTodolist'
    TodolistApi.createTodolist(title)
      .then((res) => {
      setState(res.data);
    })

  }, [])

  return <div> {JSON.stringify(state)}</div>
}

export const DeleteTodolist = () => {
  const [state, setState] = useState<any>(null)
  useEffect(() => {
    const todolistId = ''
    TodolistApi.deleteTodolist(todolistId).then((res) => {
      setState(res.data);
    })

  }, [])

  return <div> {JSON.stringify(state)}</div>
}

export const UpdateTodolistTitle = () => {
  const [state, setState] = useState<any>(null)
  useEffect(() => {
    const todolistId = ''
    const title = 'React>>>>>>>>>>>>>>>>'
    TodolistApi.updateTodolistTitle(todolistId, title).then((res) => {
      setState(res.data)
    })

  }, [])

  return <div> {JSON.stringify(state)}</div>
}
