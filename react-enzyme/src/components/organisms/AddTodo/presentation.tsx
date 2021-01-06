import React from 'react'
import styled from 'styled-components'

type Props = {
  inputValue: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Presentation: React.FC<Props> = (props) => {
  const { inputValue, onChange } = props
  return (
    <_CommonArea>
      <_AddTitle>ADD TASK</_AddTitle>
      <_AddInput
        type="text"
        placeholder="New Task"
        value={inputValue}
        onChange={onChange}
      />
    </_CommonArea>
  )
}

const _CommonArea = styled.section`
  width: 60%;
  margin: 40px auto;
`

const _AddTitle = styled.h2`
  text-align: center;
  font-family: 'Times New Roman', Times, serif;
  color: #fff;
`

const _AddInput = styled.input`
  color: white;
  border: none;
  background: rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 50px;
  padding: 10px;
  box-sizing: border-box;
  font-size: 20px;
  font-family: 'Times New Roman', Times, serif;

  &::placeholder {
    color: #c0c0c0;
  }
`
