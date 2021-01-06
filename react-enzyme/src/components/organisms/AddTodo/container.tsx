import React from 'react'
import { Presentation } from './presentation'

export const Container = () => {
  const [inputValue, setInputValue] = React.useState('')

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  return <Presentation inputValue={inputValue} onChange={onChange} />
}
