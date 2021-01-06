import * as TODO from './consts'
import { addTodo, searchTodo, updateTodo, deleteTodo } from './actions'
import { Todos, Todo } from 'types/store/todos'

type Actions =
  | ReturnType<typeof addTodo>
  | ReturnType<typeof searchTodo>
  | ReturnType<typeof updateTodo>
  | ReturnType<typeof deleteTodo>

// 初期状態
export const initialState: Todos = {
  todos: [
    {
      id: 1,
      title: 'Task1',
    },
    {
      id: 2,
      title: 'Task2',
    },
  ],
  uniqueId: 2,
  searchKeyWord: '',
}

/**
 * reducer定義
 * @param state
 * @param action
 */
export const TodoReducer = (state: Todos = initialState, action: Actions) => {
  switch (action.type) {
    case TODO.ADD:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: action.payload.id,
            title: action.payload.title,
          },
        ],
      }

    case TODO.UPDATE:
      return {
        ...state,
        todos: UpdateTodo(state.todos, action.payload.id, action.payload.title),
      }

    case TODO.SEARCH:
      return Object.assign({}, state, { searchKeyWord: action.payload.text })

    case TODO.DELETE:
      return Object.assign({}, state, {
        todos: removeTodo(state.todos, action.payload.id),
      })

    default:
      return state
  }
}

/**
 * Todo更新用の関数
 * @param todos
 * @param targetId
 * @param title
 */
const UpdateTodo = (todos: Todo[], targetId: number, title: string) => {
  return todos.map((todo) => {
    if (todo.id === targetId) {
      return Object.assign({}, todo, {
        title: title,
      })
    }
    return todo
  })
}

/**
 * Todo削除用の関数
 * @param todos
 * @param targetId
 */
const removeTodo = (todos: Todo[], targetId: number) => {
  return todos.filter((todo) => todo.id !== targetId)
}
