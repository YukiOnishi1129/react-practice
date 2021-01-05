import React from 'react'
import { shallow } from 'enzyme'
import { act, renderHook } from '@testing-library/react-hooks'
import { ClickButton } from './ClickButton'
import { useCustomState } from '../../lib/hooks/useCustomState'

// テストコードでカスタムフックを使う場合
//https://ksmzn.hatenablog.com/entry/react-hooks-testing-library
https: describe('clickボタン', () => {
  // renderHooksでカスタムフックを呼び出し
  const { result } = renderHook(() => useCustomState(0))
  const onChange = (value: number): void => {
    result.current.onChangeValue(value)
  }
  const click = jest.fn()
  // https://qiita.com/akameco/items/519f7e4d5442b2a9d2da
  const sel = (id: string) => `[data-testid="${id}"]`
  beforeEach(() => {
    // カスタムフックをテストコードで使う場合は、
    // act内で実行する
    act(() => {
      result.current.onChangeValue(2)
    })
  })

  it('score表示', () => {
    const wrapper = shallow(
      <ClickButton
        score={result.current.value}
        changeScore={(value) => onChange(value)}
      />
    )
    expect(wrapper.find(sel('score')).text()).toEqual('2')
  })
  // テストコードでは、stateの更新をチェックするテストはできない
  it('scoreをプラス', () => {
    const wrapper = shallow(
      <ClickButton
        score={result.current.value}
        changeScore={(value) => click(value)}
      />
    )
    // simulateにて、クリックイベントを実行する
    wrapper.find(sel('plus')).simulate('click')
    expect(click.mock.calls.length).toBe(1)
    // expect(wrapper.find('.score').text()).toEqual('3')
  })
  it('scoreをマイナス', () => {
    const wrapper = shallow(
      <ClickButton
        score={result.current.value}
        changeScore={(value) => click(value)}
      />
    )
    wrapper.find(sel('minus')).simulate('click')
    expect(click.mock.calls.length).toBe(1)
    //   expect(wrapper.find('.score').text()).toEqual('1')
  })
})
