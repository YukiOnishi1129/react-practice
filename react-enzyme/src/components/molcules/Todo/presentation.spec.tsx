import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { Presentation } from './presentation'
import { Todo as TodoType } from 'types/store/todos'

describe('Todoコンポーネントのテスト', () => {
  let todo: TodoType = {
    id: 1,
    title: 'テスト',
  }
  let editFlg = false
  let text = 'テスト'
  const onChengeEditFlg = jest.fn()
  const onChangeEditText = jest.fn()
  const onUpdateTodo = jest.fn()
  const onDeleteTodo = jest.fn()

  beforeEach(() => {
    todo = {
      id: 1,
      title: 'テスト',
    }
    editFlg = false
    text = 'テスト'
  })
  describe('表示モード', () => {
    it('表示モードのDOM', () => {
      render(
        <Presentation
          todo={todo}
          editFlg={editFlg}
          text={text}
          onChengeEditFlg={onChengeEditFlg}
          onChangeEditText={onChangeEditText}
          onUpdateTodo={onUpdateTodo}
          onDeleteTodo={onDeleteTodo}
        />
      )
      expect(screen.getByRole('showMode')).toBeTruthy()
      // DOMがない場合はqueryByRoleを使用
      // https://blog.engineer.adways.net/entry/2020/06/12/150000
      expect(screen.queryByRole('editMode')).toBeFalsy()
    })
  })

  describe('編集モード', () => {
    beforeEach(() => {
      todo = {
        id: 1,
        title: 'テスト',
      }
      editFlg = true
      text = 'テスト'
    })

    it('編集モードのDOM', () => {
      render(
        <Presentation
          todo={todo}
          editFlg={editFlg}
          text={text}
          onChengeEditFlg={onChengeEditFlg}
          onChangeEditText={onChangeEditText}
          onUpdateTodo={onUpdateTodo}
          onDeleteTodo={onDeleteTodo}
        />
      )
      expect(screen.getByRole('editMode')).toBeTruthy()
      expect(screen.queryByRole('showMode')).toBeFalsy()
    })
    // it('編集時のinput発火確認', () => {
    //   render(
    //     <Presentation
    //       todo={todo}
    //       editFlg={editFlg}
    //       text={text}
    //       onChengeEditFlg={onChengeEditFlg}
    //       onChangeEditText={onChangeEditText}
    //       onUpdateTodo={onUpdateTodo}
    //       onDeleteTodo={onDeleteTodo}
    //     />
    //   )
    //   fireEvent.change(screen.getByRole('editMode'), {
    //     target: { value: 'aaa' },
    //   })
    //   screen.debug()
    // })
  })
})
