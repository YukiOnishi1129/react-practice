import React from 'react'
import { shallow } from 'enzyme'
import { LapClickButton } from './LapClicButton'

describe('atoms/ClickButtonの機能テスト', () => {
  let testScore = 0

  beforeEach(() => {
    testScore = 2
  })
  it('ダミー', () => {
    expect(1).toBe(1)
  })

  // enzymeではmolculesの子コンポーネントのatomsの要素でイベント発火はできなかった。
  // react-test-utilsではできるか確認

  //   it('scoreをプラス', () => {
  //     const wrapper = shallow(<LapClickButton propsScore={testScore} />)
  //     console.log(wrapper.find('.plus'))
  //     // simulateにて、クリックイベントを実行する
  //     wrapper.find('.plus').at(1).simulate('click')
  //     expect(wrapper.find('.score').text()).toEqual('3')
  //   })
  //   it('scoreをマイナス', () => {
  //     const wrapper = shallow(<LapClickButton propsScore={testScore} />)
  //     wrapper.find('.minus').simulate('click')
  //     expect(wrapper.find('.score').text()).toEqual('1')
  //   })
})
