import React from 'react'
import styled from 'styled-components'

type Props = {
  children: React.ReactNode
}

export const Presentation: React.FC<Props> = (props) => {
  return (
    <_CommonArea>
      <_TodoListUl>{props.children}</_TodoListUl>
    </_CommonArea>
  )
}

const _CommonArea = styled.section`
  width: 60%;
  margin: 40px auto;
`

const _TodoListUl = styled.ul`
  padding: 0;
`
