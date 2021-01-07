import React from 'react'
import { Presentation } from './presentation'
import { useSelector, useDispatch } from 'react-redux'
import { Rootstate } from 'types/store'
import { Todo } from 'components/molcules/Todo'
import { Todo as TodoType } from 'types/store/todos'
import { updateTodo, deleteTodo } from 'store/todo/actions'

export const TodoList: React.FC = () => {
  const { todoList } = useSelector((state: Rootstate) => state)
  const dispatch = useDispatch()

  /**
   * 検索結果を返却
   * @param todo
   */
  const searchResult = (todo: TodoType) => {
    const regexp = new RegExp('^' + todoList.searchKeyWord, 'i')
    return todo.title.match(regexp)
  }

  /**
   * Todo更新処理
   * @param id
   * @param text
   */
  const dispatchUpdateTodo = (id: number, text: string) => {
    dispatch(updateTodo(id, text))
  }

  /**
   * Todo削除処理
   * @param id
   */
  const dispatchDeleteTodo = (id: number) => {
    dispatch(deleteTodo(id))
  }

  const showTodos =
    todoList.searchKeyWord !== ''
      ? todoList.todos.filter(searchResult)
      : todoList.todos

  const todos = showTodos.map((todo) => {
    return (
      <Todo
        key={todo.id}
        todo={todo}
        updateTodo={dispatchUpdateTodo}
        deleteTodo={dispatchDeleteTodo}
      />
    )
  })

  return <Presentation>{todos}</Presentation>
}
