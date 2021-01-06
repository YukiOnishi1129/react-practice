import React from 'react'
import { Presentation } from './presentation'
import { useSelector } from 'react-redux'
import { Rootstate } from 'types/store'
import { Todo } from 'components/molcules/Todo'
import { Todo as TodoType } from 'types/store/todos'

export const Container: React.FC = () => {
  const { todoList } = useSelector((state: Rootstate) => state)

  const searchResult = (todo: TodoType) => {
    const regexp = new RegExp('^' + todoList.searchKeyWord, 'i')
    return todo.title.match(regexp)
  }

  const showTodos =
    todoList.searchKeyWord !== ''
      ? todoList.todos.filter(searchResult)
      : todoList.todos

  const todos = showTodos.map((todo) => {
    return <Todo key={todo.id} todo={todo} />
  })
  return <Presentation>{todos}</Presentation>
}
