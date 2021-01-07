import React from 'react'
// jest使うにはこれが必要
import '@testing-library/jest-dom/extend-expect'
import { render, screen, fireEvent } from '@testing-library/react'
import { Container } from './container'

describe('AddTodoコンポーネントのテスト', () => {
  let uniqueId = 0
  const dispatchAddTodo = jest.fn()

  beforeEach(() => {
    uniqueId = 0
  })
  it('inputフォームに入力できること', () => {
    render(<Container uniqueId={uniqueId} dispatchAddTodo={dispatchAddTodo} />)
    const addInputDom = screen.getByRole('addInput')
    fireEvent.change(addInputDom, {
      target: {
        value: 'test',
      },
    })
    // inputフォームの値を変更できたか確認
    expect(addInputDom).toHaveValue('test')
    // エンターキーをクリック
    fireEvent.keyDown(addInputDom, { key: 'Enter' })
    // inputフォームのデータが空文字になっていること
    expect(addInputDom).toHaveValue('')
  })
})
