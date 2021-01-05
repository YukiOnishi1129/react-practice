import React from 'react'
import { shallow } from 'enzyme'

import Hoge from './Hoge'

describe('hoge', () => {
  const title = 'hoge'
  const wrapper = shallow(<Hoge title={title} />)
  it('className Hoge length', () => {
    expect(wrapper.find('.state').length).toBe(1)
  })
  it('props', () => {
    expect(wrapper.find('p').text()).toEqual('hoge')
  })
})
