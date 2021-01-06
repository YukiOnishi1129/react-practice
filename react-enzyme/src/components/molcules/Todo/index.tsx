import React from 'react'
import { Container } from './container'
import { Todo as TodoType } from 'types/store/todos'

type Props = {
  todo: TodoType
}

export const Todo: React.FC<Props> = (props) => {
  return <Container todo={props.todo} />
}
