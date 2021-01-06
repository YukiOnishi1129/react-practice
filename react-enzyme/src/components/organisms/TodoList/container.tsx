import React from 'react'
import { Presentation } from './presentation'
import { useSelector } from 'react-redux'
import { Rootstate } from 'types/store'
import { Todo } from 'components/molcules/Todo'

export const Container: React.FC = () => {
  const { todoList } = useSelector((state: Rootstate) => state)

  const todos = todoList.todos.map((todo) => {
    return <Todo key={todo.id} todo={todo} />
  })
  return <Presentation>{todos}</Presentation>
}
