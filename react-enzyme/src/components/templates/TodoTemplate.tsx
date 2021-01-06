import React from 'react'
import styled from 'styled-components'
import { AddTodo } from '../organisms/AddTodo'
import { SearchTodo } from '../organisms/SearchTodo'

const _Wrapper = styled.div`
  width: 90%;
  margin: 80px auto;
`
const _Title = styled.h1`
  text-align: center;
  font-family: 'Times New Roman', Times, serif;
  color: #fff;
  font-size: 48px;
`

export const TodoTemplate: React.FC = () => {
  return (
    <_Wrapper>
      <_Title>Todo List</_Title>
      <AddTodo />
      <SearchTodo />
    </_Wrapper>
  )
}
