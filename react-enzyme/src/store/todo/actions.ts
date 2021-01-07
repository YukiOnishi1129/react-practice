import * as TODO from './consts'

// ActionCreatorの定義
export const addTodo = (id: number, title: string) => ({
  type: TODO.ADD,
  payload: {
    id,
    title,
  },
})

export const searchTodo = (text: string) => ({
  type: TODO.SEARCH,
  payload: {
    text,
  },
})

export const updateTodo = (id: number, title: string) => ({
  type: TODO.UPDATE,
  payload: {
    id,
    title,
  },
})

export const deleteTodo = (id: number) => ({
  type: TODO.DELETE,
  payload: {
    id,
  },
})
