import React from 'react'
import { useDispatch } from 'react-redux'
import { Presentaion } from './presentation'
import { searchTodo } from 'store/todo/actions'

export const Container: React.FC = () => {
  const dispatch = useDispatch()

  /**
   * 検索キーワード更新
   * @param e
   */
  const searchTask = (e: any) => {
    dispatch(searchTodo(e.target.value))
  }

  return <Presentaion onkeyUp={searchTask} />
}
