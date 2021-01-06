import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Rootstate } from 'types/store'
import { Container } from 'components/organisms/AddTodo/container'
import { addTodo } from 'store/todo/actions'

export const AddTodo = () => {
  const { todoList } = useSelector((state: Rootstate) => state)
  const dispatch = useDispatch()

  /**
   * useDispatchをラップ
   * @param id
   * @param title
   */
  const dispatchAddTodo = (id: number, title: string) => {
    dispatch(addTodo(id + 1, title))
  }

  return (
    <Container uniqueId={todoList.uniqueId} dispatchAddTodo={dispatchAddTodo} />
  )
}
