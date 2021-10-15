import {Dispatch} from "redux";
import {TodoAction, TodoActionType} from "../../type/todo";
import axios from "axios";

export const fetchTodos = (page = 1, limit = 10) => {
    return async (dispatch: Dispatch<TodoAction>) => {
        try {
            dispatch({
                type: TodoActionType.FETCH_TODOS
            })
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos', {
                params: {
                    _page: page,
                    _limit: limit
                }
            })
            setTimeout(() => {
                dispatch({
                    type: TodoActionType.FETCH_TODOS_SUCCESS,
                    payload: response.data
                })
            }, 400)
        } catch (e) {
            dispatch({
                type: TodoActionType.FETCH_TODOS_ERROR,
                payload: 'Ошибка при загрузке дел'
            })
        }
    }
}

export const setTodoPage = (page= 1): TodoAction => ({
    type: TodoActionType.SET_TODO_PAGE,
    payload: page
})
