import React from 'react'
import { Presentation } from './presentation'
import { Todo as TodoType } from 'types/store/todos'

type Props = {
  todo: TodoType
  updateTodo: (id: number, text: string) => void
  deleteTodo: (id: number) => void
}

export const Todo: React.FC<Props> = (props) => {
  const [editFlg, setEditFlg] = React.useState<boolean>(false)
  const [editText, setEditText] = React.useState<string>(props.todo.title)

  /**
   * 編集フラグON
   */
  const onChengeEditFlg = () => {
    setEditFlg(true)
  }

  /**
   * Todo更新処理
   * @param e
   */
  const onUpdateTodo = (e: any) => {
    if (e.keyCode === 13) {
      if (e.target.value !== '') {
        props.updateTodo(props.todo.id, e.target.value)
      } else {
        window.alert('未入力では編集できません')
        setEditText(props.todo.title)
      }
      setEditFlg(false)
    }
  }

  /**
   * 編集用テキスト更新
   *
   * @param e
   */
  const updateEditText = (e: any) => {
    setEditText(e.target.value)
  }

  /**
   * Todo削除処理
   */
  const onDeleteTodo = () => {
    props.deleteTodo(props.todo.id)
  }

  return (
    <Presentation
      todo={props.todo}
      text={editText}
      editFlg={editFlg}
      onChengeEditFlg={onChengeEditFlg}
      onChangeEditText={updateEditText}
      onUpdateTodo={onUpdateTodo}
      onDeleteTodo={onDeleteTodo}
    />
  )
}
