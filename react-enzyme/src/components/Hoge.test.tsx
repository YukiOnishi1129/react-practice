import React from 'react'
import { shallow } from 'enzyme'

import Hoge from './Hoge'

describe('hoge', () => {
  it('className Hoge length', () => {
    expect(shallow(<Hoge />).find('.hoge').length).toBe(1)
  })
})
