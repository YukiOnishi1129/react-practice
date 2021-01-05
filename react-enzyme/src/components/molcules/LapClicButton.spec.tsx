import React from 'react'
import { LapClickButton } from './LapClicButton'
import { render, screen, fireEvent, getByTestId } from '@testing-library/react'

describe('atoms/ClickButtonの機能テスト', () => {
  let testScore = 0

  beforeEach(() => {
    testScore = 2
  })

  // enzymeではmolculesの子コンポーネントのatomsの要素でイベント発火はできなかった。
  // react-test-utilsではできるか確認　→　できる

  it('scoreをプラス', () => {
    const wrapper = render(<LapClickButton propsScore={testScore} />)
    //   screen.getByTestIdで"data-testidのDOMを取得できる
    //   https://testing-library.com/docs/dom-testing-library/api-queries/#bytestid
    //   fireEvent.clickの使い方はこちら
    //   https://react-testing-library-examples.netlify.app/
    fireEvent.click(wrapper.getByTestId('plus'))
    //   wrapper.getByTestId('score').textContent: text文章を取得
    expect(wrapper.getByTestId('score').textContent).toBe('3')
  })
  it('scoreをマイナス', () => {
    const wrapper = render(<LapClickButton propsScore={testScore} />)
    fireEvent.click(wrapper.getByTestId('minus'))
    expect(wrapper.getByTestId('score').textContent).toBe('1')
  })
})
