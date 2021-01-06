import { combineReducers } from 'redux'
import { Rootstate } from '../types/store'
import { TodoReducer } from './todo/reducer'

export const reducer = combineReducers<Rootstate>({
  todoList: TodoReducer,
})
