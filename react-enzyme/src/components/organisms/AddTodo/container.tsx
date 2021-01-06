import React, { useReducer } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Rootstate } from 'types/store'
import { Presentation } from 'components/organisms/AddTodo/presentation'
import { addTodo } from 'store/todo/actions'

export const Container = () => {
  const { todoList } = useSelector((state: Rootstate) => state)
  const dispatch = useDispatch()
  const [inputValue, setInputValue] = React.useState('')

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const updateTodo = (e: any) => {
    if (e.keyCode === 13 && e.target.value !== '') {
      dispatch(addTodo(todoList.uniqueId + 1, e.target.value))
      setInputValue('')
    }
  }

  return (
    <Presentation
      inputValue={inputValue}
      onChange={onChange}
      onKeyDown={updateTodo}
    />
  )
}
