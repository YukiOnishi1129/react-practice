import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'

import Hoge from './Hoge'

describe('hoge', () => {
  const title = 'hoge'
  render(<Hoge title={title} />)
  it('props', () => {
    expect(screen.getByRole('title').textContent).toEqual('hoge')
  })
})
