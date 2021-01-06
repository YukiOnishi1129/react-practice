import React from 'react'
import { useDispatch } from 'react-redux'
import { Presentaion } from './presentation'
import { searchTodo } from 'store/todo/actions'

export const Container: React.FC = () => {
  const dispatch = useDispatch()
  const searchTask = (e: any) => {
    dispatch(searchTodo(e.target.value))
  }
  return <Presentaion onkeyUp={searchTask} />
}
