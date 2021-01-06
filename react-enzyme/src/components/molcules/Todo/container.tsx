import React from 'react'
import { Presentation } from './presentation'
import { Todo as TodoType } from 'types/store/todos'

type Props = {
  todo: TodoType
}

export const Container: React.FC<Props> = (props) => {
  return <Presentation todo={props.todo} />
}
