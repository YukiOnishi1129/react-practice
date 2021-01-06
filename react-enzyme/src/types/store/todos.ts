export type Todos = {
  todos: Todo[]
  uniqueId: number
  searchKeyWord: string
}

export type Todo = {
  id: number
  title: string
}
