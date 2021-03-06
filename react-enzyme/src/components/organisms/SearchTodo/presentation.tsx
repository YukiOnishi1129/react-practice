import React from 'react'
import styled from 'styled-components'

type Props = {
  onkeyUp: (e: React.KeyboardEvent<HTMLInputElement>) => void
}

export const Presentaion: React.FC<Props> = (props) => {
  return (
    <_CommonArea>
      <_SearchInput
        type="text"
        placeholder="Search Keyword"
        onKeyUp={props.onkeyUp}
      />
    </_CommonArea>
  )
}

const _CommonArea = styled.section`
  width: 60%;
  margin: 40px auto;
`
const _SearchInput = styled.input`
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
