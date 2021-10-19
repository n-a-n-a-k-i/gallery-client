import {TodoAction, TodoActionType, TodoState} from "../../type/todo.type";

const initialState: TodoState = {
    items: [],
    loading: false,
    error: null,
    page: 1,
    limit: 10
}

export const todoReducer = (state: TodoState = initialState, action: TodoAction): TodoState => {
    switch (action.type) {
        case TodoActionType.FETCH_TODOS:
            return {
                ...state,
                loading: true
            }
        case TodoActionType.FETCH_TODOS_SUCCESS:
            return {
                ...state,
                items: action.payload,
                loading: false
            }
        case TodoActionType.FETCH_TODOS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case TodoActionType.SET_TODO_PAGE:
            return {
                ...state,
                page: action.payload
            }
        default:
            return state
    }
}