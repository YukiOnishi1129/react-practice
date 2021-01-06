import React from 'react'
import styled from 'styled-components'
import { Todo } from 'types/store/todos'

type Props = {
  todo: Todo
  editFlg: boolean
  text: string
  onChengeEditFlg: () => void
  onChangeEditText: (e: any) => void
  onUpdateTodo: (e: any) => void
  onDeleteTodo: () => void
}

export const Presentation: React.FC<Props> = (props) => {
  const editForm = props.editFlg ? (
    <_EditInput
      type="text"
      className="editForm"
      value={props.text}
      onChange={props.onChangeEditText}
      onKeyUp={props.onUpdateTodo}
    />
  ) : (
    <_TodoTask onClick={props.onChengeEditFlg}>{props.todo.title}</_TodoTask>
  )

  return (
    <_Todo>
      {editForm}
      <i
        className="far fa-trash-alt delete fa-lg"
        onClick={props.onDeleteTodo}
      ></i>
    </_Todo>
  )
}

const _Todo = styled.li`
  list-style: none;
  line-height: 1.5;
  font-weight: bold;
  background-color: rgba(3, 80, 63, 0.5);
  border-radius: 5px;
  padding: 10px;
  height: 50px;
  position: relative;
  margin-bottom: 10px;
`

const _TodoTask = styled.span`
  cursor: pointer;
  display: block;
  margin-top: 8px;
  margin-left: 10px;
  font-size: 24px;
  font-family: 'Times New Roman', Times, serif;
  color: #fff;
`

const _EditInput = styled.input`
  color: white;
  border: none;
  background: rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 50px;
  padding: 10px;
  box-sizing: border-box;
  font-size: 20px;
  font-family: 'Times New Roman', Times, serif;
  border-radius: 5px;

  &::placeholder {
    color: #c0c0c0;
  }
`
