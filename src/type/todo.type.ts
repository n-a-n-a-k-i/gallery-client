interface Todo {
    id: number
    title: string
}

export interface TodoState {
    items: Todo[]
    loading: boolean
    error: null | string
    page: number
    limit: number
}

export enum TodoActionType {
    FETCH_TODOS = 'FETCH_TODOS',
    FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS',
    FETCH_TODOS_ERROR = 'FETCH_TODOS_ERROR',
    SET_TODO_PAGE = 'FETCH_TODOS_PAGE'
}

interface FetchTodosAction {
    type: TodoActionType.FETCH_TODOS
}

interface FetchTodosSuccessAction {
    type: TodoActionType.FETCH_TODOS_SUCCESS
    payload: Todo[]
}

interface FetchTodosErrorAction {
    type: TodoActionType.FETCH_TODOS_ERROR
    payload: string
}

interface SetTodoPageAction {
    type: TodoActionType.SET_TODO_PAGE
    payload: number
}

export type TodoAction = FetchTodosAction | FetchTodosSuccessAction | FetchTodosErrorAction | SetTodoPageAction
