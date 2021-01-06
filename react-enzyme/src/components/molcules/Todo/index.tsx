import React from 'react'
import { Container } from './container'
import { Todo as TodoType } from 'types/store/todos'

type Props = {
  todo: TodoType
  updateTodo: (id: number, text: string) => void
  deleteTodo: (id: number) => void
}

export const Todo: React.FC<Props> = (props) => {
  return (
    <Container
      todo={props.todo}
      updateTodo={props.updateTodo}
      deleteTodo={props.deleteTodo}
    />
  )
}
