import React from 'react'
import { useDispatch } from 'react-redux'
import { Presentaion } from './presentation'
import { searchTodo } from 'store/todo/actions'

export const SearchTodo: React.FC = () => {
  const dispatch = useDispatch()

  /**
   * 検索キーワード更新
   * @param e
   */
  const searchTask = (e: React.KeyboardEvent<HTMLInputElement>) => {
    dispatch(searchTodo(e.currentTarget.value))
  }

  return <Presentaion onkeyUp={searchTask} />
}
