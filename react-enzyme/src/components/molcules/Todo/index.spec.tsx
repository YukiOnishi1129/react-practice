import React from 'react'
// jest使うにはこれが必要
import '@testing-library/jest-dom/extend-expect'
import { render, screen, fireEvent } from '@testing-library/react'
import { Todo } from './index'
import { Todo as TodoType } from 'types/store/todos'

describe('Todoコンポーネントのテスト', () => {
  let todo: TodoType = {
    id: 1,
    title: 'テスト',
  }
  const updateTodo = jest.fn()
  const deleteTodo = jest.fn()
  beforeEach(() => {
    todo = {
      id: 1,
      title: 'テスト',
    }
  })
  it('編集モードにてinputに入力できるかを確認', () => {
    render(<Todo todo={todo} updateTodo={updateTodo} deleteTodo={deleteTodo} />)
    // Todoをクリックし編集モードへ
    fireEvent.click(screen.getByRole('showMode'))
    // 編集モードに変化したことを確認
    const editInput = screen.getByRole('editMode')
    const showTodo = screen.queryByRole('showMode')
    expect(editInput).toBeInTheDocument()
    expect(showTodo).toBeFalsy()
    fireEvent.change(editInput, {
      target: {
        value: 'test',
      },
    })
    //   inputフォームの値を変更できたか確認
    expect(editInput).toHaveValue('test')
    // 編集inputフォームにてエンターキーをクリック
    // fireEvent.focus(editInput)
    // fireEvent.keyDown(editInput, { key: 'Enter' })
    // screen.debug()
  })
})
