import React from 'react'
import { Presentation } from 'components/organisms/AddTodo/presentation'

type Props = {
  uniqueId: number
  dispatchAddTodo: (id: number, title: string) => void
}

export const Container: React.FC<Props> = (props) => {
  const [inputValue, setInputValue] = React.useState('')

  /**
   * 追加用テキスト更新
   * @param e
   */
  const updateInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  /**
   * Todo追加処理
   * @param e
   */
  const updateTodo = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && e.currentTarget.value !== '') {
      props.dispatchAddTodo(props.uniqueId + 1, e.currentTarget.value)
      setInputValue('')
    }
  }

  return (
    <Presentation
      inputValue={inputValue}
      onChange={updateInputValue}
      onKeyDown={updateTodo}
    />
  )
}
